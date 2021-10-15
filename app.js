const express = require("express");

const app = express();

var items = ["Eat Food", "Buy Food", "Cook Food"];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  return res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;

  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
