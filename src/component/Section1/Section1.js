'use client'

import Link from "next/link";
import Icon from "./Icon/Icon";
import style from "./page.module.css"
import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";

export default function Section1 (){
    const [event,setEvent] = useState(false);
    const showBtn = (data) => {
        setTimeout(()=>{
            setEvent(!data);
        },200);
    }
    
    return (
        <div className="w-full h-screen" id="home">
            <nav className="w-full h-1/6 md:h-1/5 flex justify-center">
                <div className="w-4/5 flex justify-between items-center">
                     
                    {/* rightnav */}
                    <div className="w-1/6 text-center">
                        <h1 className={`text-4xl font-regular ${style.text}`}>
                            Arsh
                        </h1>
                    </div>
                    {/* left nav */}
                    <div className="w-3/5 flex flex-row justify-center items-center">
                        {/* Laptop screen */}
                        <div className="w-full xl:flex xl:flex-row xl:justify-evenly xl:items-center hidden">
                            <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                <Link href={"#about"}>About</Link>
                            </h1>
                            <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                <Link href={"#experience"}>Experience</Link>
                            </h1>
                            <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                <Link href={"#projects"}>Projects</Link>
                            </h1>
                            <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                <Link href={"#contact"}>Contact</Link>
                            </h1>
                        </div>

                        {/* Mobile Screen */}
                        <div className="w-full h-max pt-10 pr-10 xl:hidden absolute top-0 right-0 flex flex-col justify-center items-end">
                            <Icon clickEvent={showBtn}/>
                            <div className={`w-44 h-64 ${(event) ? "flex" : "hidden"} ps-2 justify-center items-start flex-col ${style.nav}`}>
                                <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                    <Link href={"#about"}>About</Link>
                                </h1>
                                <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                    <Link href={"#experience"}>Experience</Link>
                                </h1>
                                <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                    <Link href={"#projects"}>Projects</Link>
                                </h1>
                                <h1 className={`text-3xl font-regular ${style.text} p-2`}>
                                    <Link href={"#contact"}>Contact</Link>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="w-full h-5/6 md:h-4/5">
                <div className="w-full h-full xl:h-full flex flex-col xl:flex-row justify-center items-center">
                    <div className="w-[250px] h-2/5 xl:w-1/4 xl:h-full flex justify-center items-center pb-2">
                        <Image className="rounded-full object-contain" quality={100} src={"/profile1.jpeg"} width={400} height={400} alt="Profile" priority/>
                    </div>
                    <div className="w-[250px] h-3/5 xl:w-1/4 xl:h-full flex flex-col justify-start xl:justify-center items-center pt-5 md:pt-1">
                        <p className={`text-md xl:text-lg font-bold captialize ${style.text2} pt-2 xl:pb-3`}>Hello, I'm</p>
                        <h1 className="text-4xl xl:text-5xl font-bold capitalize pt-1 xl:pb-3 tracking-wider">Arsh</h1>
                        <h2 className={`text-xl xl:text-3xl font-bold ${style.text2} pt-1 xl:pb-3`}>Frontend Developer</h2>
                        <div className="w-full xl:w-5/6 flex justify-evenly items-center pt-3 xl:pb-3">
                            <button className={`w-28 xl:w-32 h-12 text-xs xl:text-sm font-bold rounded-full ${style.btn1}`}>Download CV</button> 
                            <Link href={"/#contact"}>
                                <button className={`w-28 xl:w-32 h-12 text-xs xl:text-sm font-bold rounded-full ${style.btn2}`}>Contact Info</button>
                            </Link>
                            </div>
                        <div className="w-1/3 flex justify-evenly items-center pt-3 xl:pb-3">
                            <LinkedInIcon fontSize="large" sx={{padding: "5px",color: "#fff",width: "33px" ,height: "33px", borderRadius: "50%", backgroundColor: "var(--primary)"}}/>
                            <Link href={"https://github.com/web-arsh"}>
                                <GitHubIcon fontSize="large" sx={{color: "var(--primary)"}}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
