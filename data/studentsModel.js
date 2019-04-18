const db = require('./dbConfig');

module.exports = {
	insert,
	remove,
	getAll,
	findById
};

async function insert(student) {
	const [ id ] = await db('students').insert(student);
	return await db('students').where({ id }).first();
}

async function remove(id) {
	return db('students').where({ id }).del();
}

function getAll() {
	return db('students');
}

function findById(id) {
	return db('students').where(id);
}