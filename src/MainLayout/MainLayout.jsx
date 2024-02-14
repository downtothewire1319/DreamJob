import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Navbar";
import Footer from "../pages/SharedPages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Outlet />
        <ToastContainer pauseOnFocusLoss={false} />
      </div>
      <Footer />
    </div>
  );
}
