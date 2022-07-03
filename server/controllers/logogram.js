const logogram = [
    {
        id: 1,
        value: "𞄼",
        definition: "repetition",
        name: "𞄆𞄬𞄆𞄬"
    },
    {
        id: 2,
        value: "𞄽",
        definition: "lengthen vowel",
        name: "𞄎𞄄𞄧𞄊𞄣𞄱"
    },
    {
        id: 3,
        value: "𞅏",
        definition: "ownership",
        name: "𞄈𞄬𞄲𞄈𞄤"
    },
    {
        id: 4,
        value: "𞅎",
        definition: "money and/or currency",
        name: "𞄐𞄤𞄲"
    }
  ];
  
module.exports = {
    getLogogram(req, res) {
        res.status(200).send(logogram);
    },
};