const exampleRouter = require("./example");

const route = (app) => {
	app.use("/example", exampleRouter);
};

module.exports = route;
