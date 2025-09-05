require('dotenv').config();
const express=require('express') 
// require middlewares
const bodyParser=require('body-parser')
const cors=require('cors')
// require the connection
const connectionDb=require('./config/db')
// require the register account schema
const apiRoutes=require('./router/apiRoutes')

// create the app
const app=express()
// use the middleware that will handle the requests
app.use(bodyParser.json())
// cors middleware that will handle differet cors origin
app.use(cors({
  origin: 'https://mehr-e-aman.vercel.app', // Your frontend URL
  credentials: true,
  exposedHeaders: ['Authorization'] 
}))
// mount the request
app.use('/api', apiRoutes)
const PORT = process.env.PORT || 5000;
// now create the server and send make api calls
connectionDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on the port -http://localhost:${PORT}`)
    })
}).catch(err=>{
    console.error('Failed to initialize the server', err)
})
