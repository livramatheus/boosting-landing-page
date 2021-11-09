import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function InfoText() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-right" data-aos-once="true">
        Boost Your Startup Business Faster
      </h1>
      <div data-aos="fade-right" data-aos-once="true">
        Pharetra blandit augue volutpat libero augue semper. Non diam neque
        praesent sem senectus mauris lectus a urna. Tortor pellentesque ipsum
        tincidunt enim.
      </div>
    </div>
  );
}
