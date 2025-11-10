import { createStackNavigator } from "@react-navigation/stack"

import Wrapper from "../components/Wrapper"
import InnerWrapper from "../components/InnerWrapper"

const Stack = createStackNavigator()

const Navigator = ({ screenConfig }) => {
    const Component = screenConfig.component

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="tab" 
                children={() => <Wrapper screen={screenConfig.name} />} 
            />
            <Stack.Screen 
                name="details" 
                children={props => (
                    <InnerWrapper back={screenConfig.name}>
                        <Component {...props} />
                    </InnerWrapper>
                )}
            /> 
        </Stack.Navigator>
    )
}
/** Componente intermediário da navegação aba principal <-> conteúdo específico, envolvendo estilos padrão nas abas (Wrapper e InnerWrapper) */
/** Tem como aba principal o 'tab' e secundária 'details' (com conteúdo renderizado condicionalmente) */

export default Navigator
