import { createStackNavigator } from "@react-navigation/stack"

import Wrapper from "../components/Wrapper"
import InnerWrapper from "../components/InnerWrapper"

const Stack = createStackNavigator()

const Navigator = ({ screenConfig }) => {
    const MainComponent = screenConfig.component
    const SubComponent = screenConfig.subcomponent

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="tab">
                {props => (
                    <Wrapper screen={screenConfig.name}>
                        <MainComponent {...props} />
                    </Wrapper>
                )}
            </Stack.Screen>
            <Stack.Screen name="details" >
                {props => (
                    <InnerWrapper back={screenConfig.name}>
                        <SubComponent {...props} />
                    </InnerWrapper>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
/** Componente intermediário da navegação aba principal <-> conteúdo específico, envolvendo estilos padrão nas abas (Wrapper e InnerWrapper) */
/** Tem como aba principal o 'tab' e secundária 'details' (com conteúdo renderizado condicionalmente) */

export default Navigator
