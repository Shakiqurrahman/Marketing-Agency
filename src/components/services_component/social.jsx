import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rectangle_5, advertising, content, graphics, website, social, email } from '../../assets';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const Social = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 });
        }
    }, [controls, inView]);

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <motion.nav
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ opacity: 1, y: 0, duration: 0.5, delay: 0.5 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-12" style={{ marginTop: 80 }}>
                <div className="grid-cols-1 md:col-span-6 who_we_are">
                    <div className="service-content-wrapper mt-16 social">
                        <h6>#5</h6>
                        <h3>SOCIAL MEDIA MANAGEMENT</h3>
                        <div className="list mt-10">
                            <li>Tracking analytics</li>
                            <li>Delegated posting schedule</li>
                            <li>Engagement with audience</li>
                        </div>
                        <button className="btn get-started-button">
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
                        </button>
                    </div>
                </div>
                <div className="grid-cols-1 md:col-span-6 justify-center sm:ml-6 mbl_image services_image">
                    <div className='box relative'>
                        <img src={social} alt="" className='who_we_are_image absolute' />
                        <div className="image absolute"></div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Social;
