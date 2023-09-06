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
  const [value, setValue] = React.useState("english");

  const frameworks = [
    {
      value: "english",
      label: "English",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <nav className="container my-2">
      <div className="flex flex-row justify-around items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            className=""
            width="215"
            height="46"
          />
        </Link>
        <ul className="flex flex-row gap-3">
          <li className={styles.nav_items}>
            <Link href="/products">Products</Link>
          </li>
          <li className={styles.nav_items}>
            <Link href="/solutions">Solutions</Link>
          </li>
          <li className={styles.nav_items}>
            <Link href="/resources">Resources</Link>
          </li>
          <li className={styles.nav_items}>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>

        <div className="">
          <Button variant="outline" className="py-2 px-4 rounded-[26px]">
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
                className="w-[200px] justify-between rounded-[26px]"
              >
                <Globe />
                {value ? (
                  frameworks.find((framework) => framework.value === value)
                    ?.label
                ) : (
                  <>
                    <span>Select framework...</span>
                  </>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
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
      </div>
    </nav>
  );
}
