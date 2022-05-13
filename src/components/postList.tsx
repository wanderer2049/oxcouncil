import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Text,
  useColorModeValue,
  Container
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BrandButton } from '../components/buttons';
import PostPreview from './postPreview';
import Post from '../lib/types/post';

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  return (
    <>
      <Box 
        my={12}
        overflow={'hidden'}
      >
        {posts.map((post, index) => (
          <Box key={index}>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column', sm: 'row' }}
              justifyContent={'space-between'}
              minHeight={'420px'}
              mb={'50px'}
              bg={bgColor}
              borderRadius={15}
              overflow={'hidden'}
              key={index}
            >
              <PostPreview
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
                author={post.author}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default PostList;