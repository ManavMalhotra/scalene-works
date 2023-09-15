"use client";

import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import * as React from "react";
import { Check, ChevronDown, Globe, Search, Menu, X } from "lucide-react";

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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Input } from "./ui/input";
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

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [navbarHidden, setNavbarHidden] = React.useState(false);
  const [searchBarHidden, setSearchBarHidden] = React.useState(true);

  const handleSearch = () => {
    setSearchBarHidden(!searchBarHidden);
    console.log(searchBarHidden);
  };
  return (
    <nav className="flex items-center justify-between w-full h-full px-4 py-6 m-auto bg-white border-b-2 sm:px-6 md:px-8">
      {/* LOGO  */}
      <div>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-1/3 max-w-xs min-w-min"
            width="1000"
            height="1000"
            priority={true}
          />
        </Link>
      </div>
      {/* LINKS */}
      {searchBarHidden ? (
        <>
          <div
            className={`animation hidden gap-5 px-12 md:flex text-sm lg:text-base `}
          >
            <Link href="/products" className="font-semibold">
              Products
            </Link>
            <Link href="/solutions" className="font-semibold">
              Solutions
            </Link>
            <Link href="/resources" className="font-semibold">
              Resources
            </Link>
            <Link href="/pricing" className="font-semibold">
              Pricing
            </Link>
          </div>
          <div className="hidden gap-3 md:flex">
            <Button
              className="  sm:block py-2 px-4 rounded-[26px] backdrop-blur-20"
              style={{
                background:
                  "linear-gradient(265deg, #0FFB00 -6.69%, #0D8C05 101.92%)",
              }}
            >
              Signup
            </Button>
            <LanguageSelector open={open} setOpen={setOpen} />

            <Button
              variant="outline"
              className={`py-2 px-5 border-s-muted rounded-[26px] bg-transparent text-black `}
              onClick={handleSearch}
              style={{
                border: "2px solid transparent",
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, white,rgba(200, 200, 200, 0.7) ) border-box",
              }}
            >
              <Search className="w-6 h-auto text-purple-600" />
            </Button>
          </div>
        </>
      ) : (
        <div className="hidden md:flex w-[70%] ">
          <Input
            placeholder="Search..."
            className="w-full border-l-4 border-black rounded-full animation "
          />
          <Button
            variant="outline"
            className={`animation py-2 px-5 border-s-muted rounded-[26px] bg-transparent text-black`}
            onClick={handleSearch}
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, white,rgba(200, 200, 200, 0.7) ) border-box",
            }}
          >
            <X className="w-6 h-auto text-purple-600" />
          </Button>
          <Button
            variant="outline"
            className={` py-2 px-5 border-s-muted rounded-[26px] bg-transparent text-black `}
            onClick={handleSearch}
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, white,rgba(200, 200, 200, 0.7) ) border-box",
            }}
          >
            <Search className="w-6 h-auto text-purple-600" />
          </Button>
        </div>
      )}
      {/* BUTTONS */}
      <div className="flex items-center justify-end gap-3 md:hidden">
      <Sheet>
          <SheetTrigger>
            <Menu
              className="w-8 h-8 text-purple-600 md:hidden"
            />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            style={{
              background: "linear-gradient(90deg, #FF008E 0%, #A76CF5 100%)",
            }}
          >
            <SheetHeader>
              <SheetDescription className="">
                <div className="flex flex-col gap-3 py-4">
                  <div className="flex items-center w-full max-w-sm space-x-2">
                    <Search className="w-4 h-4" />
                    <Input placeholder="Search..." className="w-full" />
                    <LanguageSelector open={open} setOpen={setOpen} />
                  </div>

                  <Link href="/products" className="font-semibold">
                    Products
                  </Link>
                  <Link href="/solutions" className="font-semibold">
                    Solutions
                  </Link>
                  <Link href="/resources" className="font-semibold">
                    Resources
                  </Link>
                  <Link href="/pricing" className="font-semibold">
                    Pricing
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
      
    </nav>
  );
}
interface LanguageSelectorProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  open,
  setOpen,
}) => {
  const [value, setValue] = React.useState("en");

  return (
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
  );
};
