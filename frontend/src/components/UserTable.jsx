import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Badge,
  Text
} from '@chakra-ui/react'

function getName(u) {
  const first = u?.firstName || ''
  const last = u?.lastName || ''
  return `${first} ${last}`.trim() || '—'
}

export default function UserTable({ users, onDelete }) {
  return (
    <TableContainer borderRadius="xl" overflow="hidden" borderWidth="1px" borderColor="gray.100">
      <Table variant="simple" size={{ base: 'sm', md: 'md' }}>
        <Thead bg="gray.50">
          <Tr>
            <Th>Name</Th>
            <Th>Company</Th>
            <Th>Role</Th>
            <Th>Country</Th>
            <Th textAlign="right">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.length === 0 ? (
            <Tr>
              <Td colSpan={5} py={10} textAlign="center">
                <Text color="gray.500">No users found.</Text>
              </Td>
            </Tr>
          ) : null}

          {users.map((u) => (
            <Tr key={u.id} _hover={{ bg: 'gray.50' }}>
              <Td fontWeight="semibold">{getName(u)}</Td>
              <Td>{u?.company?.name || '—'}</Td>
              <Td>
                {u?.company?.title ? (
                  <Badge colorScheme="purple" variant="subtle">{u.company.title}</Badge>
                ) : (
                  '—'
                )}
              </Td>
              <Td>{u?.address?.country || '—'}</Td>
              <Td textAlign="right">
                <Button size="sm" colorScheme="red" variant="outline" onClick={() => onDelete(u.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
