import Image from "next/image"
import logo from "../../public/images/logo.png"
import googlestore from "../../public/images/googlestore.png"
import appstore from "../../public/images/appstore.png"
import mail from "../../public/images/mail.png"
import facebook from "../../public/images/facebook.png"
import instagram from "../../public/images/instagram.png"
import youtube from "../../public/images/youtube.png"
import text_en from "../../data/text_en.json";

export default function footer() {
  return (
    <footer className="bg-darkPurple h-full md:h-[20rem] w-full flex 
    flex-col md:flex-row px-20 items-center justify-evenly py-10 md:py-0">
      <div className="flex flex-col items-center md:items-start lg:items-cemter">
        <Image src={logo} height={30} width={130} objectFit={"contain"} />
        <p className="text-white text-center md:text-left text-sm font-medium mt-5"
        >Copyright© <br />
          2020 PunchLab™ S.R.L.</p>
        <a className="text-white text-sm font-bold underline uppercase mt-5">
          {text_en.footer_terms_and_condition}
        </a>
        <a className="text-white text-sm font-bold underline uppercase mt-5">
          {text_en.footer_privacy_policy}
        </a>
        <a className="text-white text-sm font-bold underline uppercase mt-5">
          {text_en.footer_investors}
        </a>
      </div>
      <div className="flex flex-col items-center mt-5 md:mt-0">
        <p className="text-white text-sm font-bold mb-5 md:mb-10">{text_en.footer_download}</p>
        <div className="flex flex-col lg:flex-row justify-between lg:w-[16rem] h-[6rem] lg:h-auto">
          <Image width={122} height={36} src={googlestore} />
          <Image width={122} height={36} src={appstore} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-5 md:mt-0">
        <p className="text-white text-sm font-bold mb-5 md:mb-10">{text_en.footer_contact_us}</p>
        <div className="h-auto md:h-[6rem] lg:h-auto">
          <Image width={32} height={26} src={mail} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 md:mt-0">
        <p className="text-white text-sm font-bold mb-5 md:mb-10">{text_en.footer_follow_us}</p>
        <div className="flex flex-row justify-around w-[10rem] h-[4rem] md:h-[6rem] lg:h-auto max-h-11">
          <Image src={facebook} height={42} width={42}  />
          <Image src={instagram} height={42} width={42} />
          <Image src={youtube} height={42} width={42} />
        </div>
      </div>
    </footer>
  )
}