import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Incharge from '../../../hoc/Incharge';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
 
class Person extends Component {
  constructor(props) {
    super(props);
    this.inp = React.createRef();
  }

  componentDidMount() {
    // this.inputHtml.focus()
    this.inp.current.focus();
  }

  render() {
    console.log('[App.js] Person rendering...');
    return (
      <Incharge>
        {/* Click call right here from the parent element */}
        <p onClick={this.props.click}>I'm {this.props.name}, and i'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
  
        {/* A two way binding system where the input contains the name of the value from the start with us setting the value of the input here but also listening for onChange, We will recieve an error in the console although it will still work. And note that if you don't have the onchange listener here the value will be fixed and you can't change it in the webpage. Note this is not advisable 
        
        To fix that you can change value to defaultValue
        */}
        <input 
          type="text" 
          // ref={inp => this.inputHtml = inp}
          ref={this.inp}
          onChange={this.props.changed} 
          defaultValue={this.props.name} />
      </Incharge>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person);