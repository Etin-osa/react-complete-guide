import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect()');
  })

  const assignClasses = [];
  let btnClass = [];

  if (props.showPersons) {
    btnClass.push(classes.Red)
  }

  if (props.personsLength <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(' ')}>This is really working!!</p>

      {/* binding and changing propeties 2 methods:  one here and the other in the second person component below, And take note that the other kind of data sharing or changing is more efficient than this one right here so. Use the bind one more often and be carefull of the arrow kind */}
      {/* -btn1 <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button> */}

      <button
        className={btnClass.join(' ')}
        onClick={props.toggle}>Toggle Persons</button>
    </div>
  )
}

export default React.memo(Cockpit);