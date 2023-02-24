import ThemeSelector from "../ThemeSelector";
import Logo from "./Logo";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";

const Header = () => {
  const user = true;
  return (
    <div
      className={`flex items-center ${
        !user ? "justify-between" : "justify-end"
      } py-2 px-4 md:py-4 md:px-8  border-b border-neutral-content`}
    >
      {!user && (
        <>
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
        </>
      )}
      {user && (
        <>
          <ThemeSelector />
          <div className="ml-2 dropdown dropdown-bottom dropdown-end drop-shadow-2xl">
            <button className="btn btn-sm md:btn-md btn-circle btn-primary">
              <span className="text-sm md:text-lg text-bold">I</span>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <a>
                  <BsFillPersonFill />
                  Username
                </a>
              </li>
              <li tabIndex={0}>
                <a>
                  <BiLogOutCircle />
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
