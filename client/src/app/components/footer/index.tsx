import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";


const FooterContainer = styled.div`
    min-height: 30em;
    background-color: #1d2124;
    ${tw`
        flex
        flex-col
        min-w-full
        pt-10
        md:pt-16
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
    `};
`;

export function Footer() {
    return (
    <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" bgColor = "dark"/>
            </AboutContainer>
        </InnerContainer>
    </FooterContainer>
    );
}