import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'

import { navigationRef } from './src/hooks/useExternNavigator'
import { QueryProvider } from './src/hooks/useQuery'
import Tabs from './src/navigation/Tabs'
import Header from './src/components/Header'
import Search from './src/screens/Search'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <QueryProvider>
          <Header />
          <Tabs />
          <Search />
        </QueryProvider>
      </NavigationContainer>
    </View>
  )
}
/** Função principal, contendo cabeçalho, esquema de abas e tela de pesquisa (acionada caso haja pesquisa) */
