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

    test("Método 4: Obtener una lista de explorer según un stack getExplorersListByStack", () => {
        const explorers = [{"stacks": ["javascript","reasonML","elm"]},{"stacks": ["javascript","groovy","elm"]},{"stacks": ["elixir","groovy","reasonML"]}];
        const explorerByStack = ExplorerService.getExplorersListByStack(explorers, "elixir");
        expect(explorerByStack[0].stacks).toContain("elixir");
    });
});