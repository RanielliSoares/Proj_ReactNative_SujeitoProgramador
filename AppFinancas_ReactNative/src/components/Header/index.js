import React from "react";
import { Container, Title, ButtonMenu } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Header({ titulo }) {
    const navigation = useNavigation()
    return (
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <AntDesign name="bars" size={35} color="black" />
            </ButtonMenu>
            {titulo && (
                <Title>
                    {titulo}
                </Title>
            )}

        </Container>
    )
}