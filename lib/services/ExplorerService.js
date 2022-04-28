const fs = require("fs");

class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == "node");
        return explorersByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode.length
    }
    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports = ExplorerService