const mongoose=require('mongoose')
async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/w_security');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error while connecting to the database:', error);
        // It's good practice to throw the error so it can be handled by the caller
        throw error;
    }
}

// finally if everything is successful then export the module
module.exports=connectDB;