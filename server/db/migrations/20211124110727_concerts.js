exports.up = function (knex) {
  return knex.schema.createTable('concerts', (table) => {
    table.increments('id')
    table.string('artist')
    table.string('location')
    table.string('date')
    table.string('comments')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('concerts')
}
