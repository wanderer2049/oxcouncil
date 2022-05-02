import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }, 
  colors: {
    brand: {
      100: "#418AFF",
      300: "#66a1ff",
    },
    white: {
      100: "#ffffff",
    }
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Raleway, sans-serif',
  },
})

export default theme