import style from "./style.module.css";

export default function IconBox(data){
    const {title,info,desc,icon} = data.props;
    
    return(
        <div className="w-2/4 h-3/4 md:h-4/5 lg:h-full xl:h-36 border-2 border-gray-400 rounded-3xl flex justify-center items-center flex-col p-5 xs:p-2">
            {icon}
            <h1 className={`${style.text} font-bold  text-lg lg:text-xl w-full text-center`}>{title}</h1>
            <h2 className={`${style.text2} text-md md:text-lg w-full text-center`}>{info}</h2>
            <h2 className={`${style.text2} text-md md:text-lg w-full text-center`}>{desc}</h2>
        </div>
    );
}