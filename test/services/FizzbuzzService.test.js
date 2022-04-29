const FizzbuzzService = require("./../../lib/services/FizzbuzzService")

describe("Test para FizzbuzzService", () => {
    test("1. Validacion Fizzbuzz", () => {
        const explorer = {name: "Explorer1", score: 15};
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersValidated.trick).toBe("FIZZBUZZ");
    })

    test("2. Validacion Fizz", () => {
        const explorer = {name: "Explorer1", score: 3};
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersValidated.trick).toBe("FIZZ");
    })

    test("3. Validacion Buzz", () => {
        const explorer = {name: "Explorer1", score: 10};
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersValidated.trick).toBe("BUZZ");
    })

    test("4. Validacion other score", () => {
        const explorer = {name: "Explorer1", score: 2};
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersValidated.trick).toBe(2);
    })
})