import { styled } from "@mui/system";

export const StyledPaper = styled("div")`
  display: flex;
  border-right: 0.1px solid #ebf0f5;
  padding-top: 20px;
  padding-right: 20px;
  flex-direction: column;
`;

export const NavItem = styled("div")`
  display: flex;
  padding: 10px 30px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #f7f8fa;
  }
  margin-bottom: 1rem;
  color: #566474;
`;
