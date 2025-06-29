import { Bell } from "lucide-react";
import React from "react";

const NotificationsInput = () => {
  return (
    <div className="size-48 bg-white rounded-md flex p-4 flex-col justify-between">
      <div className="flex justify-between items-center">
        <Bell />
        <p className="text-[10px] font-semibold cursor-pointer">Save</p>
      </div>

      <p className="text-sm font-medium">
        We&apos;ll be sending notifications to you here
      </p>
      <input
        type="email"
        required
        className="border rounded-sm w-full py-2 text-sm px-2 placeholder:text-[#CACBCC] transition-all duration-200 focus:outline-none focus:border-[#6366f1] focus:shadow-md hover:border-[#a5b4fc] hover:shadow-sm"
      />
    </div>
  );
};

export default NotificationsInput;
