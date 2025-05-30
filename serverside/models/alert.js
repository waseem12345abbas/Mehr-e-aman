const mongoose=require('mongoose')
const alertSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        tyoe:Number,
        required:true
    },
    timestamp:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

export default mongoose.model('Alert', alertSchema)