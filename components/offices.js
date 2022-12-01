import Officescard from "./Officescard";
import location from "../public/location.svg";
import image from "../public/image.jpeg";
import image1 from "../public/image(1).jpeg";
import image5 from "../public/image(5).jpeg";
import image11 from "../public/image(11).png";
import image12 from "../public/image(12).png";
import Link from "next/link";
import Image from "next/image";

const Offices = () => {
  return (
    <div className="pl-72 mx-auto py-32">
      <h2 className="text-5xl font-bold">Our offices</h2>
      <div className="pt-10 flex gap-x-5 overflow-x-auto">
        <Officescard
          image={image}
          name={"Zagreb"}
          paragraph={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
        />
        <Officescard
          image={image1}
          name={"New York"}
          paragraph={"500 7th Ave, New York, NY 10018, United States"}
        />
        <Officescard
          image={image5}
          name={"Belgrade"}
          paragraph={"Požeška 58 11000, Belgrade, Serbia"}
        />
      </div>
      <div className="flex pt-10 gap-x-10">
        <Link
          href={"/"}
          className="transform  duration-300"
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
  );
};

export default Offices;
