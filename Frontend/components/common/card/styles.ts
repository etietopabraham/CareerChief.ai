import styled from "styled-components";

export const CardStyles = styled("div")<{ active?: boolean }>`
  /* width: 487px; */
  width: 450px;
  /* height: 289px; */
  background: #fcfdfd;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  padding: 1.8rem;
  border: ${(props) => (props.active ? "1.5px solid #32A3CC" : "1.5px solid #FCFDFD")};

  &:hover {
    border: 1.5px solid #32a3cc;
  }

  .top {
    font-family: "Quicksand", sans-serif;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    font-weight: bold;

    p {
      font-size: 13px;
      color: #32a3cc;
    }
  }
  .team {
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #1b5367;
    margin-bottom: 1.1rem;
  }

  .offer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
  }
  .role {
    font-size: 15px;
    color: #1b5367;
    font-weight: 600;
  }
  .salary {
    font-size: 13px;
    color: #1b5367;
  }
  .experience {
    font-family: "Quicksand", sans-serif;
    font-size: 12px;
    color: #1b5367;
    font-weight: bold;
    margin-bottom: 1.1rem;
  }
  .content {
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #1b5367;
    line-height: 22px;
    margin-bottom: 1.2rem;
  }
  .candidates {
    font-family: "Quicksand", sans-serif;
    display: flex;
    justify-content: space-between;
    font-weight: 600;

    p {
      color: #32a3cc;
      font-size: 15px;
      font-weight: 600;
    }
    .applicants {
      position: relative;

      img {
        position: absolute;

        &:nth-child(2) {
          left: 10px;
        }
        &:nth-child(3) {
          left: 20px;
        }
        &:nth-child(4) {
          left: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
