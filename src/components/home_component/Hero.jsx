import video from "../../assets/videos/Daanish’s Testimonial .mp4";

const Hero = () => {
  return (
    <section className='relative flex flex-col md:flex-row gap-16 justify-center items-center  mt-14 md:mt-8 px-4'>
      <div className="custom-header w-full">
        <div className="mobile_title">
          <h1>ATTENTION: ONLINE COACHES & BUSINESS</h1>
          <h1>OWNERS MAKING OVER $20K PER MONTH.</h1>
          <button className="get-started-button" style={{ zIndex: 99 }}>
            {" "}
            <a
              href="https://calendly.com/legendarymktg/discovery-call?"
              target="_blank"
              rel="noreferrer"
            >
              Get Started
            </a>{" "}
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <video className="w-[60%] sm:w-[43%]" src={video} autoPlay controls></video>
      </div>
    </section>
  );
};

export default Hero;
