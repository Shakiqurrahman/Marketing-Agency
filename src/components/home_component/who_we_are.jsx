import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Rectangle_5 } from '../../assets';


const Whoweare = () => {
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
      transition={{ opacity: 1, y: 0, duration: 0.5, delay: 0.5 }}
    >
<section className='flex justify-center'>
  <div className="grid grid-cols-1 lg:grid-cols-12">
    <div className="grid-cols-1 lg:col-span-6 who_we_are">
      <div className="content-wrapper mt-10">
        <h3 >WHO WE ARE</h3>
        <h1 className='capitalize mt-3'>Legendary Marketing and Media</h1>
        <h6 className='mt-4'>We are a leading full-service marketing company. We elevate businesses with innovative marketing strategies to ensure maximum growth.</h6>
        <button className="btn get-started-button" style={{ borderRadius: "100pt" }}>
          <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
        </button>
      </div>
    </div>
    <div className="grid-cols-1 lg:col-span-6 justify-center sm:ml-6 mbl_image">
      <div className='box relative'>
        <img src={Rectangle_5} alt="" className='who_we_are_image absolute' />
        <div className="image absolute"></div>
      </div>
    </div>
  </div>
</section>
    </motion.nav>
  );
};

export default Whoweare;
