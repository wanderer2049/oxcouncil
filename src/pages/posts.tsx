import type { ReactElement } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout';
import PostList from '../components/postList';
import { getAllPosts } from '../lib/posts';
import Post from '../types/post';

type Props = {
  allPosts: Post[]
}

const PostsPage = ({ allPosts }: Props) => {  
  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: '50px', md: '90px' }}
          >
          <Heading
            fontWeight={900}
            fontSize={{ base: '3xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}
            as={'h1'}
            >
            <Text as={'span'} color='brand.100'>
              Latest&nbsp;
            </Text>
            <Text as={'span'}>
              Blog
            </Text>
          </Heading>
          <Text color={'white.500'} fontSize={{ base: '2xl'}} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} textAlign={'center'} pt={'15px'} fontFamily={'body'} as={'h2'} mt={'0 !important'} >
            Get the latest news from the oxCouncil team.
          </Text>
        </Stack>
      </Container>
      <Container width={'100%'} maxWidth={'100%'} pt={10} borderRadius={30}>
        <Container maxW={'980px'} px={{base:'3', md:'5'}}>
          <PostList posts={allPosts} />
        </Container>
      </Container>
    </>
  );
}

PostsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default PostsPage;

export const getStaticProps = async () => {
  const allPosts = getAllPosts('posts', [
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'coverImage',
    'content',
  ]);

  return {
    props: { allPosts },
  };
}