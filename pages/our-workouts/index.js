import Menu from "../../components/menu/menu"
import text_en from "../../data/text_en.json"
import HtmlHead from '../../components/htmlHead'
import Image from "next/image"
import Graphic from "../../public/images/our-workouts/graphic-to-be-changed@3x.png"
import Icon from "../../public/images/our-workouts/rating-illustration-copy@3x.png"
import styles from "./our-workouts.module.css"
import Slider from "../../components/slider/slider"
import Stats from "../../components/stats/stats"
import Footer from "../../components/footer/footer"
import BrushBanner from "../../components/brushBanner/brushBanner"

export default function ourWorkout() {

  return (
    <div>
      <HtmlHead />
      <Menu alwaysFixed />

      <div className="w-full h-[29rem] flex items-center justify-center flex-col  pt-[6rem] px-5 md:px-0">
        <h1 className="text-mediumPurple text-[2rem] md:text-[2.5rem] leading-extra-loose 
                        font-heading max-w-full md:text-center">
          {text_en.our_workouts_first_title}
        </h1>
        <p className="text-grey md:text-center md:max-w-[47rem] mt-5">
          {text_en.our_workouts_first_description}
        </p>
      </div>

      <div style={{ backgroundImage: "url(./images/our-workouts/picture-wall@2x.png" }}
        className="w-full md:h-[45rem] h-[25rem] bg-center bg-cover">
      </div>

      <div className="bg-mediumPurple flex flex-col items-center justify-center h-[22rem] md:h-[16rem] mt-[6rem] px-[1.8rem] py-10 md:py-0">
        <h1 className="text-white text-[2rem] md:text-[2.5rem] leading-extra-loose 
                        font-heading max-w-full md:text-center">
          {text_en.our_workouts_banner_title}
        </h1>
        <p className="text-white md:text-center md:max-w-[49rem] mt-5">
          {text_en.our_workouts_banner_description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-[3rem] md:mt-[6rem] md:px-[7.5rem] px-[1.8rem]">
        <div className="flex flex-col mb-10 md:mb-0">
          <h1 className="text-mediumPurple text-[2rem] md:text-[2.5rem] leading-extra-loose 
                        font-heading w-[18rem]">
            {text_en.our_workouts_graphic_title}
          </h1>
          <p className="text-grey max-w-[20rem] mt-5">
            {text_en.our_workouts_graphic_description}
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <Image src={Graphic} height={524} width={656} />
          <div className={styles.icon}>
            <Image src={Icon} height={58} width={102} />
          </div>
        </div>
      </div>

      <div className="w-full bg-cover bg-center h-[30rem] mt-[6rem] flex items-center justify-end md:pr-[8rem] relative"
        style={{ backgroundImage: "url(./images/our-workouts/bg@2x.png" }}>
        <div className="md:hidden absolute h-full w-full bg-black opacity-40">

        </div>
        <div className="z-40">
          <h1 className="text-white text-[2rem] md:text-[2.5rem] leading-extra-loose 
                        font-heading w-[22rem]">
            {text_en.our_workouts_background_banner_title}
          </h1>
          <p className="text-white max-w-[18rem] mt-5">
            {text_en.our_workouts_background_banner_description}
          </p>
        </div>
      </div>

      <div className="bg-mediumPurple w-full py-[4rem] md:py[6rem]">
        <div className="w-full flex flex-col items-center justify-center md:mb-[6rem] px-5 md:px-0">
          <h1 className="text-white text-[2rem] md:text-[2.5rem] leading-extra-loose 
                        font-heading">
            {text_en.our_workouts_slider_title}
          </h1>
          <p className="text-white max-w-[40rem] mt-5 text-left md:text-center">
            {text_en.our_workouts_slider_description}
          </p>
        </div>
        <Slider />
        <Stats/>
      </div>
      <BrushBanner title={text_en.our_workouts_brush_banner_title}/>
      <Footer/>
    </div>
  )
}