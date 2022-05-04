import type { ReactElement } from 'react';
import { ReactNode } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import DefaultLayout from '../layouts/default'
import PostList from '../components/postList';
import { getAllPosts } from '../lib/blog';
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Blog = ({ allPosts }: Props) => {  
  return (
    <>
      <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: "50px", md: "90px" }}
        >
        <Heading
          fontWeight={900}
          fontSize={{ base: '4xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          <Text as={'span'} color='brand.100'>
            Latest&nbsp;
          </Text>
          <Text as={'span'}>
            Blog
          </Text>
        </Heading>
      </Stack>
    </Container>
      <Container 
        width="100%" 
        maxWidth="100%" 
        pt="10"
        borderRadius="30"
        >
        <Container maxW={'980px'}>
          <PostList posts={allPosts} />
        </Container>
      </Container>
    </>
  );
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}