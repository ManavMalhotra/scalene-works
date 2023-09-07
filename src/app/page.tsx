import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import supportAgent from "../../public/support-agent.svg";

export default function Home() {
  const styles = {
    "text-gradient": {
      background: "linear-gradient(93deg, #9747FF 5.96%, #FF008E 91.22%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  };
  return (
    <main className="md:p-24 md:items-center md:gap-16 md:flex-row md:flex sm:flex-wrap sm:flex-col sm:content-center ">
      <div className="p-10 md:max-w-3xl md:px-10 pb-72 sm:pb-10 lg:pb-60">
        <h3 className="mb-10 font-medium opacity-50 md:text-2xl sm:text-xl ">
          #because Scalene Works
        </h3>
        <h1 className="mb-8 font-bold text-transparent md:text-7xl sm:text-3xl bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text">
          Bridging a million distant dream.
        </h1>

        <div className="flex flex-row items-center gap-4">
          <Link href="/contact">
            <Button
              variant="outline"
              className="md:text-xl let-700 rounded-3xl sm:text-base"
            >
              <Image
                src={supportAgent}
                alt="support agent"
                width="30"
                height="30"
                className="mr-1 fill-black"
              />
              Contact Sales
            </Button>
          </Link>

          <Link href="/recruit">
            <Button
              variant="outline"
              className="md:text-xl rounded-3xl sm:text-base"
            >
              Recruit <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center h-auto gap-4 border max-w-[348px] max-h-[494px] rounded-2xl px-11 py-9 bg-slate-50">
        <h4 className="font-bold text-[32px] text-fuchsia-600">
          A million dreams to reality.
        </h4>

        <div className="flex flex-row gap-3">
          <div className="flex items-center w-8 h-8 p-2 m-auto text-xl text-center text-white bg-black">
            0
          </div>
          <div className="flex items-center w-8 h-8 p-2 m-auto text-xl text-center text-white bg-black">
            0
          </div>
          <div className="flex items-center w-8 h-8 p-2 m-auto text-xl text-center text-white bg-black">
            0
          </div>
          <div className="flex items-center w-8 h-8 p-2 m-auto text-xl text-center text-white bg-black">
            6
          </div>
          <div className="flex items-center w-8 h-8 p-2 m-auto text-xl text-center text-white bg-black">
            8
          </div>
          <div className="flex items-center w-8 h-8 p-2 m-auto text-xl text-center text-white bg-black">
            0
          </div>
          <div className="flex items-center w-8 h-8 p-2 m-auto text-xl text-center text-white bg-black">
            0
          </div>
        </div>

        <Link
          href="/learnmore"
          className="mx-2 my-auto text-xs text-fuchsia-600"
        >
          Learnmore
        </Link>

        <p className="text-xl font-normal ">
          Scalene Works is on a mission to help bridge a million dream, and
          connect job seekers to job providers seemlessly.
        </p>

        <Button className="mt-16 text-xl text-white rounded-3xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 backdrop-blur-40">
          <Link href="/signup">Join This Mission</Link>
        </Button>
      </div>
      <div className="absolute md:block top-0 right-8 z-[-1] sm:hidden">
        <Image
          src="/hero.svg"
          alt="hero design"
          className=""
          width="680"
          height="590"
        />
      </div>
    </main>
  );
}
