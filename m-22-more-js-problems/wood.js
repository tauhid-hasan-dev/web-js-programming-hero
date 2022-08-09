/*
fixed per item wood requirement 
chair 4 cft
table 15 cft 
bed 50 cft 
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuanttity) {
    const perChairWood = 4;
    const perTableWood = 15;
    const perBedWood = 50;

    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalBedWood = perBedWood * bedQuanttity;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}

const totalWoodNeed = woodCalculator(1, 2, 4);
console.log(totalWoodNeed);
