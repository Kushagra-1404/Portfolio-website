import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";

const Parallax = ({ type }) => {
  //ref is refering to parallax div
  const ref = useRef();

  //will be used to find yaxis progress of ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    //means animation start(yprogress=0) when top of the target ele reaches top of the vieport
    //and animation ends(y progress=1) when end of the target ele reaches top of the vieport
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  //for yBg//it maps values of scrollYProgress(i.e from 0to1) to ouptut i.e (0% to 100%) like 0 => 0% and 0.5 =>50% and 1->100%etc
  //using this value we will add animation
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132,#0c0c1d)"
            : "linear-gradient(180deg, #111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type == "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type == "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
