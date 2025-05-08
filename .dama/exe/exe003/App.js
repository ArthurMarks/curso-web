import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import Calc1 from './src/screens/Calc1'
import Calc2 from './src/screens/Calc2'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Calculadora 1" component={Calc1}></Stack.Screen>
        <Stack.Screen name="Calculadora 2" component={Calc2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
})
