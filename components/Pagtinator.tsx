import Link from "next/link";

import { PageInfoFragment } from "@/portal/api";

interface PaginatorProps {
  pageInfo: PageInfoFragment;
  path: string;
}

export const Paginator = ({ pageInfo, path }: PaginatorProps) => {
  return (
    <>
      {pageInfo.hasPreviousPage && (
        <Link
          href={{
            pathname: path,
            query: { before: pageInfo.startCursor },
          }}
        >
          Anterior
        </Link>
      )}
      {pageInfo.hasNextPage && (
        <Link
          href={{
            pathname: path,
            query: { after: pageInfo.endCursor },
          }}
        >
          Proximo
        </Link>
      )}
    </>
  );
};

export default Paginator;
