import React from 'react';
import classes from './Person.css';

const person = props => {
  console.log('[App.js] Person rendering...');
  return (
    <div className={classes.Person}>
        {/* Click call right here from the parent element */}
        <p onClick={props.click}>I'm {props.name}, and i'm {props.age} years old</p>
        <p>{props.children}</p>

        {/* A two way binding system where the input contains the name of the value from the start with us setting the value of the input here but also listening for onChange, We will recieve an error in the console although it will still work. And note that if you don't have the onchange listener here the value will be fixed and you can't change it in the webpage. Note this is not advisable 
        
        To fix that you can change value to defaultValue
        */}
        <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  )
}

export default person;