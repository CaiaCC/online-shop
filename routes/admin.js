const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"> <input type="text" name="title" /><button type="submit">Send</button></form>');
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;