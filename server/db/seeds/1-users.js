const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  return Promise.all(
    [
      {
        id: 1,
        username: 'admin',
        password: 'Krang',
        email_address: 'admin@admin.com'
      }
    ].map(user => {
      return generateHash(user.password)
        .then(hash => {
          user.hash = hash
          delete user.password
          return user
        })
    }))
    .then(users => {
      return knex('users').insert(users)
    })
}
