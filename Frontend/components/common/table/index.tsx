import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, AtoZIcon, StarIcon } from "@/public/svgs";
import SortIcon from "@/public/svgs/SortIcon";
import Loader from "../Loader";
import {
  TableContainer,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  PaginationContainer,
  PaginationButton,
  Dropdown,
  TableDiv,
  LoadingDiv,
} from "./styles";
interface TableColumn {
  key: string;
  label: string | any;
}

interface TableData {
  [key: string]: any;
}

interface TableProps {
  columns: TableColumn[];
  data: TableData[];
  loading?: boolean;
  // itemsPerPage: number;
}

const PAGE_COUNT = [50, 75, 100];

const Table: React.FC<TableProps> = ({ columns, data, loading }) => {
  // states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(50);
  const [tableData, setTableData] = useState<any>([]);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState<string>("asc");
  const [sortVisibilities, setSortVisibilities] = useState<{
    [key: string]: boolean;
  }>(
    columns.reduce(
      (acc, column) => ({
        ...acc,
        [column.key]: false,
      }),
      {}
    )
  );

  useEffect(() => {
    setTableData(data);
  }, [data]);

  // get table length
  const tableLength = data?.length;

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current page of data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = tableData.slice(startIndex, endIndex);

  // Handle pagination button click
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePageCount = (count: number) => {
    setItemsPerPage(count);
    setDropdown(false);
  };

  const handleSorting = (sortField: any, sortOrder: any) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const handleSortingChange = (key: string) => {
    const sortOrder = key === sortField && order === "asc" ? "desc" : "asc";
    setSortField(key);
    setOrder(sortOrder);
    setSortVisibilities((prevVisibilities) => ({
      ...prevVisibilities,
      [key]: !prevVisibilities[key],
    }));
    handleSorting(key, sortOrder);
  };

  const starItems = ["resumeRank", "aiAssessment", "aiInterview", "workStyle"];

  return (
    <TableDiv>
      {loading ? (
        <LoadingDiv>
          <Loader />
        </LoadingDiv>
      ) : (
        <TableContainer>
          <TableHeader>
            <TableRow>
              {columns.map(({ key, label }, index) => (
                <TableHeaderCell
                  key={key}
                  isFirstColumn={index === 0}
                  onClick={() => handleSortingChange(key)}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridGap: "4px",
                    }}
                  >
                    {label}
                    {sortVisibilities[key] &&
                      (index === 0 ? (
                        <AtoZIcon
                          style={{
                            fill: "#024973",
                            height: "12px",
                            width: "12px",
                          }}
                        />
                      ) : (
                        <SortIcon
                          style={{
                            fill: "#024973",
                            height: "18px",
                            width: "18px",
                          }}
                        />
                      ))}
                  </div>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          {/* {loading ? ( */}
          {/* <LoadingDiv>
            <Loader />
          </LoadingDiv> */}
          {/* ) : ( */}
          <TableBody>
            {currentPageData.map((item: any, index: any) => (
              <TableRow key={index}>
                {columns.map((column, columnIndex) => (
                  <TableCell
                    key={column.key}
                    isFirstColumn={columnIndex === 0}
                    starItems={starItems.includes(column.key)}
                  >
                    <div className="content-container">
                      {column.key === "name" ? (
                        <Image
                          src={"/images/random-woman.png"}
                          alt=""
                          height={35}
                          width={35}
                        />
                      ) : starItems.some(() =>
                          starItems.includes(column.key)
                        ) && item[column.key] !== "pending" ? (
                        <StarIcon
                          style={{
                            height: "13px",
                            width: "13px",
                            marginRight: "4px",
                          }}
                        />
                      ) : null}
                      {item[column.key]}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {/* )} */}
        </TableContainer>
      )}
      {!loading && (
        <div>
          <hr style={{ border: "0.1px solid #02D7F1", marginBottom: "6px" }} />
          <hr style={{ border: "0.1px solid #02D7F1", marginBottom: "32px" }} />
        </div>
      )}
      {!loading && data?.length > 0 && (
        <PaginationContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              position: "relative",
            }}
          >
            <p>Applicants per page: {itemsPerPage}</p>
            <ArrowDown
              style={{
                cursor: "pointer",
                transition: "0.4s",
                transform: dropdown ? "rotate(180deg)" : "",
              }}
              onClick={() => setDropdown(!dropdown)}
            />
            {dropdown && (
              <Dropdown>
                {PAGE_COUNT.map((count, index) => (
                  <div
                    className="item"
                    key={index}
                    onClick={() => handlePageCount(count)}
                  >
                    <p>{count}</p>
                  </div>
                ))}
              </Dropdown>
            )}
          </div>
          <div>
            <PaginationButton
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            >
              {"<"}
            </PaginationButton>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <PaginationButton
                  key={page}
                  active={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationButton>
              )
            )}
            <PaginationButton
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              {">"}
            </PaginationButton>
          </div>
          <p>
            1 - {itemsPerPage} of {tableLength}
          </p>
        </PaginationContainer>
      )}
    </TableDiv>
  );
};

export default Table;
