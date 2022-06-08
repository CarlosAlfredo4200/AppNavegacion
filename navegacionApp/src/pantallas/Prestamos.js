import React, {useState} from 'react';
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
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';
import Resulados from '../components/Resulados';
import colors from '../utils/colors';
('react-native/Libraries/NewAppScreen');


const Prestamos = () => {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);

  const [total, setTotal] = useState(null);
  const [totalMes, setTotalMes] = useState(null)
  const [errorMsg, setErrorMsg] = useState('');

  const handleCalcular = () => {

     const i = interes / 100;
     const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
     let total = fee.toFixed(2).replace('.', ',')
     let mes = (fee * meses).toFixed(2).replace('.', ',')

    setTotal(total);
     setTotalMes(mes);

     setCapital(capital);
     setInteres(interes);
     setMeses(meses);
  };

   

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Cotizador de pretamos</Text>
        <Formulario
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>

      
        <Footer handleCalcular={handleCalcular} />
        <View>
          <Resulados total={total} totalMes={totalMes} capital={capital} interes={interes} meses={meses}
           />
        </View>
       
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },

  title: {
    alignItems: 'center',
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Prestamos;
