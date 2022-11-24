import Image from "next/image";
import React from "react";
import { blurDataURL } from "../../data/constants";

const statList = [
  {
    icon: "/images/with-the-bag/icon-stats.png",
    description: "Track speed and volume of your strikes",
  },
  {
    icon: "/images/with-the-bag/icon-power.png",
    description: "Measure the power and progress of impact",
  },
  {
    icon: "/images/with-the-bag/icon-calories.png",
    description: "Estimate calorie output and physical data",
  },
];
const StatsSection = () => {
  return (
    <div className="bg-mediumPurple py-12 text-white md:mt-32">
      <div className="app-container flex flex-col-reverse items-center gap-5 md:flex-row">
        <div className="flex w-full flex-col justify-center text-center md:text-left">
          <h2 className="font-heading text-[2rem] leading-extra-loose md:text-[2.5rem]">
            YOUR BOXING STATS IN ONE PLACE
          </h2>
          <br />
          {statList.map(({ description, icon }, i) => (
            <div
              key={i}
              className="mb-4 flex flex-col items-center gap-3 md:flex-row"
            >
              <img width={34} height={34} src={icon} alt={description} />
              <p className=" font-medium  ">{description} </p>
            </div>
          ))}
        </div>
        <div className="mt-[-30%] w-full max-w-xs px-6 md:ml-auto md:max-w-sm">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            width={432}
            height={863}
            src="/images/with-the-bag/i-phone-11-pro-01-real-silver.png"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
