import Link from "next/link";

const Button = ({name}) => {
    return ( 
        <div>
            <Link className="px-6 py-3 bg-indigo-600 text-white hover:text-indigo-600 hover:bg-white duration-300 border-2 border-transparent hover:border-2 hover:border-indigo-600 font-medium" href={'/'}>{name}</Link>
        </div>
     );
}
 
export default Button;