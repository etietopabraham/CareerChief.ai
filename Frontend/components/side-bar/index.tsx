import React, { useState } from "react";
import { SideBarMenus } from "./sidebar-data";
import {
  SidebarWrapper,
  Inner,
  SidebarItem,
  SidebarList,
  SidebarFooter,
} from "./styles/sidebar.styles";
import { sidebarMenuProp } from "./type";
import { useRouter } from "next/router";
import Link from "next/link";
import Stack from "../stack";
import { LogoIcon, RightArrowIcon } from "@/public/svgs";
import { sidebarProps } from "./type";

const Sidebar = ({ isCollapsed, setIsCollapsed }: sidebarProps) => {
  // hooks
  const location = useRouter();
  const pathname = location?.pathname;
  const { sideBarData } = SideBarMenus();

  return (
    <SidebarWrapper isCollapsed={isCollapsed}>
      <Inner isCollapsed={isCollapsed}>
        <div className="logo">
          <LogoIcon style={{height: "30px", width: "30px"}}/>
          {!isCollapsed && <p>CareerChief.ai</p>}
        </div>
        <SidebarList>
          {sideBarData.map(
            ({ title, ActiveIcon, path }: sidebarMenuProp, i) => (
              <SidebarItem
                isActive={path === pathname}
                isCollapsed={isCollapsed}
                key={i}
              >
                <Link href={path}>
                  <div className="item">
                    <Stack
                      justifyContent={"center"}
                      width={"auto"}
                      alignItems={"center"}
                    >
                      <>
                        <ActiveIcon
                          style={{
                            fill: path === pathname ? "#7AB972" : "#32a3cc",
                            stroke: path === pathname ? "#7AB972" : "#32a3cc",
                            // width: '18px',
                            // height: '18px',
                          }}
                        />
                      </>
                    </Stack>{" "}
                    {!isCollapsed && <p>{title}</p>}
                  </div>
                </Link>
              </SidebarItem>
            )
          )}
        </SidebarList>
        <SidebarFooter>
          <SidebarList>
            <SidebarItem
              isCollapsed={isCollapsed}
              onClick={() => setIsCollapsed(!isCollapsed)}
              style={{ border: "none", borderLeft: "5px solid #32A3CC", marginTop: '-24px' }}
            >
                <div className="item">
                  <Stack
                    justifyContent={"center"}
                    width={"auto"}
                    alignItems={"center"}
                  >
                    <>
                      <RightArrowIcon
                        style={{
                          width: "1.5rem",
                          transform: isCollapsed
                            ? "rotate(360deg)"
                            : "rotate(180deg)",
                          transition: "0.3s",
                        }}
                      />
                    </>
                  </Stack>{" "}
                  {!isCollapsed && <p>MINIFY</p>}
                </div>
            </SidebarItem>
          </SidebarList>
        </SidebarFooter>
      </Inner>
    </SidebarWrapper>
  );
};

export default Sidebar;
