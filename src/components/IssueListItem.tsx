import { ViewIcon, ViewOffIcon, ChatIcon } from '@chakra-ui/icons';
import { Tooltip, Container, Box, Link } from '@chakra-ui/react';
import { useState } from 'react';

interface IssueListItemProps {
  tooltip: string;
  title: string;
  commentsCount?: number;
  owner: string;
  repository: string;
  author: string;
  createdDate: string;
  createdNum: number;
}

export default function IssueListItem({
  tooltip,
  title,
  commentsCount,
  owner,
  repository,
  author,
  createdDate,
  createdNum,
}: IssueListItemProps) {
  const [status, setStatus] = useState(true); //상태에 따라 아이콘 다르게 보여지도록

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
          {status ? <ViewIcon /> : <ViewOffIcon />}
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
              href={`http://github.com/${owner}/${repository}/issues/${createdNum}`}
              margin="0 2px 0 0 "
            >
              #{createdNum}
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
