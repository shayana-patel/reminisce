exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('concerts').del()
    .then(function () {
      // Inserts seed entries
      return knex('concerts').insert([
        { id: 1, artist: 'Basshunter', location: 'TSB Arena', date: '07 October 2009', comments: 'First concert ever!' },
        { id: 2, artist: 'Winter Jam', location: 'TSB Arena', date: '16 July 2010', comments: 'The Edge Winter Jam feat B.O.B, Dane Rumble, J Williams' },
        { id: 3, artist: 'Ed Sheeran', location: 'TSB Arena', date: '07 March 2013', comments: 'The + Album Tour with opening acts: Passenger & Gabrielle Aplin' }
      ])
    })
}
