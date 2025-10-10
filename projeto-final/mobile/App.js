/*import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true);*/
// Ignora os avisos

import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { useState } from 'react'

import Tabs from './src/navigation/Tabs'
import Header from './src/components/Header'
import Search from './src/screens/Search'
import { navigationRef } from './src/navigation/RootNavigator'

export default function App() {
  const [query, setQuery] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <Header query={query} onQueryChange={setQuery} />

      <NavigationContainer ref={navigationRef}>
        <Tabs />
      </NavigationContainer>

      <Search query={query} onClearQuery={() => setQuery('')} />
    </View>
  )
}
/** Função principal, contendo cabeçalho, esquema de abas e tela de pesquisa (acionada caso haja pesquisa) */
