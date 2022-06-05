import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { FullBodyContainer } from "./components/common/styles";

const App: React.FC = () => {
  return (
    <FullBodyContainer>
      <Header />
      <Content />
    </FullBodyContainer>
  );
};

export default App;
