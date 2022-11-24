import text_en from "../../data/text_en.json";
import StatCounter from "../statCounter/statCounter";

export default function stats() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[6rem] px-5 md:px-0">
      <h1 className="text-white text-[2rem] md:text-[2.5rem] leading-extra-loose 
                  font-heading">
        {text_en.our_workouts_after_slider_title}
      </h1>
      <p className="text-white max-w-[40rem] mt-5 md:text-center">
        {text_en.our_workouts_after_slider_description}
      </p>

      <div className="mt-[6rem] flex flex-wrap w-full justify-evenly md:px-40">
        <StatCounter counter={305} text={"lorem ipsum"}/>
        <StatCounter counter={305} text={"lorem ipsum"}/>
        <StatCounter counter={305} text={"lorem ipsum"}/>
        <StatCounter counter={305} text={"lorem ipsum"}/>
      </div>
    </div>

  )
}