var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Express",
		name: "romain"
	});
});

router.get("/about", function(req, res, next) {
	res.render("about", { title: "about" });
});

router.get("/signup", (req, res) => {
	res.render("signup", {
		title: "Sign-up"
	});
});

module.exports = router;
