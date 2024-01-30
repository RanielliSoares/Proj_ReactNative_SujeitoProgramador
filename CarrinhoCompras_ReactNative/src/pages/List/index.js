import React, { useState, useContext } from "react";
import { Background, Title, Price, AreaItem, AreaBtn, Button, Cont } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { CartContext } from '../../Context/CartContext'


export default function List({data, addToCart}) {
    const { cart, addItemCart } = useContext(CartContext)
    const [itemCont, setItemCont] = useState(0);



    return (
        <Background>
            <AreaItem>
                <Title>{data.name}</Title>
                <Price>R$: {data.price}</Price>
                <AreaBtn>
                    <Button >
                        <AntDesign name="minuscircle" size={24} color="#ff1133" />
                    </Button>
                    <Cont>{itemCont}</Cont>
                    <Button onPress={addToCart}>
                        <AntDesign name="pluscircle" size={24} color='#3b2f' />
                    </Button>
                </AreaBtn>
            </AreaItem>

        </Background>
    )
}