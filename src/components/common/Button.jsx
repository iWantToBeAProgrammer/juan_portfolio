const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn shadow-lg bg-gradient-to-r from-primary to-secondary transition-all ease-in duration-200 hover:-translate-y-1 hover:shadow-primary/40 font-bold tracking-wide text-md sm:text-lg px-4 sm:px-8 sm:h-12 rounded-box font-inter uppercase text-base-100 border-black/50 ">
      {text}
    </button>
  );
};

export default Button;
