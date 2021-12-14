const { Table } = require('typeorm')

class CreatePeople1639493253575 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'people',
        columns: [
          { 
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ]
      })
    )
  }

  async down(queryRunner) {
    await queryRunner.dropTable('people')
  }
}

module.exports = CreatePeople1639493253575
