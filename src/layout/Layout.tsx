import React from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/ConsultingPageHeader";

const Layout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header />
      </div>
    </div>
  );
};

export default Layout;
