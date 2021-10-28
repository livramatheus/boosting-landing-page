import BlurredBg from "../../../assets/blurred_bg.png";
import Hero from "../../../assets/hero.png";

export default function Image() {
  const style = {
    backgroundImage: `url(${Hero}), url(${BlurredBg})`,
    backgroundSize: "contain, contain",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "right center, right center"
  };

  return <div style={style} className="landing-image"></div>;
}
