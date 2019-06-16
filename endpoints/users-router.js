const router = require('express').Router();

const Users = require('../api/users-api');

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