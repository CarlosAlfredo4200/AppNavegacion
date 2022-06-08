import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  Pressable,
} from 'react-native';
('react-native/Libraries/NewAppScreen');

import encendido from '../images/encendido.png';
import apagado from '../images/apagado.png';

const Bombillos = () => {
  const [bombilla, setBombilla] = useState(false);
  const [mensaje, setMensaje] = useState('')

  const handleBombilla = () => {
    setBombilla(!bombilla);
  };
  console.log(mensaje);
  return (
    <View>
      <Text style={styles.title}>Bombillos</Text>
      <View>

        {bombilla ? 
                    (<Image style={styles.imagenes} source={encendido}/>)
                  : (<Image style={styles.imagenes} source={apagado}/>)}
         
        <Pressable style={styles.btnHandle} onPressOut={handleBombilla}>
          <Text>encendido / apagado</Text>
        </Pressable >

         
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 15,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  btnHandle: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 100,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 15,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagenes: {
    width:150,
    height:150,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:100

  }
});

export default Bombillos;
