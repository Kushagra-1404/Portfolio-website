import {motion} from "framer-motion";
import { useState } from "react";

//staggerChildren :to give transition delay btw different childrens

const Test=()=>{
    //variants can be created here and then used in framer elements while creating complex animations
    const [open, setOpen]=useState(false)
    const variants={
        // visible:{opacity:1, x:1000, transition:{duration:2}},
        // visible:{opacity:1, x:600, transition:{type:"spring",stiffness:100, damping:100}},
        visible:(i)=>({
            opacity:1, 
            // x:600, 
            transition:{delay:i*0.3},
        }),
        hidden:{opacity:0},
    }
    const items=["item1","item2","item3","item4"];

    return (
        <div className="course">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item,i)=>(
                    <motion.li variants={variants} key={item} custom={i}>
                        {item}
                    </motion.li>
                ))}
                
            </motion.ul>
        </div>
    )
}
//     return (
//         <div className="course">
//             {/* syntax to use framer-motion to animate */}
//             <motion.div
//              className="box"
//             //  initial={{opacity:0.5, scale:0.5}}
//             //  animate={{opacity:100, scale:1, x:200, y:400}}
//             //  whileHover={{opacity:1, scale:2}}
//             // whileTap={{opacity:1, scale:2}}
//             // whileInView={{opacity:1, scale:2}}
//             // drag//we can hold that item and drag wherever we want
             
//             variants={variants}
//             // initial="hidden"
//             // animate="visible"

//             animate={open ? "visible" : "hidden" }
//             // transition={{duration:2}}
//             ></motion.div>
//             <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
//         </div>
//     )
// }

export default Test;