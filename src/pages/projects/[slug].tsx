import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import DefaultLayout from '../../components/layout';
import { NextSeo } from 'next-seo';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib/posts';
import Project from '../../types/project';
import { SITE } from '../../constants/site'

type Props = {
  project: Project
  moreProjects: Project[]
  preview?: boolean
}

const ProjectPage = ({ project }: Props) => {
  const router = useRouter();
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const headingColor = useColorModeValue('gray.50','gray.50');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
    <NextSeo
        title={project.title}
        description={project.tagline}
        openGraph={{
          images: [
            {
              url: project.featureImage,
            }
          ],
        }}
      />
      <Container 
        width={'980px'}
        maxW={'100%'}
        px={5}
        mb={150}
        borderRadius={15}
        >
        <Box        
          backgroundColor={bgColor} 
          borderRadius={15}
        >
          <Box 
            backgroundImage={`${project.featureImage}`}
            backgroundSize={'cover'}
            backgroundPosition={'top'}
            minHeight={'200px'}
            mt={30}
            position={'relative'}
            overflow={'hidden'}
            _before={{
              content: `""`,
              position: "absolute",
              width: "100%",
              height: "100%",
              bg: "gray.900",
              opacity: "0.3",
              zIndex: '1'
            }}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            >
              <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 2, md: 3 }}
                py={{ base: '70px', md: '150px' }}
              >
                <Heading
                  fontWeight={900}
                  fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                  lineHeight={'110%'}
                  zIndex={10}
                  color={headingColor}
                  as={'h1'}
                  >
                  { project.title }
                </Heading>
                <Breadcrumb color={'gray.50'} zIndex={10} pb={5}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href='/' _hover={{textDecoration: 'none'}}>Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={SITE.PROJECT.PATH} _hover={{textDecoration: 'none'}} >Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage isLastChild>
                    <BreadcrumbLink href='#' _hover={{textDecoration: 'none'}}>{project.title}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
                
              </Stack>
            </Box>
           <Stack
            textAlign={'left'}
            align={{base:'left', md:'left'}}
            spacing={{ base: 8, md: 10 }}
            py={{ base: "50px", md: "50px" }}
            px={{ base: "30px", md: "50px" }}
            color={textColor} 
          >
             <Stack 
                direction={{base:'column', md:'row'}} 
                alignItems={{base:'left', md:'left'}}
                zIndex={12}
                ml={{base:'-8px', md:'0px'}}
              >
                <Text fontFamily={'heading'} fontWeight={'300'} as={'h2'}>{project.tagline}</Text>
              </Stack>
            <div className='project-content' dangerouslySetInnerHTML={{ __html: project.content }} />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

type Params = {
  params: {
    slug: string
  }
}

export default ProjectPage;

export async function getStaticProps({ params }: Params) {
  const project = getPostBySlug( SITE.PROJECT.DIR_NAME, params.slug, [
    'title',
    'tagline',
    'date',
    'slug',
    'logo',
    'featureImage',
    'content'
  ])
  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllPosts( SITE.PROJECT.DIR_NAME , ['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  };
}