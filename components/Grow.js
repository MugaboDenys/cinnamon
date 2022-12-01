import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import image from "../public/image.webp"

const Grow = () => {
  return (
    <div className="bg-noise bg-zinc-900 py-32">
      <div className="max-w-screen-lg mx-auto flex justify-between gap-x-44">
        <div className="w-1/2 space-y-10">
          <h2 className="text-5xl font-bold text-white">We’re growing</h2>
          <p className="text-neutral-400">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </p>
          <Button name={"See All Positions"} />
        </div>
        <div className="w-1/2 text-2xl pt-5 font-semibold text-white flex flex-col items-end">
          <Link href={"/"} className="inline-flex justify-between gap-x-3 border-b-2 border-neutral-700 py-5 w-full">
            Node.js Backend Developer{" "}
            <span>
              <Image alt="" width={50} src={image}/>
            </span>
          </Link>
          <Link href={"/"} className="inline-flex justify-between gap-x-3 border-b-2 border-neutral-700 py-5 w-full">
          Flutter Developer{" "}
            <span>
              <Image alt="" width={50} src={image}/>
            </span>
          </Link>
          <Link href={"/"} className="inline-flex justify-between gap-x-3 border-b-2 border-neutral-700 py-5 w-full">
          Flutter Developer{" "}
            <span>
              <Image alt="" width={50} src={image}/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grow;
