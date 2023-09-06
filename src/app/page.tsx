import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-row gap-3">
        <div>
          <h3 className="text-3xl font-bold">#because Scalene Works</h3>
          <h1 className="text-6xl font-bold">
            Bridging a million distant dream.
          </h1>
        </div>
        <div className="absolute top-0 right-0 z-[-1]">
          <Image
            src="/hero.svg"
            alt="hero design"
            className=""
            width="800"
            height="500"
          />
        </div>
      </div>
    </main>
  );
}
