import Image from "next/image";


const Servicecard = ({image, title, paragraph}) => {
  return (
    <div className="text-white">
      <Image src={image} alt="cardIcon" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-neutral-400 ">
        {paragraph}
      </p>
    </div>
  );
};

export default Servicecard;
