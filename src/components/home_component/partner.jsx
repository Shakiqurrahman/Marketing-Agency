import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mask_group1, Mask_group2, Mask_group3, Mask_group4, Mask_group5, Mask_group6, Mask_group7, Mask_group8, Mask_group9, Mask_group10, Rectangel_12, VectorMap , } from '../../assets';


const Partner = () => {
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
            <section className='grid grid-cols-1 xl:grid-cols-12'>

                <div className="grid-cols-1 xl:col-span-6 partner_margin">
                    <div className="content-wrapper1 mt-10">
                        <h3 className='we_are_title'>WHY US</h3>
                        <h1 className='capitalize mt-3 '>We are your </h1>
                        <h1 className='custom_class_partner'> Growth Partner</h1>
                        <p className='mt-4 custom_class_partner_p'>We offer a wide range of tailored solutions to meet your businesses unique needs.</p>
                    </div>
                    <div className="flex flex-row mt-16 gap-5">
                        <div className="flex flex-col justify-start items-start  partner-boxes" style={{ width: 300 }}>
                            <div className='relative flex justify-center'>
                                <img src={Rectangel_12} alt="" />
                                <div className="absolute" style={{ top: "25%" }}>
                                    <img src={Mask_group7} alt="" />
                                </div>
                            </div>
                            <h1 className='capitalized partner_boxes_header mt-5'>1-on-1 Tailored Support:  </h1>
                            <p className='mt-4' >Direct lines, because why whisper when you can converse?</p>
                        </div>
                        <div className="flex flex-col justify-start items-start partner-boxes" style={{ width: 300 }}>
                            <div className='relative flex justify-center'>
                                <img src={Rectangel_12} alt="" />
                                <div className="absolute" style={{ top: "25%" }}>
                                    <img src={Mask_group8} alt="" />
                                </div>
                            </div>
                            <h1 className='capitalized partner_boxes_header mt-5'>Reoccurring weekly reports:</h1>
                            <p className='mt-4' >Weekly analytics of your success right in your inbox.</p>
                        </div>

                    </div>
                    <div className="flex flex-row mt-16 gap-5">
                        <div className="flex flex-col justify-start items-start  partner-boxes" style={{ width: 300 }}>
                            <div className='relative flex justify-center'>
                                <img src={Rectangel_12} alt="" />
                                <div className="absolute" style={{ top: "25%" }}>
                                    <img src={Mask_group9} alt="" />
                                </div>
                            </div>
                            <h1 className='capitalized partner_boxes_header mt-5'>Personalized growth strategies: </h1>
                            <p className='mt-4' >Marketing Masterpieces tailored exclusively for YOU.</p>
                        </div>
                        <div className="flex flex-col justify-start items-start partner-boxes" style={{ width: 300 }}>
                            <div className='relative flex justify-center'>
                                <img src={Rectangel_12} alt="" />
                                <div className="absolute" style={{ top: "25%" }}>
                                    <img src={Mask_group10} alt="" />
                                </div>
                            </div>
                            <h1 className='capitalized partner_boxes_header mt-5'>Provided Media team: </h1>
                            <p className='mt-4' >No matter where you are we come to you! Count on our media and creative team to deliver top-notch solutions.</p>
                        </div>

                    </div>
                </div>
                <div className="grid-cols-1 xl:col-span-6">
                    <div className="flex justify-end">
                        <img src={VectorMap} className='img-fluid mt-10' alt="" />
                    </div>
                </div>
            </section>

        </motion.nav>
    );
};

export default Partner;
