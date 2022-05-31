import {
  useColorMode,
  Image,
  Link
} from '@chakra-ui/react';
import { SITE } from '../constants/site';

interface Props {
  boxSize: string,
  height?: string,
}

export const Logo = (props:Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Link href='/'>
      <Image loading='eager' boxSize={props.boxSize} height={props.height?props.height:'auto'} objectFit={'contain'} src={colorMode === 'light'? SITE.LOGO.LIGHT : SITE.LOGO.DARK} alt={SITE.NAME} />
    </Link>
  );
}