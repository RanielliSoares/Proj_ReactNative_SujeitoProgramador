import React, { useState } from "react";
import { Background, AreaItem, Title, Price, AreaBtn, Button } from './style';
import { AntDesign } from '@expo/vector-icons';

export default function CartItem({ data, addToCart, deleteToCart }) {

    const [amount, setAmount] = useState(data?.amount)

    function incrementaItem() {
        addToCart();
        setAmount(item => item +1)
    }

    function deletaItem(){
        deleteToCart();
        if(amount === 0){
            setAmount(0)
            return;
        }
        setAmount(item => item -1)
    }
    return (
        <Background>
            <AreaItem>
                <Title>{data.name}</Title>
                <Price>Valor unitário: R$ {data.price}</Price>
                <Price>Quantidade: {amount}</Price>
                <Title>Total: {data.total}</Title>
                <AreaBtn>
                    <Button onPress={() => deletaItem()}>
                        <AntDesign name="minuscircle" size={24} color="#ff1133" />
                    </Button>

                    <Button onPress={() => incrementaItem()}>
                        <AntDesign name="pluscircle" size={24} color='#3b2f' />
                    </Button>
                </AreaBtn>
            </AreaItem>
        </Background>
    )
}