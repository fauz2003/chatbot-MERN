const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');

const port = process.env.PORT || 3000;

//DB connection
connectDB();

//Middleware
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`.bgCyan);
})