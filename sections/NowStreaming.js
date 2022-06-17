import { Box, Stack, Container, Grid, Heading } from '@chakra-ui/react'
import { Fade } from 'react-reveal'
import { NewsCard } from '../components/NewsCard'

export const NowStreaming = () => (
  <Fade bottom>
    <Box py={10} bgColor="white">
      <Container maxW="container.xl">
        <Stack alignItem="center" justifyContent="center" h="full">
          <Heading mb={10}>Now Streaming</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
            <NewsCard image="/valo_s.jpeg" text="Watch Valorant Aces" />
            <NewsCard image="/valo_s.jpeg" text="Watch Valorant Aces" />
            <NewsCard image="/valo_s.jpeg" text="Watch Valorant Aces" />
          </Grid>
        </Stack>
      </Container>
    </Box>
  </Fade>
)