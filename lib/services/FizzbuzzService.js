const fs = require("fs");

class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if (explorer.score % 3 === 0 && explorer.score % 5 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number){
        const explorer = {};
        if (number % 3 === 0 && number % 5 === 0){
            explorer.score = number;
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (number % 3 === 0) {
            explorer.score = number;
            explorer.trick = "FIZZ";
            return explorer;
        } else if (number % 5 === 0) {
            explorer.score = number;
            explorer.trick = "BUZZ";
            return explorer;
        } else {
            explorer.score = number;
            return explorer;
        }
    }
}

module.exports = FizzbuzzService;