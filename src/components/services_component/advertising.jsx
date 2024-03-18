import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rectangle_5, advertising, content, graphics, website, social, email } from '../../assets';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import resultimage23 from '../../assets/results_23.jpeg';
import PDF from "../../../public/Content_Playbook.pdf"



const Advertising = () => {

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
            <div className="next-header text-center mt-16 our-offers" style={{ marginTop: 100 }} >
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10 justify-start items-start">
                <div className="column-1 flex justify-center items-center">
                    <div className="flex flex-col result-2-col" style={{ width: "80%" }}>
                        <h3 className='mt-5 '>SOCIAL MEDIA CONSULTING</h3>
                        <div className='mt-5 '>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', fontSize: 20, marginTop: 6 }} />
                                <span>Personalized Growth Strategies</span>
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', fontSize: 20, marginTop: 6 }} />
                                <span>Unlimited Content Ideas</span>
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 6, fontSize: 20 }} />2 strategy sessions per week
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', fontSize: 30 }} />Account Setup to fit the algorithm & stand out
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', fontSize: 30 }} /> Weekly evaluations to keep up with your results
                            </p>
                        </div>

                        <button className="btn get-started-button" style={{ width: 200, height: 50, borderRadius: "100pt" }}>
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
                        </button>

                    </div>

                </div>
                <div className="column-1 flex justify-center items-center relative">

                    <img src={resultimage23} className='my-6' style={{ height: 400, }} alt="" />
                </div>

                <div className="column-1 flex justify-center items-center">
                    <div className="flex flex-col result-2-col" style={{ width: "80%" }}>
                        <h3 className='mt-5 uppercase'>Funnel Development</h3>
                        <div className='mt-5 '>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', fontSize: 45, marginTop: -5 }} />
                                <span>Proven Organic Funnel that converts your traffic into paying customers</span>
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Lead Generation
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Content Creation
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Landing Page Buildout
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 5, fontSize: 20 }} />Offer Optimization
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 2, fontSize: 30 }} />Retargeting campaigns with email Marketing
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 5, fontSize: 23 }} />Upsell + Downsell Opportunities
                            </p>
                        </div>
                        <button className="btn get-started-button" style={{ width: 200, height: 50, borderRadius: "100pt" }}>
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10 justify-start items-start">
                <div className="column-1 flex justify-center items-center ">
                    <div className="flex flex-col result-2-col " style={{ width: "80%" }}>
                        <h3 className='mt-5 uppercase'>All in one done for you (DFY) services</h3>
                        <div className='mt-5 '>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Paid Advertising
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Content Creation
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />  Graphic Design and Branding
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Website Development and SEO
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Social Media Management
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />  Email Marketing
                            </p>
                        </div>
                        <button className="btn get-started-button" style={{ width: 200, height: 50, borderRadius: "100pt" }}>
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
                        </button>
                    </div>
                </div>
                <div className="column-1 flex justify-center items-center">
                    <div className="flex flex-col result-2-col" style={{ width: "80%" }}>

                        <h3 className='mt-5 '>Individual Services </h3>
                        <p className='mt-2'>
                            Whether your in need of website design, content creation or any other specialized service you have the freedom to choose a individual solution.
                        </p>
                        <h3 style={{ fontSize: 16, }} className='mt-5'><em>Pricing May Vary</em></h3>
                        <button className="btn get-started-button" style={{ width: 200, height: 50, borderRadius: "100pt" }}>
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Get a free Quote</a>
                        </button>
                    </div>
                </div>
                <div className="column-1 flex justify-center items-center">
                    <div className="flex flex-col result-2-col" style={{ width: "80%" }}>
                        <h3 className='mt-5 uppercase'>Bundle Package </h3>
                        <p className='mt-2'>
                            Mix & Match services to suit your unique business needs.
                        </p>

                        <h3 style={{ fontSize: 16, }} className='mt-5'><em>Pricing May Vary</em></h3>
                        <button className="btn get-started-button" style={{ width: 200, height: 50, borderRadius: "100pt" }}>
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Get a free Quote</a>
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10 justify-start items-start">
                <div className="column-1 flex justify-center items-center ">
                    <div className="flex flex-col result-2-col " style={{ width: "80%" }}>
                        <h3 className='mt-5 uppercase'>Grab our free social media playbook
                            in this playbook you will learn how to</h3>
                        <div className='mt-5 '>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Build out your own content strategy
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 8, fontSize: 20 }} />Generate more views organically
                            </p>
                            <p style={{ display: 'flex', }} className='mt-2'>
                                <BsFillArrowUpRightSquareFill style={{ marginRight: '10px', marginTop: 0, fontSize: 35 }} />⁠Produce High quality content for  business or personal use
                            </p>
                        </div>
                        <button className="btn get-started-button" style={{ width: 200, height: 50, borderRadius: "100pt" }}>
                            <a href={PDF} download="myFile" >Download Now</a>
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 service_responsive_mbl mt-5" >

                <div className="grid-cols-1 md:col-span-6 who_we_are">
                    <div className="service-content-wrapper mt-16 advertising">
                        <h6>#1</h6>
                        <h3>PAID ADVERTISING</h3>
                        <div className="list mt-10">
                            <li>Google Ads</li>
                            <li>TikTok Ads</li>
                            <li>Facebook Ads</li>
                            <li>Instagram</li>
                        </div>
                        <button className="btn get-started-button" >
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
                        </button>
                    </div>
                </div>
                <div className="grid-cols-1 md:col-span-6 justify-center sm:ml-6 mbl_image services_image">
                    <div className='box relative'>
                        <img src={advertising} alt="" className='who_we_are_image absolute ' />
                        <div className="image absolute"></div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Advertising;
