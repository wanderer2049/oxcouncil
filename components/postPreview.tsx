import {
  Box,
  Heading,
  Link,
  Avatar,
  Image,
  Text,
  Stack,
  HStack,
  Grid,
  GridItem,
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
import { BsCalendarWeek } from 'react-icons/bs'
import DateFormatter from '../components/dateFormatter'
import { BrandButton } from '../components/buttons'
import Author from '../types/author'
import theme from '../theme';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  author: Author
}

const PostPreview = ({
  title,
  date,
  slug,
  author,
  coverImage,
  excerpt,
}: Props) => {
  const textColor = useColorModeValue('gray.700', 'gray.200')
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
        <Heading marginTop="5" 
          fontSize={{'base': '2xl', 'md': '3xl'}}
          fontFamily={theme.fonts.heading}
          >
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            {title}
          </Link>
        </Heading>
        <Stack 
          spacing={3} 
          direction={{base:'column', md:'row'}} 
          mt='5' 
          alignItems={{base:'left', md:'center'}}
        >
          <HStack>
            <Avatar name={ author.name } src={ author.picture } size="xs" />
            <Text fontFamily={theme.fonts.heading} fontWeight='300'>{ author.name }</Text> 
          </HStack>
          <HStack>
            <Text fontFamily={theme.fonts.heading} fontWeight='300' display={{base:'none', md:'inline-block'}}>&nbsp;-&nbsp;</Text>
            <BsCalendarWeek />
            <Text fontFamily={theme.fonts.heading} fontWeight='300'><DateFormatter dateString={date} /></Text>
          </HStack> 
        </Stack>
        <Text
          as="p"
          my="5"
          color={textColor}
          fontSize="md"
        >
          {excerpt.split(" ").splice(0,30).join(" ")}...
        </Text>
        <BrandButton text="Read More" link={`/blog/${slug}`} />
      </Box>
    </>
  )
}

export default PostPreview