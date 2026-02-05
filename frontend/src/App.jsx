import React from 'react'
import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import UserListPage from './components/UserListPage.jsx'

export default function App() {
  return (
    <Box minH="100vh" py={{ base: 8, md: 12 }}>
      <Container maxW="6xl">
        <VStack align="stretch" spacing={6}>
          <Box>
            <Heading size="lg">Users</Heading>
          </Box>
          <UserListPage />
        </VStack>
      </Container>
    </Box>
  )
}
