import type { ReactElement } from 'react';
import { ReactNode } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout'
import ProjectList from '../components/projectList';
import { getAllProjects } from '../lib/projects';
import Project from '../lib/types/project'

type Props = {
  allProjects: Project[]
}

const Projects = ({ allProjects }: Props) => {  
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
            lineHeight={'110%'}>
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

Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default Projects;

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
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