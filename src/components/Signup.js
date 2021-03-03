import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Signin from "./Signin";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Password = (e) => {
    setPassword(e.target.value);
  };

  const setData = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    const emailLength = email.length;
    const passLength = password.length;
    const confPassLength = confirmPassword.length;
    if (emailLength > 0 && passLength > 0 && confPassLength > 0) {
      if (password === confirmPassword) {
        alert("Signup successfull");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        alert("Please verify the passwords again");
      }
    } else {
      alert("Fill all the details");
    }
  };

  return (
    <div>
      <Navigation />
      <h1>Signup</h1>
      <TextField
        required
        label="Enter your email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <TextField
        required
        label="Enter your Password"
        type="password"
        value={password}
        onChange={Password}
      />
      <br />
      <br />

      <TextField
        required
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="contained"
        onClick={setData}
        style={{ backgroundColor: "#de1241", border: "none", height: "30px" }}
      >
        Signup
      </Button>
    </div>
  );
}

export default Signup;
