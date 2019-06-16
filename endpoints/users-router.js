const router = require('express').Router();

const Users = require('../api/users-api');

//users can create account with this endpoint
router.post('/', (req, res) => {
    Users.insert(req.body)
        .then(dbRes => {
            res.status(400).json(dbRes)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

//for administrative use
router.get('/', (req, res) => {
    Users.getMultiple()
        .then(dbRes => {
            res.status(200).json(dbRes)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router;