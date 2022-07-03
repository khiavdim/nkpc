const express = require("express");
const app = express();
const hc = require("./controllers/homcim");
const lc = require("./controllers/logogram");
const nc = require("./controllers/number");
const nkc = require("./controllers/nyiakeng");
const pckc = require("./controllers/puachue_keng");
const pcpc = require("./controllers/puachue_phw");
const sc = require("./controllers/somthwj");
const SERVER_PORT = 4200;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/homcim", hc.getHomcim);
app.get("/api/logogram", lc.getLogogram);
app.get("/api/number", nc.getNumber);
app.get("/api/nyiakeng", nkc.getNyiakeng);
app.get("/api/puachue-keng", pckc.getPuachueKeng);
app.get("/api/puachue-phw", pcpc.getPuachuePhw);
app.get("/api/somthwj", sc.getSomthwj);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening from port ${SERVER_PORT}`);
});