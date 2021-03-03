import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Contact from "./Contact/Contact";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSignIn] = useState(false);

  const Password = (e) => {
    setPassword(e.target.value);
  };

  const getData = () => {
    let em = localStorage.getItem("email");
    let pass = localStorage.getItem("password");
    const emailLength = email.length;
    const passwordLength = password.length;
    console.log(emailLength);
    console.log(passwordLength);
    if (emailLength > 0 && passwordLength > 0) {
      if (email === em && password === pass) {
        setSignIn(true);
        alert("Signin successfull");
      } else {
        alert("Enter correct data");
      }
    } else {
      alert("Enter correct data");
    }
  };

  return (
    <div>
      {signin ? (
        <Contact />
      ) : (
        <div>
          <Navigation />
          <h1>Signin</h1>
          <TextField
            type="text"
            label="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            label="Enter your password"
            type="password"
            value={password}
            onChange={Password}
          />
          <br />
          <br />
          <Button
            variant="contained"
            onClick={getData}
            style={{ backgroundColor: "#21b069" }}
          >
            Signin
          </Button>
        </div>
      )}
    </div>
  );
}

export default Signin;
