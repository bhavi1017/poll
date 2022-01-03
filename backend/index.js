var express = require("express");
var mongoose = require("mongoose");
const pollModel = require("./model/Poll");

const indexRouter = require("./routes");

var app = express();
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/poll", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.get("/", function (req, res) {
  res.send("Hello Working!!");
});

app.listen(3000);
// app.post("/addpoll", function (req, res) {
//   console.log(req.body);
//   pollModel
//     .insertMany(req.body)
//     .then((result) => {
//       res.send(result);
//       //res.redirect("/dashboard");
//     })
//     .catch((error) => console.log(error));
// });
// app.get("/dashCount", function (req, res, next) {
//   pollModel.find({}, (err, docs) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(docs);
//     }
//   });
// });
