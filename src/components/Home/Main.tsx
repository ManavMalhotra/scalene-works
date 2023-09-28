import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import hero from "/public/HeroImage.png";
import supportAgent from "/public/support-agent.svg";
import Container from "@/components/Container";

export default function Main() {
  return (
    /* Main Section  */
    <Container className="flex flex-col items-center justify-center align-middle md:flex-row">
      {/* LEFT SIDE */}
      <section className="items-start max-w-lg p-4 pt-8 md:pt-32">
        {/* SECTION TEXT */}
        <div className="py-11">
          <h3 className="mb-4 text-sm text-left opacity-50 md:text-lg">
            #because Scalene Works
          </h3>
          <h1
            className="mb-4 text-3xl font-bold text-left md:text-5xl md:text-left bg-clip-text"
            style={{
              background:
                "linear-gradient(93deg, #9747FF 5.96%, #5557DF 91.22%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Global Talent Hunt.
          </h1>
          <h2 className="font-medium text-black">
            We give your business a momentum to drive business growth
          </h2>
        </div>

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
        </div>
      </section>

      {/* HERO IMAGE  */}
      <div className="w-full">
        <Image
          src={hero}
          alt="hero design"
          width="680"
          height="592"
          className="object-contain min-w-[10] w-96 md:w-[680px]"
        />
        {/* w-[680] h-[592] */}
      </div>
    </Container>
  );
}
