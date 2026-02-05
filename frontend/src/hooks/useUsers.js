import { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const API_URL = 'https://dummyjson.com/users'

function normalize(str) {
  return (str || '').toString().trim().toLowerCase()
}

export function useUsers() {
  const [baseUsers, setBaseUsers] = useState([])
  const [localUsers, setLocalUsers] = useState([])
  const [deletedIds, setDeletedIds] = useState(() => new Set())
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(API_URL)
      const users = res?.data?.users || []
      setBaseUsers(users)
    } catch (e) {
      setError(e?.message || 'Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const addStaticUser = useCallback(() => {
    const id = Date.now()
    const user = {
      id,
      firstName: 'Static',
      lastName: 'User',
      company: { name: 'Local Company', title: 'Local Role' },
      address: { country: 'India' }
    }
    setLocalUsers((prev) => [user, ...prev])
  }, [])

  const deleteUser = useCallback((id) => {
    setDeletedIds((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
    setLocalUsers((prev) => prev.filter((u) => u.id !== id))
  }, [])

  const allUsers = useMemo(() => {
    const merged = [...localUsers, ...baseUsers]
    return merged.filter((u) => !deletedIds.has(u.id))
  }, [baseUsers, localUsers, deletedIds])

  const filteredUsers = useMemo(() => {
    const q = normalize(search)
    if (!q) return allUsers

    return allUsers.filter((u) => {
      const fullName = normalize(`${u.firstName || ''} ${u.lastName || ''}`)
      const companyName = normalize(u?.company?.name)
      const role = normalize(u?.company?.title)
      const country = normalize(u?.address?.country)
      return (
        fullName.includes(q) ||
        companyName.includes(q) ||
        role.includes(q) ||
        country.includes(q)
      )
    })
  }, [allUsers, search])

  return {
    users: filteredUsers,
    total: allUsers.length,
    search,
    setSearch,
    loading,
    error,
    refresh: fetchUsers,
    addStaticUser,
    deleteUser
  }
}
