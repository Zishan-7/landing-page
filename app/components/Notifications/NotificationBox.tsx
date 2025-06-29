import React, { FC, ReactNode } from "react";

interface NotificationBoxProps {
  title: string;
  options: string[];
  icon: ReactNode;
  subtitle?: string;
}

const NotificationBox: FC<NotificationBoxProps> = ({
  title,
  options,
  icon,
  subtitle,
}) => {
  return (
    <div className="size-48 bg-white rounded-md flex p-4 flex-col justify-between">
      <div className="flex justify-between items-center">
        {icon}
        <input type="checkbox" />
      </div>

      <div>
        <p className="text-xs font-medium">{title}</p>

        <select className="text-xs py-1 px-2 rounded-xs bg-[#E5E5E680] my-2">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        {subtitle && <p className="text-xs font-medium">{subtitle}</p>}
      </div>
    </div>
  );
};

export default NotificationBox;
