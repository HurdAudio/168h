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
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 1, 11, 19, 29 ]
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
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
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
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
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
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
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
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
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
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
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
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
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
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 2, 12, 20, 30 ]
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
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
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
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
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
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
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
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
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
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
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
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
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
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 3, 13, 21, 31 ]
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
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
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
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
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
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
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
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
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
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
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
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
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
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 4, 14, 22, 1 ]
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
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
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
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
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
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/saint-catherine-of-alexandria-presumed-self-portrait-1589.jpg',
          title: 'Saint Catherine of Alexandria (presumed self-portrait)',
          artist: 'Barbara Longhi',
          year: '1589',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/dada-portrait-of-berenice-abbott-1926.jpg',
          title: 'Dada Portrait of Berenice Abbott',
          artist: 'Elsa von Freytag-Loringhoven',
          year: '1926',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/pere-ubu-1936.jpg',
          title: 'Pere Ubu',
          artist: 'Dora Maar',
          year: '1936',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/woman-with-a-cat-c-1970-4.jpg',
          title: 'Woman with a Cat',
          artist: 'Margit Selska',
          year: '1970',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/figures-in-a-garden-1981.jpg',
          title: 'Figures in a Garden',
          artist: 'Eileen Agar',
          year: '1979 - 1981',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/the-mahatmas-present-standing-point-series-ii-no-2a-1920.jpg',
          title: 'The Mahatmas Present Standing Point, Series II, No. 2a',
          artist: 'Hilma af Klint',
          year: '1920',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/stilhet-1907.jpg',
          title: 'Stilhet',
          artist: 'Helene Schjerfbeck',
          year: '1907',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/unknown-title-4.jpg',
          title: 'unknown title',
          artist: 'Seraphine Louis',
          year: '?',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/display-image-3.jpg',
          title: 'The Dinner-Hour',
          artist: 'Anna Ancher',
          year: 'c.1914',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/simpkin-at-the-tailor-s-bedside-1902.jpg',
          title: 'Simpkin at the Tailor\’s Bedside',
          artist: 'Beatrix Potter',
          year: '1902',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/going-up-1978.jpg',
          title: 'Going Up',
          artist: 'Betty Parsons',
          year: '1978',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/bog-ia-apelor.jpg',
          title: 'Richness of Waters',
          artist: 'Micaela Eleutheriade',
          year: '?',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/windows-no-2-1965.jpg',
          title: 'Windows (no. 2)',
          artist: 'Alice Neel',
          year: '1965',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/diario(2).jpg',
          title: 'Diario',
          artist: 'Bice Lazzari',
          year: '?',
          rule: {
            "monday": [ 1, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/courtyard-in-nork.jpg',
          title: 'Courtyard in Nork',
          artist: 'Gohar Fermanyan',
          year: '?',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/3-lemons-18x24in-2015-oil-svetlana-kanyo-2.jpg',
          title: 'Lemons',
          artist: 'Svetlana Kanyo',
          year: '2015',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/untitled-2005.jpg',
          title: 'Untitled',
          artist: 'Tea Jorjadze',
          year: '2005',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 20, 30 ],
            "friday": [ 1, 11, 19, 29 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/monika-blatton-dzokejka.jpg',
          title: 'Lady Jockey',
          artist: 'Monica Blatton',
          year: '2009',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 20, 30 ],
            "saturday": [ 1, 11, 19, 29 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/heaven.jpg',
          title: 'Heaven',
          artist: 'Dana Levin',
          year: '?',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 20, 30 ],
            "sunday": [ 1, 11, 10, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/family-tree-2012.jpg',
          title: 'Family Tree',
          artist: 'Wangechi Mutu',
          year: '2012',
          rule: {
            "monday": [ 1, 11, 10, 29 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/hell.jpg',
          title: 'Hell',
          artist: 'Herrad of Landsberg',
          year: '?',
          rule: {
            "monday": [ 2, 12, 20, 30 ],
            "tuesday": [ 1, 11, 10, 29 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/pained-madonna.jpg',
          title: 'Pained Madonna',
          artist: 'Plautilla Nelli',
          year: '?',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 20, 30 ],
            "wednesday": [ 1, 11, 10, 29 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/madonna-adoring-the-child-1605.jpg',
          title: 'Madonna Adoring the Child',
          artist: 'Barbara Longhi',
          year: '1605',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 20, 30 ],
            "thursday": [ 1, 11, 10, 29 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/sleeping-venus-1630.jpg',
          title: 'Sleeping Venus',
          artist: 'Artemisia Gentileschi',
          year: '1630',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 21, 31 ],
            "friday": [ 2, 12, 11, 30 ],
            "saturday": [ 8, 17, 26, 5 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/flowers-in-a-vase-1654.jpg',
          title: 'Flowers in a vase',
          artist: 'Judith Leyster',
          year: '1654',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 21, 31 ],
            "saturday": [ 2, 12, 11, 30 ],
            "sunday": [ 8, 17, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/lady-in-an-interior.jpg',
          title: 'Lady in an interior',
          artist: 'Thalia Flora-Karavia',
          year: '?',
          rule: {
            "monday": [ 8, 17, 26, 5 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 21, 31 ],
            "sunday": [ 2, 12, 11, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/mother-marie-poussepin.jpg',
          title: 'Mother Marie Poussepin',
          artist: 'Gwen John',
          year: 'c.1915 - c.1920',
          rule: {
            "monday": [ 2, 12, 11, 30 ],
            "tuesday": [ 8, 17, 26, 5 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/book-of-foot-1996.jpg',
          title: 'Book of Foot',
          artist: 'Lenore Tawney',
          year: '1996',
          rule: {
            "monday": [ 3, 13, 21, 31 ],
            "tuesday": [ 2, 12, 11, 30 ],
            "wednesday": [ 8, 17, 26, 5 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/untitled-celestial-realm-1956.jpg',
          title: 'Untitled, Celestial Realm',
          artist: 'Lolo Soldevilla',
          year: '1956',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 21, 31 ],
            "wednesday": [ 2, 12, 11, 30 ],
            "thursday": [ 8, 17, 26, 5 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'women\'s history',
          img_path: './img/march/seascape-1970-2.jpg',
          title: 'Seascape',
          artist: 'Margit Selska',
          year: '1970',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 21, 31 ],
            "thursday": [ 2, 12, 11, 30 ],
            "friday": [ 8, 17, 26, 5 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_arts_id_seq', (SELECT MAX(id) FROM march_arts));");
    });
};
