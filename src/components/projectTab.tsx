import React from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Container,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Heading,
  HStack,
  Avatar,
  Link,
  Icon,
  Stack
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Project from '../types/project';
import { SITE } from '../constants/site';

type Props = {
  projects: Project[]
}

const ProjectTab = ({ projects }: Props) => {
  const tabHoverTextColor = useColorModeValue('blackAlpha.900', 'white');
  const tabSelectedBgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  const tabHoverBgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100');
  const tabPanelBgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100');

  return (
    <>
      <Box 
        my={8}
      >
        <Box>
          <Tabs orientation={'vertical'} isLazy defaultIndex={0} display={{'base':'block', 'md':'flex'}}>
            <TabList width={{'base':'100%', 'md':'70%'}} border={'none'} mr={{'base':0, 'md':10}} mb={{'base':5, 'md':10}}>
              <Box mb={10}>
                <Heading
                  fontWeight={900}
                  fontSize={{ base: '3xl', sm: '3xl', md: '4xl' }}
                  lineHeight={'110%'}
                  as={'h2'}
                >
                  <Text as={'span'} color='brand.100'>
                    Our&nbsp;
                  </Text>
                  <Text as={'span'}>
                    Projects
                  </Text>
                  <Text color={'white.500'} fontSize={{ base: '2xl'}} lineHeight={'110%'} maxW={'3xl'} fontWeight={300} py={'15px'} fontFamily={'body'}>
                    See our contributions on other projects.
                  </Text>
                </Heading>
              </Box>
              <Box
                overflowY={{'base':'scroll', 'md':'inherit'}}
                whiteSpace={'nowrap'}
                pl={{ 'base':'2px', 'md':'0px' }}
              >
              {projects.map((project, index) => (
                <Tab 
                  mb={5}
                  p={5} 
                  mr={{'base':'4', 'md':'0'}}
                  borderRadius={10} 
                  border="1px solid transparent"
                  _hover={{ color: tabHoverTextColor, bg: tabHoverBgColor }} 
                  _selected={{ color: tabHoverTextColor, bg: tabSelectedBgColor, borderColor: 'whiteAlpha.300' }}
                  key={index}
                  display={{'base':'inline-block', 'md':'block'}}
                >
                  <HStack height={'100px'}>
                    <Avatar name='Test' src={ project.logo } mr='5' /> 
                    <Stack textAlign={'left'} align={'left'}>
                      <Heading fontSize={'md'} fontWeight={900} >
                        { project.title }
                      </Heading>
                      <Text fontSize={'sm'}>
                        { project.tagline }
                      </Text>
                      <Link
                        fontFamily={'heading'}
                        fontSize={'sm'}
                        fontWeight={900}
                        color={'brand.100'}
                        lineHeight={'20px'}
                        _hover={{ textDecoration: 'none'}}
                        href={`${SITE.PROJECT.PATH}/${project.slug}`}
                        maxWidth={'100px'}
                      >
                        Learn More  <Icon as={ChevronRightIcon} w={4} h={4} />
                      </Link>
                    </Stack>
                  </HStack>
                </Tab>
              ))}
              </Box>
            </TabList>
            <TabPanels width={'100%'} ml={{'base':0, 'md':10}} border='1px solid' borderColor='whiteAlpha.100' borderRadius={10}  bg={tabPanelBgColor} overflow={'hidden'}>
              {projects.map((project, index) => (
                <TabPanel p={0} m={0} key={index}>
                  <Box
                    height={'250px'}
                    width={'100%'}
                    backgroundImage={project.featureImage}
                    backgroundSize={'cover'}
                  >
                  </Box>
                  <Container p={10}>
                    <Heading mb={5}
                      fontSize={{base: '2xl', md: '3xl'}}
                      fontFamily={'heading'}
                    >
                      <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }} pb={'5'} href={`${SITE.PROJECT.PATH}/${project.slug}`}>
                        { project.title }
                      </Link>
                    </Heading>
                    <Text color={'white.500'} fontSize={{ base: 'md'}} lineHeight={'150%'} maxW={'3xl'} fontWeight={300} fontFamily={'body'}>
                      { project.excerpt }
                    </Text>
                  </Container>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default ProjectTab;