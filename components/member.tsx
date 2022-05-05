import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';
import { TwitterButton, LinkButton } from '../components/buttons';
import { Socials } from '../components/socials';

interface Props {
  name: string,
  position: string,
  bio: string,
  image: string,
  twitter: string,
}

export const Member = (props:Props) => {
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
          src={ props.image }
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
          { props.name }
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          { props.position }
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          my={5}
          >
          { props.bio }
        </Text>
        { props.twitter? <Socials twitter={props.twitter} /> : <Socials /> }
      </Box>
    </Center>
  );
}

export const MemberList = () => {
  const topBg = useColorModeValue('gray.100', 'gray.700');
  const bottomBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box>
      <Stack textAlign={'center'} align={'center'}>
          <Heading as={'h1'} fontSize={'4xl'}>
            <Text as={'span'} color={'brand.100'} mr={2}>
              Join
            </Text>
            <Text as={'span'}>
              Our Growing Community
            </Text>
          </Heading>
        <Text color={'white.500'} fontSize={{ base: '2xl'}} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} textAlign={'center'} pt={'15px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </Text>
      </Stack>
      <SimpleGrid columns={{base: 1, sm: 1, md: 3}} mt={10} spacingX={'40px'} spacingY={'20px'} id="our-members">
        <Member
          name='Lorem ipsum'
          position='Lorem ipsum'
          bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
          image='../assets/team-sample.jpeg'
          twitter='https://twitter.com/#'
          />
        <Member
          name='Lorem ipsum'
          position='Lorem ipsum'
          bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
          image='../assets/team-sample.jpeg'
          twitter='https://twitter.com/#'
          />
        <Member
          name='Lorem ipsum'
          position='Lorem ipsum'
          bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
          image='../assets/team-sample.jpeg'
          twitter='https://twitter.com/#'
          />
      </SimpleGrid>
    </Box>
  );
}