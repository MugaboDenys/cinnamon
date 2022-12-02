import Button from "./Button";
import image24 from "../public/image(24).png"
import Image from "next/image";

const Agile = () => {
  return (
    <div className="bg-gray-100 relative">
      <div className="max-w-screen-lg mx-auto px-5 md:px-0 md:py-52 py-20 md:flex justify-between">
        <div className="md:w-1/2">
          <h2 className="leading-normal md:w-96 text-4xl md:text-6xl font-bold">
            Agile team on demand
          </h2>
          <Image className="md:absolute py-10 md:w-96 w-72 -bottom-3 right-0"  src={image24} alt=""/>
        </div>
        <div className="space-y-10 md:w-1/2 md:px-16">
          <p className="text-neutral-600 ">
            By hiring and managing talented people with skills specific to your
            project, we build you a team that’s accomplished, agile and scalable
            in both directions.
          </p>
          <Button name={'See How It Works'}/>
        </div>
      </div>
    </div>
  );
};

export default Agile;
