const express=require('express')
const router=express.Router()

// require the create user controller
const createUserRegister=require('../controller/userRouter.js')
const userLogin=require('../controller/userLogin.js')
// get the user data
const getUserData=require('../controller/getUser.js')
const authMiddleware=require('../controller/authMiddleware.js')


// post request
router.post('/save_user', createUserRegister)
router.post('/login', userLogin)

// server.js or routes file
router.get('/profile', authMiddleware, getUserData);


module.exports=router
