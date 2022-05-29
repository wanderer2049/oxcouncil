import {
  Heading,
  Box,
  Center,
  Text,
  useColorModeValue,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';
import { Socials } from '../components/socials';
import Member from '../types/member';
import React, { Component } from "react";
import Slider from "react-slick";

let members = [
  {
    name: "Bakintoast",
    position: "Founder/Managing Director",
    profile: '/assets/members/bakintoasti.jpeg',
    bio: "Lorem ipsum dolor sit amet",
    twitter: "bakintoasti",
    role: 'famiglia',
    featured: true
  }, 
  {
    name: "Achi",
    position: "Co-founder/Assistant Director",
    profile: '/assets/members/achi.jpeg',
    bio: "Lorem ipsum dolor sit amet",
    twitter: "achimo26",
    role: 'famiglia',
    featured: true
  }, 
  {
    name: "Gabriel Fraga",
    position: "Co-founder/UX&Design",
    profile: '/assets/members/gabrielfraga.jpeg',
    bio: "Flamengo. Chelsea. @BTLVid Designer.",
    twitter: "@",
    role: 'famiglia',
    featured: true
  }, 
  {
    name: "Baня Bолковa",
    position: "Smart Contract Research",
    profile: '/assets/members/baняbолковa.jpeg',
    bio: "Lorem ipsum dolor sit amet",
    twitter: "@",
    role: 'contributor',
    featured: false
  }, 
  {
    name: "Bo",
    position: "Eulogy Partner/Consultant",
    profile: '/assets/members/bo.jpeg',
    bio: "Lorem ipsum dolor sit amet",
    twitter: "@",
    role: 'underboss',
    featured: true
  }, 
  {
    name: "Bz",
    position: "Content Writer",
    profile: '/assets/members/bz.jpeg',
    bio: "Lorem ipsum dolor sit amet",
    twitter: "@",
    role: 'contributor',
    featured: false
  }, 
  {
    name: "CryptoRDog",
    position: "Content Writer",
    profile: '/assets/members/cryptordog.jpeg',
    bio: "Crypto-sec",
    twitter: "CryptoRDog",
    role: 'contributor',
    featured: false
  }, 
  {
    name: "Macrodemon",
    position: "Smart Contract Research",
    profile: '/assets/members/macrodemon.jpeg',
    bio: "Lorem ipsum dolor sit amet",
    twitter: "0xMacrodemon",
    role: 'underboss',
    featured: true
  }, 
  {
    name: "MrWhite",
    position: "Advisor",
    profile: '/assets/members/mrwhite.jpeg',
    bio: "Stop following me.",
    twitter: "mrwhite462",
    role: 'famiglia',
    featured: true
  }, 
  {
    name: "OxJUSTICE",
    position: "Marketing Director",
    profile: '/assets/members/oxjustice.jpeg',
    bio: "I'm the man.",
    twitter: "@",
    role: 'underboss',
    featured: true
  }, 
  {
    name: "Vinicius Dutra",
    position: "Technical Analyst",
    profile: '/assets/members/viniciusdutra.jpeg',
    bio: "Lorem ipsum dolor sit amet",
    twitter: "@",
    role: 'contributor',
    featured: false
  }, 
  {
    name: "wanderer2049",
    position: "Front-end Developer",
    profile: '/assets/members/wanderer2049.jpeg',
    bio: "Just a dev.",
    twitter: "wanderer2049",
    role: 'underboss',
    featured: true
  }, 
];

type Props = {
  member:Member,
}

type Filter = {
  roles: string[],
}

export const MemberItem = ({ member }:Props) => {
  const textColor = useColorModeValue("gray.600", "white.900");
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={ member.profile }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
          className={'member-avatar'}
        />
        <Heading fontSize={'2xl'} fontFamily={'heading'} className={'member-name'}>
          { member.name }
        </Heading>
        <Text textColor={ textColor } fontSize={'sm'} fontWeight={600} color={textColor} mb={4} bg={ bgColor } borderRadius={15} p={'10px'} my={'10px'} className={'member-position'}>
         { member.position }
        </Text>
        <Text
          textAlign={'center'}
          fontFamily={'body'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          my={5}
          minHeight={'50px'}
          className={'member-bio'}
          >
          { member.bio }
        </Text>
        { member.twitter? <Socials twitter={ member.twitter } /> : <Socials /> }
      </Box>
    </Center>
  );
}

export const MemberCarouselItem = ({ member }:Props) => {
  const textColor = useColorModeValue("gray.600", "white.900");
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");
  return (
    <Center py={6} px={1}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        borderWidth={'1px'}
        borderStyle={'solid'}
        borderColor={borderColor}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={ member.profile }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
          className={'member-avatar'}
        />
        <Heading fontSize={'2xl'} fontFamily={'heading'} className={'member-name'}>
          { member.name }
        </Heading>
        <Text textColor={ textColor } fontSize={'sm'} fontWeight={600} color={textColor} mb={4} bg={ bgColor } borderRadius={15} p={'10px'} my={'10px'} className={'member-position'}>
         { member.position }
        </Text>
        <Text
          textAlign={'center'}
          fontFamily={'body'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          my={5}
          minHeight={'50px'}
          className={'member-bio'}
          >
          { member.bio }
        </Text>
        { member.twitter? <Socials twitter={ member.twitter } /> : <Socials /> }
      </Box>
    </Center>
  );
}


export const MemberList = ({ roles }:Filter) => { 
  return (
    <Box>
      <SimpleGrid columns={{base: 1, sm: 1, md: 3}} mt={10} spacingX={'40px'} spacingY={'20px'} id="our-members">
        {members.map((m, index) => {
          if(roles.includes(m.role)) {
            return(<MemberItem member={m} key={index} />);
          }
        })}
      </SimpleGrid>
    </Box>
  );
}

const settings = {
  speed: 700,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  responsive: [
  {
    breakpoint: 100024,
    settings: {
      slidesToShow: 3,
      slidesToScroll:3,
      infinite: true,
      dots: true,
      centerMode: true,
      centerPadding: "70px",
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll:2,
      infinite: true,
      dots: true,
      centerMode: true,
      centerPadding: "70px",
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll:2,
      infinite: true,
      dots: true,
      centerMode: true,
      centerPadding: "70px",
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
    }
  }
  ]
}

export const MemberCarousel = ({ roles }: Filter ) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const bgColor = useColorModeValue('white.100', 'gray.900');
  return (
    <>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {members.map((m, index) => { 
          if(roles.includes(m.role)) {
            return(<MemberCarouselItem member={m} key={index} />);
          }
        })}
      </Slider>
    </>
  );
}