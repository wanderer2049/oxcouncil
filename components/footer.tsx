import {
  Box,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { FaTwitter, FaMedium, FaDiscord} from 'react-icons/fa';
import { ReactNode } from 'react';
import { Logo } from './logo';
import { Socials } from './socials';

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
          <Logo boxSize={'250px'} />
        </Flex>
        <Box mt={4}>
          <Socials twitter='oxcouncil' discord='#'/>
        </Box>
        <Text pt={6} fontSize={'md'} textAlign={'center'} textColor={useColorModeValue('gray.700', 'gray.500')}>
          &copy; The OxCouncil. All rights reserved.<br/>
        </Text>
        <Text fontSize={'sm'} textAlign={'center'} textColor={useColorModeValue('gray.500', 'gray.600')}>
          Built with ❤️ by wanderer2049. Logo design by Gabriel Fraga.
        </Text>
      </Box>
    </Box>
  );
}

