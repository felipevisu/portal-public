import { Fragment, useMemo, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { Choice } from "../EntryFilter/utils";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface SelectProps {
  label: string;
  value?: string;
  options: Choice[];
  onChange: (e: any) => void;
}

export default function Select({
  label,
  value,
  options,
  onChange,
}: SelectProps) {
  const choices = [{ value: "", label: "Selecione" }, ...options];
  const selected = useMemo(
    () => options.find((option) => option.value === value),
    [value, options]
  );

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
            {label}
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button
              className="
              relative 
              w-full 
              h-10 
              cursor-default 
              rounded-md 
              bg-white 
              dark:bg-gray-700 
              py-1.5 
              pr-10 
              text-left 
              text-gray-900 
              dark:text-white
              shadow-sm 
              ring-1 
              ring-inset 
              ring-gray-300
              dark:ring-gray-600
              focus:outline-none 
              focus:ring-2 
              focus:ring-amber-400 
              sm:text-sm 
              sm:leading-6"
            >
              <span className="flex items-center">
                <span className="ml-3 block truncate">
                  {selected?.label || "Selecione"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="
                  absolute 
                  z-10 
                  mt-1 
                  max-h-56 
                  w-full 
                  overflow-auto 
                  rounded-md 
                  bg-white 
                  dark:bg-gray-800 
                  py-1 
                  text-base 
                  shadow-lg 
                  ring-1 
                  ring-black 
                  ring-opacity-5 
                  focus:outline-none 
                  sm:text-sm"
              >
                {choices.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-amber-400 text-gray-900"
                          : "text-gray-900 dark:text-white",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={option.value}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {option.label}
                          </span>
                        </div>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-amber-400",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
