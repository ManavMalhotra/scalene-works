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

export default function Footer1() {
  return (
    <div className="bg-[#f7f7fe]">
      <div className="container px-5 py-10 mx-auto">
        {/* Footer Top */}
        <div className="border-b border-[#24255e80] pb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Logo */}
            <Image
              src={logo}
              alt="logo"
              width="215"
              height="46"
              className="h-20 w-60"
            />
            <div className="flex mr-10 space-x-12">
              {/* Contact Icons */}
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <p className="text-lg font-normal text-black underline">
                  <span className="font-bold">hello@</span>scaleneworks.com
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <p className="text-lg font-normal text-black underline">
                  Request a call back
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <BsWhatsapp className="w-5 h-5" />
                <p className="text-lg font-normal text-black underline">
                  Whatsapp Us
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Middle */}
        <div className="flex py-8 lg:flex lg:items-start lg:justify-between">
          <div className="w-full pr-0 lg:w-1/2 lg:pr-20">
            <p className="text-base leading-7 text-black">
              ScaleneWorks is a global talent solutions organization with over a
              decade of experience. We specialize in providing customized HR
              solutions to top-tier organizations in the IT and BFSI industries.
              With our innovative approach, diverse talent pool, and
              client-centric focus, we deliver exceptional results for MNCs and
              job seekers alike.
            </p>
            <div className="flex mt-6 space-x-4">
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
                  <h2>Bangalore</h2>
                  <h5>
                    Scalene Works People Solution LLP#306, 100 feet Road,
                    BinnamangalaStage 1, IndiranagarBengaluru, Karnataka 560038
                  </h5>
                </AccordionContent>
                <AccordionContent>
                  <h2>Hyderabad</h2>
                  <h5>
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
                  <h2>United Kingdoms</h2>
                  <h5>
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
                  <h2>Poland</h2>
                  <h5>
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
                  <h2>Europe</h2>
                  <h5>
                    Scalene Works People Solution LLPVajram Esteva,
                    MarathahalliSarjapur Outer Ring
                    Road,Devarabisanahalli,Bellandur, Bengaluru, Karnataka
                    560103
                  </h5>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex-1 mt-8 lg:mt-0 lg:w-1/2 ">
            <div className="flex flex-col space-y-4">
              {/* ITEM #1 */}
              <div className="flex flex-row space-x-3">
                <h3>Products</h3>
                <div className="flex flex-col items-start ">
                  <h3>Human Capital Management</h3>
                  <h3>Payroll and Workflow management</h3>
                </div>
                <div className="flex flex-col items-start ">
                  <h3>Talent Acquisition</h3>
                  <h3>Talent Management</h3>
                </div>
              </div>
              <div className="flex flex-row space-x-3">
                <h3>Products</h3>
                <div className="flex flex-col items-start ">
                  <h3>Human Capital Management</h3>
                  <h3>Payroll and Workflow management</h3>
                </div>
                <div className="flex flex-col items-start ">
                  <h3>Talent Acquisition</h3>
                  <h3>Talent Management</h3>
                </div>
              </div>
              <div className="flex flex-row space-x-3">
                <h3>Products</h3>
                <div className="flex flex-col items-start ">
                  <h3>Human Capital Management</h3>
                  <h3>Payroll and Workflow management</h3>
                </div>
                <div className="flex flex-col items-start ">
                  <h3>Talent Acquisition</h3>
                  <h3>Talent Management</h3>
                </div>
              </div>
              <div className="flex flex-row space-x-3">
                <h3>Products</h3>
                <div className="flex flex-col items-start ">
                  <h3>Human Capital Management</h3>
                  <h3>Payroll and Workflow management</h3>
                </div>
                <div className="flex flex-col items-start ">
                  <h3>Talent Acquisition</h3>
                  <h3>Talent Management</h3>
                </div>
              </div>
              <div className="flex flex-row space-x-3">
                <h3>Products</h3>
                <div className="flex flex-col items-start ">
                  <h3>Human Capital Management</h3>
                  <h3>Payroll and Workflow management</h3>
                </div>
                <div className="flex flex-col items-start ">
                  <h3>Talent Acquisition</h3>
                  <h3>Talent Management</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="py-4 border-t border-[#24255e80] flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[#000000bf] text-sm font-normal lg:w-2/3">
            © 2023 Scalene Works, All rights reserved
          </p>
          <div className="flex mt-4 space-x-8 lg:mt-0">
            <div className="text-[#000000bf] text-sm font-normal">Brand</div>
            <div className="text-[#000000bf] text-sm font-normal">
              Customer Support
            </div>
            <div className="text-[#000000bf] text-sm font-normal">
              Cookie Policy
            </div>
            <div className="text-[#000000bf] text-sm font-normal">
              Privacy & GDPR Policy
            </div>
            <div className="text-[#000000bf] text-sm font-normal">
              Security Resources
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
