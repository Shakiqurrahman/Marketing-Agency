import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rectangle_5, Rectangel_19 , Mask_group11, Mask_group12 } from '../../assets';


const Results = () => {
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
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 xl:grid-cols-12">
                        <div className="content-wrapper1 grid-cols-1 xl:col-span-6 mt-10">
                            <h3 className='capitalized'>OUR STRUCTURE</h3>
                            <h1 className='capitalize mt-3' style={{lineHeight:1}}>driven massive results</h1>
                            <p className='mt-4'>Our company is made up of marketing superhero's that have driven massive revenue success for clients.</p>
                            <button className="btn get-started-button" style={{ borderRadius: "100pt" }}>
                            <a target='_blank' href="https://calendly.com/legendarymktg/discovery-call?month=2024-01">Learn More</a>
                            </button>
                        </div>
                        <div className="boxes-wrapper grid-cols-1 xl:col-span-6 flex flex-col justify-center">
                            <div className="flex justify-center  text-center relative paid_ads" >
                                <img src={Rectangel_19} alt="" />
                                <div className="box-content box1 absolute box-content" >
                                    <h1>$4M+</h1>
                                    <p>Paid ads Revenue</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center mt-5 box_responsive">
                                <div className="flex justify-center  text-center relative" >
                                    <img src={Rectangel_19} alt="" />
                                    <div className="box-content box2 absolute box-content" >
                                        <h1>$100k+</h1>
                                        <p>Email  Campaigns</p>
                                    </div>
                                </div>
                                <div className="flex justify-center text-center relative">
                                    <img src={Rectangel_19} alt="" />
                                    <div className="box-content  box3 absolute box-content" >
                                        <h1>300k+</h1>
                                        <p>SEO & Website Traffic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center text-center relative mt-5 clients">
                                <img src={Rectangel_19} alt="" />
                                <div className="box-content  box4 absolute box-content" >
                                    <h1 >20+</h1>
                                    <p >Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 adapt_solution" >
                        <div className="column1">
                            <div className="flex flex-row">
                                <img src={Mask_group11} className='result_below_image' alt="" />
                                <div className="flex flex-col result-2-col ml-5">
                                    <h3>ADAPTABLE SOLUTIONS</h3>
                                    <p>We incorporate effective AI systems that focus on optimizing and delivering successful results. </p>
                                </div>
                            </div>
                        </div>
                        <div className="column1 influencer">
                            <div className="flex flex-row">
                                <img src={Mask_group12} className='result_below_image' alt="" />
                                <div className="flex flex-col result-2-col ml-5">
                                    <h3 className='capitalized '>Influencer Partnerships</h3>
                                    <p>Our tailored plans target promotion and drive sales by strategically connecting your business with influencers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.nav>
    );
};

export default Results;
