const { db } = require('../lib/database')

const findAll = () => db.any('SELECT * FROM patients')
const findOne = (id) => db.any('SELECT * FROM patients where id = $1', id)
const findByName = name => db.any('SELECT * FROM patients where name = $1', name)
const findByBUNumber = buNumber => db.any('SELECT * FROM patients where buNumber = $1', buNumber)
const findByPhone = phone => db.any('SELECT * FROM patients where phone = $1 or phoneAlt = $1', phone)
const findByAttribute = (attribute, value) => {}
const create = (patient) => {
    return db.query(`INSERT INTO patients(buNumber, name, age, phone, phoneAlt, ngoName, remarks, created_on) 
VALUES (
  $[buNumber],
  $[name],
  $[age],
  $[phone],
  $[phoneAlt],
  $[ngoName],
  $[remarks],
  NOW() 
) RETURNING *`, patient)
}
const update = (id, patient) => {}
const deleteOne = id => {}

module.exports = {
    findAll,
    findOne,
    findByAttribute, 
    findByBUNumber, 
    findByName, 
    findByPhone,
    create
}