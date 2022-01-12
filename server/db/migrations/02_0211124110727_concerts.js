exports.up = function (knex, Promise) {
  return knex.schema.createTable('concerts', (table) => {
    table.increments('id')
    table.string('artist')
    table.string('location')
    table.string('date')
    table.text('comments')
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('concerts')
}
