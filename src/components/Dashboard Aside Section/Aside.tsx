import React, { useContext } from "react";

import {
  ProgressBar,
  StyledPaper,
  SyllabusAnalysis,
  RowFlexbox,
  ColumnFlexbox,
  WeightedFont,
} from "./styles";
import { Box, Typography } from "@mui/material";
import { LinearProgress, LinearProgressProps } from "@mui/material";
import { VictoryPie } from "victory";
import { data } from "./data";
import UserContext from "../UserContext";

const LinearProgressWithLabel = (
  props: LinearProgressProps & {
    value: number;
    color: string;
  }
) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "100%", mr: 1, pr: "40%" }}>
        <LinearProgress
          sx={{ height: 10, borderRadius: 20 }}
          variant="determinate"
          {...props}
        />
      </Box>

      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
};

const Aside = () => {
  const { val } = useContext(UserContext);
  return (
    <StyledPaper>
      <SyllabusAnalysis>
        <Typography fontSize="1.2rem" color="#1E272E">
          Syllabus wise Analysis
        </Typography>
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {data.map((item) => {
            return (
              <ProgressBar>
                <Typography fontSize="1rem" color="#566474" pr="40%">
                  {item.name}
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={item.value} color="primary" />
                </Box>
              </ProgressBar>
            );
          })}
        </div>
      </SyllabusAnalysis>
      <SyllabusAnalysis>
        <RowFlexbox sx={{ justifyContent: "space-between" }}>
          <Typography variant="body2" color="#1E272E">
            Question Analysis
          </Typography>
          <Typography variant="body2" color="#438AF6">
            07/15
          </Typography>
        </RowFlexbox>
        <Typography variant="subtitle2" color="#566474" pt="20px">
          <WeightedFont>
            You scored {val.score} question correct out of 15.
          </WeightedFont>
          However it still needs some improvements
        </Typography>
        <ColumnFlexbox
          sx={{
            alignItems: "center",
            height: "60%",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
          }}
        >
          <svg viewBox="0 0 400 400" width="100%" height="100%">
            <VictoryPie
              standalone={false}
              animate={{ duration: 2000 }}
              width={400}
              height={400}
              data={[
                { x: 1, y: Number(val.percentile) },
                { x: 2, y: 100 - Number(val.percentile) },
              ]}
              innerRadius={120}
              cornerRadius={-25}
              labels={() => null}
              style={{
                data: {
                  fill: ({ datum }) => {
                    const color = "blue";
                    return datum.x === 1 ? color : "#add8e6";
                  },
                },
              }}
            />
          </svg>
        </ColumnFlexbox>
      </SyllabusAnalysis>
    </StyledPaper>
  );
};

export default Aside;
