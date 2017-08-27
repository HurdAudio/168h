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
        },
        {
          id: 11,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/iracema.jpg',
          title: 'Iracema',
          artist: 'Lilian Greisse',
          year: '2017',
          rule: {
            "monday": "[ 28, 7, 15, 25 ]",
            "tuesday": "[ 27, 6, 14, 24 ]",
            "wednesday": "[ 2, 12, 20, 30 ]",
            "thursday": "[ 1, 11, 19, 29 ]",
            "friday": "[ 31, 10, 18, 28 ]",
            "saturday": "[ 30, 9, 17, 27 ]",
            "sunday": "[ 29, 8, 16, 26 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/untitled-swirls-1977.jpg',
          title: 'Untitled (Swirls)',
          artist: 'Ruth Vollmer',
          year: '1977',
          rule: {
            "monday": "[ 29, 8, 16, 26 ]",
            "tuesday": "[ 28, 7, 15, 25 ]",
            "wednesday": "[ 27, 6, 14, 24 ]",
            "thursday": "[ 2, 12, 20, 30 ]",
            "friday": "[ 1, 11, 19, 29 ]",
            "saturday": "[ 31, 10, 18, 28 ]",
            "sunday": "[ 30, 9, 17, 27 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/self-portrait-1906.jpg',
          title: 'Self portrait',
          artist: 'Paula Modersohn-Becker',
          year: '1906',
          rule: {
            "monday": "[ 30, 9, 17, 27 ]",
            "tuesday": "[ 29, 8, 16, 26 ]",
            "wednesday": "[ 28, 7, 15, 25 ]",
            "thursday": "[ 27, 6, 14, 24 ]",
            "friday": "[ 2, 12, 20, 30 ]",
            "saturday": "[ 1, 11, 19, 29 ]",
            "sunday": "[ 31, 10, 18, 28 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/blue.jpg',
          title: 'What\'s under beauty?',
          artist: 'Tamara',
          year: '2015',
          rule: {
            "monday": "[ 1, 11, 19, 29 ]",
            "tuesday": "[ 31, 10, 18, 28 ]",
            "wednesday": "[ 30, 9, 17, 27 ]",
            "thursday": "[ 29, 8, 16, 26 ]",
            "friday": "[ 28, 7, 15, 25 ]",
            "saturday": "[ 3, 13, 21, 31 ]",
            "sunday": "[ 2, 12, 20, 30 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/flames-1918.jpg',
          title: 'Flames',
          artist: 'Uemura Shoen',
          year: '1918',
          rule: {
            "monday": "[ 2, 12, 20, 30 ]",
            "tuesday": "[ 1, 11, 19, 29 ]",
            "wednesday": "[ 31, 10, 18, 28 ]",
            "thursday": "[ 30, 9, 17, 27 ]",
            "friday": "[ 29, 8, 16, 26 ]",
            "saturday": "[ 28, 7, 15, 25 ]",
            "sunday": "[ 3, 13, 21, 31 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/st-michael-and-the-dragon.jpg',
          title: 'St. Michael and the dragon',
          artist: 'Claricia',
          year: '?',
          rule: {
            "monday": "[ 3, 13, 21, 31 ]",
            "tuesday": "[ 2, 12, 20, 30 ]",
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
          id: 17,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/bild-no-84-1918.jpg',
          title: 'Bild no. 84',
          artist: 'Jacoba van Heemskerck',
          year: '1918',
          rule: {
            "monday": "[ 28, 7, 15, 25 ]",
            "tuesday": "[ 3, 13, 21, 31 ]",
            "wednesday": "[ 2, 12, 20, 30 ]",
            "thursday": "[ 1, 11, 19, 29 ]",
            "friday": "[ 31, 10, 18, 28 ]",
            "saturday": "[ 30, 9, 17, 27 ]",
            "sunday": "[ 29, 8, 16, 26 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/stil-life.jpg',
          title: 'Stil life',
          artist: 'Mariam Aslamazian',
          year: '?',
          rule: {
            "monday": "[ 29, 8, 16, 26 ]",
            "tuesday": "[ 28, 7, 15, 25 ]",
            "wednesday": "[ 3, 13, 21, 31 ]",
            "thursday": "[ 2, 12, 20, 30 ]",
            "friday": "[ 1, 11, 19, 29 ]",
            "saturday": "[ 31, 10, 18, 28 ]",
            "sunday": "[ 30, 9, 17, 27 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/mr-bumps-and-his-monkey-by-walter-de-la-mare-1942.jpg',
          title: 'Mr. Bumps and His Monkey by Walter de la Mare',
          artist: 'Dorothy Lathrop',
          year: '1942',
          rule: {
            "monday": "[ 30, 9, 17, 27 ]",
            "tuesday": "[ 29, 8, 16, 26 ]",
            "wednesday": "[ 28, 7, 15, 25 ]",
            "thursday": "[ 3, 13, 21, 31 ]",
            "friday": "[ 2, 12, 20, 30 ]",
            "saturday": "[ 1, 11, 19, 29 ]",
            "sunday": "[ 31, 10, 18, 28 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/composition-19.jpg',
          title: 'Composition 19',
          artist: 'Sonia Delaunay',
          year: '1930',
          rule: {
            "monday": "[ 31, 10, 18, 28 ]",
            "tuesday": "[ 30, 9, 17, 27 ]",
            "wednesday": "[ 29, 8, 16, 26 ]",
            "thursday": "[ 28, 7, 15, 25 ]",
            "friday": "[ 3, 13, 21, 31 ]",
            "saturday": "[ 2, 12, 20, 30 ]",
            "sunday": "[ 1, 11, 19, 29 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/untitled-1951.jpg',
          title: 'Untitled',
          artist: 'Helen Frankenthaler',
          year: '1951',
          rule: {
            "monday": "[ 2, 12, 20, 30 ]",
            "tuesday": "[ 1, 11, 19, 29 ]",
            "wednesday": "[ 31, 10, 18, 28 ]",
            "thursday": "[ 30, 9, 17, 27 ]",
            "friday": "[ 29, 8, 16, 26 ]",
            "saturday": "[ 4, 14, 22, 1 ]",
            "sunday": "[ 3, 13, 21, 31 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/nude-girl-1910.jpg',
          title: 'Nude Girl',
          artist: 'Gwen John',
          year: '1909 - 1910',
          rule: {
            "monday": "[ 3, 13, 21, 31 ]",
            "tuesday": "[ 2, 12, 20, 30 ]",
            "wednesday": "[ 1, 11, 19, 29 ]",
            "thursday": "[ 31, 10, 18, 28 ]",
            "friday": "[ 30, 9, 17, 27 ]",
            "saturday": "[ 29, 8, 16, 26 ]",
            "sunday": "[ 4, 14, 22, 1 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/the-broken-column-1944.jpg',
          title: 'The Broken Column',
          artist: 'Frida Kahlo',
          year: '1944',
          rule: {
            "monday": "[ 4, 14, 22, 1 ]",
            "tuesday": "[ 3, 13, 21, 31 ]",
            "wednesday": "[ 2, 12, 20, 30 ]",
            "thursday": "[ 1, 11, 19, 29 ]",
            "friday": "[ 31, 10, 18, 28 ]",
            "saturday": "[ 30, 9, 17, 27 ]",
            "sunday": "[ 29, 8, 16, 26 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/repulse-bay.jpg',
          title: 'Repulse Bay',
          artist: 'Dominique Gonzalez-Foerster',
          year: '?',
          rule: {
            "monday": "[ 29, 8, 16, 26 ]",
            "tuesday": "[ 4, 14, 22, 1 ]",
            "wednesday": "[ 3, 13, 21, 31 ]",
            "thursday": "[ 2, 12, 20, 30 ]",
            "friday": "[ 1, 11, 19, 29 ]",
            "saturday": "[ 31, 10, 18, 28 ]",
            "sunday": "[ 30, 9, 17, 27 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/untitled-your-body-is-a-battleground-1989.jpg',
          title: 'Untitled (your body is a battleground)',
          artist: 'Barbara Kruger',
          year: '1989',
          rule: {
            "monday": "[ 30, 9, 17, 27 ]",
            "tuesday": "[ 29, 8, 16, 26 ]",
            "wednesday": "[ 4, 14, 22, 1 ]",
            "thursday": "[ 3, 13, 21, 31 ]",
            "friday": "[ 2, 12, 20, 30 ]",
            "saturday": "[ 1, 11, 19, 29 ]",
            "sunday": "[ 31, 10, 18, 28 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_arts_id_seq', (SELECT MAX(id) FROM march_arts));");
    });
};
