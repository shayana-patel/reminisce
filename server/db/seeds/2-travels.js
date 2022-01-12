exports.seed = function (knex) {
  return knex('travels').insert([
    {
      id: 1,
      country: 'Australia',
      date: 'July 2000',
      comments: 'My first trip overseas! Went to Brisbane and Sydney. Had the best time at the theme parks!',
      image: '/images/20211017_194925.jpg',
    },
    {
      id: 2,
      country: 'Fiji',
      date: '01 - 08 December 2018',
      comments: 'Family trip with everyone from mum\'s side of to celebrate Ba\'s 80th birthday. Spent a week at the Sheraton Resort in Denarau and a few of us went to Suva to see Dad\'s family. Had the best time with everyone!',
      image: '/images/20181206_194400.jpg',
    },
    {
      id: 3,
      country: 'Hong Kong',
      date: '27 - 30 June 2018',
      comments: 'First leg of our journey to the UK. Spent a few days here sightseeing and eating lots!',
      image: '/images/20180629_104010.jpg',
    }
  ])
}
