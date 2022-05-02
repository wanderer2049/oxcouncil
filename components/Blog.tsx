import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
  Spacer,
  IconButton, 
  useBreakpointValue,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BrandButton } from '../components/Buttons'

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const BlogTags: React.FC<IBlogTags> = (props) => {
  const bg = useColorModeValue('gray.300', 'gray.700');
  const color = useColorModeValue('black.100', 'black.100');
                                   
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} key={tag} bgColor={bg} color={color}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="5" marginBottom="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="30px"
        src="../assets/team-sample.jpeg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text fontSize="xs">{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

export const ArticleList = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);
  
  return (
    <>
    <Flex>
      <Heading as="h1"> 
        <Text as={'span'} color='brand.100' mr="2">
          Latest
        </Text>
        <Text as={'span'}>
          Blog
        </Text>
      </Heading>
      <Spacer />
      <Box>
        <IconButton
          aria-label="left-arrow"
          borderRadius="full"
          mr="5"
          zIndex={2}
          bg={useColorModeValue('white.100', 'gray.900')}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          zIndex={2}
          bg={useColorModeValue('white.100', 'gray.900')}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt />
        </IconButton>
      </Box>
    </Flex>
    <Box my="12" borderRadius="30px" overflow="hidden" bg={useColorModeValue('white.100', 'gray.900')}>
      <Box
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        >
        <Box
          display="flex"
          flex="1"
          marginRight={{ base: '0', md: '5' }}
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '100%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '0%' }}
            marginTop="0">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                src={
                  '../assets/team-sample.jpeg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          p={{ base: '30px' }}>
          <BlogTags tags={['News']}/>
          <Heading marginTop="5">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Lorem Ipsum
            </Link>
          </Heading>
          <Text
            as="p"
            my="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </Text>
          <BrandButton text="Read More" link="#" />
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default ArticleList;