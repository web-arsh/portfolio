import Image from "next/image";
import style from "./style.module.css"
import Link from "next/link";

export default function Box(props){
    
    const className = props.className;

    return (
        <div className={`w-full rounded-3xl border-2 border-gray-400 ${className} flex justify-start items-center flex-col px-5 py-4`}>
            <div className="w-full h-full flex justify-center items-center px-5">
                <Image src={props.url.img} width={1000} height={1000} alt="chat" className="h-full object-center shadow-md object-fill rounded-3xl"/>  
            </div>
            <div className="w-full h-16 lg:h-24 flex justify-center items-center">
                <h1 className={`text-[30px] font-bold ${style.text}`}>Project One</h1>
            </div>
            <div className="w-full h-12 lg:h-14 gap-5 flex justify-center items-center py-3">
                <Link href={props.url.github}>
                    <button className={`w-32 h-12  border-2 border-gray-400 rounded-full text-sm font-semibold ${style.btn1}`}>
                        Github
                    </button>
                </Link>
                <Link href={props.url.url}>
                    <button className={`w-32 h-12 border-2 border-gray-400 rounded-full text-sm font-semibold ${style.btn1}`}>
                        Live Demo
                    </button>
                </Link>
            </div>
        </div>
    ); 
}