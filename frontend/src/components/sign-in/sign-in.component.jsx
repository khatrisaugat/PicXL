import React, { Component } from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer,
} from "./sign-in.styles";
import {apiPostFunc} from "../../api/base";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      // auth.signInWithEmailAndPassword(email, password);
      const response=await apiPostFunc.userLogin({email, password})
      console.log(response)
      // signInWithEmailAndPassword(auth, email, password).then(() => {
      //   this.setState({ email: "", password: "" });
      // });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          {/* <input type="submit" value="Submit Form" />
           */}
          <ButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
