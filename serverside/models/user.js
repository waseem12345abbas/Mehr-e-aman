const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

// create user schema
const newUser=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type: String,
        required: true 
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

// encrypt the password
newUser.pre('save', async function (next) {
    if(!this.isModified){
        return next()
    }
    const salt= await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password, salt)
    return next()
})

// method for login to chech the password
newUser.methods.matchPassword= function(enteredPw){
    return bcrypt.compare(enteredPw, this.password)
}
module.exports=mongoose.model('user', newUser)