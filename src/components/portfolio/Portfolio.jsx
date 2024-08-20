import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "GizmoStore",
    img: "gizmoStore.png",
    desc:"Built a feature-rich E-commerce platform with a MERN stack, including a powerful admin dashboard and secure payment gateway integration. This scalable solution ensures a seamless and secure shopping experience for users, combining efficient product management with smooth transaction processing.",
    href:"https://gizmostore.netlify.app/",
  },
  {
    id: 2,
    title: "AlgorythmPlay",
    img: "algoPlay.png",
    desc: "AlgorythmPlay is an interactive platform that includes an algorithm visualizer and games for various sorting algorithms and N-Queens. Users can explore and understand algorithms visually and enhance problem-solving skills through interactive games. This project provides an engaging and educational experience for learning and practicing various algorithms.",
    href: "https://algorythm-play.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: "portfolio.png",
    desc: "Dynamic portfolio website made using React, highlighting MERN stack projects and various other creations. Implemented user-friendly features for email connection and resume download, enhancing engagement.",
    href: "",
  },
  // {
  //   id: 4,
  //   title: "Music app",
  //   img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
  //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eaque modi inventore veniam pariatur, commodi odio vel nihil. Repellat ad beatae doloribus ab labore accusamus rerum aperiam tempora sunt sequi.",
  // },
];

//creating sections for each item
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  //its value depends upon
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  //0->-300px && 1->300px
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.href}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  //using for building animated progress bar //it finds y progress of portfolio div i.e from[0 to 1]
  //for offset:at beginning 100% not zero

  //can also be done using useTransform
  //using useSpring type of transition is Spring
  const scaleX = useSpring(scrollYProgress, {
    //stiffness and damping are used to define duration of spring transition
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
