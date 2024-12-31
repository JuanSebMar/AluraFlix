import { Outlet } from "react-router";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

const AppLayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayOut;
