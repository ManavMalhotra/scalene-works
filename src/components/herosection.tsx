import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import supportAgent from "../../public/support-agent.svg";

import hero from "../../public/heroimg.svg";
import accenture from "../../public/accenture.png";
import capegami from "../../public/capegami.png";
import genericElectric from "../../public/generalElectric.png";
import kpmg from "../../public/kpmg.png";

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
    <div className="flex flex-col items-center px-32">
      <main className="flex flex-row ">
        {/* SECTION TEXT */}
        <section className="max-w-3xl p-4 pt-32">
          <h3 className="mb-4 text-sm text-left opacity-50">
            #because Scalene Works
          </h3>
          <h1
            className="mb-4 text-3xl font-bold text-center text-transparent md:text-6xl xsm:text-2xl bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 md:text-left bg-clip-text"
            style={{ lineHeight: "1.3" }}
          >
            Bridging a million distant dreams.
          </h1>

          <div className="flex flex-col items-center gap-4 md:flex-row">
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
        <div className="top-0 right-8 md:block z-[-9]">
          <Image
            src={hero}
            alt="hero design"
            width="680"
            height="592"
            className="w-[680] h-[592]"
          />
        </div>

        {/* CARD CONTAINER  */}
        {/* <div className="w-[348px] h-[455px]">
        <section className="flex flex-col items-center max-w-full max-h-full gap-4 p-4 border rounded-t-2xl md:p-11 bg-slate-50">
          <h4 className="text-3xl font-bold text-left md:text-3xl text-fuchsia-600">
            A million dreams to reality.
          </h4>

          <div className="flex flex-row justify-center gap-2 md:justify-start">
            {Array.from({ length: 7 }, (_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-6 h-6 p-1 text-sm text-center text-white bg-black md:w-8 md:h-8 md:text-xl"
              >
                {index === 3 ? 6 : 0}
              </div>
            ))}
          </div>

          <Link
            href="/learnmore"
            className="mx-2 my-2 text-sm text-center md:text-xs text-fuchsia-600"
          >
            Learn more
          </Link>

          <p className="text-sm font-normal text-left md:text-base lg:text-base">
            Scalene Works is on a mission to help bridge a million dreams and
            connect job seekers to job providers seamlessly.
          </p>

          <Button className="mt-4 mb-4 text-base text-white md:mt-4 md:text-xl rounded-3xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 backdrop-blur-40">
            <Link href="/signup">Join This Mission</Link>
          </Button>
        </section>
      </div> */}
      </main>

      {/* TRUSTED PARTNERS  */}
      {/* TRUSTED PARTNERS  */}
      <div
        className="flex flex-row items-center gap-20 "
        style={{
          border: "4px solid transparent",
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(to right, white, darkorchid) border-box",
          borderRadius: "1rem",
        }}
      >
        <div className="flex flex-col items-start text-left">
          <h3 className="mb-10 text-3xl font-medium opacity-50 md:text-3xl sm:text-xl">
            Trusted by MNC&apos;s globally
          </h3>
          <Link href="/learnmore">
            <div className="flex flex-row items-center justify-between gap-4 align-middle ">
              <h6 className="text-lg text-indigo-900 ">Learn More</h6>
              <ArrowRight className="text-indigo-900" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row gap-8 px-6">
          {Object.keys(companyLogo).map((key) => (
            <div
              key={key}
              className="relative flex items-center w-auto transition-transform h-52 transform-gpu hover:scale-110 hover:grayscale-0"
            >
              <Image
                src={companyLogo[key].src}
                alt={companyLogo[key].alt}
                className="object-contain w-auto h-16 filter grayscale hover:grayscale-0 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
