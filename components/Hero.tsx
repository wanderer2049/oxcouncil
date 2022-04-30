import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
} from '@chakra-ui/react';
import { TwitterButton } from '../components/Buttons';

export const Hero = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 24 }}>
        <Heading
          fontWeight={900}
          fontSize={{ base: '4xl', sm: '5xl', md: '8xl' }}
          lineHeight={'110%'}>
          <Text as={'span'} color='brand.100'>
            ox
          </Text>
          <Text as={'span'}>
            council
          </Text>
        </Heading>
        <Text color={'white.500'} fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }} lineHeight={'110%'} maxW={'3xl'} fontWeight={300}>
          We are a volunteer-run organization seeing through the future of finance.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <TwitterButton />
        </Stack>
      </Stack>
    </Container>
  );
}
