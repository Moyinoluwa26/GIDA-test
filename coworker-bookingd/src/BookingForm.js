// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ desk, onBookDesk }) => {
    const [hours, setHours] = useState(1);
    const [membership, setMembership] = useState('Basic');

    const handleSubmit = (e) => {
        e.preventDefault();
        const rate = desk.type === 'individual'
            ? membership === 'Basic' ? 10 : membership === 'Premium' ? 15 : 20
            : 25;
        const discount = hours > 3 ? 0.1 : 0;
        const total = rate * hours * (1 - discount);
        onBookDesk(desk.id, hours, membership, total);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book {desk.type === 'individual' ? `Desk ${desk.id}` : `Team Desk ${desk.id}`}</h2>
            {desk.type === 'individual' && (
                <div>
                    <label>Membership:</label>
                    <select value={membership} onChange={(e) => setMembership(e.target.value)}>
                        <option value="Basic">Basic</option>
                        <option value="Premium">Premium</option>
                        <option value="Executive">Executive</option>
                    </select>
                </div>
            )}
            <div>
                <label>Hours:</label>
                <input type="number" value={hours} min="1" onChange={(e) => setHours(e.target.value)} />
            </div>
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
