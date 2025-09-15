import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Tabs from './src/components/Tabs'
import Search from './src/components/Search'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => <Search /> }}>
        <Stack.Screen component={Tabs} name="." />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
