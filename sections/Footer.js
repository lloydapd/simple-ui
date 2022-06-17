import { Box, Container, Heading, HStack, IconButton } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => (
  <Box>
    <Container py={5} maxW="container.xl">
      <HStack w="full" justify="center">
        <IconButton as="a" href="https://www.linkedin.com/in/lloyd-gabriel-llurag-723969209" variant="ghost" borderRadius="full" icon={<FaLinkedin size={20} color="black" />} />
        <IconButton as="a" href="https://github.com/lloydapd" variant="ghost" borderRadius="full" icon={<FaGithub size={20} color="black" />} />
        <IconButton as="a" href="https://www.facebook.com/Liello16" variant="ghost" borderRadius="full" icon={<FaFacebook size={20} color="black" />} />
      </HStack>
      <HStack justify="space-between" w="full">
        <Heading size="sm">Email Me: gabbyllurag@gmail.com</Heading>
        <Heading size="sm">Original design by Lloyd Gabriel Llurag</Heading>
      </HStack>
    </Container>
  </Box>
)