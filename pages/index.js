import CtaWithImage from "../components/ctaWithImage/ctaWithImage";
import Hero from "../components/hero/hero";
import HtmlHead from "../components/htmlHead";
import Banner from "../components/banner/banner";
import CtaWithBackground from "../components/ctaWithBackground/ctaWithBackground";
import CoachesSlider from "../components/coachesSlider/coachesSlider";
import ReviewsSlider from "../components/reviewsSlider/reviewsSlider";
import Cta from "../components/cta/cta";
import FloatingGrid from "../components/floatingGrid/floatingGrid";
import Footer from "../components/footer/footer";
import text_en from "../data/text_en.json";

export default function Home() {
  return (
    <div>
      <HtmlHead title="Home" />
      <Hero
        background={"./images/home/hero.png"}
        title={text_en.home_hero_title}
        description={text_en.home_hero_sub}
      />
      <CtaWithImage
        title={text_en.home_first_cta_title}
        description={text_en.home_first_cta_description}
        cta1={text_en.home_cta_red_button}
        cta2={text_en.home_cta_outline_button}
        background={"./images/home/punching-strap.png"}
      />
      <CtaWithImage
        title={text_en.home_second_cta_title}
        description={text_en.home_second_cta_description}
        cta1={text_en.home_cta_red_button}
        cta2={text_en.home_cta_outline_button}
        inverted
        background={"./images/home/our-coaches-in-your-corner.png"}
      />
      <CtaWithImage
        title={text_en.home_third_cta_title}
        description={text_en.home_third_cta_description}
        cta1={text_en.home_cta_red_button}
        cta2={text_en.home_cta_outline_button}
        background={"./images/home/real-time-data.png"}
      />
      <Banner />
      <CtaWithBackground />
      <FloatingGrid />
      <CoachesSlider />
      <ReviewsSlider />
      <Cta title={text_en.home_cta_title} />
      <Footer />
    </div>
  );
}
