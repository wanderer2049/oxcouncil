import {
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  Button,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Collapse,
  Box
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon, 
  SunIcon, 
} from '@chakra-ui/icons';
import { Logo } from './logo';
import { Socials } from './socials';

interface NavItem {
  label: string;
  href: string;
}

const Links: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Members',
    href: '/members'
  },
  {
    label: 'Blog',
    href: '/posts'
  },
];

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const linkColor = useColorModeValue("black.900", "white.900");
  const linkHoverColor = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <Box bg={bgColor} p={{ base: '15px 15px', md: '15px 30px' }} rounded={'lg'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Logo boxSize={'200px'} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor
                  }}
                  href={link.href}
                  fontFamily={'heading'}
                  fontWeight={900}
                  key={index}
                  >
                  {link.label}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box display={{ base: 'none', md: 'flex' }}>
              <Socials twitter='oxcouncil' discord='#'/>
            </Box>
            <Button onClick={toggleColorMode} ml={7} rounded={'full'} width={'20px'}> 
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
              {Links.map((link, index) => (
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor
                  }}
                  href={link.href}
                  fontFamily={'heading'}
                  fontWeight={900}
                  key={index}
                  >
                  {link.label}
                </Link>
              ))}
              <Socials twitter='https://twitter.com/oxcouncil' discord='#' />
            </VStack>
        </Collapse>  
      </Box>
    </>
  );
}