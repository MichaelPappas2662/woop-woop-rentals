import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        2xl:justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;

    img{
        width: auto;
        height: 100%;
    }


    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }

    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1`
  ${tw``};
`;

const InfoText = styled.p`
  ${tw``};
`;

export function AboutUs() {
    return ();