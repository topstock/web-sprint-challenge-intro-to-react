import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';

const StyledApp = styled.div`
  .App {
    font-size: large;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0vw;
    margin: 5vw;
    box-sizing: border-box;
    border-radius: 2px;
  }

 .Header {
    font-family: 'Tahoma', sans-serif;
    font-weight: 600;
    font-size: 4rem;
    color: black;
  }

  @media (max-width: 1200px) {
    .Header {
      font-size: 4rem;
      color: #FF4400;
    }
  }

  @media (max-width: 900px) {
    .App {
      margin: 2.5vw;
      border: 2px #777777;
    }
    .Header {
      font-size: 3.4rem;
      color: #AA4400;
    }
  }

  @media (max-width: 500px) {
    .App {
      margin: 1vw;
      border: 2px #555555;
      width: auto;
    }

    .Header {
      width: auto;
      font-size: 3rem;
      color: #444444;
    }
  }

  @media (max-width: 320px) {
    .App {
      width: auto;
      margin: 0.5vw;
      border: 1px #444444;
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
  const [swData, setSwData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.get(`https://swapi.dev/api/people/`)
      .then( resp => {
        setSwData( resp.data.map( character => [character.name, character.birth_year])
        );
      })
      .catch( err => console.error(err))
    }, []
  ) 
  console.log(swData);
  return (
    <StyledApp className='App'>
      <div>
      <h1 className='Header'>CHARACTERS</h1>
      {swData.map( character => {
        return (<Character
          characterName={character[0]}
          birthYear={character[1]}
        />)}
      )}
      </div>
    </StyledApp>
  )
}

export default App;
