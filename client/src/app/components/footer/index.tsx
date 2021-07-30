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

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;


export function Footer() {
    return (
    <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" bgColor = "dark"/>
                <AboutText>
                    Woop Woop Rental is a car renting and selling company,
                    located in many countries across the world, 
                    and has high quality cars and is top rated. 
                </AboutText>
            </AboutContainer>
        </InnerContainer>
    </FooterContainer>
    );
}