import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home'
import Carrinho from "../pages/Carrinho";

const stack = createNativeStackNavigator();

export default function Routes() {


    return (

        <stack.Navigator>
            <stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false

                }}
            />
            <stack.Screen
                name='Carrinho'
                component={Carrinho}
                options={{
                    headerShown: false

                }}
            />
        </stack.Navigator>

    )

}