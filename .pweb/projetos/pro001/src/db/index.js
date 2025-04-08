const { Pool } = require('pg')

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
} // configuracao do banco de dados.

const pool = new Pool(dbConfig) // criando uma conexão com o banco de dados.

const closeConnection = async () => {
  await pool.end() // fechando a conexão com o banco de dados.
}

const query = async (text, params) => {
  const result = await pool.query(text, params) // executando uma query no banco de dados.
  return result // retornando o resultado da query.
}

module.exports = { closeConnection, query }