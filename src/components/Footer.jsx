import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer class="border-t border-white/20 mt-48">
      <div class="container mx-auto px-6 py-8 text-center text-comment">
        <div class="flex justify-center space-x-6 mb-4">
          <a href="#" class="text-main hover:text-blue transition-colors">
            <Github />
          </a>
          <a href="#" class="text-main hover:text-blue transition-colors">
            <Linkedin />
          </a>
          <a href="#" class="text-main hover:text-blue transition-colors">
            <Instagram />
          </a>
        </div>
        <p>&copy; 2024 Juan Stevenson. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
