import Image from "next/image";
import image3 from "../public/image(3).jpeg"
import Button from "./Button";

const Whoweare = () => {
  return (
    <div className="bg-gray-100 relative">
      <div className=" max-w-screen-lg mx-auto px-5 md:px-0 py-20 md:py-56">
        <div className="md:w-96">
          <h2 className="text-4.5xl md:text-5xl font-bold">Who we are</h2>
          <p className="md:pt-10 py-5">
            Meet our international teams made up of 86 innovators, branched into
            8 departments, that influence the market throughout 20 different
            countries.
          </p>
          <Image alt="" className="md:absolute pr-20 md:pr-0 right-0 bottom-36" src={image3} height={800}/>
        </div>
        <div className="text-lg pt-16 font-bold hidden md:flex flex-col w-3/4 flex-wrap max-h-80 gap-y-7">
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
        <div className="md:my-32 my-10">
        <Button name={'Read About Us'}/>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
