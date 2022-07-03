const homcim = [
    {
        id: 1,
        value: "𞄷",
        definition: "𞄜𞄪",
        name: "𞄩𞄳"
    },
    {
        id: 2,
        value: "𞄸",
        definition: "𞄎𞄄𞄱𞄩",
        name: "𞄚𞄪𞄴"
    },
    {
        id: 3,
        value: "𞄹",
        definition: "𞄈𞄄𞄢",
        name: "𞄎𞄄𞄰𞄤𞄃𞄄𞄰𞄫"
    },
    {
        id: 4,
        value: "𞄺",
        definition: "𞄁𞄤𞄲",
        name: "𞄎𞄄𞄱𞄜𞄉𞄜𞄴"
    },
    {
        id: 5,
        value: "𞄻",
        definition: "𞄁𞄤𞄲𞄁𞄦𞄴𞄀𞄜𞄲𞄚𞄨𞄰𞄔𞄄𞄤",
        name: "𞄚𞄩𞄴"
    }
  ];
  
module.exports = {
    getHomcim(req, res) {
        res.status(200).send(homcim);
    },
};