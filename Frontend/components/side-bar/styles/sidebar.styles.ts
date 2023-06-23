import styled from "styled-components";

type sidebarStyleProps = {
  isCollapsed?: boolean;
  padding?: string;
  color?: string;
  isShown?: boolean;
  isActive?: boolean;
  backgroundColor?: string;
};

export const SidebarWrapper = styled.div<sidebarStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${({ isCollapsed }) => (isCollapsed ? "5rem" : "13rem")};
  transition: all 0.3s ease;
  position: fixed;
  height: 100vh;
  z-index: 1;
  box-shadow: ${({ isCollapsed }) => (!isCollapsed ? "grey" : "none")};
  overflow: hidden;
  @media (max-width: 992px) {
    transform: translateX(-17rem);
  }
  background-color: #EFF6F8;

  a {
    text-decoration: none;
  }
`;
export const Inner = styled.div<sidebarStyleProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  svg {
    cursor: pointer;
    margin: ${({ isCollapsed }) => (isCollapsed ? "0 auto" : "0")};
  }
  .logo {
    font-size: 16px;
    letter-spacing: 0px;
    color: #1B5367;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    /* margin-left: 0.5rem;
    margin-top: 0.5rem; */
    /* padding: 0.3rem 0; */
    margin-top: 1.3rem;
    /* margin-bottom: 1rem; */
  }
`;
export const LogoBox = styled.div`
  display: flex;
`;

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.55rem;
  p {
    white-space: nowrap;
  }
`;
export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  p {
    white-space: nowrap;
  }
`;

export const SidebarItem = styled.div<sidebarStyleProps>`
  padding: ${({ padding }) => padding};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCollapsed }) => (isCollapsed ? "center" : "flex-start")};
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  margin-right: ${({ isCollapsed }) => (isCollapsed ? "0rem" : "0.5rem")};
  border: 1px solid #32A3CC;
  border-left: ${({ isActive }) => (isActive ? "5px solid #7AB972" : "5px solid #32A3CC")};;
  svg {
    padding-left: ${({ isActive, isCollapsed }) =>
      isActive && isCollapsed ? `0` : "0rem"};
    width: 1.5rem;
  }

  p {
    /* font-size: ${({ isActive }) => isActive && `1rem`};
    font-weight: ${({ isActive }) => isActive && `600`}; */
    color: #32A3CC;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
  }
  /* ${({ isActive }) =>
    isActive &&
    `
    display: flex;
    justify-content: center;
    color: white;
    background: white;
    border-radius: 10px;
    flex-direction: column;
   
`} */

  .item {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: auto;
  }
`;
