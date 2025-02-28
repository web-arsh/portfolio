'use client';

import { useState } from "react";
import style from "./style.module.css";

export default function Icon({clickEvent}) {
    const [event,setEvent] = useState(false);
    
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        
        setIsActive(prev => !prev);
        setEvent(!event);
        clickEvent(event);
    }

    return (
        <div className={`${style.container} ${isActive ? style.change : ""}`} onClick={handleClick}>
            <div className={style.bar1}></div>
            <div className={style.bar2}></div>
            <div className={style.bar3}></div>
        </div>
    );
}
