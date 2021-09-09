const express = require('express')
const redis = require("redis");
const app = express()
const client = redis.createClient(1500, '127.0.0.1');
const http = require('http');
const server = http.createServer(app);
const axios = require('axios');
const { response } = require('express');
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
});
var resultQuery 

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


io.on("connection", (socket) => {
    console.log("new client")
});

setInterval(function(){
    io.emit("publicidad", new Date())
}, 1000)


app.post("/query", function(req,res){

})

function test(){
  queryConsult = "SELECT * FROM users WHERE id = 1"
  client.exists('queryCache', (error, result) => {
		if (result == queryConsult) {
            console.log(result + 'cache')
        }else{
            executeQuery(queryConsult)
            client.set('queryCache', queryConsult)
            //client.set('result', resultQuery)
            console.log(resultQuery)
        }
	})  
}

app.post('/responseQuery', function(req,res){
  result = req
  console.log(req)
})



async function executeQuery(query){
    await axios.post('http://192.168.1.140:4500/query',{'consulta' : query})
}

test()

server.listen(2000, () => {
    console.log(`Example app listening at http://localhost:2000`)
})




