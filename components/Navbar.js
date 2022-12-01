import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-dark.svg";
import play from "../public/play-1.png";
import Button from "./Button";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="bg-white fixed z-40 top-0 left-0 right-0">
      <div className="max-w-screen-lg mx-auto   py-5 flex items-center justify-between font-Montserrat">
        <div>
          <Image src={logo} height={20} alt="" />
        </div>
        <div className="flex gap-7 items-center">
          <Navlink name={"Products"} />
          <Navlink name={"Services"} />
          <Navlink name={"About Us"} />
          <Navlink name={"Careers"} />
          <Navlink name={"Blog"} />
          <div>
            <Link href={"/"}>
              <Image
                alt=""
                src={play}
                className="w-10 border-2 border-black p-2 rounded-full"
              />
            </Link>
          </div>
          <Button name={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
