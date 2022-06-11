import React, { useState } from "react";
import Aside from "../Dashboard Aside Section/Aside";
import Mid, { ValueType } from "../Dashboard Mid Section/Mid";
import { StyledPaper } from "./styles";
import { UserProvider } from "../UserContext";

const Dashboard = () => {
  return (
    <UserProvider>
      <StyledPaper>
        <Mid />
        <Aside />
      </StyledPaper>
    </UserProvider>
  );
};

export default Dashboard;
