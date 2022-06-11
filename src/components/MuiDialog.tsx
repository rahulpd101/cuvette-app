import React, { ChangeEvent, useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import { ValueType } from "./Dashboard Mid Section/Mid";

const MuiDialog = ({
  handleChangeVals,
}: {
  handleChangeVals: (val: ValueType) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");

  const handleChange = () => {
    handleChangeVals({ score, rank, percentile });
    setRank("");
    setPercentile("");
    setScore("");
    setOpen(false);
  };

  const inputRank = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRank(e.target.value);
  };

  const inputPercentile = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPercentile(e.target.value);
  };

  const inputScore = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setScore(e.target.value);
  };

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
            value={rank}
            onChange={inputRank}
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
            value={percentile}
            onChange={inputPercentile}
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
            value={score}
            onChange={inputScore}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleChange}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
