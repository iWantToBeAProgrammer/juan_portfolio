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
      githubLink: "https://github.com/iWantToBeAProgrammer/movie_project",
    },
    {
      title: "EmbassyGrass",
      description:
        "A modern landing page redesign for a synthetic grass and flooring business. I was challenged by a client to improve the look of their outdated website. Built entirely with Next.js as a learning experience, the site features sections for Home, About, Products, and Contact. I focused on clean layouts, smooth responsiveness, and a visually strong hero section. Some interactive elements like contact buttons and social media links were intentionally left non-functional, as the project was more design-focused than production-ready.",
      image: "/assets/images/embassygrass.png",
      techStacks: ["Next.js", "Tailwind CSS", "Daisy UI"],
      githubLink: "https://github.com/iWantToBeAProgrammer/EmbassyGrass",
      demoLink: "https://embassy-grass.vercel.app/",
    },
    {
      title: "PuffVapor",
      description:
        "PuffVapor is a fullstack e-commerce website for selling e-cigarette products, built entirely from scratch as a solo project. It includes a custom admin dashboard for managing users, assigning admin roles, and handling product CRUD operations. Key features include cart management, shipping fee calculation via the RajaOngkir API, and secure payment integration with Midtrans. I also designed the UI based on online references. This project challenged me to implement complex features while learning in real time—especially the cart logic, shipping integration, and payment flow.",
      image: "/assets/images/puffVapor.png",
      techStacks: [
        "React",
        "Vite",
        "Laravel",
        "Inertia.js",
        "Midtrans",
        "RajaOngkir API",
      ],
      githubLink: "https://github.com/iWantToBeAProgrammer/Manpro-K2",
    },

    {
      title: "Store Admin Panel",
      description:
        "Store Admin Panel is a web-based dashboard built for a mobile store application, developed as part of a final project for a Mobile Programming course. Cloned from an existing admin template, this project focuses on backend integration using Firebase Firestore. It enables user management and full product CRUD functionality through a clean React and Inertia.js frontend connected to a Laravel backend. I implemented all the Firebase logic and core features to ensure real-time data handling and admin control, despite the project only running locally.",
      image: "/assets/images/admin_panel.png",
      techStacks: [
        "React",
        "Laravel",
        "Inertia.js",
        "Vite",
        "Firebase Firestore",
      ],
      githubLink: "https://github.com/iWantToBeAProgrammer/admin_panel",
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

      <div className="flex justify-center">
        <div className="card-wrapper grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cardData.map((data, key) => {
            return (
              <Card
                key={key}
                title={data.title}
                description={data.description}
                image={data.image}
                techStacks={data.techStacks}
                demoLink={data.demoLink}
                githubLink={data.githubLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
