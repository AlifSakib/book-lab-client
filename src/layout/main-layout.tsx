import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/footer";
import Navbar from "../components/shared/navbar/nabvar";

const MainLayout = () => {
  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <div className=" mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
