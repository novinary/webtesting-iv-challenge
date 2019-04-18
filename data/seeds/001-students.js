exports.seed = function(knex, Promise) {
	return knex('students').truncate().then(function() {
		return knex('students').insert([
			{ id: 1, name: 'Bob' },
			{ id: 2, name: 'Bobbins' },
			{ id: 3, name: 'Bobby' },
			{ id: 4, name: 'Bobbina' }
		]);
	});
};
