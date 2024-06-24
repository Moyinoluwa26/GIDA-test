// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const deskRoutes = require('./Routes/DeskRoutes');
const bookingRoutes = require('./Routes/BookingsRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*mongoose.connect('mongodb://localhost:27017/coworking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))*/

app.use('/api/desks', deskRoutes);
app.use('/api/bookings', bookingRoutes);



mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
        /*User.insertMany(users);
        Post.insertMany(posts);*/
    })
}).catch((err) => {
    return console.log(`${err} did not connect`)
})
