import React, { useState } from "react";
import Announcements from "./announcements";
import Content from "./dashboard-contents";
import Nav from "./jobs/navbar";
import Sidebar from "./side-bar";

const Layout = ({ children }: any) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  return (
    <div>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Content isCollapsed={isCollapsed}>
        {children}
      </Content>
    </div>
  );
};

export default Layout;
