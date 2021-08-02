import React from "react";
import { BoxContainer, FormContainer, Input } from "./common";

export function LoginForm() {

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
            </FormContainer>
        </BoxContainer>
    )
}