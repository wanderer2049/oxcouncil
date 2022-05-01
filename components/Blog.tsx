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
  useBreakpointValue
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

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
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} key={tag}>
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
    <Flex mt="70">
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
          colorScheme="messenger"
          borderRadius="full"
          mr="5"
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt />
        </IconButton>
      </Box>
    </Flex>
    <Box my="12" bgColor="blackAlpha.500" borderRadius="30px" overflow="hidden">
      <Box
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
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
          marginTop={{ base: '3', sm: '0' }}
          pr="10">
          <BlogTags tags={['News']}/>
          <Heading marginTop="5">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Lorem Ipsum
            </Link>
          </Heading>
          <BlogAuthor name="oxcouncil" date={new Date('2021-05-01T19:01:27Z')} />
          <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </Text>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default ArticleList;