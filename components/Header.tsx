import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon, 
  SunIcon, 
  AddIcon
} from '@chakra-ui/icons';

import { Logo } from './Logo'
import { TwitterButton } from './Buttons'

const Links = ['About Us', 'Members'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} p={"10px 30px"} rounded={'lg'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Logo boxSize='200px'/>
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} mr={5} rounded={'full'} width="20px"> 
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <TwitterButton />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}