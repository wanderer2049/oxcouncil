import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  HStack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { TwitterButton, LinkButton } from '../components/Buttons'

export const Team = () => {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            '/team-sample.jpeg'
          }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Lorem ipsum
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @Lorem ipsum
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </Text>

        <Box mt={8} alignItems="center">
          <LinkButton />
        </Box>
      </Box>
    </Center>
  )
}