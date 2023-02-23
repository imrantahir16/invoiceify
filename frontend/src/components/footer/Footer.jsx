import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-4 md:py-8 border-t border-solid border-neutral-content ">
      <p>Made with ❤ by Imran</p>
      <div className="flex gap-4 ">
        <a
          className="cursor-pointer text-primary no-underline text-lg focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
          href="https://www.linkedin.com/in/imran-tahir-4a1062132/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="cursor-pointer text-primary no-underline text-lg focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
          href="https://github.com/imrantahir16"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};
export default Footer;
