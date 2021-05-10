const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')
const { findAll } = require('../models.js/patients')

router.get('/api/postgres', async (req, res, next) => {
  const resp = await findAll()
  res.json(resp)
})

module.exports = router
