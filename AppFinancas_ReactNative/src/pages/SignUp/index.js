import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native'

import { AuthContext } from '../../contexts/auth';

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText

} from '../SignIn/styles'

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleSignUp() {

        if(nome === '' || email === '' || password ===''){
            alert('Por favor preencha todos os campos')
            return;
        } 
        signUp(email, password, nome);
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder='Seu Nome'
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>
                <AreaInput>
                    <SubmitButton onPress={handleSignUp}>
                        {
                            loadingAuth ? (
                                <ActivityIndicator size={20} color={'#FFF'} />
                            ) : (
                                <SubmitText>Cadastrar</SubmitText>
                            )
                        }


                    </SubmitButton>
                </AreaInput>
            </Container>
        </Background>
    );
}