import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";


const CardContainer = styled.div`
 ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
 `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

export function BookCard() {

}