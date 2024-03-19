import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const AreYouStruggling = () => {
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
    <section className="text-white text-center my-36 mt-10 sm:mt-36 px-4 sm:px-0">
      <h1 className="text-xl sm:3xl md:text-4xl font-semibold text-center mb-5 md:leading-normal leading-relaxed">
        Are you struggling to get views, <br /> clicks and sales in your business?
      </h1>
      <p className="text-sm sm:text-[16px] mb-2">
        We will add an extra <span className="font-bold text-green-500">$30,000 MONTHLY REVENUE</span> in 90 days Garunteed...(or
        you don't pay)
      </p>
      <p className="text-white/80 text-sm sm:text-[16px]">
        Warning: This will work even if you do not have a huge audience, without
        paid ads, or without using cold emails.
      </p>
      <button
        className="btn get-started-button"
        style={{ borderRadius: "100pt" }}
      >
        <a
          target="_blank"
          href="https://calendly.com/legendarymktg/discovery-call?month=2024-01"
          rel="noreferrer"
        >
          Learn More
        </a>
      </button>
    </section>
    </motion.nav>
  );
};

export default AreYouStruggling;
