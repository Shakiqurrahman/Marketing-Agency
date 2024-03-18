import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mask_group1 , Mask_group2, Mask_group3, Mask_group4, Mask_group5, Mask_group6} from '../../assets';


const Services = () => {
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
                <div className="container mx-auto px-4" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                        <div className="column-1">
                            <div className="service flex flex-col justify-center items-center">
                                <img src={Mask_group1} alt=""  />
                                <h1 className='mt-5' >Paid Advertising</h1>
                                <p className='mt-5 text-center' >Google ads, TikTok ads, Facebook Ads, Instagram</p>
                            </div>
                        </div>
                        <div className="column-1">
                            <div className="service flex flex-col justify-center items-center" >
                                <img src={Mask_group2} alt=""  />
                                <h1 className='mt-5' >Content Creation</h1>
                                <p className='mt-5 text-center' >Videography & Photography, Short Form, Long Form content</p>
                            </div>
                        </div>
                        <div className="column-1">
                            <div className="service flex flex-col justify-center items-center">
                                <img src={Mask_group3} alt=""  />
                                <h1 className='mt-5' >Graphic Design & Branding</h1>
                                <p className='mt-5 text-center'>Logo Creation, Social Media Page Setup, Brand identity guide</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5">
                        <div className="column-1">
                            <div className="service flex flex-col justify-center items-center">
                                <img src={Mask_group4} alt="" />
                                <h1 className='mt-5'>Website Development & SEO</h1>
                                <p className='mt-5 text-center'>High quality website creation with High ranking SEO</p>
                            </div>
                        </div>
                        <div className="column-1">
                            <div className="service flex flex-col justify-center items-center">
                                <img src={Mask_group5} alt="" />
                                <h1 className='mt-5'>Social Media Management</h1>
                                <p className='mt-5 text-center' >Tracking analytics, delegated posting schedule, engagement with audience</p>
                            </div>
                        </div>
                        <div className="column-1">
                            <div className="service flex flex-col justify-center items-center">
                                <img src={Mask_group6} alt=""  />
                                <h1 className='mt-5' >Email Marketing</h1>
                                <p className='mt-5 text-center' >High producing campaigns landing more traffic to your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </motion.nav>
    );
};

export default Services;
