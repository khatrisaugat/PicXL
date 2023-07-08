import React, { Component } from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { displayName, email, password, confirmPassword } = this.state;
  //   if (password !== confirmPassword) {
  //     alert("Passwords don't match");
  //     return;
  //   }
  //   console.log("handleSubmit");
  //   try {
  //     //   const { user } = await auth.createUserWithEmailAndPassword(
  //     //     email,
  //     //     password
  //     //   );
  //     createUserWithEmailAndPassword(auth, email, password).then(
  //       (userCredential) => {
  //         const user = userCredential.user;
  //         createUserProfileDocument(user, { displayName }).then(() => {
  //           this.setState({
  //             displayName: "",
  //             email: "",
  //             password: "",
  //             confirmPassword: "",
  //           });
  //         });
  //       }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
