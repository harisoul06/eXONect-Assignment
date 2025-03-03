import React from 'react';
import CityList from './CityList';

const StateList = ({ country, setCountries }) => {
    const addState = () => {
        const name = prompt("Enter State Name:");
        if (name) {
            setCountries(prevCountries =>
                prevCountries.map(c =>
                    c.id === country.id ? { ...c, states: [...c.states, { id: Date.now(), name, cities: [] }] } : c
                )
            );
        }
    };

    const updateState = (stateId) => {
        const name = prompt("Enter new state name:");
        if (name && window.confirm("Are you sure you want to update?")) {
            setCountries(prevCountries =>
                prevCountries.map(c =>
                    c.id === country.id
                        ? { ...c, states: c.states.map(s => s.id === stateId ? { ...s, name } : s) }
                        : c
                )
            );
        }
    };

    const deleteState = (stateId) => {
        if (window.confirm("Are you sure you want to delete this state?")) {
            setCountries(prevCountries =>
                prevCountries.map(c =>
                    c.id === country.id ? { ...c, states: c.states.filter(s => s.id !== stateId) } : c
                )
            );
        }
    };

    return (
        <div>
            <h4>States in {country.name}</h4>
            <button onClick={addState}>Add State</button>
            {country.states.map(state => (
                <div key={state.id} className="sub-card">
                    <h1>{state.name}</h1>
                    <button onClick={() => updateState(state.id)}>Edit</button>
                    <button onClick={() => deleteState(state.id)}>Delete</button>
                    <CityList country={country} state={state} setCountries={setCountries} />
                </div>
            ))}
        </div>
    );
};

export default StateList;
