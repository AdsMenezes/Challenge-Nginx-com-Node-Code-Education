var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
  name: "People",
  tableName: "people",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: 'increment',
    },
    name: {
      type: "varchar",
    },
    created_at: {
      type: 'timestamp',
      createDate: true,
    },
    updated_at: {
      type: 'timestamp',
      updateDate: true,
    },
  },
})
