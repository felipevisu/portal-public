"use client";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { capitalize } from "@/utils/text";

import Select from "../UI/select";

import { Filter } from "./utils";

export default function FilterItem({ filter }: { filter: Filter }) {
  const [selected, setSelected] = useState<string>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    setSelected(value);
    // eslint-disable-next-line compat/compat
    const params = new URLSearchParams(searchParams.toString());
    params.set(filter.parameter, value);
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div>
      <Select
        options={filter.choices}
        onChange={handleChange}
        value={selected}
        label={capitalize(filter.title)}
      />
    </div>
  );
}
