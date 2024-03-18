import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mask_group1, Mask_group13, Mask_group14, Mask_group15, Mask_group2, Mask_group3, Mask_group4, Mask_group5, Mask_group6, Photo1, Photo2 } from '../../assets';
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import resultimage23 from '../../assets/results_23.png'


const Whatisnext = () => {
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
                    <div className="next-header text-center">
                        <h3>WHAT'S NEXT</h3>
                        <h1>WHAT IS NEXT</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-16">
                        <div className="column-1 flex justify-center items-center">
                            <div className="flex flex-col result-2-col" style={{ width: "70%" }}>
                                <div className="img-container flex justify-center">
                                    <img src={Mask_group13} alt="" />
                                </div>
                                <h3 className='mt-5 text-center'>DISCOVERY CALL</h3>
                                <p className='mt-5 text-center'>We'll go over your business's unique needs and demonstrate how we will massively help.</p>
                            </div>
                        </div>
                        <div className="column-1 flex justify-center items-center mt-5">
                            <div className="flex flex-col result-2-col" style={{ width: "70%" }}>
                                <div className="img-container flex justify-center">
                                    <img src={Mask_group14} alt="" />
                                </div>
                                <h3 className='mt-5 text-center'>STRATEGY CALL</h3>
                                <p className='mt-5 text-center'>Our expert team will create a tailored marketing strategy and introduce you to the process.</p>
                            </div>
                        </div>
                        <div className="column-1 flex justify-center items-center mt-5">
                            <div className="flex flex-col result-2-col " style={{ width: "80%" }}>
                                <div className="img-container flex justify-center">
                                    <img src={Mask_group15} alt="" />
                                </div>
                                <h3 className='mt-5 text-center'>SERVICE FULFILLMENT</h3>
                                <p className='mt-5 text-center'>During this stage, we'll execute all campaigns and services, creating a seamless, hands-off experience.</p>
                            </div>
                        </div>

                    </div>

                    {/* our SERVICES  */}




                    <div className="founders" style={{ marginTop: 150 }}>
                        <div className="grid grid-cols-1 xl:grid-cols-12">
                            <div className="grid-cols-1 xl:col-span-6">
                                <div className="content-wrapper2 mt-10">
                                    <h3 className='capitalized'>Meet the founders</h3>
                                    <h1 className='capitalize mt-5'>Founders</h1>
                                    <p className='mt-5'>Gianni Rossitto and Jaden Coronado founded Legendary Marketing and Media in 2022, while studying Business Marketing at their universities. Recognizing the potential of the digital marketing landscape, they quickly adapted and developed strategies to help individuals and businesses scale their online presence across multiple platforms. Their innovative approach, combined with a deep understanding of consumer behavior, has earned them a reputation for delivering exceptional results. They continue to stay ahead of the landscape and help businesses thrive in the digital age.</p>
                                </div>
                            </div>
                            <div className="grid-cols-1 xl:col-span-6" style={{ marginTop: 40 }}>
                                <div className="flex flex-col justify-center items-center sm:flex-row gap-5">
                                    <img src={Photo1} className='founders_image' alt="" />
                                    <img src={Photo2} className='founders_image' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


        </motion.nav>
    );
};

export default Whatisnext;
