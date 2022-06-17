import { useEffect } from 'react'
import { Box, Container, Stack, Heading } from '@chakra-ui/react'
import { useVideo } from 'react-use'
import { Fade } from 'react-reveal'

export const MustPlayGame = () => {
  const [video, state, controls, ref] = useVideo(
    <video src="./botw.mp4" autoPlay height="300" width="auto" />
  )

  useEffect(() => {
    controls.play()
    controls.mute()
  }, [video])

  return (
    <Box
      bgAttachment="fixed"
      bgImage="/botw.jpeg"
      w="full"
      minH="100vh"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover">

      <Fade bottom>
        <Container h="100vh" maxW="container.xl">
          <Stack h="full" align="center" direction={{ base: 'column-reverse', md: 'row' }}>
            <Stack h="full" justify="center" w="full" p={5}>
              <Heading color="white" size="md" textTransform="uppercase">A Must Play Game of all time</Heading>
              <Heading color="white" size="2xl" textShadow="2px 2px rgba(0,0,0,0.4)" textTransform="uppercase">The Legend Of Zelda: <br /> Breath of the Wild</Heading>
              <Heading color="white" size="sm" textShadow="2px 2px rgba(0,0,0,0.4)">Explore the vast world of Hyrule and unveil its secrets</Heading>
            </Stack>
            <Box>
              {video}
            </Box>
          </Stack>
        </Container>
      </Fade>

    </Box>
  )
}