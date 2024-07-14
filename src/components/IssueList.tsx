import { Stack } from '@chakra-ui/react';

import IssueListItem from './IssueListItem';

export default function IssueList() {
  return (
    <Stack as="ul" direction="column" gap={4}>
      <IssueListItem
        tooltip="Summary We're enhancing user experience and data accessibility with new CSV export fu…"
        title="타이틀1"
        owner="github"
        repository="roadmap"
        author="github-product-roadmap"
        createdDate="21 Jun 2024"
        createdNum={989}
      />
      <IssueListItem
        tooltip="contents"
        title="타이틀2"
        owner="owner"
        repository="repository"
        author="author2"
        createdDate="21 Jun 2024"
        createdNum={825}
        commentsCount={5}
      />
      <IssueListItem
        tooltip="contents"
        title="타이틀3"
        owner="owner"
        repository="repository"
        author="author3"
        createdDate="21 Jun 2024"
        createdNum={825}
      />
      <IssueListItem
        tooltip="contents"
        title="타이틀4"
        owner="owner"
        repository="repository"
        author="author4"
        createdDate="21 Jun 2024"
        createdNum={825}
      />
    </Stack>
  );
}
