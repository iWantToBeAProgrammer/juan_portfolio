import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    const topY = window.scrollY;
    if (topY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <nav
      className={`navbar flex items-center justify-between w-full py-4 fixed top-0 left-0 px-4 md:px-20 lg:px-24 z-50 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-2xl drop-shadow-xl drop-shadow-base-300/40 border-b border-white/30"
          : "bg-transparent"
      } `}
    >
      <div className="nav-left w-1/4 ">
        <a href="#" className="font-josefin text-2xl font-bold">
          JS.
        </a>
      </div>
      <div className="navigation-list  sm:flex hidden">
        <ul className="font-josefin flex gap-12 text-center">
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECT</a>
          </li>
        </ul>
      </div>

      <div className="nav-right w-1/4 justify-end flex">
        <a
          href="#contact"
          className="btn btn-ghost border-1 border-white font-inter relative rounded-3xl pe-12 sm:flex hidden"
        >
          CONTACT{" "}
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-content flex items-center justify-center absolute right-0.5">
            <ArrowUpRight />
          </div>
        </a>

        <div className="dropdown dropdown-end sm:hidden flex">
          <div tabIndex={0} role="button" className="cursor-pointer">
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-200 rounded-lg z-1 mt-8 w-52 p-2 shadow-sm font-josefin"
          >
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
