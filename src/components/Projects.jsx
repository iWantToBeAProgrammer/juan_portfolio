import { useEffect } from "react";
import Card from "./common/Card";
import Divider from "./common/Divider";
import Aos from "aos";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const cardData = [
    {
      title: "Dinacom",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium blanditiis in repellat minus sint dolor dicta! Laudantium, quos eum?",
      image: "/assets/images/dinacom.png",
      techStacks: ["React", "Laravel", "Redux"],
    },
    {
      title: "BTNG",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium blanditiis in repellat minus sint dolor dicta! Laudantium, quos eum?",
      image: "/assets/images/btng.png",
      techStacks: ["React", "Tailwind CSS", "Daisy UI"],
    },
    {
      title: "CinemaTix",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium blanditiis in repellat minus sint dolor dicta! Laudantium, quos eum?",
      image: "/assets/images/cinematix.png",
      techStacks: ["Next JS", "Prisma", "Supabase"],
    },
  ];

  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="mt-48 w-full flex flex-col items-center"
    >
      <h1 className="text-2xl sm:text-5xl text-center text-white font-semibold">
        Projects I've Done
      </h1>
      <Divider />

      <div className="card-wrapper grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {cardData.map((data, key) => {
          return (
            <Card
              key={key}
              title={data.title}
              description={data.description}
              image={data.image}
              techStacks={data.techStacks}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
