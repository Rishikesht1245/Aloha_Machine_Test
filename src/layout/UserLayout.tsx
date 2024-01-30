import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const UserLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center items-center grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default UserLayout;
