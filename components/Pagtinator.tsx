"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { PageInfoFragment } from "@/portal/api";

interface PaginatorProps {
  pageInfo: PageInfoFragment;
  path: string;
}

export const Paginator = ({ pageInfo, path }: PaginatorProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (param: string, value: string) => {
    // eslint-disable-next-line compat/compat
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="mb-6 ">
      {pageInfo.hasPreviousPage && (
        <button
          onClick={() => handleClick("before", pageInfo.startCursor || "")}
        >
          Anterior
        </button>
      )}
      {pageInfo.hasNextPage && (
        <button onClick={() => handleClick("after", pageInfo.endCursor || "")}>
          Proximo
        </button>
      )}
    </div>
  );
};

export default Paginator;
