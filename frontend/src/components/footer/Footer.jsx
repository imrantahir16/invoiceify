import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-3 md:py-6 border-t border-neutral-content">
      <p className="flex items-center gap-2">
        <span>Made with</span>
        <span className="motion-safe:animate-bounce inline ">
          <FaHeart className="fill-error" />
        </span>
        <span>By Imran</span>
      </p>
      <div className="flex gap-4 ">
        <a
          aria-label="linkedin link"
          className="cursor-pointer text-primary no-underline text-lg focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent "
          href="https://www.linkedin.com/in/imran-tahir-4a1062132/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsLinkedin className="hover:fill-primary-focus" />
        </a>
        <a
          aria-label="github link"
          className="cursor-pointer text-primary no-underline text-lg focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent "
          href="https://github.com/imrantahir16"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsGithub className="hover:fill-primary-focus" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
