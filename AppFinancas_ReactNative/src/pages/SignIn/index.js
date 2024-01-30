import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/auth';

import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from './styles'


import { useNavigation } from '@react-navigation/native'


export default function SignIn() {

    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();

    function handleSignIn() {
        signIn(email, password);
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />
                <AreaInput>
                    <Input
                        placeholder="Seu Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="*********"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <SubmitButton activeOpacity={0.8} onPress={handleSignIn}>
                        {
                            loadingAuth ? (<ActivityIndicator size={20} color='#FFF' />) :
                                (<SubmitText>Acessar</SubmitText>)
                        }

                    </SubmitButton>
                </AreaInput>
                <AreaInput>
                    <Link onPress={() => navigation.navigate('SignUp')}>
                        <LinkText>Criar uma conta</LinkText>
                    </Link>
                </AreaInput>
            </Container>

        </Background>
    );
}