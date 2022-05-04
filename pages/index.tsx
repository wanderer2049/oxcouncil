import type { ReactElement } from 'react';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Container,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Layout from '../components/Layout'
import { Hero } from '../components/Hero';
import { MemberList } from '../components/Member';
import PostList from '../components/PostList';
import { getAllPosts } from '../lib/posts';
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Home = ({ allPosts }: Props) => {  
  return (
    <>
      <Hero />
      <Container bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} width="100%" maxWidth="100%" py={'70'} pt="100">
        <Container maxW={'980px'}>
          <PostList posts={allPosts} />
        </Container>
      </Container>
      <Container width="100%" maxWidth="100%" py={'70'}>
        <Container maxW={'980px'}>
          <MemberList />
        </Container>
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home

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