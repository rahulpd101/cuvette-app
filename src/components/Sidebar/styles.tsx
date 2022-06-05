import { styled } from "@mui/system";

export const StyledPaper = styled('div')`
    display:flex;
    border-right: 0.1px solid #EBF0F5;
    padding-top: 20px;
    padding-right: 20px;
    width: 10vw;
    flex-direction:column;
`

export const NavItem = styled('div')`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    &:hover {
        background: #F7F8FA;
    }
    margin-bottom: 1rem;
    color: #566474;
`;