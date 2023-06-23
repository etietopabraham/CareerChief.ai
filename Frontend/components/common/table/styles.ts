import styled from "styled-components";

export const TableDiv = styled("div")`
  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const TableContainer = styled("table")`
  width: 100%;
  border-collapse: collapse;
  background-color: #eff6f8;
  /* padding-bottom: 2rem; */
  /* overflow: auto; */
`;

export const TableHeader = styled.thead`
  tr {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #eff6f8;
    border-bottom: 0.8px solid #024973;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 0.7px solid #ddd;
`;

export const TableHeaderCell = styled.th<{ isFirstColumn?: boolean }>`
  font-weight: 600;
  text-align: left;
  font-size: 12px;
  color: #024973;
  padding: 2rem 1rem;
  text-align: left;
  table-layout: fixed;
  white-space: ${(props) => props.isFirstColumn && "nowrap"};
  padding-left: ${(props) => props.isFirstColumn && "2rem"};
  cursor: pointer;
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td<{ isFirstColumn?: boolean; starItems: any }>`
  /* padding: 12px; */
  /* border-bottom: 0.7px solid #ddd; */
  font-size: 12px;
  color: #024973;
  padding: 1rem;
  text-align: left;
  table-layout: fixed;
  white-space: ${(props) => props.isFirstColumn && "nowrap"};
  padding-left: ${(props) => props.isFirstColumn && "2rem"};
  /* display: inline-block;
  vertical-align: middle; */
  /* display: flex;
  align-items: center;
  gap: 12px; */
  
  div.content-container {
    display: flex;
    align-items: center;
    gap: 4px;
    gap: ${(props) => (props.isFirstColumn) && "12px"};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  gap: 2rem;
  margin-bottom: 5rem;

  p {
    font-size: 14px;
    color: #024973;
  }
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  margin-left: 5px;
  cursor: pointer;
  width: 22px;
  height: 22px;
  background: ${(props) => (props.active ? "#32A3CC" : "#ffffff")};
  border: 1px solid #32a3cc;
  color: ${(props) => (props.active ? "#ffffff" : "#32A3CC")};
  opacity: 1;
  border-radius: 12px;
`;

export const Dropdown = styled("div")`
  height: 88px;
  width: 80px;
  position: absolute;
  top: 20px;
  right: 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 0px 45px rgba(30, 66, 138, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 10px;
    width: 100%;
    border-bottom: 1px solid #00000029;

    &:hover {
      background-color: #eff6f8;
    }
  }
`;

export const LoadingDiv = styled("div")`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* width: 500px;
  height: 50vh; */
  display: grid;
  place-content: center;
  /* margin: 0 auto;
  min-width: 1000px; */
  height: 50vh;
  width: 100%;
  margin: 0 auto;
`