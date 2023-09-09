"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import the CSS module
import * as React from "react";
import { Check, ChevronDown, Globe, Search } from "lucide-react";

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
      label: "EN",
    },
    {
      value: "hn",
      label: "HN",
    },
    {
      value: "cn",
      label: "CN",
    },
    {
      value: "fr",
      label: "FR",
    },
  ];

  return (
    <nav className="flex flex-row items-center justify-around w-full h-full py-6 m-auto bg-white border-b-2">
      <div className="flex flex-row items-center gap-32">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            className=""
            width="215"
            height="46"
            priority={true}
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
          style={{
            background:
              "linear-gradient(265deg, #0FFB00 -6.69%, #0D8C05 101.92%)",
          }}
        >
          Signup
        </Button>

        {/* LANGUAGE SELECTOR  */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              className="w-[100px] justify-between rounded-[26px] text-purple-600"
              style={{
                border: "2px solid transparent",
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, white,rgba(200, 200, 200, 0.7) ) border-box",
              }}
            >
              <Globe className="w-auto h-4" />
              {value ? (
                frameworks.find((framework) => framework.value === value)?.label
              ) : (
                <>
                  <span>Select framework...</span>
                </>
              )}
              <ChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command className="rounded-sm ">
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
        <Button
          variant="outline"
          className="py-2 px-5 border-s-muted rounded-[26px] bg-transparent text-black"
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(to right, white,rgba(200, 200, 200, 0.7) ) border-box",
          }}
        >
          <Search className="w-6 h-auto text-purple-600" />
        </Button>
      </div>
    </nav>
  );
}
