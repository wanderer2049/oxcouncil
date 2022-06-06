import type { ReactElement } from 'react';
import React from 'react';
import {
  Heading,
  Stack,
  Box,
  Text,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout';
import { Hero } from '../components/hero';
import { MemberCarousel } from '../components/members';
import ProjectTab from '../components/projectTab';
import PostCarousel from '../components/postCarousel';
import { StandardHeading } from '../components/headings';
import { getAllPosts } from '../lib/posts';
import Post from '../types/post';
import Project from '../types/project';
import { SITE } from '../constants/site';
import { CONTENT as PROJECT_CONTENT } from '../constants/projects';
import { CONTENT as MEMBER_CONTENT } from '../constants/members';

type Props = {
  allPosts: Post[]
  allProjects: Project[]
}

const HomePage = ({ allPosts, allProjects }: Props) => {
  const posts = allPosts;
  const projects = allProjects;

  return (
    <>
      <Hero />
      <Container width={'100%'} maxWidth={'100%'} py={100} bgColor={useColorModeValue('blackAlpha.300','blackAlpha.300')}>
        <Container maxW={'980px'}>
          <ProjectTab projects={projects} />
        </Container>
      </Container>
      <Container bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} width={'100%'} maxWidth={'100%'} py={70} pt={100}>
        <Container maxW={'980px'}>
          <PostCarousel posts={posts} />
        </Container>
      </Container>
      <Container width={'100%'} maxWidth={'100%'} py={70} id={'members'}>
        <Container maxW={'980px'}>
          <StandardHeading heading={MEMBER_CONTENT.HEADING} tagline={MEMBER_CONTENT.TAGLINE} marginDisabled={true} ></StandardHeading>
          <Box my={10}>
            <MemberCarousel roles={['famiglia', 'underboss']} />
          </Box>
        </Container>
      </Container>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const allPosts = getAllPosts( SITE.BLOG.DIR_NAME , [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  const allProjects = getAllPosts( SITE.PROJECT.DIR_NAME, [
    'title',
    'tagline',
    'excerpt',
    'date',
    'slug',
    'logo',
    'featureImage',
    'content'
  ]);

  return {
    props: { allPosts, allProjects },
  };
}