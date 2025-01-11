export type ConfigType = {
    modalTitle: string;
    modalDescription: string;
    points: {
        title: string;
        add: number;
    }[];
}

export type ModalConfigType = {
    [key: string]: ConfigType
} 

export const modalsConfig:ModalConfigType = {
    combatDamage: {
        modalTitle: "Opponent Combat Damage",
        modalDescription: "Includes combat and non-combat damage dealt to an opponent from a spells, or permenants you control.",
        points: [
            {
                title: "Greater than 1 damage",
                add: 2
            },
            {
                title: "Greater than 3 damage",
                add: 6
            },
            {
                title: "Greater than 5 damage",
                add: 10
            },
            {
                title: "Greater than 10 damage",
                add: 20
            },
            {
                title: "Greater than 20 damage",
                add: 30
            },
            {
                title: "Greater than 40 damage",
                add: 40
            },
            {
                title: "Greater than 100 damage",
                add: 80
            },
        ]
    },
    nonCombatDamage: {
        modalTitle: "Opponent Non-combat Damage",
        modalDescription: "Includes combat and non-combat damage dealt to an opponent from a spells, or permenants you control.",
        points: [
            {
                title: "Greater than 1 damage",
                add: 2
            },
            {
                title: "Greater than 3 damage",
                add: 6
            },
            {
                title: "Greater than 5 damage",
                add: 10
            },
            {
                title: "Greater than 10 damage",
                add: 20
            },
            {
                title: "Greater than 20 damage",
                add: 30
            },
            {
                title: "Greater than 40 damage",
                add: 40
            },
            {
                title: "Greater than 100 damage",
                add: 80
            },
        ]
    },
    commanderDamage: {
        modalTitle: "Opponent Commander Damage",
        modalDescription: "Includes commander combat damage dealt to an opponent from a commander you control.",
        points: [
            {
                title: "Greater than 1 damage",
                add: 4
            },
            {
                title: "Greater than 3 damage",
                add: 12
            },
            {
                title: "Greater than 5 damage",
                add: 20
            },
            {
                title: "Greater than 10 damage",
                add: 40
            },
            {
                title: "Greater than 20 damage",
                add: 60
            },
            {
                title: "Greater than 40 damage",
                add: 80
            },
            {
                title: "Greater than 100 damage",
                add: 160
            },
        ]
    },
    poisonDamage: {
        modalTitle: "Opponent Poison Damage",
        modalDescription: "Includes poison damage dealt to an opponent from a spell or permenant you control.",
        points: [
            {
                title: "Greater than 1 damage",
                add: 6
            },
            {
                title: "Greater than 3 damage",
                add: 16
            },
            {
                title: "Greater than 5 damage",
                add: 25
            },
            {
                title: "Greater than 10 damage",
                add: 50
            },
            {
                title: "Greater than 20 damage",
                add: 75
            },
            {
                title: "Greater than 40 damage",
                add: 100
            },
            {
                title: "Greater than 100 damage",
                add: 200
            },
        ]
    },
    mill: {
        modalTitle: "Mill Opponent's Deck",
        modalDescription: "Whenever a spell or ability you control casuses an opponent to mill cards.",
        points: [
            {
                title: "Milled more than 1 card",
                add: 1
            },
            {
                title: "Milled more than 3 cards",
                add: 4
            },
            {
                title: "Milled more than 5 cards",
                add: 8
            },
            {
                title: "Milled more than 10 cards",
                add: 14
            },
            {
                title: "Milled more than 20 cards",
                add: 30
            },
            {
                title: "Milled more than 50 cards",
                add: 90
            },
            {
                title: "Milled more than 100 cards",
                add: 200
            },
        ]
    },
    winConditionCards: {
        modalTitle: "Exile Permenant",
        modalDescription: "Whenever a spell or ability you control casuses an opponent to mill cards.",
        points: [
            {
                title: "Milled more than 1 card",
                add: 1
            },
            {
                title: "Milled more than 3 cards",
                add: 4
            },
            {
                title: "Milled more than 5 cards",
                add: 8
            },
            {
                title: "Milled more than 10 cards",
                add: 14
            },
            {
                title: "Milled more than 20 cards",
                add: 30
            },
            {
                title: "Milled more than 50 cards",
                add: 90
            },
            {
                title: "Milled more than 100 cards",
                add: 200
            },
        ]
    },
    gainLife: {
        modalTitle: "Life Gain",
        modalDescription: "Whenever a spell or ability you control casuses an opponent to mill cards.",
        points: [
            {
                title: "Milled more than 1 card",
                add: 1
            },
            {
                title: "Milled more than 3 cards",
                add: 4
            },
            {
                title: "Milled more than 5 cards",
                add: 8
            },
            {
                title: "Milled more than 10 cards",
                add: 14
            },
            {
                title: "Milled more than 20 cards",
                add: 30
            },
            {
                title: "Milled more than 50 cards",
                add: 90
            },
            {
                title: "Milled more than 100 cards",
                add: 200
            },
        ]
    },
    infiniteCombo: {
        modalTitle: "Infinite Combo",
        modalDescription: "Whenever a spell or ability you control casuses an opponent to mill cards.",
        points: [
            {
                title: "Milled more than 1 card",
                add: 1
            },
            {
                title: "Milled more than 3 cards",
                add: 4
            },
            {
                title: "Milled more than 5 cards",
                add: 8
            },
            {
                title: "Milled more than 10 cards",
                add: 14
            },
            {
                title: "Milled more than 20 cards",
                add: 30
            },
            {
                title: "Milled more than 50 cards",
                add: 90
            },
            {
                title: "Milled more than 100 cards",
                add: 200
            },
        ]
    },
}