import Link from "next/link";
import styled from "styled-components";
import SideBar from "../side-bar";
import { NavData } from "../constants";
import ChargeIcon from "@/public/svgs/ChargeIcon";
import Image from "next/image";

const Navbar = () => {
  return (
    <Nav>
      <Logo>CareerChief.ai</Logo>
      <LinkFlex>
        {NavData.map((item, i) => (
          <NavLinks href={item.path} key={i}>
            {item.title}
          </NavLinks>
        ))}
      </LinkFlex>
      <SideBar />
      <RightSide>
        <ChargeIcon />
        <div className="dropdown">
          <div className="left">
            <Image src={"/images/picture1.png"} alt="" height={54} width={54} />
            Etietop
          </div>
          <div className="right">
            <div className="icon"></div>  
          </div>
        </div>
      </RightSide>
    </Nav>
  );
};

export default Navbar;

const Logo = styled.h1`
  text-align: left;
  font: normal normal bold 22px/46px Menlo;
  letter-spacing: 0px;
  color: #11212e;
  opacity: 1;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  border-bottom: 6px solid #e58d86;
  opacity: 1;
`;
const LinkFlex = styled.div`
  display: flex;
  gap: 30px;

  .active {
    border-width: 0 0 2px;
    border-style: solid;
    border-color: #000;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const NavLinks = styled(Link)`
  color: #000;
  padding: 15px 0;
  position: relative;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #000;
    text-decoration: none;

    &:after {
      width: 100%;
      left: 0;
    }
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .complete-profile {
    width: 273px;
    height: 68px;
    background: #e58d86 0% 0% no-repeat padding-box;
    border-radius: 26px;
    opacity: 1;
  }
`;

const RightSide = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
  .dropdown {
    width: 195px;
    height: 66px;
    border: 1px solid #eaeaeb;
    border-radius: 33px;
    opacity: 1;
    display: flex;
    align-items: center;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 5px 10px;
  }
  .right {
    border-left: border: 1px solid #eaeaeb;
  }
  .icon {
    top: 55px;
    left: 1803px;
    width: 14px;
    height: 12px;
    transform: matrix(-1, 0, 0, -1, 0, 0);
    /* UI Properties */
    background: #0c161f 0% 0% no-repeat padding-box;
    opacity: 1;
  }
`;
