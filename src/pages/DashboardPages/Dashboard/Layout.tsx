import React from "react";
import Header from "../../../components/Header/Header";
import SidebarMenu from "../../../components/SidebarMenu/SidebarMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <SidebarMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
