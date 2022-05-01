import { ReactNode } from 'react';
import { Link, Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { LinkIcon } from '@chakra-ui/icons';

interface Props {
  text: string,
  link: string,
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
  )
}

export const LinkButton = (props:Props) => {
  return (
    <Button 
      as={'a'}
      rounded={'full'} 
      px={6} 
      leftIcon={<LinkIcon />}
      href='{props.link}'>
        {props.text}
    </Button>
  )
}