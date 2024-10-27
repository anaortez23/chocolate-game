import React from 'react';
import CandyCard from './CandyCard';

const CandyContainer = ({ candies }) => {
    return (
        <div className="candy-container">
            {candies.map((candy, index) => (
                <CandyCard key={index} candy={candy} />
            ))}
        </div>
    );
};

export default CandyContainer;
