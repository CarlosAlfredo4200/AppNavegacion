import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Button,
  } from 'react-native';
import Formulario from '../components/Formulario';
import colors from '../utils/colors';
  'react-native/Libraries/NewAppScreen';
 


const Footer = ( props ) => {

    const { handleCalcular } = props;
  return (
      <View style={styles.viewFooter}>
          <TouchableOpacity onPress={handleCalcular}>
          <Text style={styles.text}>CALCULAR</Text>
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({

     viewFooter: {
          position:'absolute',
          bottom:0,
          width:'100%',
          backgroundColor:colors.PRIMARY_COLOR,
          height:70,
          borderTopLeftRadius:30,
          borderBottomRightRadius:30,
          alignItems:'center',
          justifyContent:'center'
     },
     text:{
         fontSize:14,
         fontWeight:'bold',
         backgroundColor:'white',
         borderRadius:5,
         padding:15,
          
     }
  });


export default Footer