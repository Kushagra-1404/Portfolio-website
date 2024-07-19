import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/sidebar";

const Navbar = ()=>{
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:0, scale:1}}
                    transition={{duration:0.5}}
                >Kushagra</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/kushagragupta1404/"><motion.img whileHover={{scale:2}} whileTap={{scale:0.8}} src="/linkedin.webp" alt="" /></a>
                    <a href="https://github.com/Kushagra-1404"><motion.img whileHover={{scale:2}} src="/github.png" alt="" /></a>
                    <a href="https://www.instagram.com/kushagra.14__/"><motion.img whileHover={{scale:2}} src="/instagram.png" alt="" /></a>
                </div>
            </div>
        </div>     
    )
}

export default Navbar;