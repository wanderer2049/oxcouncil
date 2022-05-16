import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { LinkIcon } from '@chakra-ui/icons';
import { HiArrowRight } from 'react-icons/hi';
import { GiMagicHat } from 'react-icons/gi';

interface Props {
  text: string,
  link: string,
  class?: string,
}

export const TwitterButton = () => {
  return (
    <Button
      as={'a'}
      flex={1}
      fontSize={'sm'}
      rounded={'full'}
      bg={'blue.400'}
      color={'white'}
      boxShadow={
        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
      }
      _hover={{
        bg: 'blue.500',
      }}
      _focus={{
        bg: 'blue.500',
      }} 
      leftIcon={<FaTwitter />} 
      href={'https://twitter.com/oxcouncil'}
    >
      Follow Us
    </Button>
  );
}

export const LinkButton = (props:Props) => {
  return (
    <Button 
      as={'a'}
      rounded={'full'} 
      px={6} 
      leftIcon={<LinkIcon />}
      href='{props.link}'
      className={props.class}
      >
        { props.text }
    </Button>
  );
}

export const BrandButton = (props:Props) => {
  return (
    <Button 
      as={'a'}
      rounded={7} 
      py={25} 
      fontWeight={'bold'}
      width={'200px'}
      fontFamily={'heading'}
      bg={'brand.100'}
      _hover={{
        bg: 'brand.300',
      }}
      color={'white'}
      rightIcon={<HiArrowRight />}
      href={props.link}
      zIndex={3}
      className={props.class}
      >
        {props.text}
    </Button>
  );
}

export const AltButton = (props:Props) => {
  return (
    <Button 
      as={'a'}
      rounded={7} 
      py={25} 
      fontWeight={"bold"}
      width={'200px'}
      fontFamily={'heading'}
      leftIcon={<GiMagicHat />}
      href={props.link}
      className={props.class}
    >
        {props.text}
    </Button>
  );
}