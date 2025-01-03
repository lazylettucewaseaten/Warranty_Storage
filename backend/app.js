// const express = require('express')
const express=require('express')
const cors =require('cors')
const app=express()
require('dotenv').config()
app.use(express.json()); //dont forget ot add this in future
app.use(cors())
const route=require('./routes/routes')
const connectDB=require('./database/connectdb')
app.get('/',(req,res)=>{
    res.send("Something is there")
})
// app.use(require('./middleware/ErrorHandler'));

app.use('/warranty/setup',route)
const port=5000
const start =async () => {
    try {
        console.log('Trying')
        await connectDB(process.env.URI)
        app.listen(port,console.log('Server is on'))    
    } catch (error) {
        console.log(error)
    }
}
start();