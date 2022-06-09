import { styled } from "@mui/system";

export const StyledPaper = styled("div")`
  display: flex;
  width: 35%;
  flex-grow: 1;
  flex-direction: column;
  padding: 50px 30px 0 30px;
`;

export const SyllabusAnalysis = styled("div")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ebf0f5;
  border-radius: 10px;
  &:nth-child(2) {
    flex-grow: 1;
    margin-bottom: 0;
  }
`;

export const ProgressBar = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:nth-child(1) {
    margin-top: 20px;
  }
`;

export const RowFlexbox = styled("div")`
  display: flex;
`;
export const ColumnFlexbox = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const WeightedFont = styled("div")`
  font-weight: 700;
`;
