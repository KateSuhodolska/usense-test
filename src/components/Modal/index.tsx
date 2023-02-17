import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrength from "../PasswordStrength";
import { isEmail } from "../../utils";

import { Input } from "./input.styled";
import "./modal.scss";

const Modal: FC = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div className="main">
      <h2 className="greeting">Hi, User! :)</h2>
      <form className="signIn__form">
        <div className="signIn__form-content">
          <label className="signIn__form-label">Email</label>
          <Input
            type="email"
            placeholder="Type your email"
            value={emailAddress}
            fullWidth={true}
            required={true}
            error={!!emailAddress && !isEmailValid}
            onChange={(event) => {
              setEmailAddress(event.target.value);
              setIsEmailValid(isEmail(emailAddress));
            }}
          />
          <label className="signIn__form-label">Password</label>
          <Input
            type="password"
            placeholder="Type your password"
            value={password}
            fullWidth={true}
            required={true}
            error={!!password && !isPasswordValid}
            onChange={(event) => {
              setPassword(event.target.value);
              setIsPasswordValid(password.length >= 8);
            }}
          />
          <Link to="/development" className="forgot-password_link">
            Forgot your password?
          </Link>
          <PasswordStrength password={password} />
          <button
            className="signIn__form-button"
            onClick={() => {
              if (isEmailValid && isPasswordValid) {
                setEmailAddress("");
                setPassword("");
                navigate("/success");
              }
            }}
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="signUp">
        <p>Don't have an account?</p>
        <Link to="/development" className="signUp_link">
          Sign Up.
        </Link>
      </div>
    </div>
  );
};

export default Modal;
