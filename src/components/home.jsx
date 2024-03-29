import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ellipse } from "../assets";
import {
  ContactUs,
  Footer,
  Hero,
  Navbar,
  Partner,
  Results,
  Services,
  Whatisnext,
  Whoweare,
} from "./home_component";
import AreYouStruggling from "./home_component/AreYouStruggling";
import OptimizeYourOffer from "./home_component/OptimizeYourOffer";
import WeCanHelp from "./home_component/WeCanHelp";

const Home = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
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
    <div style={{ overflowX: "hidden" }}>
      <div>
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navbarVariants}
        >
          <Navbar />

          <Hero />
          <div className="flex justify-center absolute  top-0 blue__gradient">
            <img src={ellipse} alt="" style={{ height: 380 }} />
          </div>
        </motion.nav>
      </div>
      <AreYouStruggling />
      <div className="who_we_are">
        <Whoweare />
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="" style={{ marginTop: 120 }}>
        <WeCanHelp />
      </div>
      <div className="" style={{ marginTop: 80 }}>
        <Partner />
      </div>
      <div className="" style={{ marginTop: 120 }}>
        <OptimizeYourOffer />
      </div>
      <div className="" style={{ marginTop: 120 }}>
        <Results />
      </div>
      <div className="" style={{ marginTop: 150 }}>
        <Whatisnext />
      </div>
      <div className="" style={{ marginTop: 150, marginBottom: 80 }}>
        <ContactUs />
      </div>
      <div className="" style={{ marginTop: 150, marginBottom: 40 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
