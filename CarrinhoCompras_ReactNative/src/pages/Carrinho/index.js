import React, { useContext, useState } from "react";
import {Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../Context/CartContext'
import CartItem from "../CartItem";
import {
    Background,
    AreaHeader,
    Title,
    ButtonVoltar,
    Lista

} from "./style";


export default function Carrinho() {
    const navigation = useNavigation();
    const { cart, addItemCart, deleteItemCart } = useContext(CartContext)

    function handleAddCart(item) {
        addItemCart(item);
    }

    function handleDeleteCart(item){
        deleteItemCart(item)
    }
    return (
        <Background>
            <AreaHeader>
                <ButtonVoltar onPress={() => navigation.goBack()}>
                    <AntDesign name="leftcircleo" size={30} color="#FFF" />
                </ButtonVoltar>
                <Title>Meu Carrinho</Title>
            </AreaHeader>
            <Lista
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <CartItem data={item} addToCart={() => handleAddCart(item)} deleteToCart={() => handleDeleteCart(item)}/>}
                ListEmptyComponent={ () => <Text>Nenhum item no carrinho!</Text>}
          />

        </Background>
    );
}
