const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
const url =
  "mongodb+srv://dailyrecord:dailyrecord@cluster0.lza23fb.mongodb.net/altius-hospital";

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

//vercel

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "../client/build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

app.listen(port, () => {
  console.log("App is running on port ", port);
});
