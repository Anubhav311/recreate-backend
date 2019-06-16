const router = require('express').Router();

const ReactCourse = require('../api/react-course-api');

//react-course rows can be added by admin
router.post('/', (req, res) => {
    ReactCourse.insert(req.body)
        .then(dbRes => {
            res.status(400).json(dbRes)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

//users will get the course from this endpoint
router.get('/', (req, res) => {
    ReactCourse.getMultiple()
        .then(dbRes => {
            res.status(200).json(dbRes)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router;