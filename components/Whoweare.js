import Image from "next/image";
import image3 from "../public/image(3).jpeg"
import Button from "./Button";

const Whoweare = () => {
  return (
    <div className="bg-gray-100 relative">
      <div className=" max-w-screen-lg mx-auto py-56">
        <div className="w-96">
          <h2 className="text-5xl font-bold">Who we are</h2>
          <p className="pt-10">
            Meet our international teams made up of 86 innovators, branched into
            8 departments, that influence the market throughout 20 different
            countries.
          </p>
          <Image alt="" className="absolute right-0 bottom-36" src={image3} height={800}/>
        </div>
        <div className="text-lg pt-16 font-bold flex flex-col w-3/4 flex-wrap max-h-80 gap-y-7">
            <h3>Product design</h3>
            <h3>Web development</h3>
            <h3>Mobile development</h3>
            <h3>Quality assurance</h3>
            <h3>Marketing</h3>
            <h3>Project management</h3>
            <h3>Human resources</h3>
            <h3>Sales</h3>
            <h3>Fluffy friends</h3>
        </div>
        <div className="mt-32">
        <Button name={'Read About Us'}/>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
