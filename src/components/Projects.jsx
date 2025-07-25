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
        "A competition platform built for Dinacom, an annual software and AI competition for high school and university students. I developed the fullstack website to handle participant registration, proposal submissions, and competition payments. The most notable feature is the dynamic registration flow with multi-step components and conditional branching based on user roles and education level.",
      image: "/assets/images/dinacom.png",
      techStacks: ["React", "Laravel", "Redux"],
      demoLink: "https://dinacom.dnccudinus.org/",
    },
    {
      title: "BTNG",
      description:
        "A registration website for BTNG (Basic Training for Next Generation), an onboarding program for new university students. I worked as a frontend developer, implementing a visually rich UI with gradients, shadows, and decorative elements. The form submission was handled via API and exported directly to Excel, without using a database. A unique challenge was rendering complex content boxes, which we solved using PNG assets instead of coding them from scratch.",

      image: "/assets/images/btng.png",
      techStacks: ["React", "Tailwind CSS", "Daisy UI"],
      demoLink: "https://btng.dnccudinus.org/",
    },
    {
      title: "CinemaTix",
      description:
        "CinemaTix is a movie web app inspired by Spotify-style interactions, where users can create personalized watchlists and share them as ticket-style images—perfect for social media like Instagram Stories. I worked as both a fullstack developer and project manager. Key features include a custom ticket generator, dynamic user interactions, and upcoming AI-powered movie recommendations. The standout feature is the ability to visually 'print' and share a watchlist as a cinema ticket.",

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
