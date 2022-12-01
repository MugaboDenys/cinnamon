import Link from "next/link";

const Footerlink = ({ name }) => {
  return (
    <Link
      className="text-neutral-400 font-medium hover:text-neutral-100 duration-300"
      href={"/"}
    >
      {name}
    </Link>
  );
};

export default Footerlink;
