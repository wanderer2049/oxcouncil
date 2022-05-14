import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import {
  Container,
  useColorModeValue
} from '@chakra-ui/react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

type Props = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>    
       <NextSeo
        title='The oxCouncil'
        description='We are a volunteer-run organization seeing through the future of finance.'
        canonical='https://oxcouncil.com/'
        openGraph={{
          url: 'https://oxcouncil.com/',
          title: 'The oxCouncil',
          description: 'We are a volunteer-run organization seeing through the future of finance.',
          images: [
            {
              url: '/assets/logo.svg',
              width: 200,
              height: 35,
              alt: 'The oxCouncil',
            },
          ],
          site_name: 'The oxCouncil'
        }}
        twitter={{
          handle: '@oxcouncil',
          site: '@oxcouncil',
          cardType: 'summary_large_image',
        }}
      />

      <Container maxW={'980px'} mt={'20px'} px={5} >
        <Header />
      </Container>
      <main>{ children }</main>
      <Container 
        width={'100%'} 
        maxWidth={'100%'}
        p={'15px'} 
        clipPath={'ellipse(72% 100% at 50% 100%)'} 
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      >
        <Container maxW={'980px'}>
          <Footer />
        </Container>
      </Container>
    </>
  );
}