import {
  Box,
  Link,
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter, FaMedium, FaDiscord} from 'react-icons/fa';
import { ReactNode } from 'react';
import { Logo } from './Logo'
import { Socials } from './Socials'

export const Footer = () => {
  return (
    <Box>
      <Box mt={50} py={10}>
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
        <Box mt={2}>
          <Socials twitter="https://twitter.com/oxcouncil" medium="#" discord="#"/>
        </Box>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          &copy; The OxCouncil. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

