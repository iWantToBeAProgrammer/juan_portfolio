const Card = ({
  image,
  title,
  description,
  techStacks,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-white/30 rounded-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-200 ease-in">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title  text-white font-semibold text-2xl">
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex gap-2">
          {techStacks &&
            techStacks.map((techStack, key) => (
              <div className="badge badge-[#21252b] text-white" key={key}>
                {techStack}
              </div>
            ))}
        </div>
        <div className="card-actions justify-end mt-12">
          <a
            href={demoLink || "#"}
            className="btn rounded-xl bg-gradient-to-r from-primary to-accent text-base-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 ease-in"
            target="_blank"
          >
            Live Demo
          </a>
          <a
            href={githubLink || "#"}
            className="btn rounded-xl btn-outline outline-white/30"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
