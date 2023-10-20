import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Robotics and Automation",
    img: "../public/works/robot-auto.jpg",
    desc: "Expertise in creating autonomous systems using robotics and automation technologies, enhancing efficiency and precision in various industries.",
  },
  {
    id: 2,
    title: "Machine Design",
    img: "../public/works/machine-design.jpg",
    desc: "Proficiency in designing mechanical systems and machines, optimizing functionality and performance for diverse applications.",
  },
  {
    id: 3,
    title: "Automotive Engineering",
    img: "../public/works/auto-eng.jpg",
    desc: "Specialization in designing, testing, and optimizing vehicles and automotive systems for safety and performance excellence.",
  },
  {
    id: 4,
    title: "Manufacturing and Production",
    img: "../public/works/manufacture.jpg",
    desc: "Experience in optimizing manufacturing processes, ensuring streamlined production, and maintaining product quality.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
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

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
