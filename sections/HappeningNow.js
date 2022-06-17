import { Box, Container, Heading, Stack } from '@chakra-ui/react'
import { Fade } from 'react-reveal'

export const HappeningNow = () => {
  return (
    <Box
      bgAttachment="fixed"
      w="full"
      pos="relative"
      minH="100vh"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover">
      <Box pos="absolute" top={0} left={0} bottom={0} right={0}> 
        <Fade bottom>
          <Container h="100vh" maxW="container.xl">
            <Stack h="full" align="center" direction={{ base: 'column-reverse', md: 'row' }}>
              <Stack h="full" align="flex-end" justify="center" w="full" p={5}>
                <Heading color="white" size="md" textTransform="uppercase">Happening right now</Heading>
                <Heading color="white" size="2xl" textShadow="2px 2px rgba(0,0,0,0.4)" textTransform="uppercase">WildRift Icons 2022</Heading>
                <Heading color="white" size="sm" textShadow="2px 2px rgba(0,0,0,0.4)">Watch your favorite teams compete for glory</Heading>
              </Stack>
            </Stack>
          </Container>
        </Fade>
      </Box>
      <Box w="full" bgColor="red">
        <video src="/icons_wr.mp4" height="2000" width="2000" autoPlay muted loop/>
      </Box>
    </Box>  
  )
}