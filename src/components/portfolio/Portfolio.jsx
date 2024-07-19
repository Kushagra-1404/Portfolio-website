import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eaque modi inventore veniam pariatur, commodi odio vel nihil. Repellat ad beatae doloribus ab labore accusamus rerum aperiam tempora sunt sequi.",
  },
  {
    id: 2,
    title: "Nextjs Commerce",
    img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eaque modi inventore veniam pariatur, commodi odio vel nihil. Repellat ad beatae doloribus ab labore accusamus rerum aperiam tempora sunt sequi.",
  },
  {
    id: 3,
    title: "Vanillajs Commerce",
    img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eaque modi inventore veniam pariatur, commodi odio vel nihil. Repellat ad beatae doloribus ab labore accusamus rerum aperiam tempora sunt sequi.",
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
  const y= useTransform(scrollYProgress,[0,1],[-300,300]);
  //0->-300px && 1->300px
  return (
    <section>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y:y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
