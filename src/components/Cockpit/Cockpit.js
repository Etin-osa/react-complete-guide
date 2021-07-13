import React from 'react';

const Cockpit = props => {
  return (
    <div>
      <h1>Does this actually work?</h1>
      <p className={props.assigned}>This is really working!!</p>

      {/* binding and changing propeties 2 methods:  one here and the other in the second person component below, And take note that the other kind of data sharing or changing is more efficient than this one right here so. Use the bind one more often and be carefull of the arrow kind */}
      {/* -btn1 <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button> */}

      <button
        className={props.btnClass}
        onClick={props.toggle}>Toggle Persons</button>
    </div>
  )
}

export default Cockpit;