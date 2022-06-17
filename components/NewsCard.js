import { Box, Image, Heading } from '@chakra-ui/react'

export const NewsCard = ({ image, text }) => (
  <Box overflow="hidden" clipPath="polygon(0 0, 0 100%, 100% 100%, 100% 25%, 80% 0)" pos="relative" h="auto" w="full">
    <Image src={image} h="auto" w="full" _hover={{ transform: 'scale(1.05)' }} transition="all 300ms ease" />
    <Box p={4} pos="absolute" bottom={0} left={0} right={0}>
      <Heading textShadow="2px 2px rgba(0,0,0,0.4)" size="sm" color="white">{text}</Heading>
    </Box>
  </Box>
)