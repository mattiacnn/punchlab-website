import Button from "../button/button";
import text_en from "../../data/text_en.json";

export default function BrushBanner({ title, ctaText }) {
  return (
    <div
      className="relative z-30 mt-0 flex h-[20rem]  flex-col items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("../images/with-your-body/brush.png")' }}
    >
      <h1 className="px-4 text-center font-heading text-[2.1rem] leading-extra-loose text-white md:text-[2.5rem]">
        {title}
      </h1>
      <div className="mt-14">
        <Button cta={ctaText || text_en.with_the_body_second_banner_cta} />
      </div>
    </div>
  );
}
