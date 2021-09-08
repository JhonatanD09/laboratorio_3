console.log("hola mundo")

const socket = io("http://127.0.0.1:2000");

socket.on("publicidad", (arg) => {
    console.log(arg);
    const list = document.getElementById("list");
    let item = document.createElement("li");
    let text = document.createTextNode(arg);
    item.appendChild(text);
    list.appendChild(item);
});