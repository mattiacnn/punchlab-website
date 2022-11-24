import text_en from "../../data/text_en.json";

export default function () {
  return (
    <div className='flex w-full h-[16.5rem] items-center justify-center bg-mediumPurple flex-col'>
      <h1 className="text-[2.5rem] text-white font-heading">{text_en.home_banner_frist_title}</h1>
      <h1 className="text-[2.5rem] text-white font-heading bg-cover bg-no-repeat w-64 text-center bg-bottom"
        style={{ backgroundImage: "url(./images/home/brush.png)", backgroundPositionY: 20 }}>
        {text_en.home_banner_second_title}
      </h1>
    </div>
  )
}