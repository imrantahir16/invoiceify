import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = true;
  return (
    <>
      {user && <Navbar />}
      {!user && <Header />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
