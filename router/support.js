const express = require("express");
const router = express.Router();

router.get('/support', (req, res) => {
    res.render("support/support.html")
});

module.exports = router;