import React from 'react';
import StateList from './StateList';

const CountryList = ({ countries, updateCountry, deleteCountry, setCountries }) => {
    return (
        <div>
            {countries.map((country) => (
                <div key={country.id} className="card">
                    <h1>{country.name}</h1>
                    <button onClick={() => updateCountry(country.id)}>Edit</button>
                    <button onClick={() => deleteCountry(country.id)}>Delete</button>
                    <StateList country={country} setCountries={setCountries} />
                </div>
            ))}
        </div>
    );
};

export default CountryList;
