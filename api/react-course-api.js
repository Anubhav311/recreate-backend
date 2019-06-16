const db = require('../data/dbConfig')

module.exports = {
    insert,
    getMultiple,
    getOne
}

//Add a react_course row to the database
function insert(react_course_row) {
    return db('react_course')
        .insert(react_course_row)
        .returning('id')
        .then(idArr => {
            const id = idArr[0];
            return db('react_course')
                .where({
                    id
                }).first();
        });
}

//Get multiple react_course rows from the database
//Filterable by sending in an object literal that matches the react_course schema
function getMultiple(filter = {}) {
    return db('react_course')
        .where(filter);
}

//Filterable by sending in an object literal that matches the react_course schema
//Can be used for single react_course row authentication and in other database accessing functions
function getOne(filter = null) {
    if (!filter) return new Error('No filter provided for the query');
    return db('react_course')
        .where(filter)
        .first()
}