import React, { useRef } from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  const rankRef = useRef();
  const percentileRef = useRef();
  const scoreRef = useRef();

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Update
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="dialog-title">Update Scores</DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #EBF0F5",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src="/bullets/1.svg" alt="1st option" />
            <DialogContentText id="dialog-description" p={2}>
              Update your <span style={{ fontWeight: "700" }}>rank</span>
            </DialogContentText>
          </div>
          <TextField
            id="outlined-basic"
            label="Rank"
            variant="outlined"
            size="small"
            ref={rankRef}
          />
        </DialogContent>

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src="/bullets/2.svg" alt="1st option" />
            <DialogContentText id="dialog-description" p={2}>
              Update your <span style={{ fontWeight: "700" }}> percentile</span>
            </DialogContentText>
          </div>
          <TextField
            id="outlined-basic"
            label="Percentile"
            variant="outlined"
            size="small"
          />
        </DialogContent>

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EBF0F5",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src="/bullets/3.svg" alt="1st option" />
            <DialogContentText id="dialog-description" p={2}>
              Update your{" "}
              <span style={{ fontWeight: "700" }}>
                {" "}
                current score (out of 15){" "}
              </span>
            </DialogContentText>
          </div>
          <TextField
            id="outlined-basic"
            label="Current score"
            variant="outlined"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
