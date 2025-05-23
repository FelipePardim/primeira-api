import express from "express";

const PORTA = 3000;

const server = express();

server.use(express.json());

server.get("/", (request, response) => {
 response.json({"dados":"Mil pessoas foram ontem"});
})

server.get("/senai", (request, response) => {
 response.json({"cursos":"5 cursos atuais"});
})

server.post("/", (request, response) => {
 console.log(request.body);

 response.json(request.body);
})

let carros = [];

server.get("/carros", (request, response) => {
 response.json(carros);
})

server.post("/carros", (request, response) => {
 console.log(request.body);

 carros.push(request.body)

 response.sendStatus(201);
})

server.listen(PORTA, () => console.log("Meu servidor tá funcionando na porta:", PORTA));