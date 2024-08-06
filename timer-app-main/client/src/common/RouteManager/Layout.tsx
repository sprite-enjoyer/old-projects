import { Outlet } from "react-router-dom";
import Header from "../../pages/Main/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
