// Write your Character component here
import React from 'react';
//import styled from 'styled-components';
/*
const StyledCharacter = styled.span`
  .Character {
    border: 2px #66AA00;
    background-color: none;
    margin: 0px;
  }

  .div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: start;
    line-height: 1.5rem;
    text-decoration: 2px underline gray, 1px overline yellow;
    background-color: rgba( 0,0,0,0.2);
    color: white;
    margin: 0px;
    font-family: 'Times New Roman', serif;
  }

  @media (max-width: 1200px) {
    .div {
      line-height: 1.3rem;
      text-decoration: 1px underline darkgray, 1px underline lightgray;
      font-family: 'Didot', serif;
    }
  }

  @media (max-width: 900px) {
    .div {
      color: lightskyblue;
      line-height: 1.2rem;
      text-decoration: 1px underline black, 1px overline lightgray;
      font-family: 'Impact', sans-serif;
    }
  }
    @media (max-width: 500px) {
    .div {
      line-height: 1rem;
      color: lightgoldenrodyellow;
      text-decoration: 1px underline darkorange, 1px overline lightgray;
      background-color: rgba( 0,0,0,0.3);;
      font-family: 'Tahoma', sans-serif;
    }
  }
  @media (max-width: 320px) {
    .div {
      color: white;
      background-color: rgba( 0,0,0,0.7);;
      border: 1px #444444;
      text-decoration: none;
      font-family: 'Arial', sans-serif;
    }
  }
`
*/
const Character = ({characterName, birthYear}) => {
    
    console.log("Character");
    return (
        <div className='Character' key={characterName}>
            <div>{characterName} {birthYear}</div> 
        </div>
    )
}

export default Character;