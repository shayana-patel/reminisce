exports.seed = function (knex) {
  return knex('travels').insert([
    {
      id: 1,
      country: 'Australia',
      date: 'July 2000',
      comments: 'My first trip overseas! Went to Brisbane and Sydney. Had the best time at the theme parks!',
      image: '/images/20211017_194925.jpg',
      user_id: 1
    },
    {
      id: 2,
      country: 'Fiji',
      date: 'July 2005',
      comments: 'My first trip to Fiji! Went with Mum, Nakita, Ba and Dada. Got to celebrate my 10th birthday over there',
      image: '',
      user_id: 1
    },
    {
      id: 3,
      country: 'Australia',
      date: 'December 2008 - January 2009',
      comments: 'Went and visited Mama, Mami, and Brianna in Brisbane. Went to the theme parks again. Stayed in Gold Coast for a few days.',
      image: '',
      user_id: 1
    }
  ])
}
