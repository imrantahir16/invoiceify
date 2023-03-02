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
import Clients from "./pages/Clients";
import Invoices from "./pages/Invoices";
import InvcoiceDetails from "./components/invoices/InvcoiceDetails";

function App() {
  const user = true;
  return (
    <div className="min-h-screen flex flex-col">
      {user && <Navbar />}
      {!user && <Header />}
      <div className="flex-1">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* todo: private routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="edit/invoice/:id" element={<InvcoiceDetails />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
