import React from "react";
import { StyledPaper } from "./common/styles";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";

const Content: React.FC = () => {
  return (
    <StyledPaper>
      <Sidebar />
      <Dashboard />
    </StyledPaper>
  );
};

export default Content;
