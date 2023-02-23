import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center py-4 px-8 justify-between border-b border-base-300">
      <a href="/">
        <Logo />
      </a>
      <a href="/login" className="btn btn-primary">
        Get Started
      </a>
    </div>
  );
};
export default Header;
