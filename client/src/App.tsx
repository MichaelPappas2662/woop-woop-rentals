import React from 'react';
import GoogleButton from 'react-google-button';
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
import axios from 'axios';



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

  const redirectToGoogleSSO = async () => {
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL = "http://localhost:5000/api/v1/login/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

    return (
      <Router>
        <Switch>
        <AppContainer>
            <Route path="/">
              <AccountBox />
            </Route>
            <Route>
              <GoogleButton onClick={redirectToGoogleSSO}/>
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