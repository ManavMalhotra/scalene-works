"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import supportAgent from "../../public/support-agent.svg";

import hero from "../../public/hero.svg";
import accenture from "../../public/accenture.png";
import capegami from "../../public/capegami.png";
import genericElectric from "../../public/generalElectric.png";
import kpmg from "../../public/kpmg.png";
import casestudies from "../../public/casestudies.svg";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import mission from "../../public/mission.svg";

import { Separator } from "./ui/separator";
import cert from "../../public/certificate.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function herosection() {
  interface CompanyLogo {
    [key: string]: {
      src: StaticImageData;
      alt: string;
    };
  }

  const companyLogo: CompanyLogo = {
    accenture: {
      src: accenture,
      alt: "accenture logo",
    },
    genericElectric: {
      src: genericElectric,
      alt: "genericElectric logo",
    },
    capegami: {
      src: capegami,
      alt: "capegami logo",
    },
    kpmg: {
      src: kpmg,
      alt: "kpmg logo",
    },
  };
  return (
    <div className="flex flex-col px-6">
      <main className="flex flex-col items-center w-full mx-auto md:justify-center md:flex-row">
        {/* SECTION TEXT */}
        <section className="items-start max-w-3xl p-4 pt-8 md:pt-32">
          <h3 className="mb-4 text-sm text-left opacity-50 md:text-lg">
            #because Scalene Works
          </h3>
          <h1
            className="mb-4 text-3xl font-bold text-left text-transparent md:text-5xl bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 md:text-left bg-clip-text"
            style={{ lineHeight: "1.3" }}
          >
            Bridging a million distant dreams.
          </h1>

          <div className="flex flex-row items-center w-full max-w-6xl gap-4 md:flex-row">
            <Link href="/contact">
              <Button
                variant="outline"
                className="p-6 text-base md:text-xl let-700 rounded-3xl xsm:w-full md:w-auto"
              >
                <Image
                  src={supportAgent}
                  alt="support agent"
                  width="30"
                  height="30"
                  className="mr-2"
                  priority={true}
                />
                <span style={{ color: "#9747FF" }}>Contact Sales</span>
              </Button>
            </Link>

            <Link href="/recruit">
              <Button
                variant="outline"
                className="p-6 text-base md:text-xl rounded-3xl xsm:w-full md:w-auto"
                style={{ color: "#9747FF" }}
              >
                Recruit <ChevronRight />
              </Button>
            </Link>
          </div>
        </section>

        {/* HERO IMAGE  */}
        <div className="max-w-lg">
          <Image
            src={hero}
            alt="hero design"
            width="680"
            height="592"
            className="object-contain min-w-[10] w-96 md:w-[680px]"
          />
          {/* w-[680] h-[592] */}
        </div>
      </main>

      {/* TRUSTED PARTNERS  */}
      <div
        className="flex flex-col items-center gap-4 mx-auto md:gap-20 md:flex-row md:p-8"
        style={{
          border: "4px solid transparent",
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(to right, white, darkorchid) border-box",
          borderRadius: "1rem",
        }}
      >
        <div className="flex flex-col items-start max-w-screen-md text-left min-w-max">
          <h3 className="mb-4 text-base font-medium opacity-50 md:mb-10 md:text-3xl">
            Trusted by MNC&apos;s globally
          </h3>
          <Link href="/learnmore">
            <div className="flex items-center justify-between w-full gap-4 align-middle">
              <h6 className="text-base text-indigo-900 ">Learn More</h6>
              <ArrowRight className="text-indigo-900" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center px-6 md:flex-row md:gap-8">
          {Object.keys(companyLogo).map((key) => (
            <div
              key={key}
              className="flex items-center max-w-sm transition-transform transform-gpu hover:scale-110 hover:grayscale-0 "
            >
              <Image
                src={companyLogo[key].src}
                alt={companyLogo[key].alt}
                className="object-contain min-w-[10] filter h-7 md:h-16 grayscale hover:grayscale-0 "
              />
            </div>
          ))}
        </div>
      </div>

      {/* STATS  */}
      <div className="container px-10 py-8 my-8">
        <h1 className="text-3xl md:text-5xl">
          A cutting-edge talent solutions organisation with
          <span className="text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
            10+ years of experience
          </span>
          , global reach, and a team of seasoned experts, ready to empower the
          next gen.
        </h1>
        <div className="flex flex-wrap items-start w-full gap-2 pt-16 mx-auto md:gap-20 md:flex-nowrap">
          <div className=" max-w-[200px] flex flex-col gap-2">
            <Separator className="bg-[#252424] md:block" />
            <h3 className="font-bold">6,800+</h3>
            <p className="text-gray-600">
              Diverse talented individuals with a global presence
            </p>
          </div>
          <div className="flex flex-col w-1/2 gap-2 lg:w-1/4 ">
            <Separator className="bg-[#252424] md:block" />
            <h3 className="font-bold">8+</h3>
            <p>Global presence in India, USA, UK, and Poland</p>
          </div>
          <div className="flex flex-col w-1/2 gap-2 lg:w-1/4 ">
            <Separator className="bg-[#252424] md:block" />
            <h3 className="font-bold">8+</h3>
            <p>Healthcare, IT and BFSI industry</p>
          </div>
          <div className="flex flex-col w-1/2 gap-2 lg:w-1/4 ">
            <Separator className="bg-[#252424] md:block" />
            <h3 className="font-bold">200+</h3>
            <p>Years of combined experience in talent management</p>
          </div>
        </div>
      </div>
      {/* Mission  */}
      <div className="container flex flex-col gap-6 px-10 py-8 my-8 ">
        <h3 className="text-sm font-bold text-[#FF008E]">Mission</h3>
        <div className="flex py-6">
          <div className="flex flex-col justify-between flex-[8] pr-6">
            <h2 className="text-3xl md:text-4xl">Empowering Individuals</h2>
            <p>
              A cutting-edge talent solutions organization with a 10+ years of
              experience, global reach, and a team of seasoned experts, ready to
              empower the next generation.
            </p>
            <Link href="/about">
              <div className="flex flex-row opacity-75">
                Learn More
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className="flex-[6] ">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Mission</TableCell>
                  <TableCell>People</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Exports</TableCell>
                  <TableCell>Partners</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Clients</TableCell>
                  <TableCell>Stories</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap items-center justify-center gap-6 px-10 py-8 my-8 md:flex-nowrap">
        <div className="">
          <Image
            src={mission}
            width="770"
            height="433"
            alt="mission"
            className="max-w-[570px] w-[400px] min-w-[400px]"
          />
        </div>
        <div className="flex flex-col items-start justify-between pl-20">
          <h3 className="text-lg font-medium ">Our Story</h3>
          <p>This is the reason of description is mandatory</p>
          <Link href="/about">
            <div className="flex flex-row ">
              Learn More
              <ChevronRight />
            </div>
          </Link>
          <Separator />
          <div className="opacity-70">
            <div className="py-4">
              <h3 className="text-base font-medium ">The global impact</h3>
              <p className="text-sm">
                This is the reason of description is mandatory
              </p>
            </div>
            <div className="py-4">
              <h3 className="text-base font-medium">Making sense of self</h3>
              <p className="text-sm">
                This is the reason of description is mandatory
              </p>
            </div>
            <div className="py-4">
              <h3 className="text-base font-medium">Making sense of self</h3>
              <p className="text-sm">
                This is the reason of description is mandatory
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Annual Report  */}
      <div className="bg-[#FF008E] w-full rounded-lg container my-16">
        <div className="flex flex-col-reverse gap-6 px-10 py-8 md:flex-row">
          <div className="flex flex-col justify-around gap-4 text-white">
            <p>Annual report</p>
            <h2 className="text-xl md:text-3xl ">
              Experience the Scalene difference -
            </h2>
            <Button>
              Global Hiring Index 2022
              <ChevronRight />
            </Button>
          </div>
          <div>
            <Image src={cert} width="524" height="295" alt="certificate" />
          </div>
        </div>
      </div>
      {/* INDUSTRIES */}
      <div className="container flex flex-col gap-4 my-16">
        <h3 className="text-sm font-bold text-[#FF008E]">INDUSTRIES</h3>
        <h2 className="text-3xl md:text-4xl">
          We got you covered in every industry.
        </h2>
        <p>
          Worried about hiring with specific skills and experience ? We cover a
          wide range of industries & Companies
        </p>
        <Link href="/learnmore">
          <div className="flex items-center gap-4 align-middle">
            <h6 className="text-base text-indigo-900 ">Learn More</h6>
            <ArrowRight className="text-indigo-900" />
          </div>
        </Link>
        <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-3">
          {/* #1 */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Aviation & Transportation</AccordionTrigger>
              <AccordionContent>Aviation & Transportation </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Automotive</AccordionTrigger>
              <AccordionContent>Automotive </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Consumer Products</AccordionTrigger>
              <AccordionContent>Consumer Products </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Energy & Natural Resources</AccordionTrigger>
              <AccordionContent>Energy & Natural Resources </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Financial Services</AccordionTrigger>
              <AccordionContent>Financial Services </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* #2  */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Healthcare</AccordionTrigger>
              <AccordionContent>Healthcare </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Information Technology</AccordionTrigger>
              <AccordionContent>Information Technology </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Infrastructure</AccordionTrigger>
              <AccordionContent>Infrastructure </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Life Sciences</AccordionTrigger>
              <AccordionContent>Life Sciences </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Manufacturing</AccordionTrigger>
              <AccordionContent>Manufacturing </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* #3  */}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Professional Services</AccordionTrigger>
              <AccordionContent>Professional Services </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Real Estate</AccordionTrigger>
              <AccordionContent>Real Estate </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Software & Platforms</AccordionTrigger>
              <AccordionContent>Software & Platforms </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Sports</AccordionTrigger>
              <AccordionContent>Sports </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="hover:bg-[#7779E5] hover:text-white px-1"
            >
              <AccordionTrigger>Telecommunications</AccordionTrigger>
              <AccordionContent>Telecommunications </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* CASE STUDIES */}
      <section className="flex flex-col gap-4 m-auto mx-6 my-16 md:container md:mx-auto">
        <h3 className="text-sm font-bold text-[#FF008E]">CASE STUDIES</h3>
        <h2 className="text-3xl md:text-4xl">Bring agility </h2>
        <p>
          Worried about hiring with specific skills and experience ? We cover a
          wide range of industries & Companies
        </p>
        <Link href="/learnmore">
          <div className="flex items-center gap-4 align-middle">
            <h6 className="text-base text-indigo-900 ">Learn More</h6>
            <ArrowRight className="text-indigo-900" />
          </div>
        </Link>
        <div className="flex flex-col-reverse w-full gap-4 pt-8 justify-evenly lg:flex-row">
          <div className="grid grid-cols-3 gap-8 lg:flex lg:flex-col md:w-1/5">
            <div>
              <h3 className="text-2xl font-medium ">130</h3>
              <p className="text-sm font-medium">
                HR Analytics ScaleneWorks Behavioral Modeling to Predict Renege
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium ">130</h3>
              <p className="text-sm font-medium">
                HR Analytics ScaleneWorks Behavioral Modeling to Predict Renege
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium ">130</h3>
              <p className="text-sm font-medium">
                HR Analytics ScaleneWorks Behavioral Modeling to Predict Renege
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={casestudies}
              width="1012"
              height="478"
              alt="case studies"
              className="max-w-[800px] w-[300px] lg:w-[800px] min-w-[400px]"
            />
          </div>
        </div>
        <Separator />
        <div className="flex flex-row items-center gap-2 pt-4 md:px-6 justify-evenly md:gap-16">
          {Object.keys(companyLogo).map((key) =>
            companyLogo[key].src === accenture ? (
              <div key={key} className="flex items-center mr-8 scale-110">
                <Image
                  src={companyLogo[key].src}
                  alt={companyLogo[key].alt}
                  className="object-contain min-w-[10px] filter h-10 md:h-16 hover:grayscale-0"
                />
              </div>
            ) : (
              <div key={key} className="flex items-center">
                <Image
                  src={companyLogo[key].src}
                  alt={companyLogo[key].alt}
                  className="object-contain min-w-[10]  h-10 md:h-16 grayscale  "
                />
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
