const puachue_phw = [
    {
        id: 1,
        value: "𞄖",
        definition: "𞄤"
    },
    {
        id: 2,
        value: "𞄓",
        definition: "𞄦"
    },
    {
        id: 3,
        value: "𞄌",
        definition: "𞄧"
    },
    {
        id: 4,
        value: "𞄄",
        definition: "𞄪"
    },
    {
        id: 5,
        value: "𞄡",
        definition: "𞄫"
    },
    {
        id: 6,
        value: "𞄟",
        definition: ""
    },
    {
        id: 7,
        value: "𞄣",
        definition: "𞄤𞄦"
    },
    {
        id: 8,
        value: "𞄢",
        definition: "𞄤𞄬"
    },
    {
        id: 9,
        value: "𞄠",
        definition: "𞄤𞄧"
    },
    {
        id: 10,
        value: "𞄜",
        definition: "𞄧𞄤"
    },
    {
        id: 11,
        value: "𞄞",
        definition: "𞄦𞄤"
    }
  ];
  
module.exports = {
    getPuachuePhw(req, res) {
        res.status(200).send(puachue_phw);
    },
};