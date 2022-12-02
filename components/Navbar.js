import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/logo-dark.svg";
import logo1 from "../public/logo-white.svg"
import play from "../public/play.png";
import playblue from "../public/playblue.png";
import Button from "./Button";
import Navlink from "./Navlink";
import menudark from "../public/mobile-menu-dark.svg"
import menulight from "../public/mobile-menu-light.svg"

const Navbar = () => {

  const [scroll, setScroll] = useState(false);
  const scrolled = ()=> window.scrollY > 10 ? setScroll(true) : setScroll(false);
  useEffect(() => window.addEventListener('scroll', scrolled), [] )
  

  return (
    <div className={`${scroll? 'bg-white' : 'bg-transparent'} fixed z-40 top-0 left-0 right-0`}>
      <div className="max-w-screen-lg mx-auto  md:px-0 px-5  py-5 flex items-center justify-between font-Montserrat">
        <Link href={'/'}>
        <Image src={scroll ? logo  : logo1} height={20} alt="" />
        </Link>
        <div className="hidden md:flex gap-7 items-center">
          <Navlink name={"Products"} color = {scroll ? "black" : "white"}/>
          <Navlink name={"Services"} color = {scroll ? "black" : "white"}/>
          <Navlink name={"About Us"} color = {scroll ? "black" : "white"}/>
          <Navlink name={"Careers"} color = {scroll ? "black" : "white"}/>
          <Navlink name={"Blog"} color = {scroll ? "black" : "white"}/>
          <div>
            <Link href={"/"}>
              <Image
                alt=""
                width={10}
                src={scroll ? playblue : play}
                className={`w-10 border-2 ${scroll ? " border-indigo-600" : " border-white"}  p-2 rounded-full`}
              />
            </Link>
          </div>
          <Button name={"Contact Us"} />
        </div>
        <div className="md:hidden">
          <Link href={'/'}>
            <Image alt="" src={scroll ? menudark : menulight}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
