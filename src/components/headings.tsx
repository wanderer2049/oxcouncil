import {
  Stack,
  Heading, 
  Text, 
  Container
} from '@chakra-ui/react';

interface Props {
  heading: string,
  tagline: string,
  marginDisabled?: boolean
}

export const StandardHeading = (props:Props) => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: props.marginDisabled? '0px': '50px', md: props.marginDisabled? '0px': '90px' }}
      >
        <Heading
          fontWeight={900}
          fontSize={{ base: '3xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          as={'h1'}
        >
          <Text as={'span'} color='brand.100'>
            { props.heading.split(" ")[0] }&nbsp;
          </Text>
          <Text as={'span'}>
            { props.heading.split(" ").slice(1).join(" ")  }
          </Text>
          <Text color={'white.500'} fontSize={{ base: '2xl'}} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} textAlign={'center'} pt={'15px'} fontFamily={'body'}>
            { props.tagline }
          </Text>
        </Heading>
      </Stack>
    </Container>
  );
}