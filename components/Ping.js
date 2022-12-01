import Image from "next/image";
import image8 from "../public/image(8).png";
import image11 from "../public/image(11).png";
import image12 from "../public/image(12).png";
import image23 from "../public/image(23).png";
import Link from "next/link";

const Ping = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-32 flex justify-between">
      <div className="w-3/4 space-y-10 pr-44">
        <h2 className="text-4xl leading-normal font-bold">
          They’re consistent, and the communication is good.
        </h2>
        <p className="text-neutral-700">
          When I have a deadline, they would work extra hours on the weekend and
          after hours. Cinnamon gives the impression of being a smaller team
          that’s focused on customers.
        </p>

        <div className="flex gap-3">
          <Image alt="" width={80} src={image8} />
          <div>
            <h4 className="text-xl font-bold">Garin Toren,</h4>
            <h6>CEO, ping</h6>
          </div>
        </div>

        <div className="flex gap-x-10">
          <Link
            href={"/"}
            className="transform hover:-translate-y-3 duration-300"
          >
            <Image alt="" src={image11} />
          </Link>
          <Link
            href={"/"}
            className="transform hover:-translate-y-3 duration-300"
          >
            <Image alt="" src={image12} />
          </Link>
        </div>
      </div>
      <div className="w-1/4 pt-20 flex flex-col justify-between items-end">
        <Image alt="" src={image23} height={70} />
        <Link className=" text-indigo-600 underline underline-offset-2 font-bold uppercase" href={'/'}>  View case study</Link>
      </div>
    </div>
  );
};

export default Ping;
