
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";
import Links from "./links/Links";
import { useState } from "react";
import { motion } from "framer-motion";

//depending upon animate value,variants value is decided
//if animate is open then all animations defined under open will be stored in variants
const variants={
    open:{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
        },
    },
    closed:{
        // allows to create any custom shape
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            //siffness and damping are used to specify duration of spring type
            type:"spring",
            stiffness:400,
            damping:40,
        },
    },
};
const Sidebar= () =>{
    const [open,setOpen]=useState(false);

    return <motion.div className="sidebar" animate={open?"open":"closed"}>
        {/* variants value will be choosen in bg depending upon the value of animate */}
        <motion.div className="bg" variants={variants}>
            <Links/>   
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
};

export default Sidebar;

