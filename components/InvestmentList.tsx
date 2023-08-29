"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { InvestmentFragment } from "@/portal/api";
import { toMonthName } from "@/utils/date";
import { formatMoney } from "@/utils/money";

import Button from "./UI/button";
import { Modal } from "./Modal";

interface InvestmentListProps {
  investments: InvestmentFragment[];
}

export default function InvestmentList({ investments }: InvestmentListProps) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: any) => {
    setOpen(true);
    // eslint-disable-next-line compat/compat
    const params = new URLSearchParams(searchParams.toString());
    params.delete("before");
    params.delete("after");
    params.set("id", e.target.value);
    router.push(pathname + "?" + params.toString());
  };

  const selected = useMemo(() => {
    const id = searchParams.get("id");
    if (id) {
      return investments.find((item) => item.id === id);
    }
  }, [searchParams, investments]);

  useEffect(() => {
    if (!open) router.push(pathname);
  }, [open, router, pathname]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="bg-white dark:dark:bg-gray-800 rounded-lg block shadow-sm p-6"
          >
            <h5 className="font-semibold">
              {toMonthName(investment.month)} de {investment.year}
            </h5>
            <p className="mb-4">Total: {formatMoney(investment.total)}</p>
            <Button onClick={handleClick} value={investment.id}>
              Detalhes
            </Button>
          </div>
        ))}
      </div>
      <Modal open={open} setOpen={setOpen}>
        {selected && (
          <div className="pb-3">
            <h5 className="font-semibold mb-4">
              {toMonthName(selected.month)} de {selected.year}
            </h5>
            {selected.items?.map((item) => (
              <div className="grid grid-cols-2" key={item.id}>
                <div>{item.name}</div>
                <div>{formatMoney(item.value)}</div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
