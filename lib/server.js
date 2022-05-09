const ExplorerController = require("./controllers/ExplorerController");
// Usando objeto express
const express = require("express");
// App de Express
const app = express();
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

// Primer endpoint para recibir un parámetro por query params, y regresar la lista de explorers filtrados por el parámetro.
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

// Segundo endpoint para recibir un parámetro por query params, y regresar el número de explorers filtrados por el parámetro.
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json(explorersAmountInMission);
});

// Tercer endpoint para recibir un parámetro por query params, y regresar los nombres de explorers filtrados por el parámetro.
app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersUsernamesInMission);
});

// Cuarto endpoint para recibir un parámetro por query params, y regresar el resultado de fizzbuzz.
app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const validationNumber = ExplorerController.getValidationNumber(score);
    response.json(validationNumber);
});