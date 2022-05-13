import type { ReactElement } from 'react';
import { ReactNode } from 'react';
import {
  Container,
  Stack,
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout'
import PostList from '../components/postList';
import { getAllPosts } from '../lib/blog';
import Post from '../lib/types/post'
import { MemberList } from '../components/members';

type Props = {
  allPosts: Post[]
}

const Members = ({ allPosts }: Props) => {  
  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: '50px', md: '90px' }}
          >
          <Heading
            fontWeight={900}
            fontSize={{ base: '3xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}>
            <Text as={'span'} color='brand.100'>
              Join&nbsp;
            </Text>
            <Text as={'span'}>
              Our Vibrant Community
            </Text>
            <Text color={'white.500'} fontSize={{ base: '2xl'}} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} textAlign={'center'} pt={'15px'} fontFamily={'body'}>
              Come and join us today, what say you?
            </Text>
          </Heading>
        </Stack>
      </Container>
      <Container width={'100%'} maxWidth={'100%'} borderRadius={30} mb={50}> 
        <Container maxW={'980px'} px={{base:'3', md:'5'}} textAlign={'center'} >
            <Heading
            fontWeight={900}
            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
            lineHeight={'110%'}>
              <Text as={'span'} color='brand.100'>
                Core&nbsp;
              </Text>
              <Text as={'span'}>
                Members
              </Text>
            </Heading>
            <MemberList role={'core'} />

            <Heading
            fontWeight={900}
            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
            lineHeight={'110%'}
            mt={100}  
            >
              <Text as={'span'} color='brand.100'>
                Valued&nbsp;
              </Text>
              <Text as={'span'}>
                Contributors
              </Text>
            </Heading>
            <MemberList role={'contributor'} />
        </Container>
      </Container>
    </>
  );
}

Members.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default Members;
