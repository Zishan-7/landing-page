import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-6 md:mt-0 flex flex-col items-end gap-4">
      <div className="w-full flex flex-col items-end gap-4 px-11">
        <p className="text-2xl text-white font-medium ">Testimonials</p>
        <div className="h-[1px] bg-white w-full"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full md:items-end justify-between">
        <Image
          src={"/images/logo.svg"}
          width={60}
          height={60}
          alt="logo"
          className="ml-11 mt-4 md:mt-0"
        />

        <Carousel className="w-full max-w-xl">
          <CarouselContent className="-ml-0 max-w-lg">
            <CarouselItem>
              <TestimonialCard
                name="Jack F"
                designation="Ex Blackrock PM"
                testimonial="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
              />
            </CarouselItem>
            <CarouselItem className="-ml-10">
              <TestimonialCard
                name="Yash P"
                designation="Research, 3poch Crypto Hedge Fund"
                testimonial="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
              />
            </CarouselItem>
            <CarouselItem className="-ml-10">
              <TestimonialCard
                name="Shiv S"
                designation="Co-Founder Magik Labs"
                testimonial="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
