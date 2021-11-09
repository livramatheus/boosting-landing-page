import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function InfoButton() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <div class="btn" data-aos="fade-right" data-aos-once="true">
      Get Started
    </div>
  );
}
