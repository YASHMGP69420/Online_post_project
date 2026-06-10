const mongoose = require("mongoose")
const dns = require("dns")

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
])

async function connectDB(){
    await mongoose.connect("mongodb+srv://yash_priv:yash@backend.z5pcanj.mongodb.net/project_one")
    console.log("connected to db");
    
}

module.exports = connectDB;