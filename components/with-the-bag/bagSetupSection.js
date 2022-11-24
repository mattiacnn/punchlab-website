import React from "react";
import text_en from "../../data/text_en.json";
import { blurDataURL } from "../../data/constants";
import Image from "next/image";

const BagSetupSection = () => {
  return (
    <div className="app-container py-8  sm:text-center md:py-12 ">
      <h2
        className="font-heading text-[2rem] leading-extra-loose text-mediumPurple 
        md:text-[2.5rem]"
      >
        {text_en.with_the_bag_setup_bag_title}
      </h2>
      <p className="mx-auto mt-5 mb-11 max-w-3xl font-medium text-gray-500 md:mb-0 ">
        {text_en.with_the_bag_setup_bag_desc1}
      </p>
      <div className="my-8 flex flex-col justify-center gap-8 xs:flex-row">
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          width={416}
          height={522}
          src="/images/with-the-bag/hanging-bag.png"
        />
        <Image
          width={416}
          height={522}
          src="/images/with-the-bag/stand-up-bag.png"
        />
      </div>
      <p className="mx-auto mt-5 mb-11 max-w-4xl font-medium text-gray-500 md:mb-0 ">
        {text_en.with_the_bag_setup_bag_desc2}
      </p>
    </div>
  );
};

export default BagSetupSection;
