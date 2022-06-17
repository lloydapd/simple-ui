import { Box, Container, Stack, Heading, Image } from '@chakra-ui/react'
import { Fade } from 'react-reveal'

export const BestFPS = () => (
  <Box
    bgAttachment="fixed"
    pos="relative"
    overflow="hidden"
    bgImage="/valo_banner.jpeg"
    w="full"
    minH="100vh"
    bgRepeat="no-repeat"
    bgPos="center"
    bgSize="cover">
    <Container maxW="container.xl" minH="100vh">
      <Stack minH="100vh" justify="center" w="full" align="center" direction={{ base: 'column-reverse', md: 'row' }}>
        <Box pos="absolute" left={0} top={0} bottom={0}>
          <Fade bottom>
            <Image src="/jett.png" h="auto" w="full" zIndex={-1} />
          </Fade>
        </Box>
        <Stack align="flex-end" justify="center" bgColor="#FE4653" w="full" p={5}>
          <Heading color="white" size="md" textTransform="uppercase">Best FPS Game</Heading>
          <Heading color="white" size="2xl" textShadow="2px 2px rgba(0,0,0,0.4)" textTransform="uppercase">Valorant: Dimension</Heading>
          <Heading color="white" size="sm" textShadow="2px 2px rgba(0,0,0,0.4)">This is the real and most competitive FPS game on PC and soon to mobile</Heading>
        </Stack>
      </Stack>
    </Container>

  </Box>
)