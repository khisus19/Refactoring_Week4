const Reader = require("./../../lib/utils/Reader");

describe("Test para Reader", () => {
    test("Prueba del reader", () => {
        const objetoJson = Reader.readJsonFile("./explorers.json");
        expect(objetoJson.length).toBe(15);
    });
    
});