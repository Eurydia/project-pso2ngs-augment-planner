import { EquipmentData } from "./types";

const DATA: EquipmentData[] = [
    {
        name: "primm armor",
        effs: [{ eff: "HP", amt: 10 }],
        group: 1,
    },
    {
        name: "tzvia armor/silver primm armor",
        effs: [{ eff: "PP", amt: 2 }],
        group: 2,
    },
    {
        name: "theseus armor/gold primm armor",
        effs: [
            { eff: "HP", amt: 10 },
            { eff: "PP", amt: 1 },
        ],
        group: 3,
    },
    {
        name: "qual de armor",
        effs: [{ eff: "PP", amt: 6 }],
        group: 4,
    },
    {
        name: "qual de armor arga",
        effs: [
            { eff: "PP", amt: 4 },
            { eff: "MEL_POT", amt: 1.01 },
            { eff: "RNG_POT", amt: 1.01 },
        ],
        group: 4,
    },
    {
        name: "qual de armor belta",
        effs: [
            { eff: "PP", amt: 4 },
            { eff: "MEL_POT", amt: 1.01 },
            { eff: "TEC_POT", amt: 1.01 },
        ],
        group: 4,
    },
    {
        name: "qual de armor sheza",
        effs: [
            { eff: "PP", amt: 4 },
            { eff: "RNG_POT", amt: 1.01 },
            { eff: "TEC_POT", amt: 1.01 },
        ],
        group: 4,
    },
    {
        name: "cattleya armor",
        effs: [
            { eff: "HP", amt: 20 },
            { eff: "PP", amt: 2 },
        ],
        group: 4,
    },
    {
        name: "vialto armor",
        effs: [
            { eff: "HP", amt: 30 },
            { eff: "DAMAGE_RES", amt: 1.01 },
        ],
        group: 4,
    },
    {
        name: "vialto armor arga",
        effs: [
            { eff: "HP", amt: 25 },
            { eff: "MEL_POT", amt: 1.01 },
            { eff: "RNG_POT", amt: 1.01 },
            { eff: "DAMAGE_RES", amt: 1.01 },
        ],
        group: 4,
    },
    {
        name: "vialto armor belta",
        effs: [
            { eff: "HP", amt: 25 },
            { eff: "MEL_POT", amt: 1.01 },
            { eff: "TEC_POT", amt: 1.01 },
            { eff: "DAMAGE_RES", amt: 1.01 },
        ],
        group: 4,
    },
    {
        name: "vialto armor sheza",
        effs: [
            { eff: "HP", amt: 25 },
            { eff: "RNG_POT", amt: 1.01 },
            { eff: "TEC_POT", amt: 1.01 },
            { eff: "DAMAGE_RES", amt: 1.01 },
        ],
        group: 4,
    },
    {
        name: "geant armor",
        effs: [
            { eff: "HP", amt: -20 },
            { eff: "PP", amt: 10 },
            { eff: "MEL_POT", amt: 1.02 },
            { eff: "RNG_POT", amt: 1.02 },
            { eff: "TEC_POT", amt: 1.02 },
            { eff: "BURN_RES", amt: 0.5 },
            { eff: "FREEZE_RES", amt: 0.5 },
            { eff: "SHOCK_RES", amt: 0.5 },
            { eff: "BLIND_RES", amt: 0.5 },
            { eff: "PANIC_RES", amt: 0.5 },
            { eff: "POISON_RES", amt: 0.5 },
            { eff: "PHYDOWN_RES", amt: 0.5 },
        ],
        group: 4,
    },
    {
        name: "vidal armor",
        effs: [{ eff: "HP", amt: 70 }],
        group: 5,
    },
    {
        name: "vijf armor",
        effs: [
            { eff: "HP", amt: 30 },
            { eff: "PP", amt: 4 },
        ],
        group: 5,
    },
    {
        name: "vijf armor arga",
        effs: [
            { eff: "HP", amt: 20 },
            { eff: "PP", amt: 7 },
            { eff: "MEL_POT", amt: 1.01 },
            { eff: "RNG_POT", amt: 1.01 },
        ],
        group: 5,
    },
    {
        name: "vijf armor belta",
        effs: [
            { eff: "HP", amt: 20 },
            { eff: "PP", amt: 7 },
            { eff: "MEL_POT", amt: 1.01 },
            { eff: "TEC_POT", amt: 1.01 },
        ],
        group: 5,
    },
    {
        name: "vijf armor sheza",
        effs: [
            { eff: "HP", amt: 20 },
            { eff: "PP", amt: 7 },
            { eff: "RNG_POT", amt: 1.01 },
            { eff: "TEC_POT", amt: 1.01 },
        ],
        group: 5,
    },
    {
        name: "vios armor",
        effs: [
            { eff: "PP", amt: 8 },
            { eff: "MEL_POT", amt: 1.01 },
            { eff: "RNG_POT", amt: 1.01 },
            { eff: "TEC_POT", amt: 1.01 },
        ],
        group: 5,
    },
    {
        name: "vindalun armor",
        effs: [{ eff: "HP", amt: 70 }],
        group: 5,
    },
    {
        name: "greas armor",
        effs: [
            { eff: "HP", amt: -40 },
            { eff: "PP", amt: 13 },
            { eff: "MEL_POT", amt: 1.02 },
            { eff: "RNG_POT", amt: 1.02 },
            { eff: "TEC_POT", amt: 1.02 },
            { eff: "BURN_RES", amt: 0.5 },
            { eff: "FREEZE_RES", amt: 0.5 },
            { eff: "SHOCK_RES", amt: 0.5 },
            { eff: "BLIND_RES", amt: 0.5 },
            { eff: "PANIC_RES", amt: 0.5 },
            { eff: "POISON_RES", amt: 0.5 },
            { eff: "PHYDOWN_RES", amt: 0.5 },
        ],
        group: 5,
    },
    {
        name: "schwarzest armor",
        effs: [
            { eff: "HP", amt: 25 },
            { eff: "PP", amt: 3 },
            { eff: "MEL_POT", amt: 1.02 },
            { eff: "DAMAGE_RES", amt: 1.01 },
        ],
        group: 5,
    },
    {
        name: "schwarzgarde armor",
        effs: [
            { eff: "HP", amt: 25 },
            { eff: "PP", amt: 3 },
            { eff: "RNG_POT", amt: 1.02 },
            { eff: "DAMAGE_RES", amt: 1.01 },
        ],
        group: 5,
    },
    {
        name: "schwarzrosso armor",
        effs: [
            { eff: "HP", amt: 25 },
            { eff: "PP", amt: 3 },
            { eff: "TEC_POT", amt: 1.02 },
            { eff: "DAMAGE_RES", amt: 1.01 },
        ],
        group: 5,
    },
];

export default DATA;
