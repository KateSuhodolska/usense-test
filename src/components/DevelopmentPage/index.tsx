import React, { FC } from "react";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import "./development-page.scss";

const DevelopmentPage: FC = () => {
  return (
    <div className="development-page">
      <div className="description">
        <ErrorOutlineIcon sx={{ fontSize: "50px", marginRight: "10px" }} />
        <h1>This page is in development</h1>
      </div>
      <Link to="/" className="go-back">
        Go back
      </Link>
    </div>
  );
};

export default DevelopmentPage;
