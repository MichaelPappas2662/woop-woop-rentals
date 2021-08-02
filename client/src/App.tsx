import React from 'react';
import { Route, Switch as Switching } from "react-router";
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { AccountBox } from './app/components/accountBox';
import { HomePage } from './app/containers/HomePage';


const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    `};
`;


function App() {
    return (
    
      <AppContainer>
     
      <AccountBox />
      <HomePage />
    
      </AppContainer>
  )
  
}

export default App;
