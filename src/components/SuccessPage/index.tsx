import React, { FC } from "react";
import DoneIcon from "@mui/icons-material/Done";

import "./success.scss";

const Success: FC = () => {
  return (
    <div className="success-page">
      <h1>Login successful!</h1>
      <DoneIcon
        sx={{
          fontSize: "50px",
          backgroundColor: "#228b22",
          color: "#fff",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Success;
