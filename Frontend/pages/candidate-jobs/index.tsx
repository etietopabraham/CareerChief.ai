import Navbar from "@/components/candidate-jobs/navbar";
import React from "react";
import { CandidateStyles } from "@/styles/candidates.styles";
import RecommendationCard from "@/components/candidate-jobs/recommendation-card";
import { RECOMMENDATION_CARDS } from "@/components/candidate-jobs/constants";

const CandidateJobs = () => {
  return (
    <CandidateStyles>
      <Navbar />
      <div className="body">
        <p>Welcome, Etietop Abraham</p>
        <h3>Your job recommendations.</h3>

        <div className="flex">
          <div className="left">
            {RECOMMENDATION_CARDS.map((card, i) => (
              <RecommendationCard
                key={i}
                logo={card.logo}
                title={card.title}
                company={card.companyName}
                location={card.location}
                description={card.description}
                jobType={card.jobType}
                salary={card.salary}
                deadline={card.deadline}
              />
            ))}
          </div>
          <div className="right"></div>
        </div>
      </div>
    </CandidateStyles>
  );
};

export default CandidateJobs;
