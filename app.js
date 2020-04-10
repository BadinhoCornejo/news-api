const express = require("express");
const bodyParser = require("body-parser");

const newsRoutes = require("./routes/newsRoutes");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());

app.use("/newsApi", newsRoutes);

app.listen(app.get("port"), () =>
  console.log(`Server listening on port ${app.get("port")}`)
);
