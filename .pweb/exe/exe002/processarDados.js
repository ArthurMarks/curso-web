function processarDados(usuarios = [], tipoDados = 1) {
    if (![1, 2].includes(tipoDados)) return 'Operação inválida'

    const time = performance.now()
    let listaDados = []

    usuarios?.map((usuario) => {
        const { nome, idade, email, endereco } = usuario
        listaDados.push(nome)
    })

    const listaFinal = [...listaDados, { tempoGasto: performance.now()-time }]

    return listaFinal
}

const usuarios = [
    {
      nome: 'João Silva',
      idade: 25,
      email: 'joao.silva@email.com',
      endereco: {
        rua: 'Rua dos Pinheiros',
        bairro: 'Centro',
        cidade: 'São Paulo'
      }
    },
    {
      nome: 'Maria Oliveira',
      idade: 30,
      email: 'maria.oliveira@email.com',
      endereco: {
        rua: 'Rua das Flores',
        bairro: 'Vila Mariana',
        cidade: 'São Paulo'
      }
    },
    {
      nome: 'Pedro Alves',
      idade: 28,
      email: 'pedro.alves@email.com',
      endereco: {
        rua: 'Rua dos Anjos',
        bairro: 'Santo Amaro',
        cidade: 'São Paulo'
      }
    },
    {
      nome: 'Ana Luiza',
      idade: 22,
      email: 'ana.luiza@email.com',
      endereco: {
        rua: 'Rua dos Sonhos',
        bairro: 'Mooca',
        cidade: 'São Paulo'
      }
    },
    {
      nome: 'Carlos Henrique',
      idade: 35,
      email: 'carlos.henrique@email.com',
    },
    {
      nome: 'Beatriz Souza',
      idade: 26,
      email: 'beatriz.souza@email.com',
      endereco: {
        rua: 'Rua das Estrelas',
        bairro: null,
        cidade: 'São Paulo'
      }
    },
    {
      nome: 'Rafael Santos',
      idade: 29,
      email: 'rafael.santos@email.com',
      endereco: {
        rua: null,
        bairro: 'Santo André',
        cidade: 'São Paulo'
      }
    },
    {
      nome: 'Juliana Martins',
      idade: 24,
      email: 'juliana.martins@email.com',
      endereco: {
        rua: 'Rua dos Girassóis',
        bairro: 'Vila Prudente',
        cidade: null,
      }
    },
    {
      nome: 'Gabriel Lima',
      idade: 27,
      email: 'gabriel.lima@email.com',
      endereco: {
        rua: 'Rua dos Cisnes',
        bairro: 'São Mateus',
        cidade: 'São Paulo'
      }
    },
    {
      nome: 'Isabela Costa',
      idade: 23,
      email: 'isabela.costa@email.com',
      endereco: {
        rua: 'Rua dos Lírios',
        bairro: 'Cidade Tiradentes',
        cidade: 'São Paulo'
      }
    }
]

const relatorio = processarDados(usuarios, 2)
console.log(relatorio)
