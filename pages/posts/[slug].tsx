import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import {
  Box,
  Flex,
  Container,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib/posts'
import PostType from '../../types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
      <Container>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
            {post.title}
            {post.title}
            {post.coverImage}
            {post.date}
            {post.author}
            {post.content}
          </>
        )}
      </Container>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

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