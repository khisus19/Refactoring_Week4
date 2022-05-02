const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");

describe("Test para ExplorerService", () => {
    test("Método 1: filtrar los explorers por misión", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode[0].mission).toBe("node");
    });
    
    test("Método 2: Calcular todos los explorers en una misión", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
    });

    test("Método 3: Obtener los nombres de los explorers en una misión", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode[0]).toBe("ajolonauta1");
    });

});