import React, { useContext } from "react";
import { Marginer } from "../../../marginer";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";

export function LoginForm() {
    const { switchToSignup } = useContext(AccountContext);

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
        </BoxContainer>
    )
}