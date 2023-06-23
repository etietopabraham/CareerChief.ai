import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { LoadingDiv } from "../common/table/styles";
import Loader from "../common/Loader";

const SideSlider = ({
  sidebar,
  setSidebar,
  applicants,
  loading,
  children,
}: any) => {
  console.log("inside slider: ", applicants);
  return (
    <Container>
      <SideNav>
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <div style={{ height: "100vh" }}>
            <AiOutlineClose size={30} onClick={() => setSidebar(false)} />
            {loading ? (
              <LoadingDiv>
                <Loader />
              </LoadingDiv>
            ) : (
              <div>{ children }</div>
            )}
          </div>
        </nav>
      </SideNav>
    </Container>
  );
};

const Container = styled("div")`
  position: relative;
  z-index: 9999;
`;

const SideNav = styled.div`
  display: block;
  /* z-index: 9999; */
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
    top: 75px;
    right: 0;
    height: 100vh;
    width: 100%;
    background: #fff;
    border-left: 1px #fff;
    transition: width 800ms cubic-bezier(0.25, 0.1, 0.24, 1);
  }
  .nav-menu {
    width: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 75px;
    right: -100%;
    transition: 850ms;
  }

  .nav-menu-active.active {
    left: 0;
    transition: width 900ms cubic-bezier(0.25, 0.1, 0.24, 1);
  }
`;

export default SideSlider;
