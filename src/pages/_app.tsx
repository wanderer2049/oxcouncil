import "@fontsource/inter/900.css";
import "@fontsource/inter/500.css";
import "@fontsource/raleway/300.css";
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/globals.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return (
     <ChakraProvider theme={theme}>
       {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;