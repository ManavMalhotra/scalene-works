"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

import ourServices from "/public/ourServices.png";
import { ArrowRight } from "lucide-react";

export default function OurServices() {
  return (
    <Container className="flex flex-col gap-12 md:flex-row">
      <section className={`flex-[3]`}>
        <h3 className="text-2xl font-bold text-[#59DCAA]">Our Services</h3>

        <h2 className="text-3xl font-medium md:text-5xl pt-14">
          We got you covered in every industry.
        </h2>

        <h2 className="text-lg font-medium text-black py-9">
          Worried about hiring with specific skills and experience ? We cover a
          wide range of industries & Companies
        </h2>

        <div className="flex flex-row items-center w-full max-w-6xl gap-4 md:flex-row">
          <Link href="/contact">
            <Button
              variant="outline"
              className="p-6 text-base md:text-xl let-700 rounded-3xl xsm:w-full md:w-auto"
            >
              <span style={{ color: "#9747FF" }}>View More</span>
            </Button>
          </Link>
        </div>
      </section>
      <section className="flex-[3] grid grid-cols-2 grid-rows-2 gap-4 ">
        {/* #1 */}
        <div>
          <Image
            src={ourServices}
            alt="Our Services"
            width="332"
            height="332"
          />
          <h2 className="text-[#9747FF] font-medium text-2xl">
            Enterprise RPO
          </h2>
          <h3 className="text-lg font-medium text-black">
            Worried about hiring with specific skills and experience ? We cover
            a wide range of industries & Companies
          </h3>
          <div className="pt-7">
            <Link href="/learnmore">
              <div className="flex items-center gap-4 align-middle">
                <h6 className="text-base text-indigo-900 ">Learn More</h6>
                <ArrowRight className="text-indigo-900" />
              </div>
            </Link>
          </div>
        </div>

        {/* #2 */}
        <div>
          <Image
            src={ourServices}
            alt="Our Services"
            width="332"
            height="332"
          />
          <h2 className="text-[#9747FF] font-medium text-2xl">
            Enterprise RPO
          </h2>
          <h3 className="text-lg font-medium text-black">
            Worried about hiring with specific skills and experience ? We cover
            a wide range of industries & Companies
          </h3>
          <div className="pt-7">
            <Link href="/learnmore">
              <div className="flex items-center gap-4 align-middle">
                <h6 className="text-base text-indigo-900 ">Learn More</h6>
                <ArrowRight className="text-indigo-900" />
              </div>
            </Link>
          </div>
        </div>

        {/* #3 */}
        <div>
          <Image
            src={ourServices}
            alt="Our Services"
            width="332"
            height="332"
          />
          <h2 className="text-[#9747FF] font-medium text-2xl">
            Enterprise RPO
          </h2>
          <h3 className="text-lg font-medium text-black">
            Worried about hiring with specific skills and experience ? We cover
            a wide range of industries & Companies
          </h3>
          <div className="pt-7">
            <Link href="/learnmore">
              <div className="flex items-center gap-4 align-middle">
                <h6 className="text-base text-indigo-900 ">Learn More</h6>
                <ArrowRight className="text-indigo-900" />
              </div>
            </Link>
          </div>
        </div>

        {/* #4 */}
        <div>
          <Image
            src={ourServices}
            alt="Our Services"
            width="332"
            height="332"
          />
          <h2 className="text-[#9747FF] font-medium text-2xl">
            Enterprise RPO
          </h2>
          <h3 className="text-lg font-medium text-black">
            Worried about hiring with specific skills and experience ? We cover
            a wide range of industries & Companies
          </h3>
          <div className="pt-7">
            <Link href="/learnmore">
              <div className="flex items-center gap-4 align-middle">
                <h6 className="text-base text-indigo-900 ">Learn More</h6>
                <ArrowRight className="text-indigo-900" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
