import Image from "next/image";
import Link from "next/link";


const Design = ({bg, image, product, description, paragraph}) => {
  const colors = ["limegreen", "purple", "banana"];
  
  return (
    <div className="bg-white">
      <div className="max-w-screen-lg mx-auto px-5 md:px-0 md:py-20 py-10">
        <div className={`${bg} h-44 md:h-98 w-full transform overflow-clip `}>
          <Link href={"/"}>
            <Image
              className=" hover:scale-110 duration-500"
              alt=""
              src={image}
            />
          </Link>
        </div>
        <div className="pt-10 uppercase md:text-xsm text-xs font-bold text-neutral-500 flex gap-5">
          <h3>Product design</h3>
          <h3>{product}</h3>
        </div>
        <div className="md:w-1/2 md:pr-10 pt-5">
          <Link className="md:text-4xl text-3xl font-bold " href={"/"}>
            {description}
          </Link>
        </div>
        <div className="md:w-3/4">
          <p className="text-base font-medium pt-5 text-neutral-500">
           {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
