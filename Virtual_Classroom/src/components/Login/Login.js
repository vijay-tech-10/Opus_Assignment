import { Button } from "@material-ui/core";
import React from "react";
import logo from '../../assets/friend.png';
import { useLocalContext } from "../../context/context";
import "./style.css";
const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="Classroom" />

      <Button variant="contained" color="default" onClick={() => login()}>
        Get Started
      </Button>
    </div>
  );
};

export default Login;
