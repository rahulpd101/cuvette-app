import React from "react";
import Aside from "../Dashboard Aside Section/Aside";
import Mid from "../Dashboard Mid Section/Mid";
import { StyledPaper } from "./styles";
const Dashboard = () => {
  return (
    <StyledPaper>
      <Mid />
      <Aside />
    </StyledPaper>
  );
};

export default Dashboard;
