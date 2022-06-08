import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import colors from '../utils/colors';
('react-native/Libraries/NewAppScreen');
 

const Formulario = props => {
  const {setCapital, setInteres, setMeses} = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={e => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={e => setInteres(e.nativeEvent.text)}
        />

        <TextInput
          placeholder="# de meses"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={e => setMeses(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -70,
    width: '90%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 10,
    height: 210,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'column',
    marginTop:20
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 5,
    width: '80%',
    marginLeft:20,
    marginRight:20, 
    marginBottom: 10,
    color: '#000',
    paddingLeft:20,
    fontSize:14
     
  },
  
});

export default Formulario;
