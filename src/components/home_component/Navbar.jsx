import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { logo, menu, close, instagram, youtube, twitter } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
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
    <nav
      className={` w-full flex items-center  top-0 z-20 bg-navbar-style`}
    >
      <div className='w-full grid grid-cols-3 items-center mx-auto bg-navbar-style2' >
        <div>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' style={{ height: 100 }} className=' object-cover'  />
          </Link>
        </div>
        <div className="" style={{ width: "100%" }}>
          <ul className='list-none hidden sm:flex flex-1 w-80 gap-8 items-center mt-1 justify-center' style={{ width: "100%" }}>
            <a href="/" style={{ backgroundColor: "transparent" }} className="nav-page">Home</a>
            <a href="/services" style={{ backgroundColor: "transparent" }} className="nav-page">Services</a>
            <a href="/results" style={{ backgroundColor: "transparent" }} className="nav-page">Results</a>
            <a href="/about " style={{ backgroundColor: "transparent" }} className="nav-page">About</a>
            <a href="/contact" style={{ backgroundColor: "transparent" }} className="nav-page">Contact</a>

          </ul>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              <a href="/" style={{ backgroundColor: "transparent" }} className="nav-page">Home</a>
              <a href="/services" style={{ backgroundColor: "transparent" }} className="nav-page">Services</a>
              <a href="/results" style={{ backgroundColor: "transparent" }} className="nav-page">Results</a>
              <a href="/about" style={{ backgroundColor: "transparent" }} className="nav-page">About</a>
              <a href="/contact" style={{ backgroundColor: "transparent" }} className="nav-page">Contact</a>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex justify-end mt-1">
          <button className="btn contact-button">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
