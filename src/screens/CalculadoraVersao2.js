import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const Calculadora2 = () => {
  const [valores, setValores] = React.useState("");
  

  const calcular =()=> {
    try {
      const resultadoCalculado = eval(valores);
      setValores(resultadoCalculado.toString()); // Atualiza o campo de entrada com o resultado
      
    } catch (error) {
      setValores("Atenção, forneça uma operação valida!!"); 
    }
  }
  return (
    <>
      <View style={styles.container}>
      <TextInput
          style={styles.input}
          onChangeText={(valores) => setValores(valores)}
          value={valores}
          keyboardType="numeric"
        />
      </View>
     
      <View style={styles.buttonArea}>
         {/* Botões (), c e / */}
      <View style={styles.buttonrow}>
        <TouchableOpacity style={styles.buttonDelete}
        onPress={() => {
         setValores("");
        }}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={
          ()=>{
            setValores((valor)=> valor+'(')
        }}
        >
         <Text style={styles.buttonText}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={
          ()=>{
            setValores((valor)=> valor+')')
        }}
        >
         <Text style={styles.buttonText}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={
          ()=>{
            setValores((valor)=> valor+'/')
        }}
        >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        
      </View>
        {/* Botões 7, 8 , 9 e +*/}

        <View style={styles.buttonrow}>
          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'7')
          }}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'8')
          }}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'9')
          }}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'+')
          }}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/*  botões 4,5, 6 e - */}
        <View style={styles.buttonrow}>
          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'4')
          }}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'5')
          }}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'6')
          }}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'-')
          }}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        {/*  botões 1, 2, 3 e x*/}
        <View style={styles.buttonrow}>
          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'1')
          }}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'2')
          }}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'3')
          }}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'*')
          }}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        {/*  botões 0,= e / */}
        <View style={styles.buttonrow}>
        <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'.')
          }}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={
            ()=>{
              setValores((valor)=> valor+'0')
          }}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonres}
          onPress={() => {
            calcular();
          }}
          
          
          >
            <Text style={styles.buttonText}>=</Text>
            
          </TouchableOpacity>
        </View>

        
        
        {/* Fim dos botões de números */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 36,
    color: "Black",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    maxWidth:'90%',
    minWidth:'50%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    marginTop: 50,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  delete: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  button: {
    display: "flex",
    flex: 1,
    height: 50,
    minWidth: 50,
    maxWidth: 200,
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 5,
    margin: 10,
  },
 
  
  buttonDelete: {
    backgroundColor: "red",
    display: "flex",
    flex: 1,
    height: 50,
    minWidth: 50,
    maxWidth: 200,

    padding: 10,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 5,
    margin: 10,
  },

  buttonres: {
    backgroundColor: "green",
    display: "flex",
    flex: 1,
    height: 50,
    minWidth: 50,
    padding: 10,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 5,
    margin: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  buttonArea: {
    display:'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth:'90%',
    minWidth:'50%',
    margin:'auto'
    
  },
});

export default Calculadora2;
