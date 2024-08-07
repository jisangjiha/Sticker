import { Button } from '@chakra-ui/react';

export default function Pagination({ total, limit, page, setPage }) {
  //total:총 게시물 수, limit: 페이지 당 게시물 수
  const numPages = Math.ceil(total / limit); //필요한 페이지의 개수

  return (
    <nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : undefined} //aria-current: 현재 페이지가 가리키는 포인트
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </nav>
  );
}
