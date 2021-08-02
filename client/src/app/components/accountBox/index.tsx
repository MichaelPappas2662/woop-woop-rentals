import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
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

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(161, 3, 3);
  background: linear-gradient(
    58deg,
    rgb(223, 2, 2) 20%,
    rgb(161, 3, 3) 100%
  );
`;




export function AccountBox(props) {
  
  return (
      <BoxContainer>
        <TopContainer>
          <BackDrop
            
          />
        </TopContainer>
       
      </BoxContainer>
  );
}