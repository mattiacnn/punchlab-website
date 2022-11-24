import Image from "next/image";
import Button from "../button/button";
import text_en from "../../data/text_en.json";
import clsx from "clsx";

export default function CTA({ title }) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center bg-white",
        title ? "h-[20rem] " : "my-6 md:my-12 "
      )}
    >
      {title && (
        <h1
          className="mx-auto max-w-2xl px-5
       text-center font-heading text-[2.5rem] leading-extra-loose text-mediumPurple md:px-0"
        >
          {title}
        </h1>
      )}
      <div className={clsx("relative", title && "mt-12")}>
        <div className="relative z-20 ">
          <Button cta={text_en.home_cta_button} />
        </div>
        <div className="absolute -right-10 top-2 z-10 hidden md:block">
          <Image src={"/images/home/dots.png"} height={64} width={64} />
        </div>
      </div>
    </div>
  );
}
