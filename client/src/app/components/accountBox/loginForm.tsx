import React from "react";
import { Marginer } from "../../../marginer";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";

export function LoginForm() {

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
                    <BoldLink href="#" >
                    Signup
                    </BoldLink>
                </MutedLink>
        </BoxContainer>
    )
}