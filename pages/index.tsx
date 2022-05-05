import type { ReactElement } from 'react';
import { ReactNode } from 'react';
import {
  Container,
  useColorModeValue
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout'
import { Hero } from '../components/hero';
import { MemberList } from '../components/members';
import PostCarousel from '../components/postCarousel';
import { getAllPosts } from '../lib/blog';
import Post from '../lib/types/post'

type Props = {
  allPosts: Post[]
}

const Home = ({ allPosts }: Props) => {
  const posts = allPosts
  return (
    <>
      <Hero />
      <Container bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} width={'100%'} maxWidth={'100%'} py={70} pt={100} >
        <Container maxW={'980px'}>
          <PostCarousel posts={posts} />
          </Container>
      </Container>
      <Container width={'100%'} maxWidth={'100%'} py={70} id={'members'}>
        <Container maxW={'980px'}>
          <MemberList />
        </Container>
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default Home;

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
  };
}