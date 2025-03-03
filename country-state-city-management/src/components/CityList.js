import React from 'react';

const CityList = ({ country, state, setCountries }) => {
    const addCity = () => {
        const name = prompt("Enter City Name:");
        if (name) {
            setCountries(prevCountries =>
                prevCountries.map(c =>
                    c.id === country.id
                        ? {
                            ...c,
                            states: c.states.map(s =>
                                s.id === state.id ? { ...s, cities: [...s.cities, { id: Date.now(), name }] } : s
                            ),
                        }
                        : c
                )
            );
        }
    };

    const deleteCity = (cityId) => {
        if (window.confirm("Are you sure you want to delete this city?")) {
            setCountries(prevCountries =>
                prevCountries.map(c =>
                    c.id === country.id
                        ? {
                            ...c,
                            states: c.states.map(s =>
                                s.id === state.id ? { ...s, cities: s.cities.filter(city => city.id !== cityId) } : s
                            ),
                        }
                        : c
                )
            );
        }
    };

    return (
        <div>
            <h5>Cities in {state.name}</h5>
            <button onClick={addCity}>Add City</button>
            {state.cities.map(city => (
                <div key={city.id} className="sub-card">
                    <span>{city.name}</span>
                    <button onClick={() => deleteCity(city.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CityList;
