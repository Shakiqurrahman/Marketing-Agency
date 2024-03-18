import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rectangle_5, Rectangel_19, Mask_group11, Mask_group12, logo, Clock, Video, Rectangel_20, Photo1 } from '../../assets';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const ContactUs = () => {

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
    const estTimeOptions = {
        timeZone: 'America/New_York', // 'America/New_York' represents Eastern Standard Time
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const estTime = currentTime.toLocaleTimeString('en-US', estTimeOptions);

    return (
        <motion.nav
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ opacity: 1, y: 0, duration: 0.5, delay: 0.5 }}
        >
            <section className='flex justify-center'>
                <div className="container mx-auto px-4">
                    <div className="next-header text-center contact-header">
                        <h3>GET IN TOUCH</h3>
                        <h1>CONTACT US</h1>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-12 contact-box">
                        <div className="grid-cols-1 xl:col-span-6 ">
                            <div className="flex flex-col justify-center ">
                                <div className="contact-content-wrapper">
                                    <img src={logo} className='contact_logo' alt="" />
                                    <h3>LegendaryMktg</h3>
                                    <h1>Discovery Call</h1>
                                </div>
                                <div className="flex flex-row items-center sm:mt-16 mt-5">
                                    <img className='contact-icon' src={Clock} alt="" />
                                    <p style={{ color: "#fff", marginLeft: 20 }}>30 min</p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <img className='contact-icon' src={Video} alt="" />
                                    <p style={{ color: "#fff", marginLeft: 20 }}>Web conferencing details provided upon confirmation</p>
                                </div>
                                <div class="flex hidden md:flex  mt-10">
                                    <button className="btn contact-button">
                                        <a href="https://calendly.com/legendarymktg/discovery-call?month=2023-12" target='_blank'>Get Started</a>
                                    </button>
                                </div>
                                <div className="contact-content-footer">
                                    <div className="flex flex-row justify-between items-end ">
                                        <p className='contact-content-footer-p'>Cookie settings</p>
                                        <p className='report_abuse'>Report abuse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-1 xl:col-span-6 flex justify-center items-center">

                            <div className="calendar-container flex justify-center items-center flex-col">
                                <h1 className='text-center mt-10' style={{ color: "#fff", fontSize: "20pt" }}>Select a Date & Time</h1>
                                <a href="https://calendly.com/legendarymktg/discovery-call?"><Calendar onChange={onChange} value={date} /></a>
                                <h1 className='text-center mt-10 time-zone' style={{ color: "#fff", fontSize: "20pt" }}>Time Zone</h1>
                                <p className='text-center mt-4' style={{ color: "#fff", fontSize: "16pt" }}>UTS TIME : {estTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </motion.nav>

    );
};

export default ContactUs;
