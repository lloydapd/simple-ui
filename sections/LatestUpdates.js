import { Container, Box, Stack, Grid, Heading } from '@chakra-ui/react'
import { NewsCard } from '../components/NewsCard'
import { Fade } from 'react-reveal'

export const LatestUpdates = () => (
  <Fade bottom>
    <Box py={10} bgColor="white">
      <Container maxW="container.xl">
        <Stack alignItem="center" justifyContent="center" h="full">
          <Heading mb={10}>Latest Updates</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
            <NewsCard image="/wr_banner.jpeg" text="WILD RIFT ICONS 2022 ON-AIR ENGLISH TALENT AND WATCH PARTIES!" />
            <NewsCard image="/wr_banner.jpeg" text="WILD RIFT ICONS 2022 ON-AIR ENGLISH TALENT AND WATCH PARTIES!" />
            <NewsCard image="/wr_banner.jpeg" text="WILD RIFT ICONS 2022 ON-AIR ENGLISH TALENT AND WATCH PARTIES!" />
          </Grid>
        </Stack>
      </Container>
    </Box>
  </Fade>
)