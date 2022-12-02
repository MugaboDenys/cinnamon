import Image from "next/image";


const Servicecard = ({image, title, paragraph}) => {
  return (
    <div className="text-white space-y-5 md:space-y-0">
      <Image src={image} alt="cardIcon" className="w-12 md:w-full"/>
      <h2 className="md:text-2xl text-xl font-bold">{title}</h2>
      <p className="text-neutral-200 ">
        {paragraph}
      </p>
    </div>
  );
};

export default Servicecard;
