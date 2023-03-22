import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  const user = true;
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-primary-content">
      {user && <Navbar />}
      {!user && <Header />}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
