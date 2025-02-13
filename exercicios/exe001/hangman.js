// Programa que gera um jogo da forca
const input = require('prompt-sync')()
const chalk = require('chalk')
const figlet = require('figlet')

function runCode(phrase, code) {
  figlet(phrase, (err, data) => {
    if (err) {
      console.log("Something went wrong...")
      console.dir(err)
      return
    }
    console.log(data)
    code()
  })
}

function code() {
  const categories = {
    animal: [
      "Cachorro",
      "Gato",
      "Elefante",
      "Leão",
      "Tigre",
      "Urso",
      "Macaco",
      "Girafa",
      "Zebra",
      "Cavalo"
    ],
    country: [
      "Brasil",
      "Estados Unidos",
      "China",
      "Japão",
      "Alemanha",
      "França",
      "Itália",
      "Espanha",
      "Reino Unido",
      "Canadá"
    ],
    fruit: [
      "Maçã",
      "Banana",
      "Laranja",
      "Manga",
      "Pêra",
      "Uva",
      "Morango",
      "Kiwi",
      "Abacate",
      "Pêssego"
    ],
    profession: [
      "Médico",
      "Engenheiro",
      "Advogado",
      "Professor",
      "Enfermeiro",
      "Policial",
      "Bombeiro",
      "Arquiteto",
      "Contador",
      "Desenvolvedor"
    ]
  }
  
  // Jogo
  
  generatePhrase('Jogo da Forca')
  console.log('Escolha uma categoria:')
  
  const filterCategories = Object.keys(categories)
  filterCategories.forEach(c => {
    console.log(chalk.green(c))
  })
}

runCode('Jogo da Forca', code)
