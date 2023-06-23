import { NotificationIcon } from "@/public/svgs";
import Image from "next/image";
import React, { useState } from "react";
import Search from "../../common/Search";
import { NavStyles } from "./styles";

const Nav = ({handleSearch}:any) => {
  const [count, setCount] = useState<number>(1);

  return (
    <NavStyles>
      <div className="actions">
        <Search placeholder="Search jobs" handleSearch={handleSearch} />
      </div>
      <div className="right">
        <div className="notifications">
          <NotificationIcon />
          <div className="count">{count}</div>
        </div>
        <Image
          src={"/images/profile-pic.png"}
          alt=""
          height={42}
          width={42}
          style={{ cursor: "pointer" }}
        />
      </div>
    </NavStyles>
  );
};

export default Nav;
