import { styled } from "@mui/system";
import { OutlinedInput } from "@mui/material";

export const Input = styled(OutlinedInput)({
  height: "30px !important",
  width: "100%",
  margin: "5px 0 15px",
  backgroundColor: "#fff",
  padding: "0 !important",
  "& .MuiInputBase-input": {
    padding: "10px",
  },
});
