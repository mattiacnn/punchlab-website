import React from "react";
import text_en from "../../data/text_en.json";
import Image from "next/image";
import { blurDataURL } from "../../data/constants";

const InfoSection = () => {
  return (
    <div className="bg-mediumPurple py-8 text-white md:py-16">
      <div className="app-container mb-12 md:flex">
        <div className="w-full md:w-1/2 lg:w-2/3">
          <h2 className="max-w-md font-heading text-[2rem] leading-extra-loose md:text-[2.5rem]">
            {text_en.with_the_bag_map_info_section_title}
          </h2>
        </div>
        <div className="my-5 w-full md:my-0 md:w-1/2 md:max-w-sm md:text-justify lg:w-1/3">
          <p>{text_en.with_the_bag_map_info_section_desc1}</p>
          <br />
          <p className="mt-12--">
            {text_en.with_the_bag_map_info_section_desc2}
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          width={2224}
          height={1145}
          src="/images/with-the-bag/iphone-with-info.png"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default InfoSection;
