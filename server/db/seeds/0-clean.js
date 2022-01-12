exports.seed = (knex) => {
  const empty = table => knex(table).del()

  return empty('travels')
    .then(() => empty('concerts'))
}
