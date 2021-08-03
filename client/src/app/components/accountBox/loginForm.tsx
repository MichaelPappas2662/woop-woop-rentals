import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Marginer } from "../../../marginer";
import { setAuthUser, setIsAuthenticated } from "../../appSlice";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import axios from "axios";

export function LoginForm() {
    const { switchToSignup } = useContext(AccountContext);
    // const user = useSelector((state: any) => state.app.authUser as any) as any;
    const dispatch = useDispatch();
    const history = useHistory();

  const fetchAuthUser = async () => {
    const response = await axios
      .get("http://localhost:5000/api/v1/auth/user", { withCredentials: true })
      .catch((err) => {
        console.log("Not properly authenticated");
        dispatch(setIsAuthenticated(false));
        dispatch(setAuthUser(null));
        history.push("/login/error");
      });

    if (response && response.data) {
      console.log("User: ", response.data);
      dispatch(setIsAuthenticated(true));
      dispatch(setAuthUser(response.data));
      history.push("/homepage");
    }
  };

  const redirectToGoogleSSO = async () => {
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL = "http://localhost:5000/api/v1/login/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
            </FormContainer>
                <Marginer direction="vertical" margin={10}/>
                <MutedLink href="#">Forgot your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton type="submit">SignIn</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">
                    Don't have an account?{" "}
                    <BoldLink href="#" onClick={switchToSignup}>
                    Signup
                    </BoldLink>
                </MutedLink>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink>
                <GoogleButton onClick={redirectToGoogleSSO}/>
                </MutedLink>
        </BoxContainer>
    )
}