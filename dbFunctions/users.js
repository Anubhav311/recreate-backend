module.exports = {
    getMultiple
}

function getMultiple(filter = {}) {
    return db('users')
        .where(filter);
}