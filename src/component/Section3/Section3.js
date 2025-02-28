import Box from "./Box/Box";
import style from "./page.module.css"

export default function Section3(){
    let data = [
        {
            title: "Frontend Development",
            item: [
                {
                    title: "HTML",
                    desc: "Experienced"
                },
                {
                    title: "CSS",
                    desc: "Experienced"
                },
                {
                    title: "JavaScript",
                    desc: "Experienced"
                },
                {
                    title: "Tailwind",
                    desc: "Intermediate"
                },
                {
                    title: "Material UI",
                    desc: "Intermediate"
                },
                {
                    title: "Next JS",
                    desc: "Experienced"
                }
            ]
        },
        {
            title: "Backend Development",
            item:    [
                {
                    title: "MongoDB",
                    desc: "Intermediate"
                },
                {
                    title: "Node JS",
                    desc: "Intermediate"
                },
                {
                    title: "Express JS",
                    desc: "Intermediate"
                },
                {
                    title: "Git",
                    desc: "Intermediate"
                },
                {
                    title: "WebSocket",
                    desc: "Basic"
                },
                {
                    title: "GraphQL",
                    desc: "Basic"
                }
            ]
        }
    ];
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col" id="experience">
            <div className="w-full h-1/6 xl:h-1/6 flex justify-center md:justify-center items-center flex-col p-0 md:p-5">
                <h2 className={`text-md font-normal ${style.text2}`}>Explore My</h2>
                <h1 className={`text-3xl md:text-5xl font-bold ${style.text} p-0 md:p-0 lg:p-3`}>Experience</h1>
            </div>
            <div className="w-4/5 h-5/6 xl:h-5/6 flex justify-center items-start flex-col sm:flex-row gap-10 p-0 lg:pt-10">
                <Box data={data[0]}/>
                <Box data={data[1]}/>
            </div>
        </div>
    );
}