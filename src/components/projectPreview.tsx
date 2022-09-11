import {
  Box,
  Heading,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { BrandButton } from '../components/buttons';
import { SITE } from '../constants/site';

type Props = {
  title: string
  tagline: string
  date: string
  logo: string
  featureImage: string
  slug: string,
  content: string
}

const ProjectPreview = ({
  title,
  tagline,
  date,
  logo,
  slug,
  featureImage,
  content,
}: Props) => {
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  return (
    <>
      <Box
        height={'250px'}
        width={'100%'}
        backgroundImage={`${featureImage}`}
        backgroundSize={'cover'}
        className={'project-featured-image'}
      >
        
      </Box>
      <Box
        display={'flex'}
        flex={1}
        flexDirection={'column'}
        justifyContent={'center'}
        p={{ base: '30px' }}
        >
        <Heading
          fontSize={{base: '2xl', md: '3xl'}}
          fontFamily={'heading'}
        >
          <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }} pb={'5'} href={`${SITE.PROJECT.PATH}/${slug}`} className={'project-title'}>
            {title}
          </Link>
        </Heading>
        <Text
          as={'p'}
          my={5}
          color={textColor}
          fontSize={'20'}
          className={'project-tagline'}
        >
          {tagline}
        </Text>        
        <BrandButton text='Learn More' link={`${SITE.PROJECT.PATH}/${slug}`} class={'project-button'} />
      </Box>
    </>
  );
}

export default ProjectPreview;