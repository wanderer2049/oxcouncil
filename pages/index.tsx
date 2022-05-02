import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Container,
  SimpleGrid
} from '@chakra-ui/react';
import { Header } from '../components/Header'
import { Header2 } from '../components/Header2'
import { Hero } from '../components/Hero'
import { Team } from '../components/Team'
import { Footer } from '../components/Footer'
import { ArticleList } from '../components/Blog'

export default function Home() {
  return (
    <>
      <Container maxW='980px' mt="20px">
        <Header />
        <Hero />
        <SimpleGrid columns={{base: 1, sm: 1, md: 3}} spacingX='40px' spacingY='20px'>
          <Team />
          <Team />
          <Team />
        </SimpleGrid>
        <ArticleList />
        <Footer />
      </Container>
    </>
  );
}