const mongoose = require('mongoose');

var mongoUrl = 'mongodb+srv://mallikarjun:mallu@cluster0.mobfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/merns-rooms'

mongoose
.connect(mongoUrl , {useunifiedtopology :true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('mongoDb connnection failed')
})

connection.on('connected', ()=>{
    console.log('MongoDB connected sucessfull')
})

module.exports = mongoose