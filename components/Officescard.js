import Image from "next/image";
import Link from "next/link";
import location from "../public/location.svg"

const Officescard = ({image, name, paragraph}) => {
    return ( 
        <div className="min-w-max">
            <Link href={'/'} className="hover:text-indigo-600 text-black inline-block duration-300">
            <Image alt="" src={image} className="h-48 md:w-auto w-72 md:h-80"/>
            <h2 className="text-2xl font-bold inline-flex gap-x-3 pt-10"><span><Image alt="location" src={location}/></span>{name}</h2>
            <p className="w-72">{paragraph}</p>
        </Link>
        </div>
     );
}
 
export default Officescard;