// src/components/Desk.js
import React from 'react';
import './Desk.css';

const Desk = ({ desk, onBook }) => {
    return (
        <div className={`desk ${desk.booked ? 'booked' : ''}`} onClick={() => !desk.booked && onBook(desk)}>
            {desk.type === 'individual' ? `Desk ${desk.id}` : `Team Desk ${desk.id}`}
        </div>
    );
};

export default Desk;
