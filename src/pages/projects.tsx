import type { ReactElement } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout';
import ProjectList from '../components/projectList';
import { getAllPosts } from '../lib/posts';
import Project from '../types/project';

type Props = {
  allProjects: Project[]
}

const ProjectsPage = ({ allProjects }: Props) => {  
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
              Our&nbsp;
            </Text>
            <Text as={'span'}>
              Projects
            </Text>
            <Text color={'white.500'} fontSize={{ base: '2xl'}} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} textAlign={'center'} pt={'15px'} fontFamily={'body'}>
              See our contributions on other projects.
            </Text>
          </Heading>
        </Stack>
      </Container>
      <Container width={'100%'} maxWidth={'100%'} pt={10} pb={5} borderRadius={30}>
        <Container maxW={'980px'} px={{base:'3', md:'5'}}>
          <ProjectList projects={allProjects} />
        </Container>
      </Container>
    </>
  );
}

ProjectsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default ProjectsPage;

export const getStaticProps = async () => {
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
    props: { allProjects },
  };
}