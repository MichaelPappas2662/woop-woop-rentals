import React from "react";
import { Marginer } from "../../../marginer";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";

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
                <SubmitButton type="submit">Sign-In</SubmitButton>
        </BoxContainer>
    )
}