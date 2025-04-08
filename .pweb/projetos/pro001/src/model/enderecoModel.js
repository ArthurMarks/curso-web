const { query } = require('../db/index')

const getAll = async () => {
  const enderecos = await query('SELECT * FROM endereco') // Uso do query para buscar os dados contidos na tabela endereco.
  return enderecos.rows // Retorno dos dados buscados usando o método rows.
}

const getById = async (id) => {
  const endereco = await query('SELECT * FROM endereco WHERE id = $1', [id]) // Uso do query para buscar os dados contidos na tabela endereco atraves do id.
  return endereco.rowCount ? endereco.rows[0] : {} // Verifica se o id existe, caso exista retorno o dado, caso contrario retorno um objeto vazio.
}

const getAdvanced = async (params) => {
  const columns = Object.keys(params) // Uso do método keys para buscar as propriedades do objeto params.
  const values = [] // Criação de um array vazio para armazenar os valores.
  const conditions = [] // Criação de um array vazio para armazenar as condições.

  columns.forEach(column => { // Uso do método forEach para percorrer as propriedades do objeto columns.
    if (params[column]) { // Verifica se a propriedade do objeto params existe.
      values.push(params[column]) // Adiciona o valor da propriedade ao array values.
      conditions.push(`${column} = $${values.length}`) // Adiciona a condição ao array conditions.
    }
  })

  const queryStr = `SELECT * FROM endereco${conditions.length ? ' WHERE ' + conditions.join(' AND ') : ''}` // Criação da string de query.
  const result = await query(queryStr, values) // Uso do query para buscar os dados contidos na tabela endereco.
  return result.rows // Retorno dos dados buscados usando o método rows.
}

const insert = async (endereco) => {
  const result = await query(
    'INSERT INTO endereco (rua, numero, complemento, bairro) VALUES ($1, $2, $3, $4) RETURNING *',
    [endereco.rua, endereco.numero, endereco.complemento, endereco.bairro]) // Uso do query para inserir os dados na tabela endereco.É necessário informar esses dados para a função.
  return result.rows[0] // Retorna o endereco criado usando o método rows.
}

const update = async (endereco, id) => { 
  const columns = Object.keys(endereco) // Uso do método keys para pegar as propriedades do objeto endereco.
  const values = [] // Criação de um array em branco para armazenar os valores.
  const conditions = [] // Criação de um array em branco para armazenar as condições.

  columns.forEach(column => { 
    if (endereco[column]) { // Verifica se a propriedade do objeto endereco existe.
      values.push(endereco[column]) // Adiciona o valor da propriedade ao array values.
      conditions.push(`${column} = $${values.length}`) // Adiciona a condição ao array conditions.
    }
  })
  values.push(id) // Adiciona o id ao array values.

  const queryStr = `UPDATE endereco SET ${conditions.join(', ')} WHERE id = $${values.length}` // Criação da string de query.

  await query(queryStr, values) // Uso do query para atualizar os dados na tabela endereco.
  const result = await query('SELECT * FROM endereco WHERE id = $1', [id]) // Uso do query para buscar os dados atualizados contidos na tabela endereco.
  return result.rows[0] // Retorna o endereco atualizado usando o método rows.
}

const remove = async (id) => {
  const result = await query('DELETE FROM endereco WHERE id = $1 RETURNING *', [id]) // Uso do query para remover os dados da tabela endereco atraves do id.
  return result.rows[0] // Retorna o endereco removido usando o método rows.
}

module.exports = {
  getAll,
  getById,
  getAdvanced,
  insert,
  update,
  remove
}