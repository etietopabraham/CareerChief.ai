import styled from "styled-components";

export const JobStyles = styled("div")`
  .body {
    display: flex;
    height: 100vh;
  }
  .cards {
    padding: 8.2rem 1rem;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    box-shadow: 0px 3px 6px #00000029;
    min-height: 100vh;
  }
  .table {
    background-color: #eff6f8;
    padding-bottom: 2rem;
    overflow: auto;
    flex: 1;
    box-shadow: 0px 3px 6px #00000029;
  }
  .filter {
    padding: 0 1rem;
  }
  .card-space {
    width: 450px;
  }

  @media screen and (max-width: 360px) {
    .cards {
        padding: 12.2rem 1rem;
    }
  }
`;

export const TableItem = styled('span')`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`