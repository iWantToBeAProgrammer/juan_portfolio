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
          I'm Juan Stevenson, a computer science student from Semarang with over
          3.5 years of experience in fullstack web development. I focus mostly
          on frontend (Next.js, React) and backend (Laravel), and I'm currently
          learning Supabase and Zustand to expand my skills. I’ve worked on team
          projects like Dinacom and BTNG, and I also enjoy teaching beginners
          how to code. I’m passionate about building web apps that solve real
          problems, and my goal is to become a professional website developer
          who’s always learning and improving.
        </p>
      </div>
    </section>
  );
};

export default About;
