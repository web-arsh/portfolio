import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from "./page.module.css"
import Link from 'next/link';

export default function Section5(){
    return(
        <div className="w-full h-screen flex justify-center flex-col items-center" id="contact">
            <div className="w-full h-1/6 flex justify-center items-center flex-col p-0 md:p-5">
                <h2 className={`text-md font-normal ${style.text2}`}>Get in Touch</h2>
                <h1 className={`text-3xl md:text-5xl font-bold ${style.text} p-0 md:p-0 lg:p-3`}>Contach Me</h1>
                
            </div>
            <div className="w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-2/6 h-24 border-2 border-gray-400 rounded-3xl flex justify-center items-center flex-row">
                <div className="w-3/5 h-full flex justify-center items-center flex-row gap-3">
                    <EmailIcon fontSize="large" sx={{padding: "5px",color: "#fff",width: "30px" ,height: "30px", borderRadius: "50%", backgroundColor: "var(--primary)"}}/>
                    <Link href={"mailto:arsh786180@gmail.com"} className='text-md sm:text-xl font-medium'>arsh786180@gmail.com</Link>
                </div>
                <div className="w-2/5 h-full flex justify-center items-center flex-row gap-3">
                    <GitHubIcon fontSize="large" sx={{color: "var(--primary)"}}/>
                    <Link href={"https://github.com/web-arsh"} className='text-md sm:text-xl font-medium'>Github</Link>
                </div>
            </div>
        </div>
    );
}