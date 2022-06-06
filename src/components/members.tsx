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
import { CONTENT } from '../constants/members';
import { SITE } from '../constants/site';

let allMembers = CONTENT.MEMBERS.sort(function(a,b) {
  return a.name.localeCompare(b.name);
})

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
          src={ SITE.MEMBER.IMG_DIR_NAME + '/' + member.profile }
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
          src={ SITE.MEMBER.IMG_DIR_NAME + '/' + member.profile }
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
        {allMembers.map((m, index) => {
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
        {allMembers.map((m, index) => { 
          if(roles.includes(m.role)) {
            return(<MemberCarouselItem member={m} key={index} />);
          }
        })}
      </Slider>
    </>
  );
}