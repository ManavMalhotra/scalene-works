import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import supportAgent from "../../public/support-agent.svg";



export default function Home() {
  return (
    <main className="flex flex-row items-center gap-16 p-24 sm:flex-wrap ">
      
      <div className="max-w-3xl px-10 py-12">
        <h3 className="mb-10 text-2xl font-medium opacity-50 ">
          #because Scalene Works
        </h3>
        <h1 className="mb-8 text-5xl font-bold">
          Bridging a million distant dream.
        </h1>

        <div className="flex flex-row items-center gap-4">
          <Button
            variant="outline"
            className="text-xl text-vio let-700 rounded-3xl"
          >
            <Image
              src={supportAgent}
              alt="support agent"
              width="30"
              height="30"
              className="fill-black"
            />
            Contact Sales
          </Button>
          
          <Button variant="outline" className="text-xl rounded-3xl">
            Recruit <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center h-auto max-w-xs gap-4 border rounded-2xl px-11 py-9 bg-slate-50">
        <h4 className="text-2xl font-bold text-fuchsia-600">
          A million dreams to reality.
        </h4>

        <div className="flex flex-row gap-3">
          <div className="text-white bg-black h-9 w-9 text-[1.5rem] text-center">
            0
          </div>
          <div className="text-white bg-black h-9 w-9 text-[1.5rem] text-center">
            0
          </div>
          <div className="text-white bg-black h-9 w-9 text-[1.5rem] text-center">
            6
          </div>
          <div className="text-white bg-black h-9 w-9 text-[1.5rem] text-center">
            8
          </div>
          <div className="text-white bg-black h-9 w-9 text-[1.5rem] text-center">
            0
          </div>
          <div className="text-white bg-black h-9 w-9 text-[1.5rem] text-center">
            0
          </div>
        </div>

        <Link href="/learnmore" className="mx-2 my-auto text-fuchsia-600">
          LearnMore
        </Link>

        <p className="text-xl font-normal">
          Scalene Works is on a mission to help bridge a million dream, and
          connect job seekers to job providers seemlessly.
        </p>

        <Button className="mt-16 text-xl text-white rounded-3xl bg-fuchsia-600">
          <Link href="/signup">Join This Mission</Link>
        </Button>
      </div>
      <div className="absolute top-0 right-8 z-[-1]">
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
