import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "@/components/Container";

export default function Talent() {
  return (
    <>
      <Container
        className="flex flex-col w-full gap-6 "
        style={{
          background: "linear-gradient(92deg, #9848FF 20.4%, #FF008E 90.29%)",
        }}
      >
        <section className="flex flex-col items-center justify-center py-6 md:flex-row ">
          <div className="flex items-center justify-center pr-6">
            <h2 className="text-3xl font-medium text-white md:text-6xl">
              Talent to drive your business forward
            </h2>
          </div>
          <div className="">
            <div className="grid grid-cols-2 grid-rows-3 gap-4">
              <Link href="/" className="p-4 text-white">
                The Scalene Difference
              </Link>
              <Link href="/" className="p-4 text-white">
                Regional Experts
              </Link>
              <Link href="/" className="p-4 text-white">
                RPO Explained
              </Link>
              <Link href="/" className="p-4 text-white">
                Get in Touch
              </Link>
              <Link href="/" className="p-4 text-white">
                Our Services
              </Link>
              <Link href="/" className="p-4 text-white">
                Join Us
              </Link>
            </div>
          </div>
        </section>
      </Container>

      {/* STATS  */}
      <Container>
        <h1 className="text-3xl font-normal md:text-5xl">
          A cutting-edge talent solutions organisation with
          <span className="text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
            <span> </span>10+ years of experience
          </span>
          , global reach, and a team of seasoned experts, ready to empower the
          next gen.
        </h1>
        <div className="flex flex-wrap items-start w-full gap-2 pt-16 mx-auto md:gap-20 md:flex-nowrap">
          <div className="flex flex-col w-1/2 gap-2 text-left lg:w-1/4">
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
              6,800+
            </h3>
            <p className="text-left text-gray-600">
              Diverse talented individuals with a global presence
            </p>
          </div>
          <div className="flex flex-col w-1/2 gap-2 text-left lg:w-1/4">
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
              8+
            </h3>
            <p className="text-left text-gray-600">
              Global presence in India, USA, UK, and Poland
            </p>
          </div>
          <div className="flex flex-col w-1/2 gap-2 text-left lg:w-1/4">
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
              8+
            </h3>
            <p className="text-left text-gray-600">
              Healthcare, IT and BFSI industry
            </p>
          </div>
          <div className="flex flex-col w-1/2 gap-2 text-left lg:w-1/4">
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
              200+
            </h3>
            <p className="text-left text-gray-600">
              Years of combined experience in talent management
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
