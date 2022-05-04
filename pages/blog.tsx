import type { ReactElement } from 'react';
import { ReactNode } from 'react';
import {
  Container,
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
      <Container 
        width="100%" 
        maxWidth="100%" 
        py={'70'} 
        pt="100">
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
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}