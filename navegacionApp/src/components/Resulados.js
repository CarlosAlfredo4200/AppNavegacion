import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import colors from '../utils/colors';
('react-native/Libraries/NewAppScreen');
const Resulados = props => {
  const {total, totalMes, capital, meses, interes} = props;

  console.log(total);
  console.log(totalMes);
  return (
    <View style={styles.safeArea}>
      <Text style={styles.title}>Cantidad solicitada:<Text style={styles.span}>{capital}</Text></Text>
      <Text style={styles.title}>Interes %:<Text style={styles.span}>{interes}</Text></Text>
      <Text style={styles.title}>Plazo:<Text style={styles.span}>{meses}</Text></Text>
      <Text style={styles.title}>Pago mensual:<Text style={styles.span}>{totalMes}</Text></Text>
      <Text style={styles.title}>Total interes mensual a pagar $:{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: '80%',
    marginTop: 80,
    
    height: 100,
    borderColor:colors.PRIMARY_COLOR_DARK,
    borderRadius: 8,
  },

  title: {
    alignItems: 'flex-start',
    marginTop: 2,
    marginLeft:10,
    color:colors.PRIMARY_COLOR_DARK,
    fontSize: 14,
    fontWeight: 'bold',
     
  },

  span:{
      alignItems:'flex-end',
      color:'black',
      fontSize:14
  }


});

export default Resulados;
