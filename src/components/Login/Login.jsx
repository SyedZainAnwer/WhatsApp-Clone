import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "../../config";
import { actionTypes } from "../../Reducer";
import { useStateValue } from "../../SateProvider";
import "./Login.css";

const Login = () => {

    const [ {}, dispatch ] =useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user,
            })
        })
        .catch((error) => alert(error.message));
    };

  return (
    <div className="login-main">
      <div className="login-container">
        <img src="https://upload.wikipedia.org/wikipedia:" alt="" />
        <div className="login-text">
          <h1>Sign In to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
