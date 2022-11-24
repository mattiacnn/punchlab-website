import Image from "next/image";
import clsx from "clsx";
import React, { Fragment } from "react";
import { blurDataURL } from "../../data/constants";

export default function TimelineSection({
  title,
  timelineList,
  isHighlightedFirst = false,
  isReverse = false,
}) {
  return (
    <div id="timeline-section" className="bg-orange py-12 md:py-24">
      <div className="app-container  ">
        <h2
          className="max-w-xl font-heading text-[2rem] leading-extra-loose text-mediumPurple md:mx-auto 
        md:text-center md:text-[2.5rem]"
        >
          {title}
        </h2>
        <div
          className={clsx(
            "timeline-grid mx-auto mt-12 gap-5 md:mt-24",
            isReverse && "reverse"
          )}
        >
          {timelineList.map(({ title, description, imgSrc }, i) => {
            const isFirstItem = i === 0;
            const isLastItem = timelineList.length === i + 1;

            const firstItem = (
              <div className={clsx("rm-title-wrapper p-1 ")}>
                <div
                  className={clsx(
                    "mx-auto flex h-5  w-5 rounded-full bg-black",
                    !isLastItem && "rm-circle",
                    isHighlightedFirst && isFirstItem && "bg-main",
                    isFirstItem && "dotted-line-prev ",
                    isLastItem && "dotted-line-next"
                  )}
                >
                  <div className="m-auto h-2 w-2 rounded-full bg-white" />
                </div>
              </div>
            );
            const lastItem = (
              <div
                className={clsx(
                  " mb-12 max-w-2xl",
                  isReverse ? "md:mr-auto" : "md:ml-auto"
                )}
              >
                {imgSrc && (
                  <Image
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    width={687}
                    height={446}
                    src={imgSrc}
                  />
                )}
              </div>
            );
            return (
              <Fragment key={i}>
                {isReverse ? lastItem : firstItem}
                <div>
                  <p
                    className={clsx(
                      "text-xl font-semibold text-mediumPurple md:mb-0 ",
                      isHighlightedFirst && isFirstItem && "text-main"
                    )}
                  >
                    {title}{" "}
                  </p>
                  <p className="mt-2 mb-11 font-medium text-gray-500 md:mb-0 ">
                    {description}{" "}
                  </p>
                </div>
                {isReverse ? firstItem : lastItem}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
