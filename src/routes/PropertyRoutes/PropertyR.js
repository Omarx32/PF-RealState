const express = require('express')
const router = express.Router()
const getProperty = require('../../handlers/PropertyH/PropertyHand')

router.get('/getProperty', getProperty)

module.exports = router