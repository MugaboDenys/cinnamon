import Link from "next/link";

const Navlink = ({ name }) => {
  return (
    <Link
      href={"/"}
      className="hover:text-indigo-600 hover:underline duration-300 font-medium"
    >
      {name}
    </Link>
  );
};

export default Navlink;
