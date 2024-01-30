import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native'
import List from '../List'
import { AntDesign } from '@expo/vector-icons';
import {CartContext} from '../../Context/CartContext'

import {
    Background,
    Title,
    ButtonCarrinho,
    ButtonText,
    Lista,
    AreaHeader

} from './style'

export default function Home() {
    const {cart, addItemCart} = useContext(CartContext)
    const [products, setProducts] = useState([
        {
            id: '1',
            name: "Coca cola",
            price: 19.90
        },
        {
            id: '2',
            name: "Chocolate",
            price: 6.50
        },
        {
            id: '4',
            name: "Queijo 500g",
            price: 15
        },
        {
            id: '5',
            name: "Batata frita",
            price: 23.90
        },
        {
            id: '6',
            name: "Guarana lata",
            price: 6.00
        },
    ])
    
    const navigation = useNavigation();

    function handleAddCart(item){
        addItemCart(item);
    }
    return (

        <Background>
            <AreaHeader>
                <Title>Lista de Produtos</Title>
                <ButtonCarrinho onPress={() => navigation.navigate('Carrinho')}>
                    <ButtonText>{cart?.length}</ButtonText>
                    <AntDesign name="shoppingcart" size={30} color="#FFF" />
                </ButtonCarrinho>
            </AreaHeader>
            <Lista
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <List data={item} addToCart={()=> handleAddCart(item)} />
                }
            />
            
        </Background>

    );
}