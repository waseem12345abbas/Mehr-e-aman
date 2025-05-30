const express=require('express')
// get the model from where we will fetch the data
const User=require('../models/user')


// with the help of this router we will make a get request
const getUserData = async function(req, res) {
    try {
    User.findById(req.user.userId)
    .then(user => res.json({ success: true, data: user }))
    .catch(err => res.status(500).json({ success: false, message: err.message }));
    } catch (error) {
        console.error("Error while finding the user:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

module.exports=getUserData
