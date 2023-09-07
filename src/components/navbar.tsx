"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import the CSS module
import * as React from "react";
import { Check, ChevronsUpDown, Globe, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("en");

  const frameworks = [
    {
      value: "en",
      label: "En",
    },
    {
      value: "hn",
      label: "Hn",
    },
    {
      value: "cn",
      label: "Cn",
    },
    {
      value: "fr",
      label: "Fr",
    },
  ];

  return (
    <nav className="flex flex-row items-center justify-around w-full m-auto my-6">
      <div className="flex flex-row items-center gap-32">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            className=""
            width="215"
            height="46"
          />
        </Link>

        <div className="flex flex-row flex-wrap gap-6 md:hidden lg:flex sm:hidden">
          <Link href="/products" className="gap-3 font-semibold">
            Products
          </Link>
          <Link href="/solutions" className="gap-3 font-semibold">
            Solutions
          </Link>
          <Link href="/resources" className="gap-3 font-semibold">
            Resources
          </Link>
          <Link href="/pricing" className="gap-3 font-semibold">
            Pricing
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          className="py-2 px-4 rounded-[26px] bg-gradient-to-r from-green-500 to-green-600 backdrop-blur-20"
        >
          Signup
        </Button>

        <Button variant="outline" className=" py-2 px-4 rounded-[26px]">
          <Search />
        </Button>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[125px] justify-between rounded-[26px]"
            >
              <Globe />
              {value ? (
                frameworks.find((framework) => framework.value === value)?.label
              ) : (
                <>
                  <span>Select framework...</span>
                </>
              )}
              <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              {/* <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty> */}
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue: any) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
