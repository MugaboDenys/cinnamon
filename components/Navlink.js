import Link from "next/link";

const Navlink = ({ name, color }) => {
  return (
    <Link
      href={"/"}
      className={`hover:text-indigo-600 text-${color} hover:underline duration-300 font-medium`}
    >
      {name}
    </Link>
  );
};

export default Navlink;
