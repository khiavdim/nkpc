const number = [
    {
        id: 0,
        value: "𞅀",
        definition: "𞅀",
        name: "𞅀"
    },
    {
        id: 1,
        value: "𞅁",
        definition: "𞅁",
        name: "𞅁"
    },
    {
        id: 2,
        value: "𞅂",
        definition: "𞅂",
        name: "𞅂"
    },
    {
        id: 3,
        value: "𞅃",
        definition: "𞅃",
        name: "𞅃"
    },
    {
        id: 4,
        value: "𞅄",
        definition: "𞅄",
        name: "𞅄"
    },
    {
        id: 5,
        value: "𞅅",
        definition: "𞅅",
        name: "𞅅"
    },
    {
        id: 6,
        value: "𞅆",
        definition: "𞅆",
        name: "𞅆"
    },
    {
        id: 7,
        value: "𞅇",
        definition: "𞅇",
        name: "𞅇"
    },
    {
        id: 8,
        value: "𞅈",
        definition: "𞅈",
        name: "𞅈"
    },
    {
        id: 9,
        value: "𞅉",
        definition: "𞅉",
        name: "𞅉"
    }
  ];
  
module.exports = {
    getNumber(req, res) {
        res.status(200).send(number);
    },
};