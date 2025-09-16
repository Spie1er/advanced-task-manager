import { Outlet } from "react-router";
import Header from "./header";

const MainLayout = () => {
  return (
    <div className="mx-auto w-full">
      <Header />
      <Outlet />
    </div>
  );
};
export default MainLayout;
