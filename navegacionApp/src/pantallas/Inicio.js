 import React from 'react'
 import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  'react-native/Libraries/NewAppScreen';
 const Inicio = () => {
   return (
       <View>

           <Text style={styles.title}>Inicio</Text>
           <Text style={styles.movil}>Moviles III</Text>
           <Text style={styles.react}>React-Native APP</Text>
       </View>
   )
 }
 

 const styles = StyleSheet.create({
    
    title: {

      marginTop: 100,
       
      marginHorizontal:50,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: "#20232a",
      borderRadius: 15,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold"
    },

    movil:{
      textAlign:'center',
      fontSize:40,
      marginTop:30,
      fontWeight:'900',
      color:'blue'
    },
    react:{
      textAlign:'center'
    },
     
    
  });

 
 export default Inicio