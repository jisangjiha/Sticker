export interface Issue {
  id: number;
  tooltip: string;
  title: string;
  owner: string;
  repository: string;
  author: string;
  createdDate: string;
  issueNumber: number;
  commentsCount?: number;
}

export interface Pagination {
  total: number;
  limit: number;
  page: number;
  setPage: ;
}
