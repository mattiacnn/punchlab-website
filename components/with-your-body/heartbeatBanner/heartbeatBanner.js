import text_en from "../../../data/text_en.json";

export default function heartbeatBanner() {
  return (
    <div className="h-[20rem] flex justify-center items-center bg-mediumPurple 
  lg:bg-unset lg:bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("../images/with-your-body/heartbeat.png")' }}>
      <h1 className="text-[2.1rem] md:text-[2.5rem] px-10 text-white font-heading leading-extra-loose">
        {text_en.wtth_the_body_banner_title}
      </h1>
    </div>
  )
}