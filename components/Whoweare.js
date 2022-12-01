import Image from "next/image";
import image3 from "../public/image(3).jpeg"

const Whoweare = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-screen-lg mx-auto py-44">
        <div>
          <h2>Who we are</h2>
          <p>
            Meet our international teams made up of 86 innovators, branched into
            8 departments, that influence the market throughout 20 different
            countries.
          </p>
          <Image alt="" src={image3}/>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
