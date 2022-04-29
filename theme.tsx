import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }, 
  colors: {
    brand: {
      100: "#418AFF",
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Raleway, sans-serif',
  },
})

export default theme