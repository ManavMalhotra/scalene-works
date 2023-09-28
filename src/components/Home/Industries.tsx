import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import Container from "@/components/Container";

import { ChevronRight, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function industries() {
  return (
    <Container className="flex flex-col gap-4 ">
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
      <section className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
        {/* #1 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Aviation & Transportation <ChevronRight />
          </div>
        </div>
        {/* #2 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Automotive <ChevronRight />
          </div>
        </div>
        {/* #3 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Consumer Products <ChevronRight />
          </div>
        </div>
        {/* #4 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Energy & Natural Resources <ChevronRight />
          </div>
        </div>
        {/* #5 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Financial Services <ChevronRight />
          </div>
        </div>
        {/* #6 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Healthcare <ChevronRight />
          </div>
        </div>
        {/* #7  */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Information Technology <ChevronRight />
          </div>
        </div>
        {/* #8 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between flex-1 font-medium transition-all">
            Infrastructure <ChevronRight />
          </div>
        </div>
        {/* #9 */}
        <div>
          <Separator />
          <div className="flex items-center justify-between font-medium transition-all">
            Life Sciences <ChevronRight />
          </div>
        </div>
      </section>
    </Container>
  );
}
