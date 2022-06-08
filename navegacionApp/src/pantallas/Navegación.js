import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground
     
  } from 'react-native';
  'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { NavigationContainer, TabActions} from '@react-navigation/native'
import Inicio from './Inicio';
import Bombillos from './Bombillos';
import Prestamos from './Prestamos';


const MyTabs = () => {
    const tabs = createBottomTabNavigator();
    return (
        <tabs.Navigator >
            <tabs.Screen  name='Inicio' component={Inicio}/>
            <tabs.Screen  name='Bombillos' component={Bombillos}/>
            <tabs.Screen  name='Prestamos' component={Prestamos}/>
        </tabs.Navigator>
     )
}

const Navegación = () => {
  
    return (
         <NavigationContainer >
             <MyTabs  />
         </NavigationContainer>
     )
}

const styles = StyleSheet.create({
    
    title: {

       alignItems:'flex-end'
    }
  });

export default Navegación