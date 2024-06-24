
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Desk from './Desk';
import BookingForm from './BookingForm';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [desks, setDesks] = useState([]);
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('https://gida-backend-2.onrender.com/api/desks')
      .then(response => setDesks(response.data))
      .catch(error => console.error('Error fetching desks:', error));

    axios.get('https://gida-backend-2.onrender.com/api/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  const handleBook = (desk) => {
    setSelectedDesk(desk);
  };

  const handleBookDesk = (id, hours, membership, total) => {
    axios.post('https://gida-backend-2.onrender.com/api/bookings', { deskId: id, hours, membership, total })
      .then(response => {
        setDesks(desks.map(desk => desk.id === id ? { ...desk, booked: true } : desk));
        setBookings([...bookings, response.data]);
        setSelectedDesk(null);
      })
      .catch(error => console.error('Error booking desk:', error));
  };

  return (
    <div className="App">
      <h1>Co-Working Space Booking System</h1>
      <div className="desks">
        {desks.map(desk => (
          <Desk key={desk.id} desk={desk} onBook={handleBook} />
        ))}
      </div>
      {selectedDesk && <BookingForm desk={selectedDesk} onBookDesk={handleBookDesk} />}
      <Dashboard bookings={bookings} />
    </div>
  );
}

export default App;
