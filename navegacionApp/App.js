/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import Bombillos from './src/pantallas/Bombillos';
import Inicio from './src/pantallas/Inicio';
import Navegación from './src/pantallas/Navegación';
'react-native/Libraries/NewAppScreen';



const App = () => {
  

  return (
     
      <Navegación />
     
  );
};



export default App;
