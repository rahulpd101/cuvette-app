import React from "react";
import { ProgressBar, StyledPaper, SyllabusAnalysis } from "./styles";
import { Box, Typography } from "@mui/material";
import { LinearProgress, LinearProgressProps } from "@mui/material";

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
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
        <Typography variant="body2" color={`${props.color}`}>
          {`${props.value}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const Aside = () => {
  return (
    <StyledPaper>
      <SyllabusAnalysis>
        <Typography fontSize="1.2rem" color="#1E272E">
          Syllabus wise Analysis
        </Typography>
        <ProgressBar>
          <Typography fontSize="1rem" color="#566474" pr="40%">
            HTML Tools, Forms, History
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={80} />
          </Box>
        </ProgressBar>
        <ProgressBar>
          <Typography fontSize="1rem" color="#566474" pr="40%">
            Tags & References in HTML
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={60} />
          </Box>
        </ProgressBar>
        <ProgressBar>
          <Typography fontSize="1rem" color="#566474" pr="40%">
            Tables & CSS Basics
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={24} />
          </Box>
        </ProgressBar>
        <ProgressBar>
          <Typography fontSize="1rem" color="#566474" pr="40%">
            Tables & CSS Basics
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={96} />
          </Box>
        </ProgressBar>
      </SyllabusAnalysis>
      <SyllabusAnalysis></SyllabusAnalysis>
    </StyledPaper>
  );
};

export default Aside;
