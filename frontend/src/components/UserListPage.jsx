import React from 'react'
import { Alert, AlertIcon, Box, Card, CardBody, Divider, HStack, Spinner, Text } from '@chakra-ui/react'
import { useUsers } from '../hooks/useUsers.js'
import Toolbar from './Toolbar.jsx'
import UserTable from './UserTable.jsx'

export default function UserListPage() {
  const { users, search, setSearch, loading, error, refresh, addStaticUser, deleteUser } = useUsers()

  return (
    <Card borderRadius="2xl" boxShadow="lg">
      <CardBody>
        <Toolbar
          search={search}
          onSearchChange={setSearch}
          onRefresh={refresh}
          onAdd={addStaticUser}
          loading={loading}
        />
        <Divider my={4} />

        {error ? (
          <Alert status="error" borderRadius="xl">
            <AlertIcon />
            {error}
          </Alert>
        ) : null}

        <Box mt={4}>
          <HStack justify="space-between" mb={3}>
            {loading ? (
              <HStack spacing={2} color="gray.600">
                <Spinner size="sm" />
                <Text fontSize="sm">Loading...</Text>
              </HStack>
            ) : null}
          </HStack>
          <UserTable users={users} onDelete={deleteUser} />
        </Box>
      </CardBody>
    </Card>
  )
}
