import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-white.svg";
import Button from "./Button";
import Footerlink from "./Footerlink";
import pangea from "../public/pangea.svg";
import clutch from "../public/clutch.png";

const Footer = () => {
  return (
    <div className=" bg-noise bg-zinc-900 pt-16 font-Montserrat">
      <div className="max-w-screen-lg px-5 md:px-0 mx-auto">
        <div className="md:flex justify-between">
          <div className="md:w-2/5">
            <Link href={'/'}><Image alt="" height={20} src={logo} /></Link>
            <div className="hidden md:grid grid-flow-row gap-2 mt-10">
              <Footerlink name={"Home"} />
              <Footerlink name={"Projects"} />
              <Footerlink name={"Services"} />
              <Footerlink name={"About Us"} />
              <Footerlink name={"Careers"} />
              <Footerlink name={"Blog"} />
            </div>
            <div className="hidden md:block mt-52 mb-12">
              <Link href={"/"} className="text-neutral-100 text-xs underline">
                hello@cinnamon.agency
              </Link>
            </div>
          </div>
          <div className="md:w-3/5 flex flex-col justify-between">
            <h2 className="md:text-3xl text-2xl w-52 md:w-full pt-10 md:pt-0 font-bold text-white">
              All software, zero bullshit.
            </h2>
            <div className="flex md:hidden flex-col flex-wrap h-36 gap-2 mt-10">
              <Footerlink name={"Home"} />
              <Footerlink name={"Projects"} />
              <Footerlink name={"Services"} />
              <Footerlink name={"About Us"} />
              <Footerlink name={"Careers"} />
              <Footerlink name={"Blog"} />
            </div>
            <div className="pt-20 mb-20 grid grid-cols-2 md:grid-cols-3  gap-x-5 gap-y-14">
              <div className="text-sm">
                <h3 className="text-neutral-100 font-bold">Zagreb</h3>
                <p className="text-neutral-400 text-sm">
                  Slavonska avenija 6, 10000, Zagreb, Croatia +385 95 382 9188
                </p>
              </div>
              <div className="text-sm">
                <h3 className="text-neutral-100 font-bold">New York</h3>
                <p className="text-neutral-400 text-sm">
                  500 7th Ave, New York, NY 10018, United States
                </p>
              </div>
              <div className="text-sm">
                <h3 className="text-neutral-100 font-bold">Belgrade</h3>
                <p className="text-neutral-400">
                  Požeška 58 11000, Belgrade, Serbia
                </p>
              </div>
            </div>
            <div className="mt-8 pb-8 md:flex justify-between">
              <div>
                <h2 className="text-neutral-100 font-bold">Our newsletter</h2>
                <form action="/" className="">
                  <input
                    type="text"
                    placeholder="Your E-mail"
                    className="mb-10 px-2 py-2 bg-transparent placeholder-neutral-200 outline-none text-white border-b-2 border-neutral-400"
                  />
                  
                </form>
              </div>
              <div className="mt-10 flex flex-col items-center md:mt-0">
                <Link href={"/"}>
                  <Image alt="" src={pangea} height={50} />
                </Link>
                <Link href={"/"}>
                  <Image className="mt-10" alt="" src={clutch} height={60} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-neutral-400 py-5 border-t-2 border-neutral-600">
            <div className="flex gap-3">
                <h3>© 2022 Cinnamon</h3>
                <Link href={'/'} className="underline inline-block">Privacy Policy</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
