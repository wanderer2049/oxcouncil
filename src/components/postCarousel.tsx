import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Spacer,
  IconButton
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import PostPreview from './postPreview';
import Post from '../lib/types/post';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type Props = {
  posts: Post[]
}

const PostCarousel = ({ posts }: Props) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const bgColor = useColorModeValue('white.100', 'gray.900');
  return (
    <>
      <Flex>
        <Heading as={'h1'}> 
          <Text as={'span'} color={'brand.100'}>
            Latest&nbsp;
          </Text>
          <Text as={'span'}>
            Blog
          </Text>
        </Heading>
        <Spacer />
        <Box>
          <IconButton
            aria-label={'left-arrow'}
            borderRadius={'full'}
            mr={3}
            zIndex={2}
            bg={useColorModeValue('white.100', 'gray.900')}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt />
          </IconButton>
          <IconButton
            aria-label={'right-arrow'}
            borderRadius={'full'}
            zIndex={2}
            bg={useColorModeValue('white.100', 'gray.900')}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt />
          </IconButton>
        </Box>
      </Flex>
      <Box my={12}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {posts.map((post, index) => (
            <Box key={index} borderRadius={'30px'}  overflow={'hidden'} bg={bgColor}>
              <Box
              display={'flex'}
              flexDirection={{ base: 'column', sm: 'row' }}
              justifyContent={'space-between'}
              minHeight={'420px'}
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
        </Slider>
      </Box>
    </>
  );
}

export default PostCarousel;