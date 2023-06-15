import React, { useState } from "react";
import Layout from "@/components/Layout";
import { JobStyles } from "@/styles/jobs.styles";
import Nav from "@/components/navbar";
import Card from "@/components/common/card";
import {
  JOBS,
  COLUMNS,
} from "@/components/jobs/constants";
import FilterSortCard from "@/components/common/filter-card";
import Table from "@/components/common/table";

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCardIndex, setActiveCardIndex] = useState<boolean>(false);
  const [filterSource, setFilterSource] = useState<string>("All");
  const [filterJobType, setFilterJobType] = useState<string>("");
  const [filterLocation, setFilterLocation] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [applicants, setApplicants] = useState<any>([]);
  const [loadingTable, setLoadingTable] = useState<boolean>(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Filter the jobs based on the search term or filter item
  const searchFilter = JOBS.filter((job) => {

    const searchFields = [
      job.jobType.join(", "),
      job.location,
      job.team,
      job.role,
      job.experience,
      job.content,
      job.numberOfCandidates,
    ];

    const matchesSearchTerm = searchFields.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesFilter = searchFields.some((field) =>
      field.toLowerCase().includes(filter.toLowerCase())
    );

    return matchesSearchTerm && matchesFilter;
  });

  // Sort the jobs based on the selected sort item
  const getSortValue = (job: any) => {
    switch (sortOption) {
      case "Date of Post":
        return parseInt(job.created);
      case "Number of Candidates":
        return job.numberOfCandidates;
      case "Salary":
        return parseInt(job.salary);
      case "Experience":
        return parseInt(job.experience);
      default:
        return 0;
    }
  };

  const sortedJobs = searchFilter.slice().sort((job1, job2) => {
    const value1 = getSortValue(job1);
    const value2 = getSortValue(job2);
    return value1 - value2;
  });

  const handleCardClick = (item: any, cardIndex: any) => {
    setActiveCardIndex(cardIndex === activeCardIndex ? null : cardIndex);
    setLoadingTable(true);
    setTimeout(() => {
      setApplicants(item?.details?.applicants)
      setLoadingTable(false)
    }, 2000);
  };

  const handleSortClick = (item: any) => {
    setSortOption((prevSortOption) => (prevSortOption === item ? "" : item));
  };

  const handleFilterTagClick = (tag: string, filterType: string) => {
    console.log(tag);
    if (selectedTag === tag) {
      setSelectedTag(null);
      switch (filterType) {
        case "source":
          setFilterSource("All");
          break;
        case "jobType":
          setFilterJobType("");
          break;
        case "location":
          setFilterLocation("All");
          break;
        default:
          break;
      }
    } else {
      setSelectedTag(tag);
      switch (filterType) {
        case "source":
          setFilterSource(tag);
          break;
        case "jobType":
          setFilterJobType(tag);
          break;
        case "location":
          setFilterLocation(tag);
          break;
        default:
          break;
      }
    }
    setSearchTerm("");
  };

  return (
    <div>
      <Layout>
        <JobStyles>
          <Nav handleSearch={handleSearch} />
          <div className="body">
            <div style={{ overflow: "auto" }}>
              <div className="filter">
                <FilterSortCard
                  sortOption={sortOption}
                  handleSort={handleSortClick}
                  selectedTag={selectedTag}
                  setFilter={setFilter}
                  filter={filter}
                  handleFilterTagClick={handleFilterTagClick}
                />
              </div>
              <div className="cards">
                {sortedJobs.length > 0 ? (
                  sortedJobs.map((item, index) => (
                    <Card
                      key={index}
                      jobType={item.jobType}
                      location={item.location}
                      created={item.created}
                      team={item.team}
                      role={item.role}
                      salary={item.salary}
                      experience={item.experience}
                      content={item.content}
                      numberOfCandidates={item.numberOfCandidates}
                      onClick={() => handleCardClick(item, index)}
                      activeCardIndex={activeCardIndex}
                      id={index}
                    />
                  ))
                ) : (
                  <div className="card-space"></div>
                )}
              </div>
            </div>
            <div className="table">
              <Table columns={COLUMNS} data={applicants} loading={loadingTable} />
            </div>
          </div>
        </JobStyles>
      </Layout>
    </div>
  );
};

export default JobsPage;
