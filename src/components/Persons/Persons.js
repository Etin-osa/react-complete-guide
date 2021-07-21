import React, { useEffect } from 'react';
import Person from './Person/Person';

const Persons = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('[Persons.js] using useEffect()');
    }, 1000)

    return (() => {
      clearTimeout(timer);
      console.log('[Persons.js], successful cleanup')
    })
  })

  console.log('[App.js] Persons rendering...')
  return props.persons.map((person, index) => {
    return <Person
      click={props.click.bind(null, index)}
      name={person.name} age={person.age}
      key={person.id}
      changed={(event) => props.changed(event, person.id)} />
  })
}


export default Persons;