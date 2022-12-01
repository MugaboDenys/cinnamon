import Button from "./Button";
import image24 from "../public/image(24).png"
import Image from "next/image";

const Agile = () => {
  return (
    <div className="bg-gray-100 relative">
      <div className="max-w-screen-lg mx-auto py-52 flex justify-between">
        <div className="w-1/2">
          <h2 className="leading-normal w-96 text-6xl font-bold">
            Agile team on demand
          </h2>
          <Image className="absolute -bottom-3 right-0" width={370} src={image24} alt=""/>
        </div>
        <div className="space-y-10 w-1/2 px-16">
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
