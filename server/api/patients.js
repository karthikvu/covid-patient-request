const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')
const { findAll, create, findByBUNumber } = require('../models.js/patients')
const { mapKeys } = require('../utils')

router.get('/', async (req, res, next) => {
  const resp = await findAll()
  res.json(resp.map(mapKeys))
})

router.post('/', async (req, res, next) => {
    try { 
        const resp = await create(req.body)
        return res.status(201).json(resp.map(mapKeys))
    } catch (err) {
        if(err.message.includes('duplicate key value')) {
            return res.status(409).send(err.message)
        } else {
            return res.status(500).send(err.message)
        }
    }
})
  
router.post('/validateBu', async (req, res, next) => {
    try { 
        const resp = await findByBUNumber(req.body.buNumber)
        return res.status(resp.length ? 409 : 200).json({})
    } catch (err) {
            return res.status(500).send(err.message)
    }
})

module.exports = router
