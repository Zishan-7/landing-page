"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Bell, ChartNoAxesColumn, Clock } from "lucide-react";
import React from "react";
import NotificationBox from "./NotificationBox";
import Autoplay from "embla-carousel-autoplay";
import NotificationsInput from "./NotificationsInput";

const Notifications = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mr-11 md:mr-0 ml-11">
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <Bell className="text-white" />
        <p className="text-3xl font-medium text-white">
          Get notified when a highly correlated whale makes a move
        </p>
        <p className="text-[#F2F2F2]">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="mt-4 md:mt-0 w-full md:max-w-sm inner-shadow-sides"
      >
        <CarouselContent className="w-52 md:w-56 -ml-1">
          <CarouselItem className="pl-1">
            <NotificationsInput />
          </CarouselItem>
          <CarouselItem className="pl-1">
            <NotificationBox
              icon={<ChartNoAxesColumn size={28} />}
              title="Notify me when any wallets move more than"
              options={["$1,000.00", "$2,000.00", "$5,000.00"]}
            />
          </CarouselItem>

          <CarouselItem className="pl-1">
            <NotificationBox
              icon={<Clock size={28} />}
              title="Notify me when any wallet dormant for"
              options={["> 30 days", "> 45 days"]}
              subtitle="becomes active"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Notifications;
