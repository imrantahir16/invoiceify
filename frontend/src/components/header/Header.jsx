import ThemeSelector from "../ThemeSelector";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 px-4 md:py-4 md:px-8 shadow-xl">
      <a className="outline-none" href="/">
        <Logo />
      </a>
      <div className="flex items-center justify-end gap-2">
        <ThemeSelector />
        <a
          href="/login"
          className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-sx md:text-base"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};
export default Header;
