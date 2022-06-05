import React from "react";
import { useState } from "react";
import { NavItem, StyledPaper } from "./styles";

const Sidebar = () => {


  return (
    <StyledPaper>
      {['Dashboard', 'Skill Test', 'Internships'].map((item) => {
        return (
          <NavItem >
            <img style={{ marginRight: "10px" }} src={`${item}.svg`} alt="itemImage" />
            {item}
          </NavItem>
        )
      })}
    </StyledPaper>
  );
};

export default Sidebar;
