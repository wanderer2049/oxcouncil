import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  useColorModeValue
} from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>    
      <Container maxW='980px' mt="20px" px="5">
        <Header />
      </Container>
      <main>{ children }</main>
      <Container 
        width="100%" 
        maxWidth="100%" 
        p={'15px'} 
        clipPath={'ellipse(72% 100% at 50% 100%)'} 
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      >
        <Container maxW={'980px'}>
          <Footer />
        </Container>
      </Container>
    </>
  )
}