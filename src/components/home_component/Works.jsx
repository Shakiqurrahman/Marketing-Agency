import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styles } from "../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  name,
  icon,
}) => {
  return (
      <div className=' p-5 rounded-2xl sm:w-[360px] w-full' >
        <div className='relative w-full h-[230px]'>
          <img
            src={icon}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'> 
          <h3 className='text-white' style={{fontSize:"1.5rem",fontWeight: 500,}}>{name}</h3>
        </div>
    </div>
  );
};

const Works = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{opacity: 1, y: 0,  duration: 0.5, delay: 0.5 }}
    >
      <div className=" ">
        <div className="flex justify-center custom-header">
            <h1 style={{fontSize:62}}>Our Services</h1>
        </div>
        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
                      <div className="flex items-center justify-center">
              <div className="flex justify-center absolute z-[5] top-0 right-0 w-[70%] h-[35%] blue__gradient"></div>  
            </div>
        </div>
      </div>
      </motion.nav>

  );
};

export default SectionWrapper(Works, "");
