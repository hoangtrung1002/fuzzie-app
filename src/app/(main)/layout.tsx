import InfoBar from "@/components/InfoBar";
import SideBar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <SideBar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
