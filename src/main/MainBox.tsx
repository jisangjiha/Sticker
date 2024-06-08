import { Container, Box, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function MainBox() {
  return (
    <Container
      h="auto"
      minH="calc(100vh - 8rem)"
      paddingBottom={12}
      maxW="2xl"
      bg="skyblue"
      centerContent
    >
      <Box>main</Box>
      <ChakraLink as={ReactRouterLink} to="/greeting">
        greeting
      </ChakraLink>
    </Container>
  );
}
