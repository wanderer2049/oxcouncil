import "@fontsource/inter/900.css";
import "@fontsource/inter/500.css";
import "@fontsource/raleway/300.css";
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_TWITTER, SITE_OG_IMAGE, SITE_NAME_SEPRATOR } from "../constants/settings";
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
  const getLayout = Component.getLayout ?? ((page) => page)
  
  const { asPath, pathname } = useRouter();
  const seoTitle = returnPathAsSeoTitle(asPath)

  return (
     <ChakraProvider theme={theme}>
      <DefaultSeo
        title={`${seoTitle}`}
        titleTemplate={'%s'+ SITE_NAME_SEPRATOR + SITE_NAME}
        description={SITE_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          type:'website',
          url: SITE_URL,
          site_name: SITE_NAME,
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          images: [
            {
              url: SITE_OG_IMAGE,
              width: 1200,
              height: 628,
              alt: SITE_DESCRIPTION,
              type: 'image/jpeg',
            },
          ]
        }}
        twitter={{
          handle: SITE_TWITTER,
          site: SITE_TWITTER,
          cardType: 'summary_large_image',
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;