import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

function SignInSignUp() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
}

export default SignInSignUp;
