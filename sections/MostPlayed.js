import { useState, useEffect } from 'react'
import { Box, Container, Stack, Heading, Image } from '@chakra-ui/react'
import { Fade } from 'react-reveal'

export const MostPlayed = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      bgAttachment="fixed"
      bgImage="/wr_banner.jpeg"
      w="full"
      h="100vh"
      transform={`translateY(${offsetY * 0.3}px)`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover">
      <Container minH="100vh" maxW="container.xl">
        <Stack zIndex={10} justify="center" pos="relative" h="100vh">
          <Stack pb={30} h="full" justifyContent="center">
            <Stack>
              <Heading color="white" size="md" textTransform="uppercase">Most Played Game</Heading>
              <Heading color="white" size="2xl" textShadow="2px 2px rgba(0,0,0,0.4)" textTransform="uppercase">League of Legends: WildRift</Heading>
              <Heading color="white" size="sm" textShadow="2px 2px rgba(0,0,0,0.4)">LEAGUE OF LEGENDS, NOW ON MOBILE. PLAY FOR FREE! COMING SOON TO CONSOLES.</Heading>
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} pt={10} align="flex-start" spacing={5}>
              <Box>
                <Heading mr={5} color="white" size="sm" textShadow="2px 2px rgba(0,0,0,0.4)">Available on</Heading>
              </Box>
              <Image src="/google-badge-en.svg" h={35} w="auto" />
              <Image src="/apple-badge-en.svg" h={35} w="auto" />
              <Image src="/GalaxyStore_English.png" h={35} w="auto" />
            </Stack>
          </Stack>
          <Box pos="absolute" zIndex={-1} right={0}>
            <Fade right>
              <Image src="/wr_jinx.png" h="full" objectFit="cover" w="auto" />
            </Fade>
          </Box>
        </Stack>
      </Container>

    </Box>
  )
}