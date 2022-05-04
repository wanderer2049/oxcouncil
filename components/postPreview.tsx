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
import { BrandButton } from '../components/buttons'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  const bgColor = useColorModeValue('gray.700', 'gray.200')
  return (
    <>
      <Box
        display="flex"
        flex="1"
        marginRight={{ base: '0', md: '5' }}
        position="relative"
        alignItems="center"
        backgroundImage={`${coverImage}`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        minHeight={'250px'}
        >
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        p={{ base: '30px' }}>
        <Heading marginTop="5" fontSize={{'base': '25px', 'md': '25px'}}>
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            {title}
          </Link>
        </Heading>
        <Text
          as="p"
          my="5"
          color={bgColor}
          fontSize="md">
          {excerpt.split(" ").splice(0,15).join(" ")}...
        </Text>
        <BrandButton text="Read More" link={`/blog/${slug}`} />
      </Box>
    </>
  )
}

export default PostPreview