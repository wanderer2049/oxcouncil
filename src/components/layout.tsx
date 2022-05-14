import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
      <Head>
        <title>The oxCouncil - Seeing through the future of finance.</title>
        <meta property="og:title" content="The oxCouncil"/>
        <meta property="og:description" content="Seeing through the future of finance."/>
        <meta property="og:image" content="/public/assets/logo.svg"/>
        <meta property="og:image:width" content="200"/>
        <meta property="og:image:height" content="35"/>
      </Head>
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