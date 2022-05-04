import { ReactNode } from 'react';
import {
  useColorMode,
  Image,
  Link
} from '@chakra-ui/react';

interface Props {
  boxSize: string,
  height?: string,
}

export const Logo = (props:Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Link href="/">
      <Image loading="eager" boxSize={props.boxSize} height={props.height?props.height:"auto"} objectFit='contain' src={colorMode === 'light'? '/assets/logo-light.svg' :'/assets/logo.svg'} alt='OxCouncil' />
    </Link>
  )
}