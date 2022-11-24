
import useWindowSize from '../../hooks/useWindowSize';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ReviewCard from '../reviewCard/reviewCard';
import text_en from "../../data/text_en.json";

export default function reviewsSlider() {
  const { width, height } = useWindowSize();

  var reviewSettings = {
    dots: false,
    speed: 600,
    centerMode: true,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  }

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
      return 2
    }
    else if (width > 1100 && width <= 1400) {
      return 3
    }
    else {
      return 4
    }
  }

  return (
    <div className='min-h-[55rem] w-full bg-mediumPurple
                flex flex-col items-center justify-center h-32 py-20'>
      <h1 className="text-white text-[2.5rem] leading-extra-loose font-heading 
                 sm:text-center text-left px-5 md:px-0 mx-auto">
        {text_en.home_review_slider_title}
      </h1>
      <p className="text-white mt-5 mb-11 md:mb-0 md:w-[35rem] 
                text-left sm:text-center mx-auto px-5 md:px-0">
        {text_en.home_review_slider_description}
      </p>

      <div className='mt-5 h-[35rem] w-[30rem] max-w-full  md:w-[100rem]'>
        <Slider className='' {...reviewSettings}>
          <ReviewCard
            description={text_en.home_first_review}
            author={"- lanky Sime -"}
          />
          <ReviewCard
            description={text_en.home_second_review}
            author={"- RazorSharp01 -"}
          />

          <ReviewCard
            description={text_en.home_third_review}
            author={"- GeoHUR -"}
          />

          <ReviewCard
            description={"“Is truly a great way to get in a workout without being too complicated or frustrating to those who are new to boxing training. It is one of the most efficient tools that anyone can add to their heavy bag setup to enhance the training experience. Thanks!”"}
            author={"- GeoHUR -"}
          />
          <ReviewCard
            description={"“Is truly a great way to get in a workout without being too complicated or frustrating to those who are new to boxing training. It is one of the most efficient tools that anyone can add to their heavy bag setup to enhance the training experience. Thanks!”"}
            author={"- GeoHUR -"}
          />
          <ReviewCard
            description={"“I’m an early 40s male who hasnt done much combat training in a while. Came across this ap just to get in a little better shape, and I’ve fell in love all over again!! PunchLab is legit!! I love this app”"}
            author={"- Jimmy_V78 -"}
          />
        </Slider>
      </div>

    </div>
  )
}