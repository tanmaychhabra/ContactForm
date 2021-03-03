import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
class Main extends Component {
  render() {
    // this.state = {
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   name: "",
    //   contactEmail: "",
    //   phoneNumber: ""
    // };

    // const handleChange = (input) => (e) => {
    //   this.setState({
    //     [input]: e.target.value
    //   });
    // };

    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default Main;
