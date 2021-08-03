import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { AccountBox } from './app/components/accountBox';
import { HomePage } from './app/containers/HomePage';
import { LoginSuccess } from './app/containers/LoginSuccess';




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
            <Route path="/">
              <AccountBox />
            </Route>
          <Route exact path="/login/success" component={LoginSuccess} />
          <Route path="/login/error"></Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
        </AppContainer>
        </Switch>
      </Router>
  )
  
}

export default App;