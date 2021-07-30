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

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
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

const ListItem = styled.li`
  ${tw`
    mb-3
  `};

  & > a {
    ${tw`
    text-sm
    text-white
    transition-all
    hover:text-gray-200
    `};
  }
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
            <SectionContainer>
                <HeaderTitle>Our Links</HeaderTitle>
            <LinksList>
                <ListItem><a href="#">Home</a></ListItem>
                <ListItem><a href="#">About Us</a></ListItem>
                <ListItem><a href="#">Services</a></ListItem>
                <ListItem><a href="#">Models</a></ListItem>
                <ListItem><a href="#">Blogs</a></ListItem>               
            </LinksList>
            </SectionContainer>
        </InnerContainer>
    </FooterContainer>
    );
}