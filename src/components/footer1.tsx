"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import whatsapp from "../../public/whatsapp.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "./ui/separator";

export default function Footer1() {
  return (
    <div className="bg-[#f7f7fe]">
      <div className="px-8 py-8 mx-auto md:px-44">
        {/* Footer Top */}
        <div className="flex flex-col gap-5 pb-6 md:gap-20 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo */}
          <Image
            src={logo}
            alt="logo"
            width="215"
            height="46"
            className="h-20 w-60"
          />
          <div className="flex flex-col items-start gap-2 m-0 md:space-x-12 md:mr-10 md:flex-row md:items-center">
            {/* Contact Icons */}
            <div className="flex items-center gap-2 lg:space-x-1 whitespace-nowrap">
              <Mail className="w-5 h-5" />
              <p className="text-base font-normal text-black ">
                hello@scaleneworks.com
              </p>
            </div>
            <div className="flex items-center gap-2 lg:space-x-1 whitespace-nowrap ">
              <Phone className="w-5 h-5" />
              <p className="text-base font-normal text-black">
                Request a call back
              </p>
            </div>
            <div className="flex items-center gap-2 lg:space-x-1 whitespace-nowrap ">
              <BsWhatsapp className="w-5 h-5" />
              <p className="text-base font-normal text-black">Whatsapp Us</p>
            </div>
          </div>
        </div>
        <Separator />
        {/* Footer Middle */}
        <div className="flex flex-col py-8 md:flex-row lg:flex lg:items-start lg:justify-between gap-28">
          <div className="w-full pr-0 lg:w-2/5 lg:pr-20">
            <p className="text-base leading-7 text-black">
              ScaleneWorks is a global talent solutions organization with over a
              decade of experience. We specialize in providing customized HR
              solutions to top-tier organizations in the IT and BFSI industries.
              With our innovative approach, diverse talent pool, and
              client-centric focus, we deliver exceptional results for MNCs and
              job seekers alike.
            </p>
            <div className="flex space-x-4 my-14">
              <BsFacebook className="w-6 h-6 text-[#5557DF]" />
              <BsTwitter className="w-6 h-6 text-[#5557DF]" />
              <BsLinkedin className="w-6 h-6 text-[#5557DF]" />
              <BsYoutube className="w-6 h-6 text-[#5557DF]" />
            </div>

            {/* Address Sections */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>India</AccordionTrigger>
                <AccordionContent>
                  <h2 className="text-[#505050], font-bold">Bangalore</h2>
                  <h5 className="text-[#AAA]">
                    Scalene Works People Solution LLP#306, 100 feet Road,
                    BinnamangalaStage 1, IndiranagarBengaluru, Karnataka 560038
                  </h5>
                </AccordionContent>
                <AccordionContent>
                  <h2 className="text-[#505050], font-bold">Hyderabad</h2>
                  <h5 className="text-[#AAA]">
                    Scalene Works People Solution LLPVajram Esteva,
                    MarathahalliSarjapur Outer Ring
                    Road,Devarabisanahalli,Bellandur, Bengaluru, Karnataka
                    560103
                  </h5>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>United Kingdoms</AccordionTrigger>
                <AccordionContent>
                  <h2 className="text-[#505050], font-bold">United Kingdoms</h2>
                  <h5 className="text-[#AAA]">
                    Scalene Works People Solution LLPVajram Esteva,
                    MarathahalliSarjapur Outer Ring
                    Road,Devarabisanahalli,Bellandur, Bengaluru, Karnataka
                    560103
                  </h5>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Poland</AccordionTrigger>
                <AccordionContent>
                  <h2 className="text-[#505050], font-bold">Poland</h2>
                  <h5 className="text-[#AAA]">
                    Scalene Works People Solution LLPVajram Esteva,
                    MarathahalliSarjapur Outer Ring
                    Road,Devarabisanahalli,Bellandur, Bengaluru, Karnataka
                    560103
                  </h5>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Europe</AccordionTrigger>
                <AccordionContent>
                  <h2 className="text-[#505050], font-bold">Europe</h2>
                  <h5 className="text-[#AAA]">
                    Scalene Works People Solution LLPVajram Esteva,
                    MarathahalliSarjapur Outer Ring
                    Road,Devarabisanahalli,Bellandur, Bengaluru, Karnataka
                    560103
                  </h5>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex-1 h-full mt-8 lg:mt-0 lg:w-3/5">
            <Table>
              <TableBody>
                {/* ITEM #1 */}
                <TableRow
                  style={{
                    borderBottom: "none",
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell rowSpan={2} style={{ verticalAlign: "top" }}>
                    Products
                  </TableCell>
                  <TableCell>Human Capital Management</TableCell>
                  <TableCell>Payroll and Workflow management</TableCell>
                </TableRow>
                <TableRow
                  style={{
                    paddingBottom: "22px",
                    borderBottom: "2px solid #E5E5E5"
                  }}
                >
                  <TableCell>Talent Acquisition</TableCell>
                  <TableCell>Talent Management</TableCell>
                </TableRow>
                {/* ITEM #2 */}
                <TableRow
                  style={{
                    borderBottom: "none",

                    paddingBottom: "22px",
                  }}
                >
                  <TableCell rowSpan={3} style={{ verticalAlign: "top" }}>
                    Modules
                  </TableCell>
                  <TableCell>Recruit</TableCell>
                  <TableCell>Onboarding</TableCell>
                </TableRow>
                <TableRow
                  style={{
                    borderBottom: "none",
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell>Core HR</TableCell>
                  <TableCell>Payroll</TableCell>
                </TableRow>
                <TableRow
                  style={{
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell>Human Capital Management</TableCell>
                  <TableCell>Employee Verification</TableCell>
                </TableRow>
                {/* ITEM #3 */}
                <TableRow
                  style={{
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell style={{ verticalAlign: "top" }}>
                    Industries
                  </TableCell>
                  <TableCell>Banking & Financial Services</TableCell>
                  <TableCell>Healthcare</TableCell>
                </TableRow>
                {/* ITEM #4 */}
                <TableRow
                  style={{
                    borderBottom: "none",
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell rowSpan={2} style={{ verticalAlign: "top" }}>
                    Company
                  </TableCell>
                  <TableCell>Human Capital Management</TableCell>
                  <TableCell>Payroll and Workflow management</TableCell>
                </TableRow>
                <TableRow
                  style={{
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell>Talent Acquisition</TableCell>
                  <TableCell>Talent Management</TableCell>
                </TableRow>
                {/* ITEM #5 */}
                <TableRow
                  style={{
                    borderBottom: "none",
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell rowSpan={2} style={{ verticalAlign: "top" }}>
                    Products
                  </TableCell>
                  <TableCell>Human Capital Management</TableCell>
                  <TableCell>Payroll and Workflow management</TableCell>
                  
                </TableRow>
                <TableRow
                  style={{
                    paddingBottom: "22px",
                  }}
                >
                  <TableCell>Talent Acquisition</TableCell>
                  <TableCell>Talent Management</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </div>
        </div>
        <Separator />
        {/* Footer Bottom */}
        <div className="flex flex-col items-center py-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-normal lg:w-2/3">
            © 2023 Scalene Works, All rights reserved
          </p>
          <div className="flex flex-wrap items-stretch max-w-full mt-4 space-x-8 lg:justify-center lg:mt-0 lg:flex-nowrap">
            <div className="text-sm font-normal whitespace-nowrap">Brand</div>
            <div className="text-sm font-normal whitespace-nowrap">
              Customer Support
            </div>
            <div className="text-sm font-normal whitespace-nowrap">
              Cookie Policy
            </div>
            <div className="text-sm font-normal whitespace-nowrap">
              Privacy & GDPR Policy
            </div>
            <div className="text-sm font-normal whitespace-nowrap">
              Security Resources
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
