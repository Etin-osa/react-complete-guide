import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
  width: 450px;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  font-family: 'Helvetica';
  
  @media screen and (max-width: 650px) {
    width: 60%;
  }
`

const person = (props) => {
  return (
    <StyledDiv>
        {/* Click call right here from the parent element */}
        <p onClick={props.click}>I'm {props.name}, and i'm {props.age} years old</p>
        <p>{props.children}</p>

        {/* A two way binding system where the input contains the name of the value from the start with us setting the value of the input here but also listening for onChange, We will recieve an error in the console although it will still work. And note that if you don't have the onchange listener here the value will be fixed and you can't change it in the webpage. Note this is not advisable 
        
        To fix that you can change value to defaultValue
        */}
        <input type="text" onChange={props.changed} defaultValue={props.name} />
    </StyledDiv>
  )
}

export default person;