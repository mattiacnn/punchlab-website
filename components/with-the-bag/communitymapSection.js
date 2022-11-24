import Image from "next/image";
import { blurDataURL } from "../../data/constants";

const CommunitymapSection = ({ title, description }) => {
  return (
    <div className="my-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="font-heading text-[2rem] leading-extra-loose text-mediumPurple 
        md:text-[2.5rem]"
        >
          {title}
        </h2>
        <p className="mt-5 mb-11 font-medium text-gray-500 md:mb-0 ">
          {description}{" "}
        </p>
      </div>
      <div className="relative mx-auto mt-12 max-w-6xl md:mt-24">
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          width={1158}
          height={607}
          src="/images/with-the-bag/world-map.png"
        />
      </div>
    </div>
  );
};

export default CommunitymapSection;
