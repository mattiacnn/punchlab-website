import CtaWithImage from "../../components/ctaWithImage/ctaWithImage"
import Footer from "../../components/footer/footer"
import Hero from "../../components/hero/hero"
import HtmlHead from "../../components/htmlHead"
import HeartbeatBanner from "../../components/with-your-body/heartbeatBanner/heartbeatBanner"
import text_en from "../../data/text_en.json"
import BrushBanner from "../../components/brushBanner/brushBanner"

export default function WithYourBody() {
  return (
    <div>
      <HtmlHead title="With your body" />
      <Hero
        background={"../images/with-your-body/all-the-benefits-of-boxing-without-the-bag.png"}
        title={text_en.with_the_body_hero_title}
        description={text_en.with_the_body_hero_sub}
      />
      <CtaWithImage
        title={text_en.wtth_the_body_first_cta_title}
        description={text_en.wtth_the_body_first_cta_description}
        cta1={text_en.wtth_the_body_cta_red_button}
        background={"../images/with-your-body/bodyweight-boxing-workouts.png"}
      />
      <CtaWithImage
        title={text_en.wtth_the_body_second_cta_title}
        description={text_en.wtth_the_body_second_cta_description}
        cta1={text_en.wtth_the_body_cta_red_button}
        inverted
        background={"../images/with-your-body/skill-focus-technique.png"}
      />
      <HeartbeatBanner />
      <CtaWithImage
        title={text_en.wtth_the_body_third_cta_title}
        description={text_en.wtth_the_body_third_cta_description}
        cta1={text_en.wtth_the_body_cta_red_button}
        background={"../images/with-your-body/build-smart-muscles.png"}
      />
      <div className="-mt-5 z-20">
        <BrushBanner title={text_en.with_the_body_second_banner_title} />
      </div>
      <Footer />
    </div>
  )
}