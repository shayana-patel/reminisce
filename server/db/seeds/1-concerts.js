exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('concerts').del()
    .then(function () {
      // Inserts seed entries
      return knex('concerts').insert([
        { id: 1, artist: 'Basshunter', location: 'TSB Arena', date: '07 October 2009', comments: 'First concert ever!', image: 'https://www.odt.co.nz/sites/default/files/story/2016/04/photos_by_peter_mcintosh__158450184a.png' },
        { id: 2, artist: 'Winter Jam', location: 'TSB Arena', date: '16 July 2010', comments: 'The Edge Winter Jam feat B.O.B, Dane Rumble, J Williams', image: 'https://static.billygraham.org/sites/thelightfm.org/uploads/prod/2019/10/pexels-photo-2147029.jpg' },
        { id: 3, artist: 'Ed Sheeran', location: 'TSB Arena', date: '07 March 2013', comments: 'The + Album Tour with opening acts: Passenger & Gabrielle Aplin', image: 'https://st4.depositphotos.com/21607914/24089/i/600/depositphotos_240896676-stock-photo-british-singer-sheeran-performs-his.jpg' }
      ])
    })
}
