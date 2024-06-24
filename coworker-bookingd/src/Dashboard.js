// src/components/Dashboard.js
import React from 'react';

const Dashboard = ({ bookings }) => {
    const revenue = bookings.reduce((acc, booking) => acc + booking.total, 0);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Total Revenue: ${revenue.toFixed(2)}</p>
        </div>
    );
};

export default Dashboard;
