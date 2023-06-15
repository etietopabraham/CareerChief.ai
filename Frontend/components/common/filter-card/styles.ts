import styled from "styled-components";

export const FilterSortStyles = styled("table")`
  position: fixed;
  top: 88px;
  margin-bottom: 13rem;
  z-index: 2;
  /* width: 487px; */
  .main {
    width: 450px;
    height: 90px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    padding: 1.8rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.1rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .count {
    letter-spacing: 0px;
    opacity: 1;
    font-size: 15px;

    p:first-of-type {
      color: #7ab972;
      margin-bottom: 8px;
      font-weight: bold;
    }
    p:last-of-type {
      color: #dd5d56;
    }
  }

  .filter,
  .sort {
    width: 450px;
    height: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    margin-bottom: 0.1rem;
    transition: 0.3s;
    padding: 1rem;
  }

  .sort {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .filter-names {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .sort-tag,
  .sub-item {
    height: 40px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 23px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
  }

  .sort-tag {
    border: 1px solid #32a3cc;
  }
  .sub-item {
    border: 1px solid #7ab972;
  }

  .sub-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media screen and (max-width: 700px) {
    .main,
    .filter,
    .sort {
      width: 93.5vw;
      max-width: 100%;
    }
  }

  @media screen and (max-width: 360px) {
    .actions {
        flex-direction: column;
    }
    .main {
        height: 100%;
        width: 90vw;
        padding: 0.8rem;
    }
  }
`;
