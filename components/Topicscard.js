import Image from "next/image";
import Link from "next/link";

const Topicscard = ({ image, title, author, date, time, topic }) => {
  const dot = "text-4xl font-bold text-orange-300";
  return (
    <div className="min-w-max md:min-w-fit">
      <Link href={"/"} className="text-black hover:text-indigo-600">
        <Image alt="" src={image} className="w-48 md:w-80" />
        <h5 className="text-sm font-bold pt-3">{title}</h5>
        <h4 className="text-neutral-600 pt-3 w-48 md:w-full">
          <span className="hidden md:block">{author}</span> <span className={dot}>.</span> {date}{" "}
          <span className={dot}>.</span> {time}
        </h4>
        <h3 className="text-2xl font-bold pt-3 w-64 md:w-80">{topic}</h3>
      </Link>
    </div>
  );
};

export default Topicscard;
