import "@fontsource/inter/900.css";
import "@fontsource/inter/500.css";
import "@fontsource/raleway/300.css";
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo'
import { returnPathAsSeoTitle } from '../lib/seo';
import theme from '../theme';
import '../styles/globals.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const { asPath, pathname } = useRouter();
  
  const getLayout = Component.getLayout ?? ((page) => page)
  const seoTitle = pageProps.seoTitle? pageProps.seTitle: returnPathAsSeoTitle(asPath)
  return (
     <ChakraProvider theme={theme}>
      <DefaultSeo
        title={`${seoTitle}`}
        titleTemplate='%s | The oxCouncil'
        description='Seeing through the future of finance. DAO Consultancy.'
        canonical='https://oxcouncil.com/'
        openGraph={{
          type:'website',
          url: 'https://oxcouncil.com/',
          site_name: 'The oxCouncil',
          title: 'The oxCouncil',
          description: 'Seeing through the future of finance. DAO Consultancy.',
          images: [
            {
              url: '/assets/logo-light.svg',
              width: 1200,
              height: 155,
              alt: 'The oxCouncil',
            },
          ]
        }}
        twitter={{
          handle: '@oxcouncil',
          site: '@oxcouncil',
          cardType: 'summary_large_image',
        }}
      />


       {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;