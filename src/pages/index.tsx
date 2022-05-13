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
import { getAllPosts } from '../lib/posts';
import Post from '../types/post';
import Project from '../types/project';

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
          <Stack textAlign={'center'} align={'center'}>
            <Heading as={'h1'} fontSize={'4xl'}>
              <Text as={'span'} color={'brand.100'} mr={2}>
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
          <Box my={10}>
            <MemberCarousel role={'core'} />
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
  const allPosts = getAllPosts('posts', [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  const allProjects = getAllPosts('projects', [
    'title',
    'tagline',
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