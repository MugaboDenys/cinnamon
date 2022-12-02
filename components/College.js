import Image from "next/image";
import image9 from "../public/image(9).png";
import image26 from "../public/image(26).png";
import Button from "./Button";

const College = () => {
  return (
    <div className="relative">
        <div className="max-w-screen-lg mx-auto px-5 md:px-0 py-20 md:py-44 md:flex gap-x-10 items-center">
      <div className="md:w-1/3 mr-20 ">
        <Image alt="" src={image9} />
      </div>
      <div className="md:w-96 pt-10 md:pt-0">
        <p>
          Seize the unique opportunity to participate in a wide range of courses
          conducted by professionals with an impeccable reputation in the
          digital industry.
        </p>
        <div className="mt-10">
          <Button name={"See How It Works"} />
        </div>
        <Image alt="" src={image26} height={400} className="hidden md:absolute bottom-0 right-0"/>
      </div>
    </div>
    </div>
  );
};

export default College;
