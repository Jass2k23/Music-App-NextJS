import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-40 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          {`Dive into our comprehensive music courses and transform your musical journey today. Whether your're a beginner or looking to refine your skills, join us to unlock your true potential.`}
        </p>
        <div className="mt-4">
          <Link href="/">Explore courses</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
