import { Stack } from '@chakra-ui/react';

import { ISSUE_LIST } from '../data/issue';

import IssueListItem from './IssueListItem';

export default function IssueList() {
  return (
    <Stack as="ul" direction="column" gap={4}>
      {ISSUE_LIST.map((issue) => (
        <IssueListItem key={issue.id} issue={issue} />
      ))}
    </Stack>
  );
}
