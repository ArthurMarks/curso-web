// Programa que gera um jogo da forca
const input = require('prompt-sync')()
const chalk = require('chalk')
const figlet = require('figlet')

function generateTitle(title) {
  figlet(title, (err, data) => {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return
    }
    console.log(data)
  })
}

function init() {
  clear()
  generateTitle('--Jogo-da-Forca--')
  setTimeout(() => {
    console.log('Escolha uma categoria:')

    filterCategories.forEach((categorie, index) => {
      console.log(chalk.green(`${categorie}: ${choices[index]}`))
    })

    do {
      choicePlayer = parseInt(input(`Escolha um número entre ${choices[0]} e ${choices[choices.length - 1]}: `))
    } while (!choices.includes(choicePlayer))

    clear()
    generateTitle('Boa sorte...')
    setTimeout(() => {
      clear()
      game()
    }, 2000)
  }, 100)
}

function game() {
  const listCategories = categories[filterCategories[choicePlayer - 1]]
  const randomWord = listCategories[Math.floor(Math.random() * listCategories.length)].toUpperCase().split('')
  const fakeWord = randomWord.map(letter => letter.normalize('NFC').replace(/[\u0300-\u036f]/g, ''))
  const misteriousWord = Array.from({ length: randomWord.length }, () => '_')
  let choiceLetter
  let chosenLetters = []
  let error = true
  
  while (misteriousWord.join('') != randomWord.join('')) {
    console.log(randomWord)
    generateTitle(misteriousWord.join(''))

    do {
      choiceLetter = input('Escolha uma letra válida: ').toUpperCase()
    } while (choiceLetter.length != 1 || /\d/.test(choiceLetter) || chosenLetters.includes(choiceLetter))

    chosenLetters.push(choiceLetter)
    fakeWord.forEach((letter, index) => {
      if (choiceLetter == letter) {
        error = false
        misteriousWord[index] = randomWord[index]
      }
    })

    // clear()
  }
}

const categories = {
  animal: [
    'Cachorro', 'Gato', 'Elefante', 'Leão', 'Tigre', 'Urso', 'Macaco', 'Girafa', 'Zebra', 'Cavalo'
  ],
  country: [
    'Brasil', 'Estados Unidos', 'China', 'Japão', 'Alemanha', 'França', 'Itália', 'Espanha', 'Reino Unido', 'Canadá'
  ],
  fruit: [
    'Maçã', 'Banana', 'Laranja', 'Manga', 'Pêra', 'Uva', 'Morango', 'Kiwi', 'Abacate', 'Pêssego'
  ],
  profession: [
    'Médico', 'Engenheiro', 'Advogado', 'Professor', 'Enfermeiro', 'Policial', 'Bombeiro', 'Arquiteto', 'Contador', 'Desenvolvedor'
  ]
}

const filterCategories = Object.keys(categories)
let choices = Array.from({ length: filterCategories.length }, (_, index) => index + 1)
let choicePlayer

const clear = console.clear

/*generateTitle(`
__
     l
   o
/|\\
/ \\
`) ordem: cabeça, tronco, b. direto, b, esquerdo, p. direita, p. esquerda */

init()
