import React from "react";
import { IoMdCloudDone } from "react-icons/io";

const WeCanHelp = () => {
  return (
    <section className="text-white px-4 max-w-[1240px] mx-auto">
      <h1 className="text-xl sm:3xl md:text-4xl font-semibold mb-8">
        We can help you scale if..
      </h1>
      <ul className="mb-8 space-y-5">
        <div className="flex items-center gap-x-3 ">
          <IoMdCloudDone className="text-[#468fee] text-[26px]" />
          <li className="text-sm sm:text-[16px] w-full">
          You are looking to make a long term impact in your industry
          </li>
        </div>
        <div className="flex items-center gap-x-3 ">
          <IoMdCloudDone className="text-[#468fee] text-[26px]" />
          <li className="text-sm sm:text-[16px] w-full">
          You are looking for a partner who can grow with you to save your time
          and money
          </li>
        </div>
        <div className="flex items-center gap-x-3 ">
          <IoMdCloudDone className="text-[#468fee] text-[26px]" />
          <li className="text-sm sm:text-[16px] w-full">
            You want a done-for-you solution and are willing/able to in services
            for rapidly to scale your business.
          </li>
        </div>
      </ul>
      <p className="text-white/70 text-sm sm:text-[16px]">
        If you do not have a large audience and are unsure how to capitalize on
        it, we can help you scale very quickly, without destroying your
        reputation.
      </p>
    </section>
  );
};

export default WeCanHelp;
