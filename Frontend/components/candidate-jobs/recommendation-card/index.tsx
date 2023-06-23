import Button from "@/components/common/button";
import { RoundArrow } from "@/public/svgs";
import React from "react";
import { StyledCard } from "./styles";

const RecommendationCard = ({
  logo,
  title,
  company,
  location,
  description,
  jobType,
  salary,
  deadline,
}: any) => {
  return (
    <StyledCard>
      <div className="logo">{logo}</div>
      <div>
        <div className="title">
          <h2>{title}</h2>
          <Button
            btnText="Apply"
            textColor="#11212E"
            border="2px solid #EDEBEB"
            width="124px"
            iconRight={<RoundArrow />}
          />
        </div>
        <div className="sub">
          <p className="company">{company}</p>
          <p className="location">{location}</p>
        </div>
        <div className="desc">{description}</div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", marginBottom: "2rem" }}>
            {jobType.map((type: string) => (
            <div
                style={{
                // width: "100%",
                height: "auto",
                padding: "5px",
                background: "#EDEBEB 0% 0% no-repeat padding-box",
                borderRadius: "12px",
                opacity: 1,
                }}
            >
                {type}
            </div>
                
            ))}
        </div>
        <div className="title">
          <h2><span style={{color: "#32A3CC"}}>{salary}</span> net / month</h2>
          {deadline && <p style={{color: "#AC433E"}}>{deadline}</p>}
        </div>
      </div>
    </StyledCard>
  );
};

export default RecommendationCard;
