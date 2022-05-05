import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Tag,
  useColorModeValue,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';
import { Socials } from '../components/socials';
import Member from '../lib/types/member';
import { ImMagicWand } from 'react-icons/im'

type Props = {
  member:Member,
}

export const MemberItem = ({ member }:Props) => {
  const textColor = useColorModeValue("gray.600", "white.900");
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
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
          src={ member.profile }
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
        <Heading fontSize={'2xl'} fontFamily={'heading'}>
          { member.name }
        </Heading>
        <Text textColor={ textColor } fontSize={'sm'} fontWeight={600} color={textColor} mb={4} bg={ bgColor } borderRadius={15} p={'10px'} my={'10px'}>
         { member.position }
        </Text>
        <Text
          textAlign={'center'}
          fontFamily={'body'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          my={5}
          minHeight={'50px'}
          >
          { member.bio }
        </Text>
        { member.twitter? <Socials twitter={ member.twitter } /> : <Socials /> }
      </Box>
    </Center>
  );
}

export const MemberList = () => {
  let members = [
    {
      name: "Achi",
      position: "Project Manager",
      profile: '/assets/member/achi.jpeg',
      bio: "Lorem ipsum dolor sit amet",
      twitter: "achimo26"
    }, 
    {
      name: "Bakintoast",
      position: "Managing Director",
      profile: '/assets/member/bakintoasti.jpeg',
      bio: "Lorem ipsum dolor sit amet",
      twitter: "bakintoasti"
    }, 
    {
      name: "Gabriel Fraga",
      position: "UX / Graphic Designer",
      profile: '/assets/member/gabrielfraga.jpeg',
      bio: "Flamengo. Chelsea. @BTLVid Designer.",
      twitter: "GabFoligno"
    }, 
    {
      name: "MrWhite",
      position: "Advisor",
      profile: '/assets/member/mrwhite.jpeg',
      bio: "Stop following me.",
      twitter: "mrwhite462"
    }, 
    {
      name: "OxJUSTICE",
      position: "Marketing Director",
      profile: '/assets/member/oxjustice.jpeg',
      bio: "I'm the man.",
      twitter: "@"
    }, 
    {
      name: "wanderer2049",
      position: "Front-end Developer",
      profile: '/assets/member/wanderer2049.jpeg',
      bio: "just a dev.",
      twitter: "wanderer2049"
    }, 
  ];
  
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
        {members.map((m, index) => (
         <MemberItem member={m} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}