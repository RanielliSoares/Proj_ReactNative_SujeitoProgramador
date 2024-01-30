import React, { useState } from "react";
import { RegisterContainer, RegisterButton, RegisterLabel } from "./style";
import { AntDesign } from '@expo/vector-icons';

export default function RegisterType({ type, sendTypeChanged }) {
    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(name) {
        if (name === 'receita') {
            setTypeChecked('receita')
            sendTypeChanged('receita')
        } else {
            setTypeChecked('despesa')
            sendTypeChanged('despesa')
        }
    }
    return (
        <RegisterContainer>
            <RegisterButton
                onPress={() => changeType('receita')}
                checked={typeChecked === 'receita' ? true : false}>
                <AntDesign name="arrowup" size={25} color="black" />
                <RegisterLabel>Receita</RegisterLabel>
            </RegisterButton>
            <RegisterButton
                onPress={() => changeType('despesa')}
                checked={typeChecked === 'despesa' ? true : false}>
                <AntDesign name="arrowdown" size={25} color="black" />
                <RegisterLabel>Despesa</RegisterLabel>
            </RegisterButton>
        </RegisterContainer>
    )
}