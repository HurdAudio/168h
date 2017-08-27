'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'socialism/worker\'s struggle',
          img_path: './img/may/the-intelligent-woman-s-guide-to-socialism-and-capitalism-cover-1927.jpg',
          title: 'The Intelligent Woman\'s Guide to Socialism and Capitalism (cover)',
          artist: 'Eric Ravilious',
          year: '1927',
          rule: {
            "monday": "[ 30, 9, 19, 29 ]",
            "tuesday": "[ 28, 7, 17, 27 ]",
            "wednesday": "[ 26, 5, 15, 25 ]",
            "thursday": "[ 24, 3, 13, 23 ]",
            "friday": "[ 22, 1, 11, 21 ]",
            "saturday": "[ 20, 30, 9, 19 ]",
            "sunday": "[ 1, 11, 21, 31 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'socialism/worker\'s struggle',
          img_path: './img/may/cathedral-of-socialism-1919.jpg',
          title: 'Cathedral of Socialism',
          artist: 'Lyonel Feininger',
          year: '1919',
          rule: {
            "monday": "[ 1, 11, 21, 31 ]",
            "tuesday": "[ 30, 9, 19, 29 ]",
            "wednesday": "[ 28, 7, 17, 27 ]",
            "thursday": "[ 26, 5, 15, 25 ]",
            "friday": "[ 24, 3, 13, 23 ]",
            "saturday": "[ 22, 1, 11, 21 ]",
            "sunday": "[ 20, 30, 9, 19 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'socialism/worker\'s struggle',
          img_path: './img/may/an-eric-gill-woodcut-from-the-christian-social-book-the-devil-s-devices-by-h-d-c-pepler-showing-a.png',
          title: 'Woodcut from the Christian Social Book the Devil\'s Devices by H.d.c. Pepler, Showing a Bricklayer Overcoming the Devil Through Honest Work',
          artist: 'Eric Gill',
          year: '1915',
          rule: {
            "monday": "[ 20, 30, 9, 19 ]",
            "tuesday": "[ 1, 11, 21, 31 ]",
            "wednesday": "[ 30, 9, 19, 29 ]",
            "thursday": "[ 28, 7, 17, 27 ]",
            "friday": "[ 26, 5, 15, 25 ]",
            "saturday": "[ 24, 3, 13, 23 ]",
            "sunday": "[ 22, 1, 11, 21 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'socialism/worker\'s struggle',
          img_path: './img/may/worker-and-child-1908.jpg',
          title: 'Worker and Child',
          artist: 'Edvard Munch',
          year: '1908',
          rule: {
            "monday": "[ 22, 1, 11, 21 ]",
            "tuesday": "[ 20, 30, 9, 19 ]",
            "wednesday": "[ 1, 11, 21, 31 ]",
            "thursday": "[ 30, 9, 19, 29 ]",
            "friday": "[ 28, 7, 17, 27 ]",
            "saturday": "[ 26, 5, 15, 25 ]",
            "sunday": "[ 24, 3, 13, 23 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'socialism/worker\'s struggle',
          img_path: './img/may/the-worker-sitting.jpg',
          title: 'The worker sitting',
          artist: 'Fernand Leger',
          year: 'xx Cent.',
          rule: {
            "monday": "[ 24, 3, 13, 23 ]",
            "tuesday": "[ 22, 1, 11, 21 ]",
            "wednesday": "[ 20, 30, 9, 19 ]",
            "thursday": "[ 1, 11, 21, 31 ]",
            "friday": "[ 30, 9, 19, 29 ]",
            "saturday": "[ 28, 7, 17, 27 ]",
            "sunday": "[ 26, 5, 15, 25 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'socialism/worker\'s struggle',
          img_path: './img/may/the-forestry-workers.jpg',
          title: 'The Forestry Workers',
          artist: 'Camille Corot',
          year: 'c.1874 - c.1875',
          rule: {
            "monday": "[ 26, 5, 15, 25 ]",
            "tuesday": "[ 24, 3, 13, 23 ]",
            "wednesday": "[ 22, 1, 11, 21 ]",
            "thursday": "[ 20, 30, 9, 19 ]",
            "friday": "[ 1, 11, 21, 31 ]",
            "saturday": "[ 30, 9, 19, 29 ]",
            "sunday": "[ 28, 7, 17, 27 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_arts_id_seq', (SELECT MAX(id) FROM may_arts));");
    });
};
