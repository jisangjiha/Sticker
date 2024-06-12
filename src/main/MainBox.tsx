import { Button, Container, Box, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function MainBox() {
  return (
    <Container
      h="auto"
      flex={1}
      paddingBottom={12}
      maxW="2xl"
      bg="bgPurple.100"
      centerContent
    >
      <Box>main</Box>
      <ChakraLink as={ReactRouterLink} to="/greeting">
        greetings
      </ChakraLink>
      <Button>button</Button>
    </Container>
  );
}
