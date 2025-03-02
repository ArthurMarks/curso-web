require('dotenv').config()

const { closeConnection } = require('./db')
const { selectAll, selectById, insert, update, exclude } = require('./cursoModel')
const input = require('prompt-sync')()

const main = async () => {
    let choice, response, id, datas

    console.clear()
    console.log(`
    --Registros--

    Qual ação deseja realizar?

    1. Ver todos os registros
        
    2. Ver registro específico
        
    3. Inserir registros e mostrar as alterações
        
    4. Atualizar registros e mostrar as alterações
        
    5. Deletar registros e mostrar as alterações

    `)

    do {
        choice = parseInt(input('Escolha: '))
    } while (choice < 1 || choice > 5)

    switch (choice) {
        case 1:
            response = await selectAll()
            console.table(response)
            break
        case 2:
            id = input(`Informe o id para ver o registro: `)
            response = await selectById(id)
            console.table(response)
            break
        case 3:
            datas = ['nome', 'descrição'].map(data => input(`Informe ${data} para a criação do registro: `))
            response = { insert: await insert(datas), result: await selectAll() }
            console.log(response.insert)
            console.table(response.result)
            break
        case 4:
            datas = ['descrição', 'id'].map(data => input(`Informe ${data} para a atualização do registro: `))
            response = { update: await update(datas), result: await selectAll() }
            console.log(response.update)
            console.table(response.result)
            break
        case 5:
            id = input(`Informe o id para excluir o registro e ver as alterações: `)
            response = { delete: await exclude(id), result: await selectAll() }
            console.log(response.delete)
            console.table(response.result)
            break
        default:
            console.log('Nenhuma operação realizada')
            break
    }

    choice = input('Deseja continuar o acesso aos registros? (S/N): ').toUpperCase()
    choice == 'S' ? main() : closeConnection()
}

main()
