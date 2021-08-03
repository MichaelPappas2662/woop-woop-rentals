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
    justify-center
    items-center
    `};
`;


function App() {
    return (
      <Router>
        <Switch>
        <AppContainer>
            <Route path="/login">
              <AccountBox />
            </Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
        </AppContainer>
        </Switch>
      </Router>
  )
  
}

export default App;
