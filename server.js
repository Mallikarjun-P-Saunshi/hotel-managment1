
const http = require('http');
const server = http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('hello, world! welcome to testbook');
})

const dbconfig = require('./db')
const roomRoute = require('./routes/roomsRoute')

app.use('/api/rooms' , roomRoute)

server.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})