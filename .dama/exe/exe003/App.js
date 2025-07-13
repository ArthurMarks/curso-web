import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Calculator from './src/screens/Calculator'
import History from './src/screens/History'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen 
          name="Calculator" 
          component={Calculator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="History" 
          component={History} 
          options={{ 
            headerStyle: {
              backgroundColor: '#202020',
              borderBottomWidth: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'normal'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
