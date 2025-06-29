import Image from "next/image";
import React from "react";
import Notifications from "./Notifications/Notifications";
import Testimonials from "./Testimonial/Testimonials";
import { Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full md:w-1/2 lg:w-3/5 flex flex-col bg-gradient-to-tr from-[#1FA911CF] from-25% via-[#2F15D0] to-black py-8">
      <Notifications />

      <div className="mt-10 md:mt-0 flex flex-col-reverse md:flex-row justify-between items-center md:mr-11">
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/hero.svg"}
            alt="hero"
            width={300}
            height={300}
            className="p-0 size-full"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-4 ">
          <Eye className="text-white m-auto md:ml-auto" />
          <p className="text-3xl font-medium text-white text-center md:text-right">
            Watch what the whales are doing
          </p>
          <p className="text-[#F2F2F2] text-center md:text-right">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>

      <Testimonials />
    </section>
  );
};

export default HeroSection;
