'use client'
import Image from "next/image";
import style from "./page.module.css"
import School from "@mui/icons-material/School";
import Group from "@mui/icons-material/Group";
import IconBox from "./Icon Box/IconBox";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Section2(){
    let [value,setValue] = useState(1);
    const href = ["#about","#experience","#projects","#contact"];
    let iconsData = [
        {
            title:"Experience",
            info:"2+ years",
            desc: "Frontend Development",
            icon: <School sx={{fontSize: "25px"}}/>
        },
        {
            title:"Education",
            info:"BCA. Bachelors Degree",
            desc: "",
            icon: <Group sx={{fontSize: "25px"}}/>
        }
    ]
    const nextBtn = () => {
        if(value < href.length - 1){
            setValue(value++);
            window.location.href = href[value];
        }else{
            setValue(1);
            window.location.href = "/";
        }
    };
    
    
    return (
        <div className="w-full h-screen" id="about"> 
            <div className="w-full h-1/6 xl:h-1/4 flex justify-center md:justify-center items-center flex-col p-0 md:p-5">
                <h2 className={`text-md font-normal ${style.text2}`}>Get To Know More</h2>
                <h1 className={`text-3xl md:text-5xl font-bold ${style.text} p-0 md:p-0 lg:p-3`}>About Me</h1>
            </div>
            <div className="w-full h-5/6 xl:h-3/4 flex justify-center items-center p-0 lg:pt-10">
                <div className="w-full lg:w-5/6 h-full flex justify-center items-center flex-col lg:flex-row">
                    {/* left div */} 
                    <div className="w-full h-1/3 md:h-2/4 lg:h-full lg:w-1/2 flex justify-center items-start md:justify-center lg:justify-end md:items-start xl:justify-end xl:px-5 px-0 md:pt-5 lg:pt-2">
                        <Image src={"/profile2.jpeg"} alt="profile2" width={1000} height={1000} className="w-[200px] md:w-[250px] lg:w-fit xl:w-3/4 transform scale-x-[-1] rounded-3xl"/>
                    </div>
                    {/* right div */}
                    <div className="w-full h-2/3 lg:h-full md:1/ xl:w-3/5">
                        <div className="w-full h-1/2 lg:h-1/4 xl:h-2/6 flex justify-center items-center gap-5 md:gap-10 px-10 xl:px-3">        
                            <IconBox props={iconsData[0]}/>
                            <IconBox props={iconsData[1]}/>
                        </div>
                        <div className="w-full h-1/2 lg:h-3/4 xl:h-4/6 pt-0 lg:pt-5">
                            <p className={`text-md px-10 xl:px-5 ${style.text2}`}>
                            I’m Arsh, currently pursuing a BCA. I specialize in full-stack development and have gained valuable knowledge in the MERN stack (MongoDB, Express.js, React, Node.js). With a strong understanding of both front-end and back-end development, I’m eager to enhance my skills and contribute to exciting tech projects.
                            </p>
                        </div>
                    </div>
                </div>
                <span className="hidden lg:block lg:fixed xl:bottom-10 xl:right-10" onClick={nextBtn}>
                    {/* <Link href={href[value]}> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-10 ${style.text}`}>
                            <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    {/* </Link> */}
                </span>
            </div>
        </div>
    );
}