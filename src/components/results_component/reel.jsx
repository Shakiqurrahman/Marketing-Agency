import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { facebook1, facebook2, insta_result1, insta_result2, reel } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Reel = () => {

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
            <div className="reel" style={{ marginTop: 300, marginBottom: 150 }}>
                <div className="insta-result">
                    <h1 className='chart-header text-center'>Facebook Reel Video Results </h1>
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="grid-cols-1 md:col-span-12 mx-auto relative inst_responsive">
                            <div className='insta-result-box absolute inset-0 blur-lg brightness-120'>
                            </div>
                            <img className='relative tiktok-result-image' src={reel} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Reel;
