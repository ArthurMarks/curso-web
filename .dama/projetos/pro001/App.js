import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function App() {
  const dificulty = ['Fácil', 'Médio', 'Difícil']
  const week = Array.from({ length: 6 }, (_, i) => i + 1)
  const images = Array.from({ length: 4 }, () => require('./assets/the-rock.jpg'))
  const times = [15, 20, 25, 30]

  return (
    <View style={styles.container}> 
      <View style={styles.defaultMargin}> 
        <Text style={styles.title}>Meu treino</Text>

        <View style={styles.defaultListButtons}>
          {dificulty.map((text, index) => (
            <TouchableOpacity key={index} style={[styles.defaultButton, styles.defaultBorder]}>
              <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={[styles.imageConateiner, styles.defaultMargin]}> 
        {images.map((src, index) => (
          <TouchableOpacity key={index}>
            <Image source={src} style={[styles.image, styles.defaultBorder]} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.defaultMargin}> 
        <Text>Seções por semana</Text>

        <View style={styles.defaultListButtons}>
          {week.map((day, index) => (
            <TouchableOpacity key={index} style={[styles.day, styles.defaultButton, styles.defaultBorder]}>
              <Text style={styles.textButton}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.defaultMargin}>
        <Text>Duração do treino</Text>

        <View style={styles.defaultListButtons}>
          {times.map((time, index) => (
            <TouchableOpacity key={index} style={[styles.time, styles.defaultButton, styles.defaultBorder]}>
              <Text style={styles.textButton}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.defaultMargin}>
        <TouchableOpacity style={[styles.defaultButton, styles.defaultBorder, styles.submit]}>
          <Text>Iniciar Treino</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

/* FlatList x map:
- Como as listas de itens são relativamente curtas, preferi utilizar .map() ao invés de <FlatList>
- O map performou melhor os estilos que acrescentei, ao contrário do FlatList
- Mesmo após pesquisar bastante sobre o FlatList, não foi possível implementar uma estilização tão boa quanto a do map */

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20
  },
  title: {
    fontSize: '1.6em',
    fontWeight: 'bold'
  },
  imageConateiner: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    borderWidth: 1.5,
    borderRadius: 25,
    width: '100%'
  },
  image: {
    width: 120,
    height: 120
  },
  submit: {
    paddingVertical: 5
  },
  defaultButton: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DAE8FC',
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: '#819FCA',
    borderRadius: 5
  },
  defaultListButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15
  },
  defaultMargin: {
    marginVertical: 5
  },
  textButton: {
    fontWeight: '600'
  }
})