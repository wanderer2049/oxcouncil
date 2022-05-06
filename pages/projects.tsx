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

const Projects = ({ allPosts }: Props) => {  
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
              Work&nbsp;
            </Text>
            <Text as={'span'}>
              In Progress
            </Text>
            <Text color={'white.500'} fontSize={{ base: '2xl'}} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} textAlign={'center'} pt={'15px'} fontFamily={'body'}>
              Check back soon.
            </Text>
          </Heading>
        </Stack>
      </Container>
    </>
  );
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default Projects;
