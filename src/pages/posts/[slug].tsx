import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  HStack,
  Avatar,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';
import { BsCalendarWeek } from 'react-icons/bs';
import { NextSeo } from 'next-seo';
import DateFormatter from '../../lib/dateFormatter';
import DefaultLayout from '../../components/layout';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib/posts';
import Post from '../../types/post';
import { SITE } from '../../constants/site'

type Props = {
  post: Post
}

const PostPage = ({ post }: Props) => {
  const router = useRouter();
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const headingColor = useColorModeValue('gray.50','gray.50');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          images: [
            {
              url: post.coverImage,
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
            backgroundImage={`${post.coverImage}`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
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
                    { post.title }
                </Heading>
                <Breadcrumb color={'gray.50'} zIndex={10} pb={5}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href='/' _hover={{textDecoration: 'none'}}>Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={SITE.BLOG.PATH} _hover={{textDecoration: 'none'}} >Blog</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage isLastChild>
                    <BreadcrumbLink href='#' _hover={{textDecoration: 'none'}}>{post.title}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
                
              </Stack>
            </Box>
           <Stack
            textAlign={'left'}
            align={{base:'left', md:'center'}}
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
                <HStack ml={{base:'8px', md:'0px'}}>
                  <Avatar name={ post.author.name } src={ post.author.picture } size={'2xs'} />
                  <Text fontFamily={'heading'} fontWeight={'300'}>{ post.author.name }</Text> 
                </HStack>
                <HStack>
                  <Text fontFamily={'heading'} fontWeight={'300'} display={{base:'none', md:'inline-block'}}>&nbsp;-&nbsp;</Text>
                  <BsCalendarWeek />
                  <Text fontFamily={'heading'} fontWeight={'300'}><DateFormatter dateString={post.date} /></Text>
                </HStack>
              </Stack>
            <div className='post-content' dangerouslySetInnerHTML={{ __html: post.content }} />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

PostPage.getLayout = function getLayout(page: ReactElement) {
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

export default PostPage;

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug( SITE.BLOG.DIR_NAME, params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'coverImage',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts( SITE.BLOG.DIR_NAME, ['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  };
}