import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    return (
        <div>
            <h2>country detail for: {countryName} </h2>
        </div>
    );
};

export default CountryDetail;