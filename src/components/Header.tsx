import React from "react";
import { Avatar, Box, Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StyledAppBar, StyledToolbar } from "./common/styles";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <div style={{ flexGrow: 1 }}>
          <img style={{ cursor: "pointer" }} src="cuvette_logo.svg" alt="company-logo" />
        </div>
        <div>
          <Paper variant="outlined">
            <Box display="flex" alignItems="end" p={1}>
              <Avatar src="avatar.png" alt="avatar-image" />
              <Typography ml={2} variant="h5">
                Siddharth Jain
              </Typography>
            </Box>
          </Paper>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
