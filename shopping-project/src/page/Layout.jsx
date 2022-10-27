import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <NavbarComp />
      {/* Outlet을 통해 화면 구성 */}
      <Outlet />
    </div>
  );
};

export default Layout;
