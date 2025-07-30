import { useEffect } from "react";
import Button from "./common/Button";
import Divider from "./common/Divider";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const iconData = [
    {
      icon: <i className="devicon-html5-plain colored text-7xl"></i>,
    },
    {
      icon: <i className="devicon-css3-plain colored text-7xl"></i>,
    },
    {
      icon: <i className="devicon-javascript-plain colored text-7xl"></i>,
    },
    {
      icon: <i className="devicon-tailwindcss-original colored text-7xl"></i>,
    },
    {
      icon: <i className="devicon-nodejs-plain-wordmark colored text-7xl"></i>,
    },
    {
      icon: <i className="devicon-react-original colored text-7xl"></i>,
    },
    {
      icon: (
        <i className="devicon-nextjs-original-wordmark colored text-7xl"></i>
      ),
    },
    {
      icon: <i className="devicon-laravel-original colored text-7xl"></i>,
    },
  ];

  const additionalSkills = [
    <i className="devicon-prisma-original colored"></i>,

    <i className="devicon-supabase-plain colored"></i>,
    <i className="devicon-redux-original colored"></i>,

    <i className="devicon-git-plain colored"></i>,

    <i className="devicon-github-original"></i>,

    <i className="devicon-express-original"></i>,
    <i className="devicon-mysql-plain"></i>,
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/documents/juanstevenson_cv.pdf"; // Adjust the path as necessary
    link.download = "juanstevenson_cv.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("CV downloaded successfully!");
  };

  return (
    <section id="skills" className="w-full mx-auto text-center px-8 sm:px-32">
      <h1 className="text-2xl sm:text-5xl text-white font-semibold">
        My Skills
      </h1>
      <Divider />

      <div
        className="card-wrapper grid grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-6 sm:grid-rows-2 gap-4 sm:gap-2 mt-12"
        data-aos="fade-right"
      >
        {iconData.map((data, key) => {
          return (
            <div
              key={key}
              className={`skills-card shadow-xl flex justify-center items-center rounded-xl h-32 sm:h-64 bg-gradient-to-b from-base-100 via-base-200 to-base-300 border border-white/30 hover:-translate-y-1.5 transition-all duration-300 ease-in-out hover:border-primary`}
            >
              {data.icon}
            </div>
          );
        })}
        <div className="experience-card sm:row-span-2 col-span-2 sm:col-span-2 sm:ms-3 flex items-center justify-center flex-col sm:py-0 py-8 sm:px-4 bg-base-300 rounded-2xl">
          <h1 className="text-5xl sm:text-7xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            3+
          </h1>
          <h2 className="text-xl sm:text-2xl text-white">
            Years of Experience
          </h2>
          <p className="text-lg sm:text-xl text-white/50 mb-8 sm:mb-16">
            in web development
          </p>
          <Button text={"Download my CV"} onClick={handleDownload} />
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="additional-skills rounded-2xl mt-32 w-full flex flex-col justify-center items-center px-12 py-8 border border-white/30 bg-gradient-to-r from-base-100 via-base-200 to-base-300"
      >
        <h1 className="text-2xl sm:text-5xl text-white font-semibold">
          Additional Skills
        </h1>
        <Divider />

        <div className="skills-wrapper flex items-center flex-wrap justify-center gap-12 mt-12">
          {additionalSkills.map((data, key) => {
            return (
              <div
                key={key}
                className="text-7xl hover:-translate-y-1.5 transition-all duration-200 ease-out"
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
