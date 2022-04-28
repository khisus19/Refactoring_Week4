const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json")

const explorersByMission = ExplorerService.filterByMission(explorers, "node")

const explorersNumberByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node")

const explorersUsernameByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node")

console.log(explorersUsernameByMission)