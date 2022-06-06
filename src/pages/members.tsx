import type { ReactElement } from 'react';
import {
  Container,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout';
import Post from '../types/post';
import { MemberList } from '../components/members';
import { CONTENT } from '../constants/members';
import { StandardHeading } from '../components/headings';

type Props = {
  allPosts: Post[]
}

const MembersPage = ({ allPosts }: Props) => {  
  return (
    <>
      <StandardHeading heading={CONTENT.HEADING} tagline={CONTENT.TAGLINE}></StandardHeading>
      <Container width={'100%'} maxWidth={'100%'} borderRadius={30} mb={50}> 
        <Container maxW={'980px'} px={{base:'3', md:'5'}} textAlign={'center'} >
            <Heading
            fontWeight={900}
            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
            lineHeight={'110%'}>
              <Text as={'span'} color='brand.100'>
                Core&nbsp;
              </Text>
              <Text as={'span'}>
                Members
              </Text>
            </Heading>
            <MemberList roles={['famiglia', 'underboss']} />
            <Heading
            fontWeight={900}
            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
            lineHeight={'110%'}
            mt={100}  
            >
              <Text as={'span'} color='brand.100'>
                Valued&nbsp;
              </Text>
              <Text as={'span'}>
                Contributors
              </Text>
            </Heading>
            <MemberList roles={['contributor']} />
        </Container>
      </Container>
    </>
  );
}

MembersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default MembersPage;
