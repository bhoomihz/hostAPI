const express = require("express");
require("../src/db/conn");

const SiaStore = require("../src/models/sia");
const router = require("../src/routers/route");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
