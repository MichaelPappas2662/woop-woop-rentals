import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  border-radius: 19px;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  ${tw`
  flex
  flex-col
  bg-white
  relative
  overflow-hidden
  `};
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`; 

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: linear-gradient(
    58deg,
    #c50d0d 20%,
    #c50d0d 100%
  )
  ${tw`
  absolute
  flex
  flex-col
  bg-red-500
  `};
`;

export function AccountBox() {
  
  return (
      <BoxContainer>
        <TopContainer>
          <BackDrop/>
        </TopContainer>
      </BoxContainer>
   
  );
}