import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';

import api from "../../services/api";

export default function Home() {

    const [cidade, setCidade] = useState([]);

    useEffect(() => {

        async function capturaDados() {

            const response = await api.get('api/v1/forecast/locale/3496/hours/72?token=145ba6b3707a2a6ba49ea4960f349213');
            setCidade(response.data);

        }
        capturaDados();
    }, [])

    return (
        <LinearGradient
            colors={['#292A4E', '#715C77', '#C75C2E']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.viewTitulo}>
                    <Text style={styles.titulos}>{cidade.name} - {cidade.state}</Text>
                    <TouchableOpacity>
                        <Octicons name="single-select" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ margin: 55, fontSize: 25, fontWeight: 'bold' }}>Previsões:</Text>
                    <Text>Data: {cidade.data[0].date_br}</Text>
                    <Text>Temperatura: {cidade.data[0].temperature.temperature}º</Text>
                    <Text>Humidade: {cidade.data[0].humidity.humidity}</Text>
                    <Text>Vento:</Text>
                    <Text>    Velocidade: {cidade.data[0].wind.velocity}</Text>
                    <Text>    Direção: {cidade.data[0].wind.direction}</Text>

                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewTitulo: {
        height: 65,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulos: {
        fontWeight: 'bold',
        color: '#FFf',
        fontSize: 20,
        marginRight: 10

    }

})