const path = require("path");

const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// View public file
app.use(express.static(path.join(__dirname, "public")));

// Handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

const route = require("./routes");
route(app);

// app.get("/", (req, res) => {
// 	res.render("home");
// });

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
