import {
  Link,
  Stack,
  Tag,
  useColorModeValue,
  useColorMode,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter, FaMedium, FaDiscord} from 'react-icons/fa';
import { ReactNode } from 'react';

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

export const Socials = () => {
  return (
    <Stack direction={'row'} spacing={3} justify="center">
      <SocialButton label={'Twitter'} href={'https://twitter.com/oxcouncil'}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={'Discord'} href={'#'}>
        <FaDiscord />
      </SocialButton>
      <SocialButton label={'Medium'} href={'#'}>
        <FaMedium />
      </SocialButton>
    </Stack>
  )
}

