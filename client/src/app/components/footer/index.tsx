import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";


const FooterContainer = styled.div`
    min-height: 30em;
    background-color: #1d2124;
    ${tw`
        flex
        flex-wrap
        min-w-full
        pt-7
        pb-1

    `};
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
    `};
`;

export function Footer() {
    return <FooterContainer>
        <AboutContainer>
            <Logo color="white" bgColor = "dark"/>
        </AboutContainer>
    </FooterContainer>
}