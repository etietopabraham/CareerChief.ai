import styled from "styled-components";

export const SearchStyles = styled("div")`
  position: relative;
  input {
    padding: 10px 18px;
    gap: 320px;
    width: 274px;
    height: 40px;
    background: #ffffff;
    border: none;
    border-radius: 5px;
    background: #fcfdfd 0% 0% no-repeat padding-box;
    opacity: 1;
    padding-left: 40px;
    color: #024973;
    font-size: 18px;
    font-weight: 400;

    &::placeholder {
      color: #024973;
      font-size: 18px;
      font-weight: 400;
    }
  }
  label {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #151515;
    margin-bottom: 5px;
  }

  .search {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media screen and (max-width: 500px) {
    input {
      width: 93.5vw;
      max-width: 100%;
    }
  }
`;
