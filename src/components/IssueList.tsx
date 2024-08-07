import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { ISSUE_LIST } from '../data/issue';

import IssueListItem from './IssueListItem';
import Pagination from './Pagination';

export default function IssueList() {
  const [limit, setLimit] = useState(5); //페이지당 아이템 개수
  const [page, setPage] = useState(1); //현재 페이지 번호
  const offset = (page - 1) * limit; //첫 게시물 위치

  return (
    <>
      <Stack as="ul" direction="column" gap={4}>
        {ISSUE_LIST.slice(offset, offset + limit).map((issue) => (
          <IssueListItem key={issue.id} issue={issue} />
        ))}
      </Stack>
      <Pagination
        total={ISSUE_LIST.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
