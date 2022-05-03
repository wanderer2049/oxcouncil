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
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MemberList } from '../components/Member';
import { Footer } from '../components/Footer';
import PostList from '../components/PostList';
import { getAllPosts } from '../lib/posts';
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Home = ({ allPosts }: Props) => {  
  return (
    <>
      <Container maxW='980px' mt="20px">
        <Header />
      </Container>
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
      <Container width="100%" maxWidth="100%" py={'15px'} clipPath={'ellipse(72% 100% at 50% 100%)'} bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}>
        <Container maxW={'980px'}>
          <Footer />
        </Container>
      </Container>
    </>
  );
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