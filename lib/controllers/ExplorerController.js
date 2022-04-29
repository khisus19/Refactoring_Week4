const Reader = require("./../utils/Reader")
const ExplorerService = require("./../services/ExplorerService")
const FizzbuzzService = require("./../services/FizzbuzzService")

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.filterByMission(mission, explorers)
    }

}

module.exports = ExplorerController;