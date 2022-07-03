const puachue_keng = [
    {
        id: 1,
        value: "𞄤",
    },
    {
        id: 2,
        value: "𞄥",
    },
    {
        id: 3,
        value: "𞄦",
    },
    {
        id: 4,
        value: "𞄧",
    },
    {
        id: 5,
        value: "𞄨",
    },
    {
        id: 6,
        value: "𞄩",
    },
    {
        id: 7,
        value: "𞄪",
    },
    {
        id: 8,
        value: "𞄫",
    },
    {
        id: 9,
        value: "𞄬",
    }
  ];
  
module.exports = {
    getPuachueKeng(req, res) {
        res.status(200).send(puachue_keng);
    },
};