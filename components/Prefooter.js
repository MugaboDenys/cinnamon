import Image from "next/image";
import Button from "./Button";
import image13 from "../public/image(13).png"

const Prefooter = () => {
  return (
    <div className="bg-gray-100 py-44 relative">
      <div className="w-2/5 mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center">
          Have a project in mind? Let's work together.
        </h2>
        <div className="mt-16 ">
          <Button name={"Contact Us"} />
        </div>
        <Image alt="" src={image13} height={300} className="absolute left-0 bottom-0"/>
      </div>
    </div>
  );
};

export default Prefooter;
