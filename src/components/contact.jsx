import { useState, useEffect } from 'react'
import { Whoweare, ContactUs, Hero, Navbar, Services, Partner, Results, Whatisnext, Footer } from './home_component';
import { ellipse } from '../assets';
import { motion } from "framer-motion";
import Main from './about_component/main';


const Contact = () => {

    const navbarVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
    };

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };


        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div style={{overflowX:"hidden"}}>
            <div className=" z-[0] overflow-hidden ">
                <motion.nav
                    initial="hidden"
                    animate="visible"
                    variants={navbarVariants}
                >
                    <div className="bg-cover bg-no-repeat bg-center">
                        <Navbar />
                        <div className="flex justify-center absolute  top-0 blue__gradient">
                            <img src={ellipse} alt="" style={{ height: 380 }} />
                        </div>
                    </div>
                </motion.nav>
            </div>
            <div className="" style={{ marginBottom: 80 }}>
                <ContactUs />
            </div>
            <div className="" style={{ marginTop: 150, marginBottom: 40 }}>
                <Footer />
            </div>

        </div>
    )
}

export default Contact

