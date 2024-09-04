import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Peluqueros from "../pages/Peluqueros/Peluqueros";
import PeluqueroDetails from "../pages/Peluqueros/PeluqueroDetails";
import { Routes, Route } from "react-router-dom";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/peluquero-account/Dashboard";
import ProtectedeRoutes from "./ProtectedeRoutes.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/peluqueros" element={<Peluqueros />} />
      <Route path="/peluqueros/:id" element={<PeluqueroDetails />}  />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedeRoutes allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedeRoutes>
        }
      />
      <Route
        path="/peluqueros/profile/me"
        element={
          <ProtectedeRoutes allowedRoles={["peluquero"]}>
            <Dashboard />
          </ProtectedeRoutes>
        }
      />
    </Routes>
  );
};

export default Routers;
