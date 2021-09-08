const express = require('express')
const redis = require("redis");
//const pgp = require("pg-promise")({});
const { promisify } = require("util");

const app = express()
//const db = pgp("postgres://postgres:a@localhost:5432/studentsDB");
const client = redis.createClient(1500, '127.0.0.1');

app.get('/:id',  function (req, res) {
    //const query = 'SELECT name FROM "Student" WHERE code = ' + req.params.id;
    const number = req.params.id
    //const cacheQuery = await getAsync('query');
    //console.log(cacheQuery)
    client.exists('test', (error, result) => {
		if (result == number) {
            console.log(result + 'cache')
        }else{
            client.set('test', number)
            axios.post("lh" , consulta)
            console.log(number)
        }
	})
    /*
    if(query == cacheQuery.toString){
        console.log(cache)
        const data = await getAsync('query');
        res.send(data.toString());
    }else{
        console.log('f')
       // db.any(query)
        //.then(function (data) {
            client.set("query", query);
           // client.set("data", query);
            res.send(query);
        //})
       // .catch(function (error) {
          //  res.send(error);
        //});
    }*/
})

app.listen(2000, () => {
    console.log(`Example app listening at http://localhost:2000`)
})

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("new client")
});

setInterval(function(){
    io.emit("publicidad", new Date())
}, 1000)

httpServer.listen(3000);