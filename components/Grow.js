import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import image from "../public/image.webp";

const Grow = () => {
  return (
    <div className="bg-noise bg-zinc-900 md:py-32 py-20 pt-20 px-5 md:px-0">
      <div className="max-w-screen-lg mx-auto md:flex justify-between gap-x-44">
        <div className="md:w-1/2 md:space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            We’re growing
          </h2>
          <p className="text-neutral-200 pt-5 md:pt-0">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </p>
          <div className="mt-12 md:mt-0">
            <Button name={"See All Positions"} />
          </div>
        </div>
        <div className="md:w-1/2 text-2xl pt-20 md:pt-5 font-semibold text-white flex flex-col items-end">
          <Link
            href={"/"}
            className="inline-flex justify-between gap-x-3 border-b-2 group border-neutral-700 py-5 w-full"
          >
            Node.js Backend Developer{" "}
            <span>
              <Image
                alt=""
                className="group-hover:-translate-y-1 duration-300"
                width={50}
                src={image}
              />
            </span>
          </Link>
          <Link
            href={"/"}
            className="inline-flex group justify-between gap-x-3 border-b-2 border-neutral-700 py-5 w-full"
          >
            Flutter Developer{" "}
            <span>
              <Image
                alt=""
                className="group-hover:-translate-y-1 duration-300"
                width={50}
                src={image}
              />
            </span>
          </Link>
          <Link
            href={"/"}
            className="inline-flex group justify-between gap-x-3 border-b-2 border-neutral-700 py-5 w-full"
          >
            Flutter Developer{" "}
            <span>
              <Image
                alt=""
                className="group-hover:-translate-y-1 duration-300"
                width={50}
                src={image}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grow;
