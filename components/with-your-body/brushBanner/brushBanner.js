import Button from "../button/button"
import text_en from "../../data/text_en.json";

export default function brushBanner() {
  return (
    <div className="h-[20rem] flex justify-center items-center flex-col  bg-no-repeat bg-cover mt-0"
      style={{ backgroundImage: 'url("../images/with-your-body/brush.png")' }}
    >
      <h1 className="text-[2.1rem] md:text-[2.5rem] px-10 text-white font-heading leading-extra-loose">
        {text_en.with_the_body_second_banner_title}
      </h1>
      <div className="mt-14">
        <Button cta={text_en.with_the_body_second_banner_cta} />
      </div>
    </div>
  )
}