import { Express } from "express";

const app = express();

app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render('index', {})
});
