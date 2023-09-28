import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";

import cert from "/public/certificate.svg";

export default function GlobalHiringIndex() {
  return (
    <Container className="w-full py-12 bg-black rounded-lg">
      <div className="flex flex-col-reverse justify-center gap-6 px-10 py-8 md:flex-row md:gap-80">
        <div className="flex flex-col items-start justify-center gap-4 text-white">
          <p className="">Global Hiring Index 2022 Report</p>
          <h2 className="text-xl md:text-6xl">
            Experience the Scalene difference -
          </h2>
          <Button
            className="bg-gray-600"
            style={{
              borderRadius: "5rem",
            }}
          >
            <div className="flex flex-row">
              <p className="whitespace-nowrap">Read More</p>
              <ChevronRight />
            </div>
          </Button>
        </div>
        <div>
          <Image src={cert} width="524" height="295" alt="certificate" className="w-[524px]" />
        </div>
      </div>
    </Container>
  );
}
