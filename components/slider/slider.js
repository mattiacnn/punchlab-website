import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useWindowSize from "../../hooks/useWindowSize"
import SliderItem from "../sliderItem/sliderItem"

export default function slider() {
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
    <Slider className='' {...reviewSettings}>
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
    </Slider>

  )
}