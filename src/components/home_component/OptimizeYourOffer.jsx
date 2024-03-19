import React from "react";

const OptimizeYourOffer = () => {
  return (
    <section className="text-white text-center my-36 mt-10 sm:mt-36 px-4 sm:px-0">
      <p className="mb-2 text-[#65baed]/60 text-sm sm:text-[16px]">In less than 21 days we will..</p>
      <h1 className="text-xl sm:3xl md:text-4xl font-semibold text-center mb-5">
        <span className="text-[#65baed]">Optimize</span> your offer
      </h1>
      <p className="text-sm sm:text-[16px] mb-4 leading-relaxed">
       We'll take a look at what you are offering and help you <br /> create a compelling offer that your audience wants to buy
      </p>
      <p className="text-white/80 text-sm sm:text-[16px]">
        No more low-ticket-one of purchases. Only increased LTV and lifetime customers.
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
  );
};

export default OptimizeYourOffer;
