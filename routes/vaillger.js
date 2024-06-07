const express = require('express')
const router = express.Router()

router.get('villager', (req, res) => {
    res.render("villager")
})

module.exports = router