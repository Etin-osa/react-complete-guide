import React, { Component } from 'react';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';

import Incharge from './hoc/Incharge';
import withClass from './hoc/withClass'

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

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState({ persons: allPersons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow }) // This line means give me what doesShow isnt #Meaning if its true give me false or vice versa.
  }

  render() {
    console.log('[App.js] render');

    // Adding Conditionals in React
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <Incharge>
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPerson}
          toggle={this.togglePersonHandler}
        /> 
        {persons}

      </Incharge>
    );
  }
}

export default withClass(App, classes.App);