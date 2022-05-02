import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
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
  Icon,
  Text,
  Collapse
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
import { Socials } from './Socials'
import theme from '../theme';

const Links = ['Members', 'Blog'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={useColorModeValue("black.900", "white.900")}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue("gray.500", "gray.400")
    }}
    href={'#'}
    fontFamily={theme.fonts.heading}
    fontWeight={'900'}
    >
    {children}
  </Link>
);

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} p={{ base: '15px 15px', md: '15px 30px' }} rounded={'lg'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Logo boxSize='200px'/>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box display={{ base: "none", md: "flex" }}>
              <Socials twitter="https://twitter.com/oxcouncil" medium="#" discord="#"/>
            </Box>
            <Button onClick={toggleColorMode} ml={7} rounded={'full'} width="20px"> 
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: 3 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                aria-label={'Toggle Navigation'}
              />
            </Flex>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <VStack
            as={'nav'}
            spacing={4}
            display={{ base: 'flex', md: 'none' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Socials twitter="https://twitter.com/oxcouncil" medium="#" discord="#"/>
            </VStack>
        </Collapse>  
      </Box>
    </>
  );
}