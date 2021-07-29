import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopCarsContainer = styled.div`
${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2``;


const CarsContainer = styled.div``;


const EmptyCars = styled.div``;

const LoadingContainer = styled.div``;


export function TopCars() {};
