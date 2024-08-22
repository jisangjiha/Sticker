import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { ISSUE_LIST } from '../data/issue';

import IssueListItem from './IssueListItem';
import Pagination from './Pagination';

const ITEM_HEIGHT = 74;
const GAP = 16;

//페이지당 아이템 개수
const LIMIT = 5;

const LIST_HEIGHT = ITEM_HEIGHT * LIMIT + GAP * (LIMIT - 1);

export default function IssueList() {
  const [page, setPage] = useState(1); //현재 페이지 번호
  const offset = (page - 1) * LIMIT; //첫 게시물 위치

  return (
    <>
      <Stack
        as="ul"
        direction="column"
        gap={4}
        h={`${LIST_HEIGHT}px`}
        marginBottom={4}
      >
        {ISSUE_LIST.slice(offset, offset + LIMIT).map((issue) => (
          <IssueListItem key={issue.id} issue={issue} />
        ))}
      </Stack>
      <Pagination
        total={ISSUE_LIST.length}
        limit={LIMIT}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
