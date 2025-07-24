import { useEffect } from "react";
import Divider from "./common/Divider";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="about" className="about w-full py-64" data-aos="fade-out">
      <div className="about-wrapper max-w-xs sm:max-w-3xl mx-auto text-center">
        <h1 className="about-title font-semibold text-2xl sm:text-5xl text-white">
          Who Am I?
        </h1>
        <Divider />
        <p className="text-md sm:text-xl mt-12">
          I'm a Full Stack Developer based in Jakarta, with a passion for
          building digital services and things I am interested in. I have a
          knack for all things launching products, from planning and designing
          all the way to solving real-life problems with code. When not online,
          I love to hang out with my camera and capture the beauty of the world.
        </p>
      </div>
    </section>
  );
};

export default About;
