import React, { useState } from "react";
import { ValueType } from "./Dashboard Mid Section/Mid";

const INIT_VALUES = {
  score: "07",
  rank: "12",
  percentile: "37",
};

const UserContext = React.createContext({
  handleChangeVals: (values: any) => {},
  val: INIT_VALUES,
});

// export const UserProvider = UserContext.Provider;
export default UserContext;

export const UserProvider = ({ children }: { children: any }) => {
  const [val, setVal] = useState(INIT_VALUES);

  const handleChangeVals = (values: ValueType) => {
    setVal(values);
  };
  return (
    <UserContext.Provider value={{ val, handleChangeVals }}>
      {children}
    </UserContext.Provider>
  );
};
