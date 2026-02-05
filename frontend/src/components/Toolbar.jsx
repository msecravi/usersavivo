import React from 'react'
import { IconButton, Input, InputGroup, InputLeftElement, HStack, Tooltip, Button } from '@chakra-ui/react'
import { AddIcon, RepeatIcon, SearchIcon } from '@chakra-ui/icons'

export default function Toolbar({ search, onSearchChange, onRefresh, onAdd, loading }) {
  return (
    <HStack spacing={3} flexWrap="wrap">
      <InputGroup maxW={{ base: '100%', md: '420px' }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, company, role or country"
          bg="white"
        />
      </InputGroup>

      <HStack spacing={2}>
        <Tooltip label="Refresh users">
          <Button
            leftIcon={<RepeatIcon />}
            onClick={onRefresh}
            isLoading={loading}
            loadingText="Refreshing"
            variant="outline"
          >
            Refresh
          </Button>
        </Tooltip>

        <Tooltip label="Add a local user">
          <IconButton
            aria-label="Add user"
            icon={<AddIcon />}
            onClick={onAdd}
            colorScheme="teal"
          />
        </Tooltip>
      </HStack>
    </HStack>
  )
}
