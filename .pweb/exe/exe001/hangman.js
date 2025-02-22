// Programa que gera um jogo da forca
const input = require('prompt-sync')()
const chalk = require('chalk')
const figlet = require('figlet')
const alphabet = require('alphabet').upper

// Temas do jogo (pode ser alterado, excluído e adicionado)
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

// Utilitários e variáveis globais
const filterCategories = Object.keys(categories)
let choices = Array.from({ length: filterCategories.length }, (_, index) => index + 1)
let choicePlayer
const clear = console.clear

// Função que lida com geração de texto ASCII
function generateTitle(title) {
  console.log(figlet.textSync(title))
}

// Função de início (lista de categorias, entrada de dados e chamada da função principal)
function init() {
  clear()
  generateTitle('--Jogo-da-Forca--')

  console.log('Escolha uma categoria:\n')

  filterCategories.forEach((categorie, index) => {
    console.log(chalk.blue(`${categorie}: ${choices[index]}\n`))
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

}

// Função que lida com o jogo, seus eventos e resultados
function game() {
  const theme = filterCategories[choicePlayer - 1]
  const listCategories = categories[theme]
  const randomWord = listCategories[Math.floor(Math.random() * listCategories.length)].toUpperCase().split('')
  const fakeWord = randomWord.map(letter => letter.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
  const misteriousWord = Array.from({ length: randomWord.length }, (_, i) => randomWord[i] == ' ' ? ' ' : '_')
  let choiceLetter
  let chosenLetters = []
  let error = { situation: false, count: 0 }
  let win = false
  let defeat = false
  let notice
  let design = `__\n     l\n`

  while (true) {
    console.log(chalk.blue(`Tema: ${theme}`))
    generateTitle(`${design} ${misteriousWord.join('').padStart(80)}`)

    if (win || defeat) {
      const step = input(`Você ${win ? chalk.green('ganhou') : chalk.red('perdeu')}! Deseja continuar? (S/N): `)
      if (step.toUpperCase() == 'S') init()
      break
    }

    if (chosenLetters.length > 0) {
      console.log(`\n${notice}\n`)
      console.log(chalk.blue(`Letras que já foram: ${chosenLetters}\n`))
    }

    do {
      choiceLetter = input('Escolha uma letra válida: ').toUpperCase()
    } while (!alphabet.includes(choiceLetter) || chosenLetters.includes(choiceLetter))

    chosenLetters.push(choiceLetter)
    error.situation = true

    fakeWord.forEach((letter, index) => {
      if (choiceLetter == letter) {
        error.situation = false
        misteriousWord[index] = randomWord[index]
      }
    })

    if (error.situation) {
      error.count++
      notice = chalk.red(`Você errou. Mais ${6 - error.count} erros e será enforcado!`)

      switch (error.count) {
        case 1: 
          design = `\n  __\n       l\n     o\n`
          break
        case 2: 
          design = `\n  __\n       l\n     o\n       |\n`
          break
        case 3: 
          design = `\n  __\n       l\n     o\n  /|\n`
          break
        case 4: 
          design = `\n  __\n       l\n     o\n  /|\\\n`
          break
        case 5: 
          design = `\n  __\n       l\n     o\n  /|\\\n  /\n`
          break
        case 6: 
          design = `\n  __\n       l\n     o\n  /|\\\n  / \\\n`
          defeat = true
          randomWord.forEach((letter, index) => misteriousWord[index] = letter)
          break
      }
    } else if (misteriousWord.join() == randomWord.join()) {
      win = true
    } else {
      notice = chalk.green('Você acertou!')
    }

    clear()
  }
}

init()
