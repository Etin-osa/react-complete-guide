import React, { Component } from 'react';
import styled from 'styled-components';
import Person from './Person/Person';
import './App.css';

// Styled Button
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: #fff;
  font-family: cursive;
  padding: 13px 16px;
  margin: 1rem auto;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

// Using state and re-rendering using Class based React Component
class App extends Component {
  state = {
    persons: [
      { id: 'akdjdp', name: "Max", age: 28 },
      { id: 'eopuqr', name: "Manu", age: 29 },
      { id: 'mmnvvz', name: "Stephanie", age: 26 }
    ],

    OtherValue: 'Think of something later',
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // Best practice is to always mutate a copy of the main Array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const getPerson = this.state.persons[personIndex];
    getPerson.name = event.target.value;

    // Get Persons
    const allPersons = [...this.state.persons];
    allPersons[personIndex] = getPerson;

    this.setState({ persons: allPersons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow }) // This line means give me what doesShow isnt #Meaning if its true give me false or vice versa.
  }

  render() {
    // Adding Conditionals in React
    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(null, index)}
              name={person.name} age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Does this actually work?</h1>
        <p className={classes.join(' ')}>This is really working!!</p>

        {/* binding and changing propeties 2 methods:  one here and the other in the second person component below, And take note that the other kind of data sharing or changing is more efficient than this one right here so. Use the bind one more often and be carefull of the arrow kind */}
        {/* -btn1 <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button> */}

        <StyledButton
          alt={this.state.showPerson}
          onClick={this.togglePersonHandler}>Toggle Persons</StyledButton>

        {/* Putting Person component under conditional statement using ternary operator */}
        {persons}

      </div>
    );
  }
}

export default App;