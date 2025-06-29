import React, { FC } from "react";

interface TestimonialCardProps {
  name: string;
  designation: string;
  testimonial: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  designation,
  testimonial,
}) => {
  return (
    <div className="h-[200px] md:h-[136px] w-72 md:w-full md:max-w-[430px] p-5 rounded-xl bg-white flex flex-col gap-5">
      <p className="font-semibold">
        {name}
        <span className="text-sm font-medium text-[#96979A] ml-2">
          {designation}
        </span>
      </p>

      <p className="font-medium text-sm">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
