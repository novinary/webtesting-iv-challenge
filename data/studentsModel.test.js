const db = require('./dbConfig.js');
const Students = require('./studentsModel.js');

describe('studentsModel', () => {
	beforeEach(async () => {
		await db('students').truncate();
	});

	afterEach(async () => {
		await db('students').truncate();
	});

	describe('insert', () => {
		it('insert a student into db', async () => {
			const newStudent = await Students.insert({ name: 'Ant' });
			expect(newStudent.name).toBe('Ant');
		});

		it('insert two students into db', async () => {
			const newStudent1 = await Students.insert({ name: 'Novi' });
			const newStudent2 = await Students.insert({ name: 'Sam' });
			const allOfThem = await db('students');
			expect(allOfThem).toHaveLength(2);
		});
	});

	describe('remove', () => {
		it('remove a student', async () => {
			const student = await Students.insert({ name: 'Ant' });
			const deleteStudent = await Students.remove(1);
			const allOfThem = await db('students');
			expect(allOfThem).toHaveLength(0);
		});

		it('remove two students', async () => {
			const student = await Students.insert({ name: 'Sam' });
			const studentTwo = await Students.insert({ name: 'Novi' });
			const deleteStudent = await Students.remove(1);
			const allOfThem = await db('students');
			expect(allOfThem).toHaveLength(1);
		});
	});
});