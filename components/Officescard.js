import Image from "next/image";
import Link from "next/link";
import location from "../public/location.svg"

const Officescard = ({image, name, paragraph}) => {
    return ( 
        <Link href={'/'} className="hover:text-indigo-600 text-black inline-block duration-300">
            <Image alt="" src={image} height={400}/>
            <h2 className="text-2xl font-bold inline-flex gap-x-3 pt-10"><span><Image alt="location" src={location}/></span>{name}</h2>
            <p>{paragraph}</p>
        </Link>
     );
}
 
export default Officescard;