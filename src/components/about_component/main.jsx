import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Rectangle_5, who_landscape } from '../../assets';


const Main = () => {
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
                <div className="services-content flex flex-col justify-center items-center">
                    <h1 className='text-center'>ABOUT <span>US</span> </h1>
                    <div className="img-container mt-10">
                        <img src={who_landscape} alt="" />
                    </div>
                    <div className="content-wrapper text-center about_responsive" >
                        <h3>WHO WE ARE</h3>
                        <h1 className='capitalize mt-3' >Legendary Marketing and Media</h1>
                        <p className='mt-4' >We are a leading full-service marketing company. We elevate businesses with innovative marketing strategies to ensure maximum growth.</p>
                        <button className="btn get-started-button" style={{ borderRadius: "100pt" }}>
                        <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
                        </button>
                    </div>
                </div>
            </section>
        </motion.nav >
    );
};

export default Main;
