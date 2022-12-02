import Image from "next/image";
import Button from "./Button";
import image13 from "../public/image(13).png"

const Prefooter = () => {
  return (
    <div className="bg-gray-100 md:py-44 py-20 relative">
      <div className="md:w-2/5 mx-auto flex flex-col items-center">
        <h2 className="md:text-5xl text-4.5xl px-10 font-bold text-center">
          <span className="hidden md:block">Have a project in mind?</span> Let's work together.
        </h2>
        <div className="mt-16 ">
          <Button name={"Contact Us"} />
        </div>
        <Image alt="" src={image13} className="absolute h-24 w-auto md:h-64 left-0 bottom-0"/>
      </div>
    </div>
  );
};

export default Prefooter;
