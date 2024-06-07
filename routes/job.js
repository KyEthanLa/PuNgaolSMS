const express = require('express')
const router = express.Router()

router.get('job', (req, res) => {
    res.render("job")
})

module.exports = router