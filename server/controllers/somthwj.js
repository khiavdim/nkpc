const somthwj = [
    {
        id: 1,
        value: "𞄰",
        name: "𞄊𞄨𞄱𞄃𞄄𞄰𞄬"
    },
    {
        id: 2,
        value: "𞄱",
        name: "𞄊𞄨𞄱𞄃𞄄𞄱𞄬"
    },
    {
        id: 3,
        value: "𞄲",
        name: "𞄊𞄨𞄱𞄃𞄄𞄲𞄬"
    },
    {
        id: 4,
        value: "𞄳",
        name: "𞄊𞄨𞄱𞄃𞄄𞄳𞄬"
    },
    {
        id: 5,
        value: "𞄴",
        name: "𞄊𞄨𞄱𞄃𞄄𞄴𞄬"
    },
    {
        id: 6,
        value: "𞄵",
        name: "𞄊𞄨𞄱𞄃𞄄𞄵𞄬"
    },
    {
        id: 7,
        value: "𞄶",
        name: "𞄊𞄨𞄱𞄃𞄄𞄶𞄬"
    }
  ];
  
module.exports = {
    getSomthwj(req, res) {
        res.status(200).send(somthwj);
    },
};