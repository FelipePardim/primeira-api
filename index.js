import express from "express";

const PORTA = 3000;

const server = express();

server.use(express.json());

let carros = [
 {
  "id": 1,
  "nome" : "Fusca",
  "marca" : "VolksWagen",
  "ano" : "1970",
  "tipo": "hatch"
 },
 {
  "id": 2,
  "nome" : "Uno",
  "marca" : "Fiat",
  "ano" : "2005",
  "tipo": "hatch"
 },{
  "id": 3,
  "nome" : "Uno",
  "marca" : "Fiat",
  "ano" : "2010",
  "tipo": "hatch"
 },
];

let ultimoId = carros.length;

server.get("/carros", (request, response) => {
 response.json(carros);
})

server.post("/carros", (request, response) => {
 console.log("Criando o novo carro: ", request.body);

 ultimoId++;
 request.body.id = ultimoId;

 carros.push(request.body)

 response.sendStatus(201);
})

server.get("/carros/:id", (request, response) => {
 const indexCarro = carros.findIndex(carro => carro.id === Number(request.params.id));

 if (indexCarro == -1) {
  response.sendStatus(404);
 } else {
  response.json(carros[indexCarro]);
 }
})


server.patch("/carros/:id", (request, response) => {
 const indexCarro = carros.findIndex(carro => carro.id === Number(request.params.id));

 if (indexCarro == -1) {
  response.sendStatus(404);
 } else {
  
  request.body.id = carros[indexCarro].id;

  carros[indexCarro] = request.body;
  response.json(carros[indexCarro]);
 }
})

server.delete("/carros/:id", (request, response) => {
 const indexCarro = carros.findIndex(carro => carro.id === Number(request.params.id));

 if (indexCarro == -1) {
  response.sendStatus(404);
 } else {
  carros.splice(indexCarro, 1);

  response.sendStatus(200);
 }
})

server.listen(PORTA, () => console.log("Meu servidor tá funcionando na porta:", PORTA));