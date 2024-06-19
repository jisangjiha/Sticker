import { Tooltip, Container, Box } from '@chakra-ui/react';

import OpenIcon from '../icons/Open';

export default function GithubList() {
  return (
    <Tooltip label="content">
      <Container
        border="1px"
        borderRadius="lg"
        padding="8px 16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box w="40px" display="flex" justifyContent="center">
          <OpenIcon />
        </Box>
        <Box w="100%" padding="8px">
          <Box>타이틀</Box>
          <Box>작성자/작성일/#</Box>
        </Box>
        <Box w="40px" textAlign="center">
          댓글
        </Box>
      </Container>
    </Tooltip>
  );
}
