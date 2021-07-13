import React, { Component } from 'react';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';
import classes from './App.css';



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
    let btnClass = [classes.button]

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );

      btnClass.push(classes.Red)
    }

    const assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <Cockpit
          btnClass={this.btnClass.join(' ')}
        />
        {/* Putting Person component under conditional statement using ternary operator */}
        {persons}

      </div>
    );
  }
}

export default App;