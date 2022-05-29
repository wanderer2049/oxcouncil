import "@fontsource/inter/900.css";
import "@fontsource/inter/500.css";
import "@fontsource/raleway/300.css";
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo'
import { SITE } from "../constants/site";
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
        titleTemplate={'%s'+ SITE.SEO.NAME_SEPERATOR + SITE.NAME}
        description={SITE.DESCRIPTION}
        canonical={SITE.URL}
        openGraph={{
          type:'website',
          url: SITE.URL,
          site_name: SITE.NAME,
          title: SITE.NAME,
          description: SITE.DESCRIPTION,
          images: [
            {
              url: SITE.SEO.OG_IMAGE,
              width: 1200,
              height: 628,
              alt: SITE.DESCRIPTION,
              type: 'image/jpeg',
            },
          ]
        }}
        twitter={{
          handle: SITE.SOCIALS.TWITTER,
          site: SITE.SOCIALS.TWITTER,
          cardType: 'summary_large_image',
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;