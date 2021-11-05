import React, { useState, useEffect } from 'react';
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

 .Header {
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
    .Header {
      font-size: 4rem;
      color: #00FF44;
    }
  }

  @media (max-width: 900px) {
    .App {
      text-decoration: none;
      line-height: 1.2rem;
      color: darkslateblue;
      background-color: rgba( 0,0,0,0.5);
      padding: 0.5vw;
      margin: 2.5vw;
      border: 2px #777777;
      font-family: "Impact", sans-serif;
    }
    .Header {
      font-size: 3.4rem;
      color: #FF8844;
    }
  }

  @media (max-width: 500px) {
    .App {
      line-height: 1.2rem;
      color: darkorange;
      background-color: rgba( 0,0,0,0.6);;
      padding: 0vw;
      margin: 1vw;
      border: 2px #555555;
      font-family: "Tahoma", sans-serif;
    }
    .Header {
      font-size: 3rem;
      color: #FFBB88;
    }
  }

  @media (max-width: 320px) {
    .App {
      line-height: 1.2rem;
      color: green;
      background-color: rgba( 0,0,0,0.7);;
      padding: 0vw;
      margin: 0.5vw;
      border: 1px #444444;
      font-family: "Arial", sans-serif;
    }
    .Header {
      font-size: 2rem;
      font-weight: 400;
      color: whitesmoke;
    }
  }
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swData, setSwData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.get(`https://swapi.dev/api/people/`)
      .then( resp => {
        setSwData( resp.data.map( character => [character.name, character.birth_year])
        );
        console.log(swData);
      })
      .catch( err => console.error(err))
    }, []
  ) 
  return (
    <StyledApp className="App">
      <h1 className="Header">CHARACTERS</h1>
    </StyledApp>
  );
}

export default App;
