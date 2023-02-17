import React, { FC } from "react";
import { linearProgress } from "../../utils";

import "./password-strength.scss";

type Props = {
  password: string;
};

const PasswordStrength: FC<Props> = ({ password }) => {
  return (
    <div className="password__strength">
      {linearProgress(password).map((color, i) => (
        <span
          key={i}
          className="password__strength-section"
          style={{ backgroundColor: `${color}` }}
        ></span>
      ))}
    </div>
  );
};

export default PasswordStrength;
