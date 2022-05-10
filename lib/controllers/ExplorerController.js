const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMissionAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersInMissionAmount;        
    }

    static getValidationNumber(mission) {
        const validationNumber = FizzbuzzService.applyValidationInNumber(mission);
        return validationNumber;        
    }

    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersListByStack(explorers, stack);
    }
}

module.exports = ExplorerController;