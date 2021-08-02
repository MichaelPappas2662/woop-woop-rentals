import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
    <Router>
     <Switch>
       <Route path="/login">
      <AccountBox />
      </Route>
      <Route path="/homepage">
      <HomePage />
      </Route>
      </Switch>
    </Router>
      </AppContainer>
  )
  
}

export default App;
