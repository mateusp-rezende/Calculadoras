import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import Calculadora1 from './src/screens/CalculadoraVersao1'
import Calculadora2 from './src/screens/CalculadoraVersao2'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MATEUS DE PAULA CALCULATOR 2.O " >
        <Stack.Screen name="MATEUS DE PAULA CALCULATOR 2.O "  component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Calculadora1" component={Calculadora1} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Calculadora2" component={Calculadora2} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}