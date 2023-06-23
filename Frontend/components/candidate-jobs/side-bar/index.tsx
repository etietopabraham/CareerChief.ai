import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavData } from "../constants";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SideNav>
      <FaBars onClick={showSidebar} size="25" />
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <Link href="#" className="menu-bars">
            <AiOutlineClose onClick={() => setSidebar(false)} />
          </Link>
          {NavData.map((item, i) => (
            <li key={i} className="nav-text">
              <Link href={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SideNav>
  );
};

const SideNav = styled.div`
  display: block;
  z-index: 99;
  @media screen and (min-width: 700px) {
    display: none;
  }

  .menu-bars {
    margin-left: 1.5rem;
    font-size: 2rem;
    background: none;
  }

  .nav-menu-active {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    height: 100vh;
    width: 180px;
    background: #000;
    border-left: 1px #000;
    transition: width 900ms cubic-bezier(0.25, 0.1, 0.24, 1);
  }
  .nav-menu {
    width: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
  }

  .nav-menu-active.active {
    left: 0;
    transition: width 900ms cubic-bezier(0.25, 0.1, 0.24, 1);
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #ffab00;
  }

  .nav-menu-items {
    width: 100%;
  }

  span {
    margin-left: 16px;
  }
`;

export default SideBar;