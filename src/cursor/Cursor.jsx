import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
    const [position,setPosition]=useState({x:0,y:0});//setting initial coordinates of the cursor

    //to make it follow our cursor
    useEffect(()=>{
        const mouseMove=(e)=>{
            setPosition({x:e.clientX,y:e.clientY});//updating position of cursor
        }
        window.addEventListener("mousemove",mouseMove);
        //so on moving mouse this mouseMove() function will be triggered //and this can't be done using useRef 
        //since we are listening to complete window 

        //cleanUp function//since when we are listening any event then we must clean up
        return()=>{
            window.removeEventListener("mousedown",mouseMove);
        };
    },[]);
    return (
        <motion.div className="cursor" animate={{x:position.x+10,y:position.y+10}}></motion.div>
    )
};

export default Cursor;