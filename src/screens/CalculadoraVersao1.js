// PART 1 - IMPORT LIBRARIES
import React from 'react'; // importing entire library
import { Text,TextInput, StyleSheet, View,TouchableOpacity } from 'react-native'; // importing some piees of react-native

// PART 2 - CREATE A COMPONENT 
// A FUNCTION THAT RETURNS SOME JSX
const Calculadora1 = () => {
  const [valorA, setValorA] = React.useState(0);
  const [valorB, setValorB] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);
  const calcularSoma = () => {
    const resultadoSoma = parseFloat(valorA) + parseFloat(valorB);
    setResultado(resultadoSoma);
  };
  const calcularSubtracao = () => {
    const resultadoSubtrai = parseFloat(valorA) - parseFloat(valorB);
    setResultado(resultadoSubtrai);
  };
  const calcularMultiplicacao = () => {
    const resultadoMultiplica = parseFloat(valorA) * parseFloat(valorB);
    setResultado(resultadoMultiplica);
  };
  const calcularDivisao = () => {
    const resultadoDiv = parseFloat(valorA) / parseFloat(valorB);
    setResultado(resultadoDiv);
  };
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.textStyle}>Valor A:</Text>
      <TextInput
       style={styles.input}
       onChangeText={(valorA) => setValorA(valorA)}
       value={valorA.toString()}
       keyboardType="numeric"
        
      />
      <Text style={styles.textStyle}>Valor B:</Text>
      <TextInput
         style={styles.input}
         onChangeText={(valorB) => setValorB(valorB)}
         value={valorB.toString()}
         keyboardType="numeric"
      />

    </View>

    <View style={styles.buttonArea}>
      <TouchableOpacity
         onPress={calcularSoma}
          style={styles.button}
          
        >
           <Text style={styles.buttonText}>somar (A + B)</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={calcularSubtracao}
      
          style={styles.button}
          
        >
           <Text style={styles.buttonText}>subtrair (A - B)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={calcularMultiplicacao}
          style={styles.button}
          
        >
           <Text style={styles.buttonText}>multiplicar (A * B)</Text>
        </TouchableOpacity>

        <TouchableOpacity
           onPress={calcularDivisao}
          style={styles.button}
          
        >
           <Text style={styles.buttonText}>dividir (A / B)</Text>
        </TouchableOpacity>
     <Text style={styles.textStyle}>Resultado:{resultado}</Text> 
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 36,
    color: 'Black',
    fontWeight:'bold',
    textAlign:'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical:10,
    alignItems: 'center',
    textAlign:'center',
    borderRadius: 5,
    marginHorizontal:0,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonArea:{
    flex: 1,
    justifyContent: 'space-evenly',
    width:'100%',
    paddingHorizontal:30,
    marginVertical:10,
  }
})


export default Calculadora1



