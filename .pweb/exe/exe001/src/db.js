const { Pool } = require('pg')

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const pool = new Pool(dbConfig)

const query = async (sql, params) => {
    const client = await pool.connect()
    try {
        const result = await client.query(sql, params)
        return result
    } catch (error) {
        throw error
    } finally {
        client.release()
    }
}

let isClosed = false

const closeConnection = async () => {
    if (!isClosed) {
        await pool.end()
        isClosed = true
    }
}

module.exports = { query, closeConnection }
