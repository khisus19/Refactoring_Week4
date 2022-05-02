const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Prueba de 1er Método: getExplorersByMission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.mission).toBe("node");
    });
});