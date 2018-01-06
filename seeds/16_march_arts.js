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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
          theme: 'Women\'s History Month',
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
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/portrait-of-philomene.jpg',
          title: 'Portrait of Philomene',
          artist: 'Sonia Delaunay',
          year: '1907',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 22, 1 ],
            "friday": [ 3, 13, 12, 31 ],
            "saturday": [ 9, 18, 27, 6 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/full-moon-1980.jpg',
          title: 'Full Moon',
          artist: 'Louise Nevelson',
          year: '1980',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 22, 1 ],
            "saturday": [ 3, 13, 12, 31 ],
            "sunday": [ 9, 18, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/nu.jpg',
          title: 'Nu',
          artist: 'Tarsila do Amaral',
          year: '?',
          rule: {
            "monday": [ 9, 18, 27, 6 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 22, 1 ],
            "sunday": [ 3, 13, 12, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/dawn-1933.jpg',
          title: 'Dawn',
          artist: 'Laura Knight',
          year: '1933',
          rule: {
            "monday": [ 3, 13, 12, 31 ],
            "tuesday": [ 9, 18, 27, 6 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/unknown-title-5.jpg',
          title: 'unknown title',
          artist: 'Lucia Demetriade Balacescu',
          year: '?',
          rule: {
            "monday": [ 4, 14, 22, 1 ],
            "tuesday": [ 3, 13, 12, 31 ],
            "wednesday": [ 9, 18, 27, 6 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/asleep-1937.jpg',
          title: 'Asleep',
          artist: 'Toyen',
          year: '1937',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 22, 1 ],
            "wednesday": [ 3, 13, 12, 31 ],
            "thursday": [ 9, 18, 27, 6 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/1441500527473.jpg',
          title: 'Self Portrait',
          artist: 'Guan Zilan',
          year: '?',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 22, 1 ],
            "thursday": [ 3, 13, 12, 31 ],
            "friday": [ 9, 18, 27, 6 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/longing-1977.jpg',
          title: 'Longing',
          artist: 'Joyce Kozloff',
          year: '1977',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 23, 2 ],
            "friday": [ 4, 14, 13, 1 ],
            "saturday": [ 10, 19, 28, 7 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/indian-church-1929.jpg',
          title: 'Indian Church',
          artist: 'Emily Carr',
          year: '1929',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 23, 2 ],
            "saturday": [ 4, 14, 13, 1 ],
            "sunday": [ 10, 19, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/artwork-images-424175658-163937-diane-arbus.jpg',
          title: 'Girl in a Shiny Dress',
          artist: 'Diane Arbus',
          year: '1967',
          rule: {
            "monday": [ 10, 19, 28, 7 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 23, 2 ],
            "sunday": [ 4, 14, 13, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/three-symbols-1930.jpg',
          title: 'Three Symbols',
          artist: 'Eileen Agar',
          year: '1930',
          rule: {
            "monday": [ 4, 14, 13, 1 ],
            "tuesday": [ 10, 19, 28, 7 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/plastic-sphere-cube-triangle-red-2010.jpg',
          title: 'Plastic Sphere Cube Triangle Red',
          artist: 'Angela Bulloch',
          year: '2010',
          rule: {
            "monday": [ 5, 15, 23, 2 ],
            "tuesday": [ 4, 14, 13, 1 ],
            "wednesday": [ 10, 19, 28, 7 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/woman-with-an-umbrella-1880.jpg',
          title: 'Woman with an Umbrella',
          artist: 'Marie Bracquemond',
          year: '1880',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 23, 2 ],
            "wednesday": [ 4, 14, 13, 1 ],
            "thursday": [ 10, 19, 28, 7 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/bild-no-15-berg-und-schiffe-1914.jpg',
          title: 'Bild no. 15, Berg und Schiffe',
          artist: 'Jacoba van Heemskerck',
          year: '1914',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 23, 2 ],
            "thursday": [ 4, 14, 13, 1 ],
            "friday": [ 10, 19, 28, 7 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/sans-titre-main-coquillage-1934.jpg',
          title: 'Sans Titre (Main-coquillage)',
          artist: 'Dora Maar',
          year: '1934',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 24, 3 ],
            "friday": [ 5, 15, 24, 2 ],
            "saturday": [ 11, 20, 29, 7 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/ridiculous-portrait-1969.jpg',
          title: 'Ridiculous Portrait',
          artist: 'May Wilson',
          year: '1969',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 24, 3 ],
            "saturday": [ 5, 15, 24, 2 ],
            "sunday": [ 11, 20, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/a-little-boy-lost-1920-1.jpg',
          title: 'A Little Boy Lost',
          artist: 'Dorothy Lathrop',
          year: '1920',
          rule: {
            "monday": [ 11, 20, 29, 7 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 24, 3 ],
            "sunday": [ 5, 15, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/reinforcements-troops-marching-1917.jpg',
          title: 'Reinforcements: Troops Marching',
          artist: 'Grace Cossington Smith',
          year: '1917',
          rule: {
            "monday": [ 5, 15, 24, 2 ],
            "tuesday": [ 11, 20, 29, 7 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/self-portrait-with-violin-1928.jpg',
          title: 'Self-portrait with violin',
          artist: 'Antonietta Raphael',
          year: '1928',
          rule: {
            "monday": [ 6, 16, 24, 3 ],
            "tuesday": [ 5, 15, 24, 2 ],
            "wednesday": [ 11, 20, 29, 7 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/musical-chairs-1951.jpg',
          title: 'Musical Chairs',
          artist: 'Dorothea Tanning',
          year: '1951',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 24, 3 ],
            "wednesday": [ 5, 15, 24, 2 ],
            "thursday": [ 11, 20, 29, 7 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/upper-east-side.jpg',
          title: 'Upper East Side',
          artist: 'Hai-Hsin Huang',
          year: '2015',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 24, 3 ],
            "thursday": [ 5, 15, 24, 2 ],
            "friday": [ 11, 20, 29, 7 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/true-to-life-2005.jpg',
          title: 'True to Life',
          artist: 'Valerie Jaudon',
          year: '2005',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 25, 3 ],
            "saturday": [ 12, 21, 30, 8 ],
            "sunday": [ 11, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/cosmos-n-3-1977.jpg',
          title: 'Cosmos N°3',
          artist: 'Martha Boto',
          year: '1977',
          rule: {
            "monday": [ 11, 21, 31, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 25, 3 ],
            "sunday": [ 12, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/display-image-22.jpg',
          title: 'Cemetery',
          artist: 'Alice Bailly',
          year: '1913',
          rule: {
            "monday": [ 12, 21, 30, 8 ],
            "tuesday": [ 11, 21, 31, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-quay-at-dinard-1911.jpg',
          title: 'The Quay at Dinard',
          artist: 'Ethel Carrick',
          year: '1911',
          rule: {
            "monday": [ 6, 16, 25, 3 ],
            "tuesday": [ 12, 21, 30, 8 ],
            "wednesday": [ 11, 21, 31, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/flowers-on-the-blue-background-1943.jpg',
          title: 'Flowers on the blue background',
          artist: 'Kateryna Bilokur',
          year: '1942 - 1943',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 25, 3 ],
            "wednesday": [ 12, 21, 30, 8 ],
            "thursday": [ 11, 21, 31, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/indeed-1991.jpg',
          title: 'Indeed',
          artist: 'Valerie Jaudon',
          year: '1991',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 25, 3 ],
            "thursday": [ 12, 21, 30, 8 ],
            "friday": [ 11, 21, 31, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/inhabited-painting-1976.jpg',
          title: 'Inhabited Painting',
          artist: 'Helena Almeida',
          year: '1976',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 25, 3 ],
            "friday": [ 12, 21, 30, 8 ],
            "saturday": [ 11, 21, 31, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/smiling-girl-1921.jpg',
          title: 'Smiling Girl',
          artist: 'Helene Schjerfbeck',
          year: '1921',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 25, 4 ],
            "friday": [ 6, 16, 25, 3 ],
            "saturday": [ 12, 21, 30, 8 ],
            "sunday": [ 11, 21, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/portrait-d-une-n-gresse-1800.jpg',
          title: 'Portrait d\'une négresse',
          artist: 'Marie-Guillemine Benoist',
          year: '1800',
          rule: {
            "monday": [ 11, 21, 31, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 25, 4 ],
            "saturday": [ 6, 16, 25, 3 ],
            "sunday": [ 12, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/venetian-woman-attributed-1.jpg',
          title: 'Venetian Woman (attributed)',
          artist: 'Marietta Robusti',
          year: '?',
          rule: {
            "monday": [ 12, 21, 30, 8 ],
            "tuesday": [ 11, 21, 31, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 25, 4 ],
            "sunday": [ 6, 16, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/young-woman.jpg',
          title: 'Young Woman',
          artist: 'Berthe Morisot',
          year: '1871',
          rule: {
            "monday": [ 6, 16, 25, 3 ],
            "tuesday": [ 12, 21, 30, 8 ],
            "wednesday": [ 11, 21, 31, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/blumenstilleben-1954.jpg',
          title: 'Blumenstilleben',
          artist: 'Helen Dahm',
          year: '1954',
          rule: {
            "monday": [ 7, 17, 25, 4 ],
            "tuesday": [ 6, 16, 25, 3 ],
            "wednesday": [ 12, 21, 30, 8 ],
            "thursday": [ 11, 21, 31, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/accordment-series-15-on-its-way-1977.jpg',
          title: 'Accordment Series #15: On Its Way',
          artist: 'Perle Fine',
          year: '1977',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 25, 4 ],
            "wednesday": [ 6, 16, 25, 3 ],
            "thursday": [ 12, 21, 30, 8 ],
            "friday": [ 11, 21, 31, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-model-1925.jpg',
          title: 'The Model',
          artist: 'Tamara de Lempicka',
          year: '1925',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 25, 4 ],
            "thursday": [ 6, 16, 25, 3 ],
            "friday": [ 12, 21, 30, 8 ],
            "saturday": [ 11, 21, 31, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/a-young-woman-seated-by-a-window.jpg',
          title: 'A YOUNG WOMAN SEATED BY A WINDOW',
          artist: 'Marie-Denise Villers',
          year: '?',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 26, 5 ],
            "friday": [ 7, 17, 26, 4 ],
            "saturday": [ 13, 22, 31, 9 ],
            "sunday": [ 12, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/mountain-landscape-switzerland-1914.jpg',
          title: 'Mountain landscape. Switzerland',
          artist: 'Zinaida Serebriakova',
          year: '1914',
          rule: {
            "monday": [ 12, 22, 1, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 26, 5 ],
            "saturday": [ 7, 17, 26, 4 ],
            "sunday": [ 13, 22, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/abstract-1954.jpg',
          title: 'Abstract',
          artist: 'Sonya Rapoport',
          year: '1954',
          rule: {
            "monday": [ 13, 22, 31, 9 ],
            "tuesday": [ 12, 22, 1, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 26, 5 ],
            "sunday": [ 7, 17, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-deluge.jpg',
          title: 'The Deluge',
          artist: 'Winifred Knights',
          year: '1920',
          rule: {
            "monday": [ 7, 17, 26, 4 ],
            "tuesday": [ 13, 22, 31, 9 ],
            "wednesday": [ 12, 22, 1, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/kusama-in-a-foreign-country.jpg',
          title: 'Kusama In A Foreign Country',
          artist: 'Yayoi Kusama',
          year: '?',
          rule: {
            "monday": [ 8, 18, 26, 5 ],
            "tuesday": [ 7, 17, 26, 4 ],
            "wednesday": [ 13, 22, 31, 9 ],
            "thursday": [ 12, 22, 1, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/erin-hanson-crystal-light.jpg',
          title: 'Crystal Light',
          artist: 'Erin Hanson',
          year: '2016',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 26, 5 ],
            "wednesday": [ 7, 17, 26, 4 ],
            "thursday": [ 13, 22, 31, 9 ],
            "friday": [ 12, 22, 1, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/face-eater-2004.jpg',
          title: 'Face Eater',
          artist: 'Dana Schutz',
          year: '2004',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 26, 5 ],
            "thursday": [ 7, 17, 26, 4 ],
            "friday": [ 13, 22, 31, 9 ],
            "saturday": [ 12, 22, 1, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/blue-sky-1932.jpg',
          title: 'Blue Sky',
          artist: 'Emily Carr',
          year: '1932',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 27, 6 ],
            "friday": [ 8, 18, 27, 5 ],
            "saturday": [ 14, 23, 1, 10 ],
            "sunday": [ 13, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled(4).jpg',
          title: 'Untitled',
          artist: 'Hilma af Klint',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 27, 6 ],
            "saturday": [ 8, 18, 27, 5 ],
            "sunday": [ 14, 23, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/will-eat-you-to-make-you-mine-2009.jpg',
          title: 'Will Eat You to Make You Mine',
          artist: 'Samira Eskandarfar',
          year: '2009',
          rule: {
            "monday": [ 14, 23, 1, 10 ],
            "tuesday": [ 13, 23, 2, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 27, 6 ],
            "sunday": [ 8, 18, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/comforter-2007.jpg',
          title: 'Comforter',
          artist: 'Catherine Murphy',
          year: '2007',
          rule: {
            "monday": [ 8, 18, 27, 5 ],
            "tuesday": [ 14, 23, 1, 10 ],
            "wednesday": [ 13, 23, 2, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-blue-room-wissett-lodge-1916.jpg',
          title: 'The Blue Room, Wissett Lodge',
          artist: 'Vanessa Bell',
          year: '1916',
          rule: {
            "monday": [ 9, 19, 27, 6 ],
            "tuesday": [ 8, 18, 27, 5 ],
            "wednesday": [ 14, 23, 1, 10 ],
            "thursday": [ 13, 23, 2, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/flower-markets-with-white-umbrella.jpg',
          title: 'Flower Markets with White Umbrella',
          artist: 'Ethel Carrick',
          year: '?',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 27, 6 ],
            "wednesday": [ 8, 18, 27, 5 ],
            "thursday": [ 14, 23, 1, 10 ],
            "friday": [ 13, 23, 2, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-last-act-1929.jpg',
          title: 'The Last Act',
          artist: 'Laura Knight',
          year: '1929',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 27, 6 ],
            "thursday": [ 8, 18, 27, 5 ],
            "friday": [ 14, 23, 1, 10 ],
            "saturday": [ 13, 23, 2, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-easy-isn-t-done-easy-2007.jpg',
          title: 'The easy isn\'t done easy',
          artist: 'Tea Jorjadze',
          year: '2007',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 28, 7 ],
            "friday": [ 9, 19, 28, 6 ],
            "saturday": [ 15, 24, 2, 11 ],
            "sunday": [ 14, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/arena-v-1978.jpg',
          title: 'Arena V',
          artist: 'Dorothea Rockburne',
          year: '1978',
          rule: {
            "monday": [ 14, 24, 3, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 28, 7 ],
            "saturday": [ 9, 19, 28, 6 ],
            "sunday": [ 15, 24, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/champs-de-petrol-2013.jpg',
          title: 'Oil Fields',
          artist: 'Etel Adnan',
          year: '2013',
          rule: {
            "monday": [ 15, 24, 2, 11 ],
            "tuesday": [ 14, 24, 3, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 28, 7 ],
            "sunday": [ 9, 19, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/blumen.jpg',
          title: 'Blumen',
          artist: 'Helen Dahm',
          year: '?',
          rule: {
            "monday": [ 9, 19, 28, 6 ],
            "tuesday": [ 15, 24, 2, 11 ],
            "wednesday": [ 14, 24, 3, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/pillars-of-salt.jpg',
          title: 'Pillars of salt',
          artist: 'Natalia Goncharova',
          year: '1908',
          rule: {
            "monday": [ 10, 20, 28, 7 ],
            "tuesday": [ 9, 19, 28, 6 ],
            "wednesday": [ 15, 24, 2, 11 ],
            "thursday": [ 14, 24, 3, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/glimpse-upon-waking-1976.jpg',
          title: 'Glimpse Upon Waking',
          artist: 'Winifred Nicholson',
          year: '1976',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 28, 7 ],
            "wednesday": [ 9, 19, 28, 6 ],
            "thursday": [ 15, 24, 2, 11 ],
            "friday": [ 14, 24, 3, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/stadia-ii-2004.jpg',
          title: 'Stadia II',
          artist: 'Julie Mehretu',
          year: '2004',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 28, 7 ],
            "thursday": [ 9, 19, 28, 6 ],
            "friday": [ 15, 24, 2, 11 ],
            "saturday": [ 14, 24, 3, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/flat-jumbo-clips-2009.jpg',
          title: 'Flat Jumbo [Clips]',
          artist: 'Sarah Morris',
          year: '2009',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 29, 8 ],
            "friday": [ 10, 20, 29, 7 ],
            "saturday": [ 16, 25, 3, 12 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/boy-with-rooster.jpg',
          title: 'Boy with rooster',
          artist: 'Natalia Goncharova',
          year: '1910',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 29, 8 ],
            "saturday": [ 10, 20, 29, 7 ],
            "sunday": [ 16, 25, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/women-s-costume-1918.jpg',
          title: 'Women\'s costume',
          artist: 'Aleksandra Ekster',
          year: '1918',
          rule: {
            "monday": [ 16, 25, 3, 12 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 29, 8 ],
            "sunday": [ 10, 20, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/chamin-s-alentejanas.jpg',
          title: 'Chaminés alentejanas',
          artist: 'Mily Possoz',
          year: '?',
          rule: {
            "monday": [ 10, 20, 29, 7 ],
            "tuesday": [ 16, 25, 3, 12 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-blue-octagon-1964.jpg',
          title: 'Untitled (Blue Octagon)',
          artist: 'Mary Corse',
          year: '1964',
          rule: {
            "monday": [ 11, 21, 29, 8 ],
            "tuesday": [ 10, 20, 29, 7 ],
            "wednesday": [ 16, 25, 3, 12 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/arm-extensions-1968.jpg',
          title: 'Arm Extensions',
          artist: 'Rebecca Horn',
          year: '1968',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 29, 8 ],
            "wednesday": [ 10, 20, 29, 7 ],
            "thursday": [ 16, 25, 3, 12 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/ladder-1981.jpg',
          title: 'Ladder',
          artist: 'Harmony Hammond',
          year: '1981',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 29, 8 ],
            "thursday": [ 10, 20, 29, 7 ],
            "friday": [ 16, 25, 3, 12 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/mad-russian-blanket-1977.jpg',
          title: 'Mad Russian Blanket',
          artist: 'Joyce Kozloff',
          year: '1977',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 30, 9 ],
            "friday": [ 11, 21, 30, 8 ],
            "saturday": [ 17, 26, 4, 13 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-dancer-1938.jpg',
          title: 'The Dancer',
          artist: 'Greta Freist',
          year: '1938',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 30, 9 ],
            "saturday": [ 11, 21, 30, 8 ],
            "sunday": [ 17, 26, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/3human-theatre-100by100cm-2016.jpg',
          title: 'Human Theatre',
          artist: 'Li CHEVALIER',
          year: '2016',
          rule: {
            "monday": [ 17, 26, 4, 13 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 30, 9 ],
            "sunday": [ 11, 21, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/touch-me-2011.jpg',
          title: 'Touch Me',
          artist: 'Regine Schumann',
          year: '2011',
          rule: {
            "monday": [ 11, 21, 30, 8 ],
            "tuesday": [ 17, 26, 4, 13 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/old-vw-with-shadow.jpg',
          title: 'Old VW with Shadow',
          artist: 'L Yaffe',
          year: '?',
          rule: {
            "monday": [ 12, 22, 30, 9 ],
            "tuesday": [ 11, 21, 30, 8 ],
            "wednesday": [ 17, 26, 4, 13 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/imgp-rosa-rot-malwerk-silvia-l-lueftenegger-contemporary-art-design-performance-theater-shoe-6880p.jpg',
          title: 'IMGP Rosa Rot Malwerk Silvia L Lueftenegger Contemporary Art Design Performance Theater Shoe 6880P',
          artist: 'Silvia L. Lueftenegger RosaRot',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 30, 9 ],
            "wednesday": [ 11, 21, 30, 8 ],
            "thursday": [ 17, 26, 4, 13 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/abstract.jpg',
          title: 'Abstract',
          artist: 'Gillian Ayres',
          year: '?',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 30, 9 ],
            "thursday": [ 11, 21, 30, 8 ],
            "friday": [ 17, 26, 4, 13 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/ninth-vision-personification-of-god-s-power.jpg',
          title: 'Ninth Vision. Personification of God\'s power',
          artist: 'Hildegard of Bingen',
          year: '?',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 31, 10 ],
            "friday": [ 12, 22, 31, 9 ],
            "saturday": [ 18, 27, 5, 14 ],
            "sunday": [ 17, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/ink-bamboo.jpg',
          title: 'Ink Bamboo',
          artist: 'Guan Daosheng',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 31, 10 ],
            "saturday": [ 12, 22, 31, 9 ],
            "sunday": [ 18, 27, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/portrait-of-five-women-with-a-dog-and-a-parrot.jpg',
          title: 'Portrait of Five Women with a Dog and a Parrot',
          artist: 'Lavinia Fontana',
          year: '?',
          rule: {
            "monday": [ 18, 27, 5, 14 ],
            "tuesday": [ 17, 27, 6, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 31, 10 ],
            "sunday": [ 12, 22, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/judith-with-the-head-of-holofernes-1596.jpg',
          title: 'Judith with the Head of Holofernes',
          artist: 'Fede Galizia',
          year: '1596',
          rule: {
            "monday": [ 12, 22, 31, 9 ],
            "tuesday": [ 18, 27, 5, 14 ],
            "wednesday": [ 17, 27, 6, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/display-image-2.jpg',
          title: 'At the Market Stall',
          artist: 'Louise Moillon',
          year: '?',
          rule: {
            "monday": [ 13, 23, 31, 10 ],
            "tuesday": [ 12, 22, 31, 9 ],
            "wednesday": [ 18, 27, 5, 14 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/mary-beale-self-portrait.JPG',
          title: 'Self-portrait',
          artist: 'Mary Beale',
          year: '1680',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 31, 10 ],
            "wednesday": [ 12, 22, 31, 9 ],
            "thursday": [ 18, 27, 5, 14 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/allegory-of-music-1712.jpg',
          title: 'Allegory of Music',
          artist: 'Rosalba Carriera',
          year: '1712',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 31, 10 ],
            "thursday": [ 12, 22, 31, 9 ],
            "friday": [ 18, 27, 5, 14 ],
            "saturday": [ 17, 27, 6, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/still-life-with-tuft-of-marine-plants-shells-and-corals-1769.jpg',
          title: 'Still-Life with Tuft of Marine Plants, Shells and Corals',
          artist: 'Anne Vallayer-Coster',
          year: '1769',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 1, 11 ],
            "friday": [ 13, 23, 1, 10 ],
            "saturday": [ 19, 28, 6, 15 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/une-tude-de-femme-d-apr-s-nature-portrait-de-madame-soustras.jpg',
          title: 'Une étude de femme d\'après nature (Portrait de Madame Soustras)',
          artist: 'Marie-Denise Villers',
          year: '?',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 1, 11 ],
            "saturday": [ 13, 23, 1, 10 ],
            "sunday": [ 19, 28, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/oxen-pulling-a-cart.jpg',
          title: 'Oxen Pulling a Cart',
          artist: 'Rosa Bonheur',
          year: '?',
          rule: {
            "monday": [ 19, 28, 6, 15 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 1, 11 ],
            "sunday": [ 13, 23, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/before-the-theatre.jpg',
          title: 'Before the Theatre',
          artist: 'Berthe Morisot',
          year: 'c.1875',
          rule: {
            "monday": [ 13, 23, 1, 10 ],
            "tuesday": [ 19, 28, 6, 15 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/child-in-a-gerden-giverny-1909.jpg',
          title: 'Child in a Gerden, Giverny',
          artist: 'Lilla Cabot Perry',
          year: '1909',
          rule: {
            "monday": [ 14, 24, 1, 11 ],
            "tuesday": [ 13, 23, 1, 10 ],
            "wednesday": [ 19, 28, 6, 15 ],
            "thursday": [ 18, 28, 7, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/display-image-15.jpg',
          title: 'In the Flowers',
          artist: 'Louise Abbéma',
          year: '1892',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 1, 11 ],
            "wednesday": [ 13, 23, 1, 10 ],
            "thursday": [ 19, 28, 6, 15 ],
            "friday": [ 18, 28, 7, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/anna-ancher-sunlight-in-the-blue-room-google-art-project.jpg',
          title: 'Sunlight in the Blue Room',
          artist: 'Anna Ancher',
          year: '1891',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 1, 11 ],
            "thursday": [ 13, 23, 1, 10 ],
            "friday": [ 19, 28, 6, 15 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-swan-no-17-1915(1).jpg',
          title: 'The Swan (No. 17)',
          artist: 'Hilma af Klint',
          year: '1914 - 1915',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 3, 13 ],
            "thursday": [ 15, 25, 2, 12 ],
            "friday": [ 14, 24, 2, 11 ],
            "saturday": [ 20, 29, 7, 16 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/frontispiece-the-tailor-mouse.jpg',
          title: 'Frontispiece. The Tailor Mouse',
          artist: 'Beatrix Potter',
          year: '1902',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 2, 12 ],
            "saturday": [ 14, 24, 2, 11 ],
            "sunday": [ 20, 29, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/petersburg-the-summer-garden-in-winter-1902.jpg',
          title: 'Petersburg. The Summer Garden in winter.',
          artist: 'Anna Ostroumova-Lebedeva',
          year: '1902',
          rule: {
            "monday": [ 20, 29, 7, 16 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 2, 12 ],
            "sunday": [ 14, 24, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/children-and-nurses-1910.jpg',
          title: 'Children and Nurses',
          artist: 'Ethel Carrick',
          year: '1910',
          rule: {
            "monday": [ 14, 24, 2, 11 ],
            "tuesday": [ 20, 29, 7, 16 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/yang-gui-fei-1922.jpg',
          title: 'Yang gui fei',
          artist: 'Uemura Shoen',
          year: '1922',
          rule: {
            "monday": [ 15, 25, 2, 12 ],
            "tuesday": [ 14, 24, 2, 11 ],
            "wednesday": [ 20, 29, 7, 16 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/little-girl-wearing-large-hat.jpg',
          title: 'Little girl wearing large hat',
          artist: 'Gwen John',
          year: '?',
          rule: {
            "monday": [ 16, 26, 3, 13 ],
            "tuesday": [ 15, 25, 2, 12 ],
            "wednesday": [ 14, 24, 2, 11 ],
            "thursday": [ 20, 29, 7, 16 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitledDahm.jpg',
          title: 'Untitled',
          artist: 'Helen Dahm',
          year: '?',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 3, 13 ],
            "wednesday": [ 15, 25, 2, 12 ],
            "thursday": [ 14, 24, 2, 11 ],
            "friday": [ 20, 29, 7, 16 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/orange-vendor-spain.jpg',
          title: 'Orange Vendor, Spain',
          artist: 'Natalia Goncharova',
          year: '1916',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 3, 13 ],
            "friday": [ 15, 25, 3, 12 ],
            "saturday": [ 21, 30, 8, 17 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/artemis.jpg',
          title: 'Artemis',
          artist: 'Marie Laurencin',
          year: '?',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 3, 13 ],
            "saturday": [ 15, 25, 3, 12 ],
            "sunday": [ 21, 30, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/three-women-dressed-simultaneously.jpg',
          title: 'Three Women dressed simultaneously',
          artist: 'Sonia Delaunay',
          year: '?',
          rule: {
            "monday": [ 21, 30, 8, 17 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 3, 13 ],
            "sunday": [ 15, 25, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/nude-series-viii.jpg',
          title: 'Nude Series VIII',
          artist: 'Georgia O\'Keeffe',
          year: '1917',
          rule: {
            "monday": [ 15, 25, 3, 12 ],
            "tuesday": [ 21, 30, 8, 17 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/composition-dans-un-cercle-1937.jpg',
          title: 'Composition dans un cercle',
          artist: 'Sophie Taeuber-Arp',
          year: '1937',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 4, 13 ],
            "wednesday": [ 22, 31, 9, 18 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-from-an-ethnographic-museum-1930.jpg',
          title: 'Untitled (From an Ethnographic Museum)',
          artist: 'Hannah Hoch',
          year: '1930',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 4, 13 ],
            "thursday": [ 22, 31, 9, 18 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/a-little-boy-lost-1920-11.jpg',
          title: 'A Little Boy Lost',
          artist: 'Dorothy Lathrop',
          year: '1920',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 4, 13 ],
            "friday": [ 22, 31, 9, 18 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/sea-treasures-1952.jpg',
          title: 'Sea Treasures',
          artist: 'Winifred Nicholson',
          year: '1952',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 4, 14 ],
            "friday": [ 16, 26, 4, 13 ],
            "saturday": [ 22, 31, 9, 18 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/unknown-title-44.jpg',
          title: 'unknown title',
          artist: 'Antonietta Raphael',
          year: '?',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 4, 14 ],
            "saturday": [ 16, 26, 4, 13 ],
            "sunday": [ 22, 31, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/rollande-1929.jpg',
          title: 'Rollande',
          artist: 'Prudence Heward',
          year: '1929',
          rule: {
            "monday": [ 22, 31, 9, 18 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 4, 14 ],
            "sunday": [ 16, 26, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/jeanne-he-buterne-autoportrait.jpg',
          title: 'Self portrait',
          artist: 'Jeanne Hébuterne',
          year: '1916',
          rule: {
            "monday": [ 16, 26, 4, 13 ],
            "tuesday": [ 22, 31, 9, 18 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/santissima-trinita-1928.jpg',
          title: 'Santissima Trinita',
          artist: 'Winifred Knights',
          year: '1928',
          rule: {
            "monday": [ 17, 27, 4, 14 ],
            "tuesday": [ 16, 26, 4, 13 ],
            "wednesday": [ 22, 31, 9, 18 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/still-life-1.jpg',
          title: 'Still Life',
          artist: 'Gohar Fermanyan',
          year: '?',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 4, 14 ],
            "wednesday": [ 16, 26, 4, 13 ],
            "thursday": [ 22, 31, 9, 18 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/totem-materia.jpg',
          title: 'Totem Materia',
          artist: 'Betty Parsons',
          year: '?',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 4, 14 ],
            "thursday": [ 16, 26, 4, 13 ],
            "friday": [ 22, 31, 9, 18 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-1975 (1).jpg',
          title: 'Untitled',
          artist: 'Bice Lazzari',
          year: '1975',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 5, 15 ],
            "friday": [ 17, 27, 5, 14 ],
            "saturday": [ 23, 1, 10, 19 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/caracas-1957.jpg',
          title: 'Caracas',
          artist: 'Lolo Soldevilla',
          year: '1957',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 5, 15 ],
            "saturday": [ 17, 27, 5, 14 ],
            "sunday": [ 23, 1, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/steiner-surface-1973.jpg',
          title: 'Steiner Surface',
          artist: 'Ruth Vollmer',
          year: '1973',
          rule: {
            "monday": [ 23, 1, 10, 19 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 5, 15 ],
            "sunday": [ 17, 27, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-love-embrace-of-the-universe-the-earth-mexico-myself-diego-and-señor-xólotl-1949.jpg',
          title: 'The Love Embrace of the Universe, the Earth (Mexico), Myself, Diego and Señor Xólotl',
          artist: 'Frida Kahlo',
          year: '1949',
          rule: {
            "monday": [ 17, 27, 5, 14 ],
            "tuesday": [ 23, 1, 10, 19 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/candelabra-1935.jpg',
          title: 'Candelabra',
          artist: 'Dora Maar',
          year: '1935',
          rule: {
            "monday": [ 18, 28, 5, 15 ],
            "tuesday": [ 17, 27, 5, 14 ],
            "wednesday": [ 23, 1, 10, 19 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/k-k-1933.jpg',
          title: 'Kô & Kô',
          artist: 'Maria Helena Vieira da Silva',
          year: '1933',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 5, 15 ],
            "wednesday": [ 17, 27, 5, 14 ],
            "thursday": [ 23, 1, 10, 19 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/lady-godiva-1959.jpg',
          title: 'Lady Godiva',
          artist: 'Remedios Varo',
          year: '1959',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 5, 15 ],
            "thursday": [ 17, 27, 5, 14 ],
            "friday": [ 23, 1, 10, 19 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/feminine-character.jpg',
          title: 'Feminine character',
          artist: 'Hedda Sterne',
          year: '?',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 6, 16 ],
            "friday": [ 18, 28, 6, 15 ],
            "saturday": [ 24, 2, 11, 20 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/cinda.jpg',
          title: 'Cinderella',
          artist: 'Mary Blair',
          year: '?',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 6, 16 ],
            "saturday": [ 18, 28, 6, 15 ],
            "sunday": [ 24, 2, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/witches-in-preparation-1981.jpg',
          title: 'Witches in Preparation',
          artist: 'Ilka Gedo',
          year: '1981',
          rule: {
            "monday": [ 24, 2, 11, 20 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 6, 16 ],
            "sunday": [ 18, 28, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/sleeping-woman-1933.jpg',
          title: 'Sleeping woman',
          artist: 'Amrita Sher-Gil',
          year: '1933',
          rule: {
            "monday": [ 18, 28, 6, 15 ],
            "tuesday": [ 24, 2, 11, 20 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/house-of-cards-1987.jpg',
          title: 'House of Cards',
          artist: 'Piroska Szanto',
          year: '1987',
          rule: {
            "monday": [ 19, 29, 6, 16 ],
            "tuesday": [ 18, 28, 6, 15 ],
            "wednesday": [ 24, 2, 11, 20 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/two-women-on-the-shore-1977.jpg',
          title: 'Two women on the shore',
          artist: 'Mary Fedden',
          year: '1977',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 6, 16 ],
            "wednesday": [ 18, 28, 6, 15 ],
            "thursday": [ 24, 2, 11, 20 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/finale-1979.jpg',
          title: 'Finale',
          artist: 'Edna Andrade',
          year: '1979',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 6, 16 ],
            "thursday": [ 18, 28, 6, 15 ],
            "friday": [ 24, 2, 11, 20 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/bacchus-69-purple-and-green-1982.jpg',
          title: 'Bacchus #69 (purple and green)',
          artist: 'Elaine de Kooning',
          year: '1982',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 7, 17 ],
            "friday": [ 19, 29, 7, 16 ],
            "saturday": [ 25, 3, 12, 21 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/lafarina1952.jpg',
          title: 'The flour',
          artist: 'Maria Lai',
          year: '1952',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 7, 17 ],
            "saturday": [ 19, 29, 7, 16 ],
            "sunday": [ 25, 3, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/homenaje-a-max-bill-o-guatemala.jpg',
          title: 'Homenaje a Max Bill o Guatemala',
          artist: 'Lidy Prati',
          year: '?',
          rule: {
            "monday": [ 25, 3, 12, 21 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 7, 17 ],
            "sunday": [ 19, 29, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/throughout-the-neighbourhood.jpg',
          title: 'Throughout the Neighbourhood',
          artist: 'Tia Peltz',
          year: '?',
          rule: {
            "monday": [ 19, 29, 7, 16 ],
            "tuesday": [ 25, 3, 12, 21 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/digital-mudra-1989.jpg',
          title: 'Digital Mudra',
          artist: 'Sonya Rapoport',
          year: '1989',
          rule: {
            "monday": [ 20, 30, 7, 17 ],
            "tuesday": [ 19, 29, 7, 16 ],
            "wednesday": [ 25, 3, 12, 21 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/eventide-2002.jpg',
          title: 'Eventide',
          artist: 'Jane Wilson',
          year: '2002',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 7, 17 ],
            "wednesday": [ 19, 29, 7, 16 ],
            "thursday": [ 25, 3, 12, 21 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-1963-1.jpg',
          title: 'Untitled',
          artist: 'Tsuruko Yamazaki',
          year: '1963',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 7, 17 ],
            "thursday": [ 19, 29, 7, 16 ],
            "friday": [ 25, 3, 12, 21 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/plant.jpg',
          title: 'Plant',
          artist: 'Maria Stolarova',
          year: '?',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 8, 18 ],
            "friday": [ 20, 30, 8, 17 ],
            "saturday": [ 26, 4, 13, 22 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/sem-t-tulo-1.jpg',
          title: 'Sem título',
          artist: 'Menez',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 8, 18 ],
            "saturday": [ 20, 30, 8, 17 ],
            "sunday": [ 26, 4, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-1985.jpg',
          title: 'Untitled',
          artist: 'Hannelore Baron',
          year: '1985',
          rule: {
            "monday": [ 26, 4, 13, 22 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 8, 18 ],
            "sunday": [ 20, 30, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/seeing-the-moon-on-a-hot-summer-day-1987.jpg',
          title: 'Seeing the Moon on a Hot Summer Day',
          artist: 'Helen Frankenthaler',
          year: '1987',
          rule: {
            "monday": [ 20, 30, 8, 17 ],
            "tuesday": [ 26, 4, 13, 22 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/glass-slippers-1960.jpg',
          title: 'Glass Slippers',
          artist: 'Jo Baer',
          year: '1960',
          rule: {
            "monday": [ 21, 31, 8, 18 ],
            "tuesday": [ 20, 30, 8, 17 ],
            "wednesday": [ 26, 4, 13, 22 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/cultural-head-1973.jpg',
          title: 'Cultural Head',
          artist: 'Marisol Escobar',
          year: '1973',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 8, 18 ],
            "wednesday": [ 20, 30, 8, 17 ],
            "thursday": [ 26, 4, 13, 22 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/luna-de-silencio-1961.jpg',
          title: 'Luna de silencio',
          artist: 'Lilia Carrillo',
          year: '1961',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 8, 18 ],
            "thursday": [ 20, 30, 8, 17 ],
            "friday": [ 26, 4, 13, 22 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-1985-.jpg',
          title: 'Untitled',
          artist: 'Lee Bontecou',
          year: '1985',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 21, 31, 9, 18 ],
            "saturday": [ 27, 5, 14, 23 ],
            "sunday": [ 26, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/89m-1989.jpg',
          title: '89m',
          artist: 'Atsuko Tanaka',
          year: '1989',
          rule: {
            "monday": [ 26, 5, 15, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 21, 31, 9, 18 ],
            "sunday": [ 27, 5, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/descending-2010.jpg',
          title: 'Descending',
          artist: 'Marjorie Strider',
          year: '2010',
          rule: {
            "monday": [ 27, 5, 14, 23 ],
            "tuesday": [ 26, 5, 15, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 21, 31, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/colored-alphabet-1982.jpg',
          title: 'Colored Alphabet',
          artist: 'Sheila Hicks',
          year: '1982',
          rule: {
            "monday": [ 21, 31, 9, 18 ],
            "tuesday": [ 27, 5, 14, 23 ],
            "wednesday": [ 26, 5, 15, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/ice-cream-1964.jpg',
          title: 'Ice Cream',
          artist: 'Evelyne Axell',
          year: '1964',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 21, 31, 9, 18 ],
            "wednesday": [ 27, 5, 14, 23 ],
            "thursday": [ 26, 5, 15, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-1965-2.jpg',
          title: 'Untitled',
          artist: 'Eva Hesse',
          year: '1965',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 21, 31, 9, 18 ],
            "thursday": [ 27, 5, 14, 23 ],
            "friday": [ 26, 5, 15, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-1960.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1960',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 21, 31, 9, 18 ],
            "friday": [ 27, 5, 14, 23 ],
            "saturday": [ 26, 5, 15, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/july-waterfall-1991.jpg',
          title: 'July Waterfall',
          artist: 'Pat Steir',
          year: '1991',
          rule: {
            "monday": [ 27, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 22, 1, 10, 19 ],
            "saturday": [ 28, 6, 15, 24 ],
            "sunday": [ 27, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/bum-1966.jpg',
          title: 'Bum',
          artist: 'Pauline Boty',
          year: '1966',
          rule: {
            "monday": [ 27, 6, 16, 24 ],
            "tuesday": [ 27, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 22, 1, 10, 19 ],
            "sunday": [ 28, 6, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/drypoint-ocean-surface-1983.jpg',
          title: 'Drypoint - Ocean Surface',
          artist: 'Vija Celmins',
          year: '1983',
          rule: {
            "monday": [ 28, 6, 15, 24 ],
            "tuesday": [ 27, 6, 16, 24 ],
            "wednesday": [ 27, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 22, 1, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/glowing-1970.jpg',
          title: 'Glowing',
          artist: 'Pat Lipsky',
          year: '1970',
          rule: {
            "monday": [ 22, 1, 10, 19 ],
            "tuesday": [ 28, 6, 15, 24 ],
            "wednesday": [ 27, 6, 16, 24 ],
            "thursday": [ 27, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/burnt-piece-1978.jpg',
          title: 'Burnt Piece',
          artist: 'Jacqueline Winsor',
          year: '1978',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 22, 1, 10, 19 ],
            "wednesday": [ 28, 6, 15, 24 ],
            "thursday": [ 27, 6, 16, 24 ],
            "friday": [ 27, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/art-historian-s-joke-renaissance-woman-1986.jpg',
          title: 'Art Historian’s Joke: Renaissance Woman',
          artist: 'Joyce Kozloff',
          year: '1986',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 22, 1, 10, 19 ],
            "thursday": [ 28, 6, 15, 24 ],
            "friday": [ 27, 6, 16, 24 ],
            "saturday": [ 27, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/double-elegy-2007.jpg',
          title: 'Double Elegy',
          artist: 'Harmony Hammond',
          year: '2007',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 22, 1, 10, 19 ],
            "friday": [ 28, 6, 15, 24 ],
            "saturday": [ 27, 6, 16, 24 ],
            "sunday": [ 27, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/night-dreamers.jpg',
          title: 'Night Dreamers',
          artist: 'Guity Novin',
          year: '2005',
          rule: {
            "monday": [ 28, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 23, 2, 11, 20 ],
            "saturday": [ 29, 7, 16, 25 ],
            "sunday": [ 28, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-money-can-buy-you-love-1985.jpg',
          title: 'Untitled (Money can buy you love)',
          artist: 'Barbara Kruger',
          year: '1985',
          rule: {
            "monday": [ 28, 7, 17, 25 ],
            "tuesday": [ 28, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 23, 2, 11, 20 ],
            "sunday": [ 29, 7, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/blu-lascaux-1999.jpg',
          title: 'Blu Lascaux',
          artist: 'Denise Green',
          year: '1999',
          rule: {
            "monday": [ 29, 7, 16, 25 ],
            "tuesday": [ 28, 7, 17, 25 ],
            "wednesday": [ 28, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 23, 2, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/three-fold-manifestation-ii-1987.jpg',
          title: 'Three-fold Manifestation II',
          artist: 'Alice Aycock',
          year: '1987',
          rule: {
            "monday": [ 23, 2, 11, 20 ],
            "tuesday": [ 29, 7, 16, 25 ],
            "wednesday": [ 28, 7, 17, 25 ],
            "thursday": [ 28, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/eurydice-n-27-1998.jpg',
          title: 'Eurydice n. 27',
          artist: 'Bracha L. Ettinger',
          year: '1998',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 23, 2, 11, 20 ],
            "wednesday": [ 29, 7, 16, 25 ],
            "thursday": [ 28, 7, 17, 25 ],
            "friday": [ 28, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/electrolux.jpg',
          title: 'Electrolux',
          artist: 'Edith Vonnegut',
          year: '?',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 23, 2, 11, 20 ],
            "thursday": [ 29, 7, 16, 25 ],
            "friday": [ 28, 7, 17, 25 ],
            "saturday": [ 28, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/baum-wesen-2007.jpg',
          title: 'Baum-Wesen',
          artist: 'Leiko Ikemura',
          year: '2007',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 23, 2, 11, 20 ],
            "friday": [ 29, 7, 16, 25 ],
            "saturday": [ 28, 7, 17, 25 ],
            "sunday": [ 28, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/susquehanna-2007.jpg',
          title: 'Susquehanna',
          artist: 'Anne Appleby',
          year: '2007',
          rule: {
            "monday": [ 29, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 24, 3, 12, 21 ],
            "saturday": [ 30, 8, 17, 26 ],
            "sunday": [ 29, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/born-2002.jpg',
          title: 'Born',
          artist: 'Kiki Smith',
          year: '2002',
          rule: {
            "monday": [ 29, 8, 18, 26 ],
            "tuesday": [ 29, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 24, 3, 12, 21 ],
            "sunday": [ 30, 8, 17, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-rockhole-site-of-marrapinti-2006.jpg',
          title: 'Untitled (Rockhole Site of Marrapinti)',
          artist: 'Doreen Reid Nakamarra',
          year: '2005',
          rule: {
            "monday": [ 30, 8, 17, 26 ],
            "tuesday": [ 29, 8, 18, 26 ],
            "wednesday": [ 29, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 24, 3, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/mon-corps.jpg',
          title: 'Mon corps',
          artist: 'Miss.Tic',
          year: '?',
          rule: {
            "monday": [ 24, 3, 12, 21 ],
            "tuesday": [ 30, 8, 17, 26 ],
            "wednesday": [ 29, 8, 18, 26 ],
            "thursday": [ 29, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/eye-upon-gate-photocollage-2000.jpg',
          title: 'Eye upon Gate - photo-collage by graphic artist Hilly van Eerten',
          artist: 'Hilly van Eerten',
          year: '2000',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 24, 3, 12, 21 ],
            "wednesday": [ 30, 8, 17, 26 ],
            "thursday": [ 29, 8, 18, 26 ],
            "friday": [ 29, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/291-1997.jpg',
          title: '#291',
          artist: 'Jessica Stockholder',
          year: '1997',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 24, 3, 12, 21 ],
            "thursday": [ 30, 8, 17, 26 ],
            "friday": [ 29, 8, 18, 26 ],
            "saturday": [ 29, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/imgp-rosa-rot-malwerk-silvia-l-lueftenegger-contemporary-art-design-performance-theater-shoe-7486p.jpg',
          title: 'IMGP Rosa Rot Malwerk Silvia L Lueftenegger Contemporary Art Design Performance Theater Shoe 7486P',
          artist: 'Silvia L. Lueftenegger RosaRot',
          year: '2007',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 24, 3, 12, 21 ],
            "friday": [ 30, 8, 17, 26 ],
            "saturday": [ 29, 8, 18, 26 ],
            "sunday": [ 29, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/pont-du-ciel-100by100cm-2016.jpg',
          title: 'Pont Du Ciel',
          artist: 'Li CHEVALIER',
          year: '2016',
          rule: {
            "monday": [ 30, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 25, 4, 13, 22 ],
            "saturday": [ 31, 9, 18, 27 ],
            "sunday": [ 30, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/everyone-i-have-ever-slept-with-1963-1995-1995.jpg',
          title: 'Everyone I Have Ever Slept With 1963–1995',
          artist: 'Tracey Emin',
          year: '1995',
          rule: {
            "monday": [ 30, 9, 19, 27 ],
            "tuesday": [ 30, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 25, 4, 13, 22 ],
            "sunday": [ 31, 9, 18, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/rectangle-torque-glo-pod-iridescent-hot-red-pink-2013.jpg',
          title: 'Rectangle Torque Glo-Pod (Iridescent Hot Red/Pink)',
          artist: 'Gisela Colon',
          year: '2013',
          rule: {
            "monday": [ 31, 9, 18, 27 ],
            "tuesday": [ 30, 9, 19, 27 ],
            "wednesday": [ 30, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 25, 4, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-1995-40-x-45-cm.png',
          title: 'Untitled',
          artist: 'Ilse D\'Hollander',
          year: '1995',
          rule: {
            "monday": [ 25, 4, 13, 22 ],
            "tuesday": [ 31, 9, 18, 27 ],
            "wednesday": [ 30, 9, 19, 27 ],
            "thursday": [ 30, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/untitled-box-2008.jpg',
          title: 'Untitled (Box)',
          artist: 'Tea Jorjadze',
          year: '2008',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 25, 4, 13, 22 ],
            "wednesday": [ 31, 9, 18, 27 ],
            "thursday": [ 30, 9, 19, 27 ],
            "friday": [ 30, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/construction-rubble-of-tent-s-central-space-tent-rotterdam-2011.jpg',
          title: 'Construction Rubble of TENT\'s Central Space, TENT Rotterdam',
          artist: 'Lara Almarcegui',
          year: '2011',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 25, 4, 13, 22 ],
            "thursday": [ 31, 9, 18, 27 ],
            "friday": [ 30, 9, 19, 27 ],
            "saturday": [ 30, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/lovers-2003.jpg',
          title: 'Lovers',
          artist: 'Dana Schutz',
          year: '2003',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 25, 4, 13, 22 ],
            "friday": [ 31, 9, 18, 27 ],
            "saturday": [ 30, 9, 19, 27 ],
            "sunday": [ 30, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/cdl-hanuman-image03.jpg',
          title: '26000 Bells of Hanuman Sculpture',
          artist: 'Charuvi Agrawal',
          year: '2014',
          rule: {
            "monday": [ 31, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 26, 5, 14, 23 ],
            "saturday": [ 1, 10, 19, 28 ],
            "sunday": [ 31, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/rq5.jpg',
          title: 'RQ5',
          artist: 'Raquel Díaz',
          year: '2016',
          rule: {
            "monday": [ 31, 10, 20, 28 ],
            "tuesday": [ 31, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 26, 5, 14, 23 ],
            "sunday": [ 1, 10, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/dsc-0279.jpg',
          title: 'Not ur babe embroidery hoop',
          artist: 'Samantha Troulis',
          year: '2017',
          rule: {
            "monday": [ 1, 10, 19, 28 ],
            "tuesday": [ 31, 10, 20, 28 ],
            "wednesday": [ 31, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 26, 5, 14, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/prologue-on-the-synagogue-the-woman-seated-upon-the-beast.jpg',
          title: 'Prologue. On the Synagogue: the woman seated upon the beast',
          artist: 'Ende',
          year: 'c.975',
          rule: {
            "monday": [ 26, 5, 14, 23 ],
            "tuesday": [ 1, 10, 19, 28 ],
            "wednesday": [ 31, 10, 20, 28 ],
            "thursday": [ 31, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/john-baptizing-christ.jpg',
          title: 'John baptizing Christ',
          artist: 'Claricia',
          year: '?',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 26, 5, 14, 23 ],
            "wednesday": [ 1, 10, 19, 28 ],
            "thursday": [ 31, 10, 20, 28 ],
            "friday": [ 31, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/three-children-with-dog-1590.jpg',
          title: 'Three children with dog',
          artist: 'Sofonisba Anguissola',
          year: '1590',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 26, 5, 14, 23 ],
            "thursday": [ 1, 10, 19, 28 ],
            "friday": [ 31, 10, 20, 28 ],
            "saturday": [ 31, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/self-portrait-or-venetian-woman-attributed.jpg',
          title: 'Self-portrait (or Venetian Woman; attributed)',
          artist: 'Marietta Robusti',
          year: '?',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 26, 5, 14, 23 ],
            "friday": [ 1, 10, 19, 28 ],
            "saturday": [ 31, 10, 20, 28 ],
            "sunday": [ 31, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/vanitas-1613.jpg',
          title: 'Vanitas',
          artist: 'Clara Peeters',
          year: '1613',
          rule: {
            "monday": [ 1, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 27, 6, 15, 24 ],
            "saturday": [ 2, 11, 20, 29 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/st-mary-magdalene-1650.jpg',
          title: 'St. Mary Magdalene',
          artist: 'Josefa de Obidos',
          year: '1650',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 1, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 27, 6, 15, 24 ],
            "sunday": [ 2, 11, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/spray-of-flowers-with-a-beetle-on-a-stone-balustrade-1741.jpg',
          title: 'Spray of Flowers, with a Beetle on a Stone Balustrade',
          artist: 'Rachel Ruysch',
          year: '1741',
          rule: {
            "monday": [ 2, 11, 20, 29 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 1, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 27, 6, 15, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/self-portrait-the-artist-hesitating-between-the-arts-of-music-and-painting-1791.jpg',
          title: 'Self Portrait, the Artist Hesitating Between the Arts of Music and Painting',
          artist: 'Angelica Kauffman',
          year: '1791',
          rule: {
            "monday": [ 27, 6, 15, 24 ],
            "tuesday": [ 2, 11, 20, 29 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 1, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/madame-jeanne-desbassayns-de-richemont-and-her-son-eug-ne.jpg',
          title: 'Madame Jeanne Desbassayns de Richemont And Her Son, Eugène',
          artist: 'Marie-Guillemine Benoist',
          year: '?',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 27, 6, 15, 24 ],
            "wednesday": [ 2, 11, 20, 29 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 1, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/saint-cecilia-after-the-manner-of-raphael-1865.jpg',
          title: 'Saint Cecilia, After the Manner of Raphael',
          artist: 'Julia Margaret Cameron',
          year: '1865',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 27, 6, 15, 24 ],
            "thursday": [ 2, 11, 20, 29 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 1, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/forest-interior-mary-josephine-walters-uhd.jpg',
          title: 'Forest Interior',
          artist: 'Mary Josephine Walters',
          year: '?',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 27, 6, 15, 24 ],
            "friday": [ 2, 11, 20, 29 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 1, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/the-sisters.jpg',
          title: 'The Sisters',
          artist: 'Mary Cassatt',
          year: 'c.1885',
          rule: {
            "monday": [ 2, 11, 19, 29 ],
            "tuesday": [ 31, 10, 18, 28 ],
            "wednesday": [ 30, 9, 17, 27 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 28, 7, 16, 25 ],
            "saturday": [ 3, 12, 22, 30 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/woman-awakening-1876.jpg',
          title: 'Woman Awakening',
          artist: 'Eva Gonzales',
          year: '1876',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 2, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 28, 7, 16, 25 ],
            "sunday": [ 3, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/a-murder-of-crows.png',
          title: 'A Murder of Crows',
          artist: 'Mildred Anne Butler',
          year: '?',
          rule: {
            "monday": [ 3, 12, 22, 30 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 2, 11, 19, 29 ],
            "thursday": [ 31, 10, 18, 28 ],
            "friday": [ 30, 9, 17, 27 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 28, 7, 16, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/plow_boy_251609.jpg',
          title: 'Plow Boy',
          artist: 'Grandma Moses',
          year: '1950',
          rule: {
            "monday": [ 28, 7, 16, 25 ],
            "tuesday": [ 3, 12, 22, 30 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 2, 11, 19, 29 ],
            "friday": [ 31, 10, 18, 28 ],
            "saturday": [ 30, 9, 17, 27 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/tree-1930.jpg',
          title: 'Tree',
          artist: 'Seraphine Louis',
          year: '1930',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 28, 7, 16, 25 ],
            "wednesday": [ 3, 12, 22, 30 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 2, 11, 19, 29 ],
            "saturday": [ 31, 10, 18, 28 ],
            "sunday": [ 30, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/dawn-ca-1909.jpg',
          title: 'Dawn',
          artist: 'Alice Boughton',
          year: '1909',
          rule: {
            "monday": [ 30, 9, 17, 27 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 28, 7, 16, 25 ],
            "thursday": [ 3, 12, 22, 30 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 2, 11, 19, 29 ],
            "sunday": [ 31, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/portrait-of-a-woman.jpg',
          title: 'Portrait of a woman',
          artist: 'Thalia Flora-Karavia',
          year: '?',
          rule: {
            "monday": [ 31, 10, 18, 28 ],
            "tuesday": [ 30, 9, 17, 27 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 28, 7, 16, 25 ],
            "friday": [ 3, 12, 22, 30 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 2, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Women\'s History Month',
          img_path: './img/march/blunden-harbour-1930(1).jpg',
          title: 'Blunden Harbour',
          artist: 'Emily Carr',
          year: '1930',
          rule: {
            "monday": [ 3, 12, 20, 30 ],
            "tuesday": [ 1, 11, 19, 29 ],
            "wednesday": [ 31, 10, 18, 28 ],
            "thursday": [ 30, 9, 17, 27 ],
            "friday": [ 29, 8, 17, 26 ],
            "saturday": [ 4, 13, 23, 31 ],
            "sunday": [ 3, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_arts_id_seq', (SELECT MAX(id) FROM march_arts));");
    });
};
