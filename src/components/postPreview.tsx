import {
  Box,
  Heading,
  Link,
  Avatar,
  Text,
  Stack,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { BsCalendarWeek } from 'react-icons/bs';
import DateFormatter from '../lib/dateFormatter';
import { BrandButton } from '../components/buttons';
import Author from '../types/author';

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
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  return (
    <>
      <Box
        display={'flex'}
        flex={1}
        marginRight={{ base: '0', md: '5' }}
        position={'relative'}
        alignItems={'center'}
        backgroundImage={`${coverImage}`}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        minHeight={'250px'}
        >
      </Box>
      <Box
        display={'flex'}
        flex={1}
        flexDirection={'column'}
        justifyContent={'center'}
        p={{ base: '30px' }}
        >
        <Heading marginTop={5}
          fontSize={{base: '2xl', md: '3xl'}}
          fontFamily={'heading'}
          >
          <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }} pb={'5'} href={`/posts/${slug}`}>
            {title}
          </Link>
        </Heading>
        <Stack 
          direction={{base:'column', md:'row'}} 
          alignItems={{base:'left', md:'left'}}
          zIndex={12}
          ml={{base:'-8px', md:'0px'}}
          mt={5}
        >
          <HStack ml={{base:'8px', md:'0px'}} textColor={ textColor } fontSize={'sm'} fontWeight={600} >
            <Avatar name={ author.name } src={ author.picture } size={'2xs'} />
            <Text fontFamily={'heading'} fontWeight={300}>{ author.name }</Text> 
          </HStack>
          <HStack textColor={ textColor } fontSize={'sm'} fontWeight={600}>
            <Text fontFamily={'heading'} fontWeight={300} display={{base:'none', md:'inline-block'}}>&nbsp;-&nbsp;</Text>
            <BsCalendarWeek />
            <Text fontFamily={'heading'} fontWeight={300}><DateFormatter dateString={date} /></Text>
          </HStack> 
        </Stack>
        <Text
          as={'p'}
          my={5}
          color={textColor}
          fontSize={'md'}
        >
          {excerpt.split(" ").splice(0,30).join(" ")}...
        </Text>        
        <BrandButton text='Read More' link={`/posts/${slug}`} />
      </Box>
    </>
  );
}

export default PostPreview;