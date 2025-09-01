import { View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home'
import Characters from './src/screens/Characters'
import Villages from './src/screens/Villages'
import Clans from './src/screens/Clans'
import Skills from './src/screens/Skills'
import Search from './src/components/Search'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="Villages" component={Villages} />
        <Tab.Screen name="Clans" component={Clans} />
        <Tab.Screen name="Skills" component={Skills} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
