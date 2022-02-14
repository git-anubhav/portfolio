import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hey you! Welcome to my website.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Anubhav Chakraborty
            </Heading>
            <p>Software Engineer, Physics-Nerd, Musician</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              background={useColorModeValue('#8aa691', '#fbd38d')}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I&apos;m a Software Engineer based in New Delhi, India. I have a
            passion for building scalable and user-friendly web, mobile and
            desktop applications. I have a proficiency in technologies like
            React.js, Angular.js, Node.js, React Native, Flutter, Electron.js
            and Apigee API Management. I have a major in Physics and a minor in
            Mathematics and Statistics, and am currently working as a full-time
            Software Engineer at{' '}
            <NextLink href="http://www.searce.com" passHref={true}>
              <Link>Searce</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/work">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My work
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>Born in New Delhi, India.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>Completed 10+2 from Ryan International
            School, Faridabad.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>Worked at a Vadodara based edu-tech startup{' '}
            <NextLink href="http://www.careernaksha.com" passHref={true}>
              <Link>Careernaksha</Link>
            </NextLink>{' '}
            as a Backend Engineer Intern.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>Completed Bachelor of Science Honours,
            majoring in Physics from Maharaja Sayajirao University, Baroda.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>Worked at a Gurugram based startup{' '}
            <NextLink href="https://www.interviewvector.com/" passHref={true}>
              <Link>InterviewVector</Link>
            </NextLink>{' '}
            as a Frontend Engineer Intern.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>Started working at a Multi-National
            Consultancy firm{' '}
            <NextLink href="https://www.searce.com/" passHref={true}>
              <Link>Searce</Link>
            </NextLink>{' '}
            as a Full-Stack Software Engineer.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Tech, Physics,{' '}
            <Link href="https://www.youtube.com/c/MattDAvella" passHref={true}>
              Minimalism
            </Link>
            , Music,{' '}
            <Link
              href="https://www.youtube.com/channel/UCMb0O2CdPBNi-QqPk5T3gsQ"
              passHref={true}
            >
              Coffee
            </Link>
            , Food, Investing, Pop Culture, Playing Piano, Badminton. (Surely
            not in that order!)
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/git-anubhav" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @git-anubhav
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/anubhxv/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @anubhxv
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/anubhaow" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @anubhaow
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/chakramorty/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @chakramorty
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
