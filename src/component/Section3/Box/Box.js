import style from "./style.module.css"
import Text from "./Text/Text";

export default function Box(value){
    const {title,item} = value.data;
    const length = item.length / 2;
    
    return(
        <div className="w-full sm:w-2/4 lg:h-3/4 md:h-full h-full border-2 border-gray-400 rounded-3xl">
            <h1 className={`w-full h-1/6 flex justify-center items-center text-xl sm:text-2xl pt-5 text-center md:text-2xl lg:text-3xl font-bold ${style.text2}`}>{title}</h1>
            <div className="w-full h-5/6 flex justify-start items-center flex-row sm:flex-col lg:flex-row">
                <div className="w-1/2 h-full flex justify-evenly items-center flex-col">
                    {
                        item.map((elm, indx) => (
                            (indx < length) ? <Text key={indx} content={elm} /> : ""
                        ))
                    } 
                </div>
                <div className="w-1/2 h-full flex justify-evenly items-center flex-col">
                    {
                        item.map((elm, indx) => (
                            (indx > length - 1) ? <Text key={indx} content={elm} /> : ""
                        ))
                    } 
                </div>
            </div>
        </div>
    );
}