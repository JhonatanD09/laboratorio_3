const express = require('express')
const redis = require("redis");
const app = express()
const client = redis.createClient(1500, '127.0.0.1');
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
});
  

app.get('/:id',  function (req, res) {
    const number = req.params.id
    client.exists('test', (error, result) => {
		if (result == number) {
            console.log(result + 'cache')
        }else{
            client.set('test', number)
            axios.post("lh" , consulta)
            console.log(number)
        }
	})
})

io.on("connection", (socket) => {
    console.log("new client")
});

setInterval(function(){
    io.emit("publicidad", new Date())
}, 1000)


server.listen(2000, () => {
    console.log(`Example app listening at http://localhost:2000`)
})




