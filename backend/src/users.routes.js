import express from 'express'
import { getAllUsers } from './users.repository.js'

export function usersRouter(pool) {
  const router = express.Router()

  router.get('/', async (req, res) => {
    try {
      const data = await getAllUsers(pool)
      res.json(data)
    } catch (err) {
      res.status(500).json({
        message: 'Failed to fetch users',
        error: process.env.NODE_ENV === 'production' ? undefined : err?.message
      })
    }
  })

  return router
}
