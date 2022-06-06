import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPaper = styled("div")`
  color: #566474;
  display: flex;
  flex-direction: column;

  padding-left: 30px;
  padding-top: 20px;
  padding-right: 30px;
  width: 65%;
`;

export const Details = styled("div")`
  display: flex;
  align-items: center;
`;

export const SkillTest = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: space-between;
  border: 1px solid #ebf0f5;
  border-radius: 10px;
`;

export const SkillTestDetails = styled("div")`
  display: flex;
  padding-left: 20px;
  flex-direction: column;
`;

export const UpdateButton = styled(Button)`
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    ].join(',')
`;

export const StatisticsSection = styled("div")`
  display: flex;
  margin-top: 30px;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid #ebf0f5;
  border-radius: 10px;
`;

export const Content = styled("div")`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const StatsRow = styled("div")`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const StatsInfo = styled("div")`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
`;

export const StatsItem = styled("div")`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  min-height: 50px;
  min-width: 50px;
  background: #ebf0f5;
`;

export const ComparisonGraph = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px 30px;

  border: 1px solid black;
  border-radius: 10px;
`;

export const Graph = styled("div")`
  display: flex;
  height: 40%;
  max-width: 85%;
  border: 1px solid #ebf0f5;
  border-radius: 10px;
`;
