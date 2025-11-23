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
// Função que define a aba principal (exibe a lista referente à aba) e abas de detalhes (conteúdo que depende do item selecionado pelo usuário)

export default Navigator
