import mysql from 'mysql2/promise'

let pool

export function getPool(env) {
  if (!pool) {
    pool = mysql.createPool({
      host: env.DB_HOST,
      port: Number(env.DB_PORT || 3306),
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      namedPlaceholders: true
    })
  }
  return pool
}
