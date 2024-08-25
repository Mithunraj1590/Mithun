import HomeBanner from "@/widgets/HomeBanner";
import HomeAbout from "@/widgets/HomeAbout";
import HomeWorks from "@/widgets/HomeWorks"
import HomePrinciples from "@/widgets/HomePrinciples"
import HomeHire from "@/widgets/HomeHire"
import AboutBanner from "@/widgets/AboutBanner"
import ContactUs from "@/widgets/ContactUs"
import WorkList from "@/widgets/WorkList"
import AboutJourney from "@/widgets/AboutJourney"
import AboutSkills from "@/widgets/AboutSkills"

const setComponent = (widget) => {
  const components = {
    HomeBanner,
    HomeAbout,
    HomeWorks,
    HomePrinciples,
    HomeHire,
    AboutBanner,
    ContactUs,
    WorkList,
    AboutJourney,
    AboutSkills
  };
  return components[widget.widget_type] || components["default"];
};
const Block = ({
  widget,
}) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      {...widget}
    />
  );
};

export default Block;
