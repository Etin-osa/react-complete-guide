import React, { Component } from 'react';
import Person from './components/Persons/Person/Person';
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(null, index)}
              name={person.name} age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
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
        <h1>Does this actually work?</h1>
        <p className={assignClasses.join(' ')}>This is really working!!</p>

        {/* binding and changing propeties 2 methods:  one here and the other in the second person component below, And take note that the other kind of data sharing or changing is more efficient than this one right here so. Use the bind one more often and be carefull of the arrow kind */}
        {/* -btn1 <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button> */}

        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonHandler}>Toggle Persons</button>

        {/* Putting Person component under conditional statement using ternary operator */}
        {persons}

      </div>
    );
  }
}

export default App;