const mongoose = require('mongoose');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

//Register New User
const registerUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;

    const userExists = User.find({email});

    console.log(userExists);
    if(userExists){
        return res.status(400).json({message: 'User already exists'});
    }
   
    
    const newUser = User.create({
        email,
        password
    });
});

//Login User
const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;

    const user = User.find({email});

    if(user){
        if(user.password === password){
            res.status(200).json({message:'Login Successful'});
        }
    }
    else{
        res.status(401).json({message:'User Not Found'});
    }

})

module.exports = {registerUser, loginUser};
