import Slider from "react-slick"
import useWindowSize from "../../hooks/useWindowSize"
import CoachCard from "../coachCard/coachCard"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import text_en from "../../data/text_en.json";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "flex", background: "#f1f1f1", height: 64,
        width: 64, borderRadius: 50, justifyContent: "center", alignItems: "center",
        color: "black", opacity: 0.7,zIndex:90
      }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "flex", background: "#f1f1f1", height: 64,
        width: 64, borderRadius: 50, justifyContent: "center", alignItems: "center",
        color: "black", opacity: 0.7,zIndex:90
      }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}


export default function coachesSlider() {
  const { width, height } = useWindowSize();

  function getSlidesToShow() {
    if (width <= 600) {
      return 1
    }
    else if (width <= 800 && width > 600) {
      return 1
    }
    else if (width > 700 && width <= 900) {
      return 2
    }
    else if (width > 900 && width <= 1100) {
      return 3
    }
    else if (width > 1100 && width <= 1400) {
      return 3
    }
    else {
      return 3
    }
  }

  var settings = {
    dots: false,
    speed: 600,
    centerMode: true,
    centerPadding: 50,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 2,
    nextArrow: width > 800 ? <NextArrow /> : null,
    prevArrow: width > 800 ? <PrevArrow /> : null
  };

  return (
    <div className='py-10'>
      <h1 className="text-mediumPurple text-[2.5rem] leading-extra-loose font-heading 
        text-left md:text-center px-5 md:px-0 mx-auto">
        {text_en.home_coaches_slider_title}
      </h1>
      <p className="text-gray-500 mt-5 mb-11 md:mb-0 md:w-[35rem] 
        text-left md:text-center mx-auto px-5 md:px-0">
          {text_en.home_coaches_slider_description}
      </p>

      <Slider className='mt-5' {...settings}>
        <CoachCard
          coach={text_en.home_first_coach_name}
          image={"/images/home/Bobbie.jpg"}
        />
        <CoachCard
          coach={text_en.home_second_coach_name}
          image={"/images/home/Burrell.jpg"}
        />
        <CoachCard
          coach={text_en.home_third_coach_name}
          image={"/images/home/Samantha.jpg"}
        />
        <CoachCard
          coach={text_en.home_fourth_coach_name}
          image={"/images/home/Lauren.jpg"}
        />
      </Slider>
    </div>

  )
}