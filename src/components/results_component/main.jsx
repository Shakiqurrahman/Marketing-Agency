import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rectangle_5,  advertising, content, graphics, website, social, email} from '../../assets';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Chart from './chart'



const Main = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    const [date, setDate] = useState(new Date());
    const onChange = () => {
        setDate(date);
    }

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
    const ukTimeOptions = {
        timeZone: 'Europe/London',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const ukTime = currentTime.toLocaleTimeString('en-GB', ukTimeOptions);

    return (
        <motion.nav
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ opacity: 1, y: 0, duration: 0.5, delay: 0.5 }}
        >
            <section className='flex justify-center'>
                <div className="container mx-auto px-4">
                    <div className="services-content">
                        <h1 className='text-center'>WORK <span> RESULTS</span> </h1>
                    </div>
                    <div style={{marginTop:50}}>
                        <Chart />
                    </div>
                </div>
            </section>
        </motion.nav>
    );
};

export default Main;
