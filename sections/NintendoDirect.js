import { Box, Container, Stack, Grid, Heading } from '@chakra-ui/react'
import { Fade } from 'react-reveal'
import { NewsCard } from '../components/NewsCard'

export const NintendoDirect = () => (
  <Fade bottom>
    <Box py={10} bgColor="white">
      <Container maxW="container.xl">
        <Stack alignItem="center" justifyContent="center" h="full">
          <Heading mb={10}>Nintendo Direct</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
            <NewsCard image="/botw_n.png" text="Latest news in Breath of the wild 2" />
            <NewsCard image="/botw_n.png" text="Latest news in Breath of the wild 2" />
            <NewsCard image="/botw_n.png" text="Latest news in Breath of the wild 2" />
          </Grid>
        </Stack>
      </Container>
    </Box>
  </Fade>
)