import type { ReactElement, ReactNode } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import {
  Box,
  Flex,
  Container,
  Stack,
  SimpleGrid,
  Heading,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import DefaultLayout from '../../layouts/default'
import { BrandButton, AltButton } from '../../components/buttons';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib/blog'
import PostType from '../../types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const headingColor = useColorModeValue('gray.50','gray.50')
  
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Container 
        width="980px" 
        maxW="100%" 
        px="5" 
        mb="150"
        borderRadius="15"
        >
        <Box        
          backgroundColor={bgColor} 
          borderRadius={'15'}
        >
          <Box 
            backgroundImage={`${post.coverImage}`}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            minHeight={'200px'}
            mt={'30'}
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
            borderTopLeftRadius={'15'}
            borderTopRightRadius={'15'}
            >
              <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: "70px", md: "150px" }}
              >
                <Heading
                  fontWeight={900}
                  fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                  as='h1' 
                  lineHeight={'110%'}
                  zIndex={'10'}
                  color={headingColor}
                  >
                    { post.title }
                </Heading>
              </Stack>
            </Box>
           <Stack
            textAlign={'left'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: "50px", md: "50px" }}
            px={{ base: "30px", md: "50px" }}
            color={'white.500'} 
          >
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </Stack>
        </Box>
      </Container>
    </>
  )
}

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export default Post

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}