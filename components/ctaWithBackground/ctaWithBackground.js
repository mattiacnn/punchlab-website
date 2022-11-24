import Button from "../button/button"
import text_en from "../../data/text_en.json";

export default function ctaWithBackground() {
  return (
    <div className='flex flex-col justify-center 
            items-center h-[43rem] w-full bg-cover 
            bg-no-repeat bg-left-center sm:bg-center px-12'
      style={{ backgroundImage: "url(./images/home/fitnes-anywhere.png)" }}>

      <h1 className="text-[2.5rem] text-white font-heading text-left sm:max-w-[40rem] 
            sm:text-center leading-extra-loose">{text_en.home_background_cta_title}</h1>
      <p className='text-white text-left sm:text-center sm:max-w-[30rem] mt-5'>
        {text_en.home_background_cta_description}
      </p>

      <div className='flex flex-col sm:flex-row mt-8 w-[30rem] justify-evenly
             items-center h-36 sm:h-auto max-w-full'>
        <Button cta={text_en.home_background_cta_red_button} />
        <Button cta={text_en.home_background_cta_white_button} bgWhite />
      </div>
    </div>
  )
}