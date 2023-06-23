import React from "react";
import { CardStyles } from "./styles";
import { truncateText } from "@/utils/libs";
import Image from "next/image";
import PlusIcon from "@/public/svgs/PlusIcon";

const Card = ({
  jobType,
  location,
  created,
  team,
  role,
  salary,
  experience,
  content,
  onClick,
  activeCardIndex,
  id,
  numberOfCandidates,
  source,
}: any) => {
  return (
    <CardStyles active={activeCardIndex === id} onClick={onClick}>
      <div className="top">
        <p>
          {jobType.join(", ")}, {location}
        </p>
        <p>{created} days ago</p>
      </div>
      <div className="team">{team}</div>
      <div className="offer">
        <p className="role">{role}</p>
        <p className="salary">Rs. {salary}/Month</p>
      </div>
      <p className="experience">{experience}</p>
      <p className="content">{truncateText(content, 100)}</p>
      <div className="candidates">
        <div className="applicants">
          <Image src={"/images/circle-img.png"} alt="" height={20} width={20} />
          <Image src={"/images/picture1.png"} alt="" height={20} width={20} />
          <Image src={"/images/picture2.png"} alt="" height={20} width={20} />
          <PlusIcon
            style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              left: "33px",
            }}
          />
        </div>
        <p>{numberOfCandidates} Candidates</p>
      </div>
    </CardStyles>
  );
};

export default Card;
