import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";

import { ChevronRight, ArrowRight } from "lucide-react";

import accenture from "/public/accenture.png";
import capegami from "/public/capegami.png";
import genericElectric from "/public/generalElectric.png";
import kpmg from "/public/kpmg.png";
import casestudies from "/public/casestudies.svg";

export default function CaseStudies() {
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
    <Container className="flex flex-col gap-4">
      <h3 className="text-sm font-bold text-[#FF008E]">CASE STUDIES</h3>

      <section className="flex flex-col items-center gap-12 md:flex-row ">
        <div className="w-1/2">
          <h2 className="text-3xl font-medium md:text-3xl">
            Drive momentum with our Consistent results
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-lg font-medium">
            Worried about hiring with specific skills and experience ? We cover
            a wide range of industries & Companies
          </p>
        </div>
      </section>
      <div className="flex flex-col-reverse justify-between w-full gap-4 pt-8 lg:flex-row">
        <section className="flex-[4] gap-8 flex flex-col">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
              6,800+
            </h3>
            <p className="text-sm font-medium ">
              HR Analytics ScaleneWorks Behavioral Modeling to Predict Renege
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text ">
              200+
            </h3>
            <p className="text-sm font-medium">
              HR Analytics ScaleneWorks Behavioral Modeling to Predict Renege
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text ">
              8+
            </h3>
            <p className="text-sm font-medium">
              HR Analytics ScaleneWorks Behavioral Modeling to Predict Renege
            </p>
          </div>
        </section>
        <section className="flex-[3]">
          <Image
            src={casestudies}
            width="1116"
            height="478"
            alt="case studies"
            className="max-w-[1116px] w-[500px] min-w-[400px]"
          />
        </section>
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
                className="object-contain min-w-[10] h-10 md:h-16 opacity-50"
              />
            </div>
          )
        )}
      </div>
    </Container>
  );
}
