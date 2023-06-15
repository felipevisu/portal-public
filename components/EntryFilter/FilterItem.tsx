"use client";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";

import { capitalize } from "@/utils/text";

import { Filter } from "./utils";

export default function FilterItem({ filter }: { filter: Filter }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: any) => {
    const value = e ? e.value : "";
    // eslint-disable-next-line compat/compat
    const params = new URLSearchParams(searchParams.toString());
    params.set(filter.parameter, value);
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div>
      <h4 className="font-semibold mb-1">{capitalize(filter.title)}</h4>
      <Select options={filter.choices} onChange={handleChange} isClearable />
    </div>
  );
}
