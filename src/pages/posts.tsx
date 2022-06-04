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
import { SITE } from '../constants/site';
import { CONTENT } from '../constants/posts';
import { StandardHeading } from '../components/headings';

type Props = {
  allPosts: Post[]
}

const PostsPage = ({ allPosts }: Props) => {  
  return (
    <>
      <StandardHeading heading={CONTENT.HEADING} tagline={CONTENT.TAGLINE}></StandardHeading>
      <Container width={'100%'} maxWidth={'100%'} borderRadius={30}>
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
  const allPosts = getAllPosts( SITE.BLOG.DIR_NAME, [
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