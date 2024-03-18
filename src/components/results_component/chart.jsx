import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { facebook1, facebook2, insta_result1, insta_result2, reel } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Insta from './insta';
import Facebook from './facebook';
import Reel from './reel';

const Chart = () => {
    

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 });
        }
    }, [controls, inView]);

    const options = {
        series: [
            {
                name: 'Before',
                data: [100, 150, 130, 150, 120, 170, 180, 150, 250, 160, 80, 200],
            },
            {
                name: 'After',
                data: [200, 400, 350, 300, 700, 500, 500, 900, 700, 800, 900, 960],
            },
        ],
        chart: {
            height: 350,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
            formatter: (val) => {
                return val * 1 + 'K'
            }
        },
        stroke: {
            curve: 'smooth',
        },

        xaxis: {
            type: 'month',
            categories: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC",
            ],

        },
        yaxis: {
            title: {
                text: 'IN THOUSAND'
            },
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    };

    return (
        <motion.nav
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ opacity: 1, y: 0, duration: 0.5, delay: 0.5 }}
    >
        <section>
            <div className="contact-box ">
                <h1 className='chart-header text-center'>Tiktok Video Promotion Results</h1>
                <div id="chart" >
                    <ReactApexChart options={options} series={options.series} type="area" height={350} />
                </div>
            </div>
           <Insta />
            <Facebook />
            <Reel />
        </section>
        </motion.nav>
    );

}

export default Chart;
