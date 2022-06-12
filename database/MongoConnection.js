require("dotenv").config();
const {MongoClient} = require("mongodb")

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);


client.connect().then(()=>{
    console.log("mongo connected:")
}).catch(err=>{
    console.log("mongo conenction failed: " + err) 
})


module.exports = client

