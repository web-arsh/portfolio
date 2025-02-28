import Box from "./Box/Box";
import style from "./page.module.css"

export default function Section4(){
    const imageUrl = {
        data1: {
            url: "https://chimerical-squirrel-a7c533.netlify.app/login",
            img: "/chat.png",
            github: "https://github.com/web-arsh/chat-box"
        },
        data2: {
            url: "https://blog-joou.onrender.com",
            img: "/blog.png",
            github: "https://github.com/web-arsh/blog"
        },
        data3: {
            url: "https://weather-web-nese.onrender.com",
            img: "/weather.png",
            github: "https://github.com/web-arsh/weather-web"
        }
    }
    return (  
        <div className="w-full h-max xl:h-screen pt-10  flex justify-center items-center flex-col" id="projects">
            <div className="w-full h-1/6 xl:h-1/6 flex justify-center md:justify-center items-center flex-col p-0 md:pt-5">
                <h2 className={`text-md font-normal ${style.text2}`}>Browse My Recent</h2>
                <h1 className={`text-3xl md:text-5xl font-bold ${style.text} p-0 md:p-0 lg:p-3`}>Projects</h1>
            </div>
            <div className="w-full xl:w-4/5 xl:h-screen gap-10 m-0 grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-1 justify-items-center pt-5 px-10 xl:px-0">
                <Box className="h-max lg:h-max xl:h-5/6 xs:row-span-1 xs:col-span-1 md:row-span-1 md:col-span-1 xl:row-span-1 xl:col-span-1" url={imageUrl.data1}/>
                <Box className="h-max lg:h-max xl:h-5/6 xs:row-span-1 xs:col-span-1 md:row-span-1 md:col-span-1 xl:row-span-1 xl:col-span-1" url={imageUrl.data2}/>
                <Box className="h-max lg:h-max xl:h-5/6 xs:row-span-1 xs:col-span-2 md:row-span-1 md:col-span-2 xl:row-span-1 xl:col-span-1" url={imageUrl.data3}/>
            </div>
        </div>
    );
}