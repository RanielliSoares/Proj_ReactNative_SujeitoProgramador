import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

import { useNavigation } from '@react-navigation/native'
export const AuthContext = createContext({});

import AsyncStorage from '@react-native-async-storage/async-storage'

function AuthProvider({ children }) {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [loadingAuth, setloadingAuth] = useState();

    useEffect(() => {

        async function loadStorage() {

            const storageUser = await AsyncStorage.getItem('@finToken')
            
            if (storageUser) {

                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })
                    .catch(() => {
                        setUser(null)
                    })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response.data);
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, [])



    async function signUp(email, password, nome) {

        setloadingAuth(true);
        try {
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email,
            })
            setloadingAuth(false);
            navigation.goBack();

        } catch (err) {
            alert('Erro ao cadastrar', err)
            setloadingAuth(false);
        }
    }

    async function signIn(email, password) {
        setloadingAuth(true);
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            const { id, name, token } = response.data;

            const data = {
                id,
                name,
                token,
                email,
            };

            await AsyncStorage.setItem('@finToken', token)

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setUser({
                id,
                name,
                email,
            })

            setloadingAuth(false)

        } catch (err) {
            alert('Erro ao logar' + err)
            setloadingAuth(false)
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
                setUser(null)
            })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;