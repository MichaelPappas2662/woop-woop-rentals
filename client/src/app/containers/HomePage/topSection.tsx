import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
        
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;


export function TopSection() {

}