exports.up = function (knex, Promise) {
  return knex.schema.createTable('travels', (table) => {
    table.increments('id')
    table.string('country')
    table.string('date')
    table.text('comments')
    table.string('image')
    table.integer('user_id').references('users.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('travels')
}
