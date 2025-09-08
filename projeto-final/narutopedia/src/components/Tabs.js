import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Characters from '../screens/Characters'
import Villages from '../screens/Villages'
import Clans from '../screens/Clans'
import Skills from '../screens/Skills'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Characters" component={Characters} />
            <Tab.Screen name="Villages" component={Villages} />
            <Tab.Screen name="Clans" component={Clans} />
            <Tab.Screen name="Skills" component={Skills} />
        </Tab.Navigator>
    )
}

export default Tabs
