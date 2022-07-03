const somthwj = [
    {
        id: 1,
        value: "𞄰",
        definition: "b",
        name: "somthwb"
    },
    {
        id: 2,
        value: "𞄱",
        definition: "m",
        name: "somthwm"
    },
    {
        id: 3,
        value: "𞄲",
        definition: "j",
        name: "somthwj"
    },
    {
        id: 4,
        value: "𞄳",
        definition: "v",
        name: "somthwv"
    },
    {
        id: 5,
        value: "𞄴",
        definition: "s",
        name: "somthws"
    },
    {
        id: 6,
        value: "𞄵",
        definition: "g",
        name: "somthwg"
    },
    {
        id: 7,
        value: "𞄶",
        definition: "d",
        name: "somthwd"
    }
  ];
  
module.exports = {
    getSomthwj(req, res) {
        res.status(200).send(somthwj);
    },
};