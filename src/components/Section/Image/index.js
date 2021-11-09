import BlurredBg from "../../../assets/blurred_bg.png";
import Hero from "../../../assets/hero.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Image() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  const style = {
    backgroundImage: `url(${Hero}), url(${BlurredBg})`,
    backgroundSize: "contain, contain",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "right center, right center"
  };

  return (
    <div
      style={style}
      className="landing-image"
      data-aos="fade-left"
      data-aos-once="true"
    ></div>
  );
}
