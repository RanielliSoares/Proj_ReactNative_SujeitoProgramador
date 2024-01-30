import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CartProvider from './src/Context/CartContext';
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor='#FAFAFA' barStyle='dark-content' />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}

