// require user schema
const User=require('../models/user')
// now post the data to database
const createUserRegister=async (req, res)=>{
    try {
        // here it is extrected the data from user
          const {name, email, phone, address, password}=req.body;
           // check if email already existing
        const existingUser= await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"Email already in use"
            })
        }
        // now here it will be compared with the schema and then it will be saved in the dtabase
        const newUser=new User({name, email, phone, address, password})
        await newUser.save()
        // now response back to user
        res.status(201).json({success:true, message:"User registered successfully"})
    } catch (error) {
        console.error('Error saving alert data', error)
        res.status(500).json({success:false, message:'Server error'})   
    }
}
module.exports=createUserRegister
