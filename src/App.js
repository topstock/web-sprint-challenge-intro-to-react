import React from 'react';
import './App.css';
import axios from "axios";
import styled from 'styled-components';

const StyledApp = styled.div`
.App {
  font-size: large;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: start;
  line-height: 1.5rem;
  text-decoration: 2px underline black, 2px underline black;
  background-color: slategray;
  color: palegreen;
  border: 2px lightgray;
  margin: 5vw;
  padding: 1vw;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: "Times New Roman", serif;
 }

 .header {
  font-family: "Tahoma", sans-serif;
  font-weight: 600;
  font-size: 4rem;
  color: green;
 }

  @media (max-width: 1200px) {
    .App {
      font-size: medium;
      line-height: 1.4rem;
      text-decoration: 1px underline black, 1px underline black;
      font-family: "Didot", serif;
    }
    .header {
      font-size: 4rem;
      color: #00FF44;
    }
  }

  @media (max-width: 900px) {
    .App {
      text-decoration: none;
      line-height: 1.2rem;
      color: teal;
      background-color: #444444;
      padding: 0.5vw;
      margin: 2.5vw;
      border: 2px #777777;
      font-family: "Impact", sans-serif;
    }
    .header {
      font-size: 3.4rem;
      color: #44FF88;
    }
  }

  @media (max-width: 500px) {
    .App {
      line-height: 1.2rem;
      color: green;
      background-color: #222222;
      padding: 0vw;
      margin: 1vw;
      border: 2px #555555;
      font-family: "Tahoma", sans-serif;
    }
    .header {
      font-size: 3rem;
      color: #88FFBB;
    }
  }

  @media (max-width: 320px) {
    .App {
      line-height: 1.2rem;
      color: green;
      background-color: #111111;
      padding: 0vw;
      margin: 0.5vw;
      border: 1px #444444;
      font-family: "Arial", sans-serif;
    }
    .header {
      font-size: 2rem;
      font-weight: 400;
      color: whitesmoke;
    }
  }
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  axios.get(``)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className="App">
      <h1 className="Header">CHARACTERS</h1>
    </StyledApp>
  );
}

export default App;
