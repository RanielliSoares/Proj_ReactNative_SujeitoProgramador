import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home';

export default function App() {

  return (
    <>
    <Home/>
    <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
    </>
  );
}


