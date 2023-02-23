const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-8 border-t border-solid border-base-300 ">
      <p>Made with ❤ by Imran</p>
      <div className="flex gap-4">
        <a
          className="cursor-pointer text-primary no-underline"
          href="https://www.linkedin.com/in/imran-tahir-4a1062132/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="cursor-pointer text-primary no-underline"
          href="https://github.com/imrantahir16"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};
export default Footer;
