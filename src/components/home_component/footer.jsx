import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mask_group1, Mask_group13, Mask_group14, Mask_group15, Mask_group2, Mask_group3, Mask_group4, Mask_group5, Mask_group6, Photo1, Photo2, logo } from '../../assets';


const Footer = () => {
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
            <section className='footer'>
                <div class="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-4 grid-cols-1">
                        <div class="flex flex-col  footer_logo">
                            <img src={logo} style={{ width: "263pt", height: "192pt", marginTop: -40 }} alt="" />
                        </div>
                    </div>
                    <div class="md:col-span-8 grid-cols-1 footer_mobile">
                        <div className="grid grid-cols-1 md:grid-cols-12">
                            <div className="md:col-span-4 grid-cols-1 justify-start items-start">
                                <h3 style={{ color: "#fff", fontSize: "20pt" }}>Quick Links</h3>
                                <div className="items mt-5">
                                    <p><a href='/'>Home</a></p>
                                    <p><a href='/services'>Services</a></p>
                                    <p><a href='/results'>Results</a></p>
                                    <p><a href='/about'>About</a></p>
                                    <p><a href='/contact'>Contact</a></p>
                                </div>
                            </div>
                            <div className="md:col-span-4 grid-cols-1 justify-start items-start services_footer">
                                <h3 style={{ color: "#fff", fontSize: "20pt" }}>Services</h3>
                                <div className="items mt-5">
                                    <p><a href='/services'>Paid Ads</a></p>
                                    <p><a href='/services'>Services</a></p>
                                    <p><a href='/services'>Graphic Design</a></p>
                                    <p><a href='/services'>Website Development</a></p>
                                    <p><a href='/services'>Social Media</a></p>
                                    <p><a href='/services'>Email Marketing</a></p>
                                </div>
                            </div>
                            <div className="md:col-span-4 grid-cols-1 justify-center items-center social_footer">
                                <h3 style={{ color: "#fff", fontSize: "20pt" }}>Social</h3>
                                <div className="items mt-5">
                                    <p><a href="https://www.instagram.com/legendarymktg/?igshid=NGVhN2U2NjQ0Yg">Instagram</a>  </p>
                                    <p><a href="https://www.facebook.com/legendarymktg.co?mibextid=LQQJ4d">Facebook</a> </p>
                                    <p><a href="">LinkedIn</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-10'/>
                <p className='text-white text-center mt-10' style={{fontSize:14}}>All rights reserved by legendarymktg.com 2023</p>
            </section>

        </motion.nav>
    );
};

export default Footer;
