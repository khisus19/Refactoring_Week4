const FizzbuzzService = require("./../../lib/services/FizzbuzzService")

describe("Test para FizzbuzzService", () => {
    test("Validacion Fizzbuzz", () => {
        const explorer = {name: "Explorer1", score: 1};
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersValidated.trick).toBe(1);
    })
})