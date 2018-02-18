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
        },
        {
          id: 6,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/27578350_187399011863664_1997306547377537024_n.jpg',
          title: 'margoylemonday',
          artist: 'Gary and supporting cast',
          year: '2018',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/27893604_340165616484522_7717492061187866624_n.jpg',
          title: 'Junior Miss Fun Police is here to protect, serve and stop you from fucking up the bathroom rug',
          artist: 'Gary and supporting cast',
          year: '2018',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/27577140_1773096326327941_8900686075844886528_n.jpg',
          title: 'It was a perfect day to slobber all over yourself',
          artist: 'Gary and supporting cast',
          year: '2018',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/27573874_283145278883286_2726589352833449984_n.jpg',
          title: 'When Hank is not strolling down the psycho path, he loves to be kissed and will lean into your face. Congrats to the 5% who guessed correctly.',
          artist: 'Gary and supporting cast',
          year: '2018',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/27574124_454217818358867_5470114251341299712_n.jpg',
          title: 'Who is the only member of team Gary that actually likes to receive kisses from the parents?',
          artist: 'Gary and supporting cast',
          year: '2018',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-11-57b30aa95f3c6__605.jpg',
          title: 'Little Evil Kitty',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-4-57b30a939dff5__605.jpg',
          title: 'Sweet Dreams',
          artist: 'unknown artist',
          year: 'xxi  cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-10-57b30aa763583__605.jpg',
          title: 'We Found Him Crying All Alone In The Grass. He Was Only Two Weeks Old And Malnourished. This Was Taken After We Removed All The Ticks And Fleas And Gave Him A Bath',
          artist: 'Inga Ko',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-31-57b30ad5ccbc8__605.jpg',
          title: 'Whatcha Doin, Human?',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-69-57b32c431e8a7__605.jpg',
          title: 'Ball of Kitten',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-67-57b32a998544a__605.jpg',
          title: 'Kiwi Kitten',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-68-57b32ad504168__605.jpg',
          title: 'Happy Sleeping Yoga Kitten',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-63-57b326d0e181d__605.jpg',
          title: 'Sleeping With A Friend',
          artist: 'unknown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-8-57b30aa345790__605.jpg',
          title: 'Daisy, Probably The World’s Cutest Kitten',
          artist: 'unkown artist',
          year: 'xxi cent.',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_author_id: 1,
          theme: 'Cute Kittens',
          img_path: './img/modules/cute-kittens-33-57b31e94e94e6__605.jpg',
          title: 'Bat Cat',
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
