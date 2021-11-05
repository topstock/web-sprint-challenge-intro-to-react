// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.span`

  .containerDiv {
    width: 80vw;
    margin: 0 10vw;
    font-size: 3rem;
  }

  .rowDiv {
    padding: 0 5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    line-height: 1.5;
    background-color: rgba( 0,0,0,0.2);
    color: white;
    margin: 0px;
    border: 2px solid #AA4411;
    font-family: 'Arial', serif;
  }

  .wordDiv{
    background-color: rgba( 0,0,0,0.2);
    border-radius: 3px;
    box-shadow: 0 5px 5px rgba( 0,0,0,0.2),0 -5px 5px rgba( 0,0,0,0.2);
  }

  @media (max-width: 1200px) {
    .rowDiv {
      line-height: 1.3;
      font-family: 'Didot', serif;
    }
  }

  @media (max-width: 900px) {
    
    .rowDiv {
      padding: 0 3vw;
      color: #DDEEFF;
      line-height: 1.2;
      font-family: 'Arial', sans-serif;
    }
    .containerDiv {
      font-size: 2.2rem;
    }
  }

    @media (max-width: 500px) {
    .rowDiv {
      padding: 0 3vw; 
      line-height: 1;
      color: lightgoldenrodyellow;
      background-color: rgba( 0,0,0,0.3);;
      font-family: 'Tahoma', sans-serif;
      width: auto;
      padding: 1vw 0;
    }
    .containerDiv {
        width: auto;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 320px) {
    .rowDiv {
      width: auto;
      color: white;
      background-color: rgba( 0,0,0,0.7);;
      border: 1px solid #444444;
      text-decoration: none;
      font-family: 'Arial', sans-serif;
      padding: 1vw 0;
    }
  }
`

const Character = ({characterName, birthYear}) => {
    return (
      <StyledCharacter>
        <div className='containerDiv'>
          <div className='rowDiv'>
            <div className="wordDiv">{characterName}</div>
            <div className="wordDiv">{birthYear}</div>
          </div>
        </div>
      </StyledCharacter>
    )
}

export default Character