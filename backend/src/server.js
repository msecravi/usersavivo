import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { getPool } from './db.js'
import { usersRouter } from './users.routes.js'

dotenv.config()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

const pool = getPool(process.env)

app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ status: 'ok' })
  } catch (e) {
    res.status(500).json({ status: 'db_error' })
  }
})

app.use('/users', usersRouter(pool))

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

const port = Number(process.env.PORT || 4000)
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})
