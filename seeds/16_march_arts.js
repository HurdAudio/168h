'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('march_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('march_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/rosso-2000.jpg',
          title: 'Rosso',
          artist: 'Carla Accardi',
          year: '2000',
          rule: {
            "monday": "[ 31, 10, 18, 28 ]",
            "tuesday": "[ 30, 9, 17, 27 ]",
            "wednesday": "[ 29, 8, 16, 26 ]",
            "thursday": "[ 28, 7, 15, 25 ]",
            "friday": "[ 27, 6, 14, 24 ]",
            "saturday": "[ 26, 5, 13, 23 ]",
            "sunday": "[ 1, 11, 19, 29 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/golden-center-in-the-ladder-1970.jpg',
          title: 'Golden Center in the Ladder',
          artist: 'Alice Baber',
          year: '1970',
          rule: {
            "monday": "[ 1, 11, 19, 29 ]",
            "tuesday": "[ 31, 10, 18, 28 ]",
            "wednesday": "[ 30, 9, 17, 27 ]",
            "thursday": "[ 29, 8, 16, 26 ]",
            "friday": "[ 28, 7, 15, 25 ]",
            "saturday": "[ 27, 6, 14, 24 ]",
            "sunday": "[ 26, 5, 13, 23 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/rosa-viola-bianco-1968.jpg',
          title: 'Rosa-Viola-Bianco',
          artist: 'Carla Accardi',
          year: '1968',
          rule: {
            "monday": "[ 26, 5, 13, 23 ]",
            "tuesday": "[ 1, 11, 19, 29 ]",
            "wednesday": "[ 31, 10, 18, 28 ]",
            "thursday": "[ 30, 9, 17, 27 ]",
            "friday": "[ 29, 8, 16, 26 ]",
            "saturday": "[ 28, 7, 15, 25 ]",
            "sunday": "[ 27, 6, 14, 24 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/woman-with-a-cat-1901.jpg',
          title: 'Woman with a Cat',
          artist: 'Lilla Cabot Perry',
          year: '1901',
          rule: {
            "monday": "[ 27, 6, 14, 24 ]",
            "tuesday": "[ 26, 5, 13, 23 ]",
            "wednesday": "[ 1, 11, 19, 29 ]",
            "thursday": "[ 31, 10, 18, 28 ]",
            "friday": "[ 30, 9, 17, 27 ]",
            "saturday": "[ 29, 8, 16, 26 ]",
            "sunday": "[ 28, 7, 15, 25 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/red-yellow-and-blue-1960.jpg',
          title: 'Red, Yellow and Blue',
          artist: 'Alice Baber',
          year: '1960',
          rule: {
            "monday": "[ 28, 7, 15, 25 ]",
            "tuesday": "[ 27, 6, 14, 24 ]",
            "wednesday": "[ 26, 5, 13, 23 ]",
            "thursday": "[ 1, 11, 19, 29 ]",
            "friday": "[ 31, 10, 18, 28 ]",
            "saturday": "[ 30, 9, 17, 27 ]",
            "sunday": "[ 29, 8, 16, 26 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/blu-2000.jpg',
          title: 'Blu',
          artist: 'Carla Accardi',
          year: '2000',
          rule: {
            "monday": "[ 29, 8, 16, 26 ]",
            "tuesday": "[ 28, 7, 15, 25 ]",
            "wednesday": "[ 27, 6, 14, 24 ]",
            "thursday": "[ 26, 5, 13, 23 ]",
            "friday": "[ 1, 11, 19, 29 ]",
            "saturday": "[ 31, 10, 18, 28 ]",
            "sunday": "[ 30, 9, 17, 27 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/1.jpg',
          title: 'The baptism of Christ',
          artist: 'Ende',
          year: '975',
          rule: {
            "monday": "[ 31, 10, 18, 28 ]",
            "tuesday": "[ 30, 9, 17, 27 ]",
            "wednesday": "[ 29, 8, 16, 26 ]",
            "thursday": "[ 28, 7, 15, 25 ]",
            "friday": "[ 27, 6, 14, 24 ]",
            "saturday": "[ 2, 12, 20, 30 ]",
            "sunday": "[ 1, 11, 19, 29 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/breastfeeding-mother-of-paula-modersohn-becker-1902.jpg',
          title: 'Breastfeeding mother of Paula Modersohn-Becker',
          artist: 'Paula Modersohn-Becker',
          year: '1902',
          rule: {
            "monday": "[ 1, 11, 19, 29 ]",
            "tuesday": "[ 31, 10, 18, 28 ]",
            "wednesday": "[ 30, 9, 17, 27 ]",
            "thursday": "[ 29, 8, 16, 26 ]",
            "friday": "[ 28, 7, 15, 25 ]",
            "saturday": "[ 27, 6, 14, 24 ]",
            "sunday": "[ 2, 12, 20, 30 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/espagnole.jpg',
          title: 'Espagnole',
          artist: 'Natalia Goncharova',
          year: '1914',
          rule: {
            "monday": "[ 2, 12, 20, 30 ]",
            "tuesday": "[ 1, 11, 19, 29 ]",
            "wednesday": "[ 31, 10, 18, 28 ]",
            "thursday": "[ 30, 9, 17, 27 ]",
            "friday": "[ 29, 8, 16, 26 ]",
            "saturday": "[ 28, 7, 15, 25 ]",
            "sunday": "[ 27, 6, 14, 24 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/blue-cats-with-butterflies.jpg',
          title: 'Blue Cats with Butterflies',
          artist: 'Laurel Burch',
          year: '?',
          rule: {
            "monday": "[ 27, 6, 14, 24 ]",
            "tuesday": "[ 2, 12, 20, 30 ]",
            "wednesday": "[ 1, 11, 19, 29 ]",
            "thursday": "[ 31, 10, 18, 28 ]",
            "friday": "[ 30, 9, 17, 27 ]",
            "saturday": "[ 29, 8, 16, 26 ]",
            "sunday": "[ 28, 7, 15, 25 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_arts_id_seq', (SELECT MAX(id) FROM march_arts));");
    });
};
