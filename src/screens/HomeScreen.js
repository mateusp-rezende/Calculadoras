import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const HomeScreen = (props) => {
  console.log(props);
  const navigation = props.navigation;
  const windowWidth = Dimensions.get('window').width;
  const buttonWidth = windowWidth * 0.4;
  

  return (
    <ImageBackground
      source={require('./images/backgroundcalculadora.jpg')}
      style={styles.background}>
      <View style={styles.principal}>
        <TouchableOpacity
          onPress={() => {
            console.log('button pressed');
            navigation.navigate('Calculadora1');
          }}
          style={[styles.button, { width: buttonWidth }]}
        >
          <Text style={styles.buttonText}>CALCULADORA 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('button pressed');
            navigation.navigate('Calculadora2');
          }}
          style={[styles.button, { width: buttonWidth }]}
        >
          <Text style={styles.buttonText}>CALCULADORA 2</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    paddingVertical:10,
    alignItems: 'center',
    textAlign:'center',
    borderRadius: 5,
    marginHorizontal:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
   width:'100%',
   height:'100%',
  },
  principal: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default HomeScreen;
