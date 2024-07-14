import { ViewIcon, ChatIcon } from '@chakra-ui/icons';
import { Tooltip, Container, Box, Link } from '@chakra-ui/react';

import type { Issue } from '../types';

interface IssueListItemProps {
  issue: Issue;
}

export default function IssueListItem({ issue }: IssueListItemProps) {
  const {
    tooltip,
    title,
    commentsCount,
    owner,
    repository,
    author,
    createdDate,
    issueNumber,
  } = issue;

  return (
    /** td class=d-block comment-body markdown-body  js-comment-body */
    <Tooltip label={tooltip}>
      <Container
        as="li"
        border="0"
        borderRadius="lg"
        padding="8px 16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="bgGray.100"
      >
        <Box w="40px" display="flex" justifyContent="center">
          {<ViewIcon />}
        </Box>
        <Box w="100%" padding="8px">
          <Box>
            <Link
              href="http://github.com"
              color="bgBlue.700"
              fontWeight="700"
              fontSize="16"
              cursor="pointer"
            >
              {title}
            </Link>
            <Link href={`http://github.com/${owner}`} margin="0 8px">
              {owner}
            </Link>
            /
            <Link
              href={`http://github.com/${owner}/${repository}`}
              margin="0 8px"
            >
              {repository}
            </Link>
          </Box>
          <Box fontSize="12">
            <Link
              href={`http://github.com/${owner}/${repository}/issues/${issueNumber}`}
              margin="0 2px 0 0 "
            >
              #{issueNumber}
            </Link>
            created on {createdDate} by
            <Link href={`http://github.com/${author}`} margin="0 2px">
              {author}
            </Link>
          </Box>
        </Box>
        <Box w="80px" textAlign="left" fontSize="12">
          <ChatIcon marginRight="4px" />
          댓글 {commentsCount}
        </Box>
      </Container>
    </Tooltip>
  );
}
