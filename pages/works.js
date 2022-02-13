import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbFashionStore from '../public/images/works/fashionStore.jpg'
import thumbChess from '../public/images/works/chess.jpg'
import thumbSplitIt from '../public/images/works/splitIt.jpg'
import thumbPortfolio from '../public/images/works/portfolio.jpg'
import thumbSearce from '../public/images/works/searce.png'
import thumbApigee from '../public/images/works/apigee.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Work and Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="fashionStore"
              title="Fashion Store"
              thumbnail={thumbFashionStore}
              link="https://github.com/git-anubhav/shop-app"
            >
              An online fashion store made with react-native. Available on iOS,
              Android and Web.{' '}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title="Java Chess"
              thumbnail={thumbChess}
              link="https://github.com/git-anubhav/chess-java"
            >
              A human vs human desktop Chess Game written in Java.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title="Split It!"
              thumbnail={thumbSplitIt}
              link="https://github.com/git-anubhav/split-it"
            >
              A practical use to the{' '}
              <Link
                href="https://terbium.io/2020/09/debt-simplification/"
                passHref={true}
              >
                debt-simplification algorithm.{' '}
              </Link>
              Written in typescript and react.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title="Personal Portfolio"
              thumbnail={thumbPortfolio}
              link="https://github.com/git-anubhav/shop-app"
            >
              Take a deeper look at the website you&apos;re on. Made with
              Next.js, Chakra UI, Framer Motion and Three.js.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title="Searce"
              thumbnail={thumbSearce}
              link="https://www.searce.com/service-software"
            >
              A deeper look at what me and my team does at Searce.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              title="Apigee"
              thumbnail={thumbApigee}
              link="https://cloud.google.com/apigee"
            >
              Understand this niche I&apos;m into.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
