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
    params.delete("before");
    params.delete("after");
    params.set(param, value);
    router.push(pathname + "?" + params.toString());
  };

  const style =
    "hover:text-rose-600 disabled:opacity-50 disabled:hover:text-current";

  return (
    <div className="mb-6 flex font-semibold">
      <button
        disabled={!pageInfo.hasPreviousPage}
        onClick={() => handleClick("before", pageInfo.startCursor || "")}
        className={style}
      >
        Anterior
      </button>
      <button
        disabled={!pageInfo.hasNextPage}
        onClick={() => handleClick("after", pageInfo.endCursor || "")}
        className={`ml-auto mr-0 ${style}`}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginator;
