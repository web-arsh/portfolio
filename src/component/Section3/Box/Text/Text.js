import VerifiedIcon from '@mui/icons-material/Verified';
import style from "./text.module.css"

export default function Text(value){
    const {title,desc} = value.content;
    
    
    return(
        <div className="w-3/4 sm:w-full lg:w-3/4 h-fit flex justify-center items-start flex-row">
            <div className='w-1/4 h-fit flex justify-center items-start'>
                <VerifiedIcon sx={{fontSize: "28px"}}/>
            </div>            
            <div className='w-3/4 h-fit'>
                <h1 className={`text-md sm:text-xl font-bold ${style.text}`}>{title}</h1>
                <p className={`text-sm sm:text-lg ${style.text2}`}>{desc}</p>
            </div>
        </div>
    )
}