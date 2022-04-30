import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Logo } from './Logo'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box>
      <Box mt={30} py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo boxSize="250px"/>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 The OxCouncil. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}