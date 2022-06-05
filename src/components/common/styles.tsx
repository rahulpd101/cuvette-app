import { AppBar, Paper, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
export const FullBodyContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const StyledAppBar = styled(AppBar)`
  background: #ffffff;
`;

export const MainScrollableBody = styled("div")`
  flex-grow: 1;
  overflow-y: scroll;
  padding: 1rem;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-grow: 1;
  width: 100vw;
  overflow-y: scroll;
`;

export const PaddedContainer = styled("div")`
  padding: 1rem;
`;

export const StyledToolbar = styled(Toolbar)`
  border-bottom: 0.01px solid #ebf0f5;
`;
