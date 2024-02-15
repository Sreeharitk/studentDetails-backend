const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas successfully connected with studServer");
}).catch((error)=>{
    console.log(error);
    console.log("MongoDB connection failed");
})