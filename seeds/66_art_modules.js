'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('art_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('art_modules').insert([
        {
          id: 1,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-30-57b30ad41bc90__605.jpg',
          title: 'Purrrfect',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-7-57b30aa10707a__605.jpg',
          title: 'Here We See A Baby Wigglefloof Cleaning Its Tiny Squishbeans',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-64-57b32778a2fe1__605.jpg',
          title: 'Gimo, The Cat With The Biggest Eyes Ever',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-29-57b30ad229af3__605.jpg',
          title: 'Those Baby-tiger Paws',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-9-57b30aa5797eb__605.jpg',
          title: 'Commence Butt Wiggle',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('art_modules_id_seq', (SELECT MAX(id) FROM art_modules));");
    });
};
