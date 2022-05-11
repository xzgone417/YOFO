const express = require("express");
const router = express.Router();

router.get('/autodon', (req, res) => {
    res.render("CT/autodon.html")
});

module.exports = router;