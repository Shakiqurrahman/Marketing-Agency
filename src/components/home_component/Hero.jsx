import { hero_globe } from "../../assets";

const Hero = () => {
  return (
    <section className={`relative w-full items-center mbl_globe mx-auto `} style={{ marginTop: -150 }}>
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div className="grid-cols-1 md:col-span-6" >
          <div className="custom-header">
            <div style={{ marginTop: 200 }} className="mobile_title">
              <h1>WE INNOVATE.</h1>
              <h1>ELEVATE & GROW.</h1>
              <button className="get-started-button" style={{zIndex:99}}> <a href="https://calendly.com/legendarymktg/discovery-call?" target="_blank">Get Started</a> </button>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 md:col-span-6 " >
          <div className="flex justify-center hero_glob_container z-99" >
            <div className="relative">
              {/* <div className='globe-box absolute inset-0 blur-lg brightness-120'>
              </div> */}
              <img className="relative hero_glob" src={hero_globe} alt=""  />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
