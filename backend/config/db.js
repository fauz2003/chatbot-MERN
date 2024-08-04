const mongoose = require('mongoose');
const color = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
    }
};v

module.exports = connectDB;