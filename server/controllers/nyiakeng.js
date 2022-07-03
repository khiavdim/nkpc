const nyiakeng = [
    {
        id: 1,
        value: "𞄀",
        word: "𞄀𞄄𞄰𞄩"
    },
    {
        id: 2,
        value: "𞄁",
        word: "𞄁𞄦𞄱"
    },
    {
        id: 3,
        value: "𞄂",
        word: "𞄂𞄤𞄳𞄬"
    },
    {
        id: 4,
        value: "𞄃",
        word: "𞄃𞄤𞄳"
    },
    {
        id: 5,
        value: "𞄄",
        word: "𞄄𞄤𞄱𞄬"
    },
    {
        id: 6,
        value: "𞄅",
        word: "𞄅𞄬𞄵"
    },
    {
        id: 7,
        value: "𞄆",
        word: "𞄆𞄬𞄰"
    },
    {
        id: 8,
        value: "𞄇",
        word: "𞄇𞄠𞄴"
    },
    {
        id: 9,
        value: "𞄈",
        word: "𞄈𞄨𞄲"
    },
    {
        id: 10,
        value: "𞄉",
        word: "𞄉𞄧𞄰"
    },
    {
        id: 11,
        value: "𞄊",
        word: "𞄊𞄤𞄰"
    },
    {
        id: 12,
        value: "𞄋",
        word: "𞄋𞄩"
    },
    {
        id: 13,
        value: "𞄌",
        word: "𞄌𞄧"
    },
    {
        id: 14,
        value: "𞄍",
        word: "𞄍𞄩𞄳"
    },
    {
        id: 15,
        value: "𞄎",
        word: "𞄎𞄨𞄲"
    },
    {
        id: 16,
        value: "𞄏",
        word: "𞄏𞄦𞄱"
    },
    {
        id: 17,
        value: "𞄐",
        word: "𞄐𞄨𞄰"
    },
    {
        id: 18,
        value: "𞄑",
        word: "𞄑𞄧𞄵"
    },
    {
        id: 19,
        value: "𞄒",
        word: "𞄒𞄥𞄲"
    },
    {
        id: 20,
        value: "𞄓",
        word: "𞄓𞄬𞄳"
    },
    {
        id: 21,
        value: "𞄔",
        word: "𞄔𞄢𞄲"
    },
    {
        id: 22,
        value: "𞄕",
        word: "𞄕𞄬𞄱"
    },
    {
        id: 23,
        value: "𞄖",
        word: "𞄖𞄢"
    },
    {
        id: 24,
        value: "𞄗",
        word: "𞄗𞄪𞄰"
    },
    {
        id: 25,
        value: "𞄘",
        word: "𞄘𞄨𞄵"
    },
    {
        id: 26,
        value: "𞄙",
        word: "𞄙𞄪"
    },
    {
        id: 27,
        value: "𞄚",
        word: "𞄚𞄪𞄰"
    },
    {
        id: 28,
        value: "𞄛",
        word: "𞄛𞄧𞄱"
    },
    {
        id: 29,
        value: "𞄜",
        word: "𞄜𞄤𞄲"
    },
    {
        id: 30,
        value: "𞄝",
        word: "𞄔𞄬𞄴"
    },
    {
        id: 31,
        value: "𞄞",
        word: "𞄞𞄤𞄱𞄬"
    },
    {
        id: 32,
        value: "𞄟",
        word: "𞄟𞄴"
    },
    {
        id: 33,
        value: "𞄠",
        word: "𞄠𞄨𞄱"
    },
    {
        id: 34,
        value: "𞄡",
        word: "𞄡𞄧𞄲"
    },
    {
        id: 35,
        value: "𞄢",
        word: "𞄢𞄤𞄴"
    },
    {
        id: 36,
        value: "𞄣",
        word: "𞄣𞄤𞄴"
    }
  ];
  
module.exports = {
    getNyiakeng(req, res) {
        res.status(200).send(nyiakeng);
    },
};