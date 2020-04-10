const router = require("express-promise-router")();

const { getNews } = require("../controllers/newsController");

router.get("/:page", getNews);

module.exports = router;
