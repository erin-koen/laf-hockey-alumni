import React, { Component } from "react";

class Register extends Component {
  state = {
    credentials: {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      ...this.state.credentials,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="First Name"
            name="firstName"
            value={this.state.credentials.firstName}
            type="text"
            onChange={this.handleChanges}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.credentials.lastName}
            type="text"
            onChange={this.handleChanges}
          />
          <input
            placeholder="Username"
            name="username"
            value={this.state.credentials.username}
            type="text"
            onChange={this.handleChanges}
          />
          <input
            placeholder="Password"
            name="password"
            value={this.state.credentials.password}
            type="password"
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default register;
