const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Prueba de 1er Método: getExplorersByMission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode[0].mission).toBe("node");
    });

    test("Prueba de 2do Método: getExplorersUsernamesByMission", () => {
        const explorersInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersInNode[0]).toBe("ajolonauta1");

    });

    test("Prueba de 3ro Método: getExplorersAmonutByMission", () => {
        const explorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInNode).toBe(10);

    });
});