import React, { useState } from "react";
import { SORT_ITEMS, FILTER_ITEMS } from "@/components/jobs/constants";
// styles
import { FilterSortStyles } from "./styles";
// icons
import FilterIcon from "@/public/svgs/FilterIcon";
import PlusIcon from "@/public/svgs/PlusIcon";
import SortIcon from "@/public/svgs/SortIcon";
import { ArrowIcon } from "@/public/svgs";

const FilterSortCard = ({
  sortOption,
  handleSort,
  selectedTag,
  handleFilterTagClick,
  filter,
  setFilter,
}: any) => {
  // states
  const [showSort, setShowSort] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);

const handleFilter = (item: string) => {
    setFilter((prevFilter: string) => (prevFilter === item ? "" : item));
    console.log(item);
  };

  const handleShowSort = () => {
    setShowSort(!showSort);
    // setSort("");
  };

  return (
    <FilterSortStyles>
      <div className="main">
        <div className="count">
          <p>11 Active Jobs</p>
          <p>2 Closed</p>
        </div>
        <div className="actions">
          <PlusIcon
            style={{ cursor: "pointer", height: "30px", width: "30px" }}
          />
          <SortIcon
            style={{
              cursor: "pointer",
              height: "30px",
              width: "30px",
              fill: sortOption ? "#7AB972" : "#32a3cc",
            }}
            onClick={handleShowSort}
          />
          <FilterIcon
            style={{
              cursor: "pointer",
              height: "30px",
              width: "30px",
              fill: filter ? "#7AB972" : "#32a3cc",
            }}
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>
      </div>
      {showSort && (
      <div className="sort">
        {SORT_ITEMS.map((tag: string, id: number) => (
          <div
            className="sort-tag"
            key={id}
            onClick={() => handleSort(tag)}
            style={{
              color: tag === sortOption ? "#fff" : "",
              backgroundColor: tag === sortOption ? "#7AB972" : "",
              border: tag === sortOption ? "1px solid #7AB972" : "",
            }}
          >
            <p>{tag}</p>
          </div>
        ))}
      </div>
    )}
      {showFilter && (
        <div className="filter">
          <div className="filter-names">
            {FILTER_ITEMS.map((tag: any, id: number) => (
              <div key={id}>
                <div
                  className="sort-tag"
                  onClick={() => handleFilterTagClick(tag.name, tag.filterType)}
                  style={{
                    color: tag.name === selectedTag ? "#fff" : "",
                    backgroundColor: tag.name === selectedTag ? "#7AB972" : "",
                    border: tag.name === selectedTag ? "1px solid #7AB972" : "",
                  }}
                >
                  <ArrowIcon
                    style={{
                      stroke: tag.name === selectedTag ? "#fff" : "#7AB972",
                      transform:
                        tag.name === selectedTag
                          ? "rotate(90deg)"
                          : "rotate(270deg",
                      transition: "0.4s",
                      marginRight: "0.5rem",
                    }}
                  />
                  <p>{tag.name}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedTag && (
            <div className="sub-items">
              {FILTER_ITEMS.find((tag) => tag.name === selectedTag)?.sub.map(
                (item, index) => (
                  <div
                    className="sub-item"
                    key={index}
                    onClick={() => handleFilter(item)}
                    style={{
                      color: item === filter ? "#fff" : "",
                      backgroundColor: item === filter ? "#7AB972" : "",
                      border: item === filter ? "1px solid #7AB972" : "",
                    }}
                  >
                    <p>{item}</p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </FilterSortStyles>
  );
};

export default FilterSortCard;
