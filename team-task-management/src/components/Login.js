import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Login(props) {
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth_token") !== null) {
      return nav("/home");
    }
  }, []);
  return (
    <div style={{ padding: "10px", border: "2px solid black", margin: "20px" }}>
      <h1>Hello</h1>
      <button onClick={(e) => props.login(e)} className="login">
        <img
          style={{ width: "50px", height: "50px", paddingTop: "10px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google Logo"
        />
        Log in With Google
      </button>
    </div>
  );
}

export default Login;
