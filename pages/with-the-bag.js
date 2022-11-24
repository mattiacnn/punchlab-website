import CtaWithImage from "../components/ctaWithImage/ctaWithImage";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import HtmlHead from "../components/htmlHead";
import text_en from "../data/text_en.json";
import BrushBanner from "../components/brushBanner/brushBanner";
import CommunitymapSection from "../components/with-the-bag/communitymapSection";
import InfoSection from "../components/with-the-bag/infoSection";
import BagSetupSection from "../components/with-the-bag/bagSetupSection";
import TimelineSection from "../components/with-the-bag/TimelineSection";
import { firstTimeline, secondTimeline } from "../data/timelines";
import Cta from "../components/cta/cta";
import StatsSection from "../components/with-the-bag/statsSection";

export default function WithTheBag() {
  return (
    <div>
      <HtmlHead title="With the Bag" />
      <Hero
        background={"../images/with-the-bag/level-up-your-punching-bag.png"}
        title={text_en.with_the_body_hero_title}
        description={text_en.with_the_body_hero_sub}
      />
      <TimelineSection
        title="TRANSFORM YOUR PUNCHING BAG INTO AN INTERACTIVE WORKOUT EXPERIENCE"
        timelineList={firstTimeline}
        isHighlightedFirst={true}
      />
      <StatsSection />
      <TimelineSection
        title="IT'S BETWEEN YOU AND THE BAG"
        timelineList={secondTimeline}
        isReverse={true}
      />
      <Cta />
      <BagSetupSection />
      <InfoSection />
      <CommunitymapSection
        title={text_en.with_the_bag_map_banner_title}
        description={text_en.with_the_bag_map_banner_sub_title}
      />
      <div className="z-20 -mt-5">
        <BrushBanner
          title={text_en.with_the_bag_brush_banner_title}
          ctaText={text_en.with_the_bag_brush_banner_cta_text}
        />
      </div>
      <Footer />
    </div>
  );
}
