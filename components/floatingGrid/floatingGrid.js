import "./floatingGrid.module.css"
import text_en from "../../data/text_en.json";
import Image from "next/image";
import gridImage from "../../public/images/home/grid.jpg"

export default function floatingGrid() {
  return (
    <div className='flex flex-col md:flex-row w-full px-10 md:px-28 lg:mb-20
      mt-10 py-10 h-[50rem] lg:h-[50rem] items-center justify-center'>
      <div className='flex flex-col w-[35rem] max-w-full lg:w-[45rem] sm:mb-10'>
        <h1 className="text-[2.5rem] text-mediumPurple font-heading text-left 
        leading-extra-loose sm:max-w-[20rem]">
          {text_en.home_floating_grid_title}
        </h1>
        <p className="text-gray-500 sm:max-w-[23rem] mt-4 text-md">
          {text_en.home_floating_grid_description}
        </p>
      </div>
      <div className=" h-full w-full mt-10 md:mt-0">
        <img src="./images/home/grid.jpg" />
      </div>
    </div>
  )
}