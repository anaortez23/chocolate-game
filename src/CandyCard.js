import React, { useState } from 'react';
import './App.css';

const CandyCard = ({ candy }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="candy-card">
            <img src={candy.image} alt={candy.name} />
            <h3>{candy.name}</h3>
            <button onClick={handleOpenModal}>Show Calories</button>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h4>{candy.name} Calorie Information</h4>
                        <p>{candy.calories} calories</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CandyCard;
