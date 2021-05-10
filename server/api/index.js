const express = require('express')
const router = express.Router()

router.use(require('./hello'))
router.use('/patients',require('./patients'))

module.exports = router
