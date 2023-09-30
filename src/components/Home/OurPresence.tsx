import Container from "../Container";
import Image, { StaticImageData } from "next/image";
import ourPresence from "/public/regions.png";
import { Button } from "../ui/button";

export default function OurPresence() {
  return (
    <Container className="grid grid-cols-3 grid-rows-2 gap-20">
      <div>
        <h3 className="text-2xl font-bold text-[#59DCAA]">Our Presence</h3>
        <p className="text-xl font-medium text-black py-9">
          Worried about hiring with specific skills and experience ? We cover a
          wide range of industries & Companies
        </p>
      </div>

      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex items-end justify-normal"
            style={{ position: "relative" }}
            key={i}
          >
            <Image
              src={ourPresence}
              alt="Our Presence"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="z-10 w-full mx-auto ">
              <h1 className="px-5 mb-4 text-4xl font-semibold text-white">
                Asia Pacific
              </h1>
              <div className="flex flex-row justify-center">
                <Button
                  className="whitespace-nowrap flex-[1] text-xl text-white bg-transparent border border-solid border-white hover:bg-white hover:text-black"
                  style={{
                    padding: "24px",
                  }}
                >
                  Learn More
                </Button>
                <Button
                  className="whitespace-nowrap flex-[1] text-xl text-white bg-transparent border border-solid border-white hover:bg-white hover:text-black"
                  style={{
                    padding: "24px",
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
}
