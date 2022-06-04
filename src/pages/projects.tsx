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
import { SITE } from '../constants/site';
import { CONTENT } from '../constants/projects';
import { StandardHeading } from '../components/headings';

type Props = {
  allProjects: Project[]
}

const ProjectsPage = ({ allProjects }: Props) => {  
  return (
    <>
      <StandardHeading heading={CONTENT.HEADING} tagline={CONTENT.TAGLINE}></StandardHeading>
      <Container width={'100%'} maxWidth={'100%'} pb={5} borderRadius={30}>
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
  const allProjects = getAllPosts( SITE.PROJECT.DIR_NAME, [
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