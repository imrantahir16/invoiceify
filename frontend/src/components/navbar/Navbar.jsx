import Logo from "../header/Logo";
import ThemeSelector from "../ThemeSelector";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = (props) => {
  return (
    <div className="navbar bg-base-100 py-2 px-4 md:py-3 md:px-6  shadow-xl">
      <div className="navbar-start z-10">
        {/* Mobile menu */}
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-36 xs:w-52 shadow-2xl border border-base-content"
          >
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <button className="justify-between">
                Invoices
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </button>
              <ul className="z-50 p-2 bg-base-100 shadow-lg border border-base-content">
                <li>
                  <a href="/new-invoice">Add Invoice</a>
                </li>
                <li>
                  <a href="/invoices">View Invoice</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/clients">Clients</a>
            </li>
          </ul>
        </div>
        <a className="hidden xs:block " href="/">
          <Logo />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* desktop menu */}
        <ul className="menu menu-horizontal px-1 flex gap-2">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li tabIndex={0}>
            <button>
              Invoices
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </button>
            <ul className="z-50 p-2 bg-base-100 shadow-lg border border-base-content">
              <li>
                <a href="/new-invoice">Add Invoice</a>
              </li>
              <li>
                <a href="/invoices">View Invoices</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/clients">Clients</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSelector />
        <div className="ml-2 dropdown dropdown-bottom dropdown-end drop-shadow-2xl shadow-2xl">
          <button className="btn btn-xs md:btn-sm btn-circle btn-primary">
            <span className="text-sm md:text-lg text-bold">I</span>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-xl border border-base-content bg-base-100 rounded-box w-52 "
          >
            <li tabIndex={0}>
              <a href="/profile">
                <BsFillPersonFill />
                Username
              </a>
            </li>
            <li tabIndex={0}>
              <a href="/logout">
                <BiLogOutCircle />
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
