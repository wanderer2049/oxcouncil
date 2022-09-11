import {
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';
import { BrandButton, AltButton } from '../components/buttons';
import { SITE } from '../constants/site';

export const Hero = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: '70px', md: '150px' }}
        >
        <Heading
          fontWeight={900}
          fontSize={{ base: '4xl', sm: '5xl', md: '8xl' }}
          lineHeight={'110%'}
          as={'h1'}
          >
          <Text as={'span'} color='brand.100'>
            ox
          </Text>
          <Text as={'span'}>
            Council
          </Text>
        </Heading>
        <Text color={'white.500'} fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} as={'h2'}>
          Connecting the dots between capital and technology.
        </Text>
        <Stack spacing={6} direction={{base:'column', md:'row'}} pt='30px'>
          <BrandButton text='Our Projects' link={SITE.PROJECT.PATH} />
          <AltButton text='Our Members' link={SITE.MEMBER.PATH} />
        </Stack>
      </Stack>
    </Container>
  );
}
