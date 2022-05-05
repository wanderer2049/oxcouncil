import {
  Stack,
  useColorModeValue,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter, FaMedium, FaDiscord} from 'react-icons/fa';
import { ReactNode } from 'react';

interface Props {
  twitter?: string,
  medium?: string,
  discord?: string
}

const SocialButton = ({
  children,
  label,
  href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Socials = (props:Props) => {
  return (
    <Stack direction={'row'} spacing={3} justify={'center'}>
      {
        props.twitter? <SocialButton label={'Twitter'} href={props.twitter}><FaTwitter /></SocialButton> : ""
      }
      
      {
        props.medium?  <SocialButton label={'Medium'} href={props.medium}><FaMedium /></SocialButton> : ""
      }

      {
        props.discord?  <SocialButton label={'Discord'} href={props.discord}><FaDiscord /></SocialButton> : ""
      }
    </Stack>
  );
}

