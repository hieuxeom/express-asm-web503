class ExampleController {
	index(req, res) {
		res.render("example");
	}

	getExample(req, res) {
		const { param1 } = req.params;

		console.log(param1);

		res.render("exampleDynamicParams", { param1 });
	}
}

module.exports = new ExampleController();
