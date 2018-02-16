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
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-intelligent-woman-s-guide-to-socialism-and-capitalism-cover-1927.jpg',
          title: 'The Intelligent Woman\'s Guide to Socialism and Capitalism (cover)',
          artist: 'Eric Ravilious',
          year: '1927',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 24, 3, 13, 23 ],
            "friday": [ 22, 1, 11, 21 ],
            "saturday": [ 20, 30, 9, 19 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/cathedral-of-socialism-1919.jpg',
          title: 'Cathedral of Socialism',
          artist: 'Lyonel Feininger',
          year: '1919',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 24, 3, 13, 23 ],
            "saturday": [ 22, 1, 11, 21 ],
            "sunday": [ 20, 30, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/an-eric-gill-woodcut-from-the-christian-social-book-the-devil-s-devices-by-h-d-c-pepler-showing-a.png',
          title: 'Woodcut from the Christian Social Book the Devil\'s Devices by H.d.c. Pepler, Showing a Bricklayer Overcoming the Devil Through Honest Work',
          artist: 'Eric Gill',
          year: '1915',
          rule: {
            "monday": [ 20, 30, 9, 19 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 24, 3, 13, 23 ],
            "sunday": [ 22, 1, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/worker-and-child-1908.jpg',
          title: 'Worker and Child',
          artist: 'Edvard Munch',
          year: '1908',
          rule: {
            "monday": [ 22, 1, 11, 21 ],
            "tuesday": [ 20, 30, 9, 19 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 24, 3, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-worker-sitting.jpg',
          title: 'The worker sitting',
          artist: 'Fernand Leger',
          year: 'xx Cent.',
          rule: {
            "monday": [ 24, 3, 13, 23 ],
            "tuesday": [ 22, 1, 11, 21 ],
            "wednesday": [ 20, 30, 9, 19 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-forestry-workers.jpg',
          title: 'The Forestry Workers',
          artist: 'Camille Corot',
          year: 'c.1874 - c.1875',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 24, 3, 13, 23 ],
            "wednesday": [ 22, 1, 11, 21 ],
            "thursday": [ 20, 30, 9, 19 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/project-of-poster-the-center-of-textile-workers-in-belgium-celebration-on-18th-september-1938(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium (celebration on 18th september)"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 25, 4, 14, 24 ],
            "thursday": [ 23, 2, 12, 22 ],
            "friday": [ 21, 31, 10, 20 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/project-of-poster-the-center-of-textile-workers-in-belgium-1938-2(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 25, 4, 14, 24 ],
            "friday": [ 23, 2, 12, 22 ],
            "saturday": [ 21, 31, 10, 20 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/mush-with-wineskins-1912(1).jpg',
          title: 'Workers with a barrel (diptych)',
          artist: 'Niko Pirosmani',
          year: '1912',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 25, 4, 14, 24 ],
            "saturday": [ 23, 2, 12, 22 ],
            "sunday": [ 21, 31, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/udarnitzi-record-breaking-workers-at-the-factory-krasnaya-zaria-1931.jpg',
          title: 'Udarnitzi (Record Breaking Workers) at the Factory Krasnaya Zaria',
          artist: 'Pavel Filonov',
          year: '1931',
          rule: {
            "monday": [ 21, 31, 10, 20 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 25, 4, 14, 24 ],
            "sunday": [ 23, 2, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-1916.jpg',
          title: 'Workers',
          artist: 'Pavel Filonov',
          year: '1915 - 1916',
          rule: {
            "monday": [ 23, 2, 12, 22 ],
            "tuesday": [ 21, 31, 10, 20 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 25, 4, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/worker-1933.jpg',
          title: 'Worker',
          artist: 'Kazimir Malevich',
          year: '1933',
          rule: {
            "monday": [ 25, 4, 14, 24 ],
            "tuesday": [ 23, 2, 12, 22 ],
            "wednesday": [ 21, 31, 10, 20 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/a-school-teacher-explaining-the-meaning-of-a-letter-to-illiterate-workers-1516.jpg',
          title: 'A School Teacher Explaining the Meaning of a Letter to Illiterate Workers',
          artist: 'Hans Holbein the Younger',
          year: '1516',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 25, 4, 14, 24 ],
            "wednesday": [ 23, 2, 12, 22 ],
            "thursday": [ 21, 31, 10, 20 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-1927.jpg',
          title: 'Workers',
          artist: 'Martiros Sarian',
          year: '1927',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 24, 3, 13, 23 ],
            "friday": [ 22, 1, 11, 21 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-on-the-beet-field-1876.jpg',
          title: 'Workers on the beet field',
          artist: 'Max Liebermann',
          year: '1876',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 24, 3, 13, 23 ],
            "saturday": [ 22, 1, 11, 21 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bloody-sunday-shooting-workers-near-the-winter-palace-january-9-1905-1.jpg',
          title: 'Bloody Sunday. Shooting workers near the Winter Palace January 9, 1905.',
          artist: 'Ivan Vladimirov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 24, 3, 13, 23 ],
            "sunday": [ 22, 1, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/steel-workers.jpg',
          title: 'Steel Workers',
          artist: 'Corneliu Baba',
          year: 'XX cent.',
          rule: {
            "monday": [ 22, 1, 11, 21 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 24, 3, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/house-workers-in-the-bronx.jpg',
          title: 'House Workers in the Bronx',
          artist: 'Abraham Manievich',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 24, 3, 13, 23 ],
            "tuesday": [ 22, 1, 11, 21 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/farm-farm-workers-mt-williamson-in-background-manzanar-relocation-center-california-1943.jpg',
          title: 'Farm, farm workers, Mt. Williamson in background, Manzanar Relocation Center, California',
          artist: 'Ansel Adams',
          year: '1943',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 24, 3, 13, 23 ],
            "wednesday": [ 22, 1, 11, 21 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/muncitor-agricultura-1931.jpg',
          title: 'Worker (Agriculture)',
          artist: 'Alexandru Phoebus',
          year: '1931',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 26, 5, 15, 25 ],
            "wednesday": [ 24, 3, 13, 23 ],
            "thursday": [ 22, 1, 11, 21 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-in-the-snow-1913.jpg',
          title: 'Workers in the Snow',
          artist: 'Edvard Munch',
          year: '1913',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 25, 4, 14, 24 ],
            "friday": [ 23, 2, 12, 22 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/american-workers-1922.jpg',
          title: 'American workers',
          artist: 'David Burliuk',
          year: '1922',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 25, 4, 14, 24 ],
            "saturday": [ 23, 2, 12, 22 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-in-the-fields.jpg',
          title: 'Workers in the Fields',
          artist: 'Camille Pissarro',
          year: 'c.1896 - c.1897',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 25, 4, 14, 24 ],
            "sunday": [ 23, 2, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/project-of-poster-the-center-of-textile-workers-in-belgium-to-reduce-working-hours-1938(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium (to reduce working hours)"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 23, 2, 12, 22 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 25, 4, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/alliance-of-the-peasant-and-the-industrial-worker-1924.jpg',
          title: 'Alliance of the Peasant and the Industrial Worker',
          artist: 'Diego Rivera',
          year: '1924',
          rule: {
            "monday": [ 25, 4, 14, 24 ],
            "tuesday": [ 23, 2, 12, 22 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/portrait-of-a-railway-worker-misha-meheteli(1).jpg',
          title: 'Portrait of a railway worker (Misha Meheteli)',
          artist: 'Niko Pirosmani',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 25, 4, 14, 24 ],
            "wednesday": [ 23, 2, 12, 22 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/worker-in-a-cap.jpg',
          title: 'Worker in a Cap',
          artist: 'Pavel Filonov',
          year: 'c.1935',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 25, 4, 14, 24 ],
            "thursday": [ 23, 2, 12, 22 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-1920.jpg',
          title: 'Workers',
          artist: 'Pierre Bonnard',
          year: 'c.1916 - 1920',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 24, 3, 13, 23 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/young-worker-1869.jpg',
          title: 'Young Worker',
          artist: 'William-Adolphe Bouguereau',
          year: '1869',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 24, 3, 13, 23 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/a-worker-s-day-1904.jpg',
          title: 'A Worker\'s Day',
          artist: 'Giacomo Balla',
          year: '1904',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 24, 3, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/at-the-workers-outskirts-in-the-days-of-overthrowing-the-autocracy.jpg',
          title: 'At the workers\' outskirts in the days of overthrowing the autocracy',
          artist: 'Ivan Vladimirov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 24, 3, 13, 23 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/garment-workers-exploited-by-fruit-of-the-loom.jpg',
          title: 'Garment Workers Exploited by Fruit of the Loom',
          artist: 'Sue Coe',
          year: 'XX cent.',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 24, 3, 13, 23 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-1935.jpg',
          title: 'Workers',
          artist: 'M. H. Maxy',
          year: '1935',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 26, 5, 15, 25 ],
            "wednesday": [ 24, 3, 13, 23 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/italian-village-workers-making-hats-1880.jpg',
          title: 'Italian village workers making hats',
          artist: 'Peder Severin Kroyer',
          year: '1880',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 24, 3, 13, 23 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/farm-workers-1880.jpg',
          title: 'Farm Workers',
          artist: 'Pierre Emmanuel Damoye',
          year: '1880',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 25, 4, 14, 24 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-on-their-way-home-1915.jpg',
          title: 'Workers on Their Way Home',
          artist: 'Edvard Munch',
          year: '1913 - 1915',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 25, 4, 14, 24 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-1922.jpg',
          title: 'Workers',
          artist: 'David Burliuk',
          year: '1922',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 25, 4, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/worker-and-peasant-1927.jpg',
          title: 'Worker and peasant',
          artist: 'Aleksandr Deyneka',
          year: '1927',
          rule: {
            "monday": [ 25, 4, 14, 24 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/project-of-poster-the-center-of-textile-workers-in-belgium-1938-1(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 25, 4, 14, 24 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/girl-in-red-scarf-worker-1925.jpg',
          title: 'Girl in red scarf (worker)',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1925',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 25, 4, 14, 24 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-workers-1916.jpg',
          title: 'The Workers',
          artist: 'Pavel Filonov',
          year: '1915 - 1916',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 25, 4, 14, 24 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-return-of-the-farm-workers-from-the-fields.jpg',
          title: 'The Return of the Farm Workers from the Fields',
          artist: 'Peter Paul Rubens',
          year: 'c.1640',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 26, 5, 15, 25 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/not_detected_219731.jpg',
          title: 'Workers of all countries unite!',
          artist: 'Kazimir Malevich',
          year: '1918',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 26, 5, 15, 25 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-laundry-worker-1888.jpg',
          title: 'The Laundry Worker',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1884 - 1888',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 26, 5, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/there-is-such-a-party-lenin-on-the-1-st-all-russian-congress-of-workers-and-soldiers-deputies-1934.jpg',
          title: 'There is such a party! (Lenin on the 1st All-Russian Congress of Workers\' and Soldiers\'Deputies in Petrograd)',
          artist: 'Konstantin Yuon',
          year: '1934',
          rule: {
            "monday": [ 26, 5, 15, 25 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/portrait-of-worker-yakobchenko-1938.jpg',
          title: 'Portrait of worker Yakobchenko',
          artist: 'Pyotr Konchalovsky',
          year: '1938',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 26, 5, 15, 25 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-revolt-of-the-soldiers-and-workers-in-the-days-of-february-1917.jpg',
          title: 'The revolt of the soldiers and workers in the days of February 1917',
          artist: 'Ivan Vladimirov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 26, 5, 15, 25 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/woman-worker-1923.jpg',
          title: 'Woman Worker',
          artist: 'Victor Brauner',
          year: '1923',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 26, 5, 15, 25 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/two-workers-on-strike.jpg',
          title: 'Two Workers on Strike',
          artist: 'Nicolae Vermont',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 27, 6, 16, 26 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/field-workers-1961.jpg',
          title: 'Field Workers',
          artist: 'Josef Herman',
          year: '1961',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 27, 6, 16, 26 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/hotel-worker-1952.jpg',
          title: 'Hotel Worker',
          artist: 'Varlin',
          year: '1952',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 27, 6, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-on-their-way-home-i-1920.jpg',
          title: 'Workers on their way home I',
          artist: 'Edvard Munch',
          year: '1918 - 1920',
          rule: {
            "monday": [ 27, 6, 16, 26 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 29, 8, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/a-worker-with-the-lamp-1951.jpg',
          title: 'A worker with the lamp',
          artist: 'Fernand Leger',
          year: '1951',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 27, 6, 16, 26 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-in-the-fields-1.jpg',
          title: 'Workers in the Fields',
          artist: 'Camille Pissarro',
          year: 'c.1896 - c.1897',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 27, 6, 16, 26 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/project-of-poster-the-center-of-textile-workers-in-belgium-1938(1).jpg',
          title: 'Project of poster "The center of textile workers in Belgium"',
          artist: 'Rene Magritte',
          year: '1938',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 27, 6, 16, 26 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/workers-1926.jpg',
          title: 'Workers',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1926',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 28, 7, 17, 27 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/a-french-worker.jpg',
          title: 'A French Worker',
          artist: 'Pavel Filonov',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 28, 7, 17, 27 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/attentive-worker-1913.jpg',
          title: 'Attentive Worker',
          artist: 'Kazimir Malevich',
          year: '1913',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 28, 7, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/a-worker-at-celeyran-1882.jpg',
          title: 'A Worker at Celeyran',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1882',
          rule: {
            "monday": [ 28, 7, 17, 27 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/seeing-the-unit-of-workers-to-the-front-1928.jpg',
          title: 'Seeing the unit of workers to the front',
          artist: 'Konstantin Yuon',
          year: '1928',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 28, 7, 17, 27 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/worker-s-settlement-and-concrete-plant-davalu-ararat-region-1937.jpg',
          title: 'Worker\'s Settlement and Concrete Plant, Davalu, Ararat Region',
          artist: 'Martiros Sarian',
          year: '1937',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 28, 7, 17, 27 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/venetian-glass-workers-1882.jpg',
          title: 'Venetian Glass Workers',
          artist: 'John Singer Sargent',
          year: '1882',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 28, 7, 17, 27 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/at-the-workers-outskirts-of-the-days-of-the-overthrow-of-the-autocracy-february-1917.jpg',
          title: 'At the workers\' outskirts of the days of the overthrow of the autocracy. February 1917',
          artist: 'Ivan Vladimirov',
          year: '1917',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 29, 8, 18, 28 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-manual-workers-and-the-intellectuals-1927.jpg',
          title: 'The Manual Workers and the Intellectuals',
          artist: 'Janos Mattis-Teutsch',
          year: '1927',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 29, 8, 18, 28 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/woman-worker-1893.jpg',
          title: 'Woman Worker',
          artist: 'Stefan Luchian',
          year: '1893',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/construction-workers-ouvriers-du-ba-timent.jpg',
          title: 'Construction workers',
          artist: 'Theophile Steinlen',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 29, 8, 18, 28 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/tavern-in-st-cloud-1890.jpg',
          title: 'Edvard Munch',
          artist: '1890',
          year: '',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 29, 8, 18, 28 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-fisherman-1902.jpg',
          title: 'The Fisherman',
          artist: 'Edvard Munch',
          year: '1902',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 29, 8, 18, 28 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-haymaker-1916.jpg',
          title: 'The Haymaker',
          artist: 'Edvard Munch',
          year: '1916',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 29, 8, 18, 28 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-mechanic-1920.jpg',
          title: 'The Mechanic',
          artist: 'Fernand Leger',
          year: '1920',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 30, 9, 19, 29 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-three-comrades-1920.jpg',
          title: 'The Three Comrades',
          artist: 'Fernand Leger',
          year: '1920',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 30, 9, 19, 29 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/fishermen-1921.jpg',
          title: 'Fishermen',
          artist: 'Fernand Leger',
          year: '1921',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 30, 9, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-butcher-shop-1921.jpg',
          title: 'The Butcher Shop',
          artist: 'Fernand Leger',
          year: '1921',
          rule: {
            "monday": [ 30, 9, 19, 29 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-man-in-the-blue-hat-1937.jpg',
          title: 'The man in the blue hat',
          artist: 'Fernand Leger',
          year: '1937',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 30, 9, 19, 29 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/manufacturers-on-a-blue-background-1951.jpg',
          title: 'Manufacturers on a blue background',
          artist: 'Fernand Leger',
          year: '1951',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 30, 9, 19, 29 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/manufacturers-with-aloe-1951.jpg',
          title: 'Manufacturers with Aloe',
          artist: 'Fernand Leger',
          year: '1951',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 30, 9, 19, 29 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/builder-character-in-the-framework.jpg',
          title: 'Builder, character in the framework',
          artist: 'Fernand Leger',
          year: '?',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 31, 10, 20, 30 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/characters-in-the-truck.jpg',
          title: 'Characters in the truck',
          artist: 'Fernand Leger',
          year: '?',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 31, 10, 20, 30 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/threshing-the-floor-in-a-georgian-country-village-1915.jpg',
          title: 'Threshing the floor in a Georgian country village',
          artist: 'Niko Pirosmani',
          year: '1915',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 31, 10, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/woman-inspector-of-market-hygiene-1916(1).jpg',
          title: 'Sanitary inspector woman of the market',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 31, 10, 20, 30 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/chariot-near-eatery(1).jpg',
          title: 'Phaeton by the canteen',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 31, 10, 20, 30 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/woman-milks-a-cow-1916(1).jpg',
          title: 'Woman milks a cow',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 31, 10, 20, 30 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/farmer-with-a-bull-1916.jpg',
          title: 'Farmer with a Bull',
          artist: 'Niko Pirosmani',
          year: '1916',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 31, 10, 20, 30 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bourgeois-in-a-carriage-1913.jpg',
          title: 'Bourgeois in a Carriage',
          artist: 'Pavel Filonov',
          year: '1913',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 6, 17, 27, 16 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 1, 11, 21, 31 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/those-who-have-nothing-to-lose-1912.jpg',
          title: 'Those Who Have Nothing to Lose',
          artist: 'Pavel Filonov',
          year: '1912',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 6, 17, 27, 16 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 1, 11, 21, 31 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/milkmaids-1914.jpg',
          title: 'Milkmaids',
          artist: 'Pavel Filonov',
          year: '1914',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 6, 17, 27, 16 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 1, 11, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-february-revolution-1926.jpg',
          title: 'The February Revolution',
          artist: 'Pavel Filonov',
          year: '1924 - 1926',
          rule: {
            "monday": [ 1, 11, 21, 31 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 6, 17, 27, 16 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/goelro-lenin-s-plan-for-the-electrification-of-russia-1931.jpg',
          title: 'GOELRO (Lenin s Plan for the Electrification of Russia)',
          artist: 'Pavel Filonov',
          year: '1931',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 1, 11, 21, 31 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 6, 17, 27, 16 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-kolkhoznik-member-of-a-collective-farm-1931.jpg',
          title: 'The Kolkhoznik (Member of a Collective Farm)',
          artist: 'Pavel Filonov',
          year: '1931',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 1, 11, 21, 31 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 6, 17, 27, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/pedagogics.jpg',
          title: 'Pedagogics',
          artist: 'Pavel Filonov',
          year: '?',
          rule: {
            "monday": [ 6, 17, 27, 16 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 1, 11, 21, 31 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/carpenter-1911.jpg',
          title: 'Carpenter',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 7, 18, 28, 17 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 2, 12, 22, 1 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/gardener-1911.jpg',
          title: 'Gardener',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 7, 18, 28, 17 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 2, 12, 22, 1 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/plowman-1911.jpg',
          title: 'Plowman',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 7, 18, 28, 17 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 2, 12, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/reaping-1911.jpg',
          title: 'Reaping',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 2, 12, 22, 1 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 7, 18, 28, 17 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/two-and-a-pushcart-1911.jpg',
          title: 'Two and a pushcart',
          artist: 'Kazimir Malevich',
          year: '1911',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 2, 12, 22, 1 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 7, 18, 28, 17 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-knifegrinder-1912.jpg',
          title: 'The knifegrinder',
          artist: 'Kazimir Malevich',
          year: '1912',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 2, 12, 22, 1 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 7, 18, 28, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/woodcutter.jpg',
          title: 'Woodcutter',
          artist: 'Kazimir Malevich',
          year: '1912',
          rule: {
            "monday": [ 7, 18, 28, 17 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 2, 12, 22, 1 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-reaper-on-red-1913.jpg',
          title: 'The reaper on red',
          artist: 'Kazimir Malevich',
          year: '1913',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 8, 19, 29, 18 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 3, 13, 23, 2 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/carpenter.jpg',
          title: 'Carpenter',
          artist: 'Kazimir Malevich',
          year: 'c.1927',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 8, 19, 29, 18 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 3, 13, 23, 2 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/haymaking-1929.jpg',
          title: 'Haymaking',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 8, 19, 29, 18 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 3, 13, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/reaper-1929.jpg',
          title: 'Reaper',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 3, 13, 23, 2 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 8, 19, 29, 18 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/reapers-1929.jpg',
          title: 'Reapers',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 3, 13, 23, 2 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 8, 19, 29, 18 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/harvesting.jpg',
          title: 'Harvesting',
          artist: 'Kazimir Malevich',
          year: '1929',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 3, 13, 23, 2 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 8, 19, 29, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/13450813-1195165473851370-1630332832750609931-n.jpg',
          title: 'Union',
          artist: 'Kazimir Malevich',
          year: '1930',
          rule: {
            "monday": [ 8, 19, 29, 18 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 3, 13, 23, 2 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/reaper.jpg',
          title: 'Reaper',
          artist: 'Kazimir Malevich',
          year: 'c.1932',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 9, 20, 30, 19 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 4, 14, 24, 3 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/laundress-1.jpg',
          title: 'Laundress',
          artist: 'Kazimir Malevich',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 9, 20, 30, 19 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 4, 14, 24, 3 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-plowman.jpg',
          title: 'The Plowman',
          artist: 'Hans Holbein the Younger',
          year: 'c.1525',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 9, 20, 30, 19 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 4, 14, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/women-plucking-geese-1871.jpg',
          title: 'Women plucking geese',
          artist: 'Max Liebermann',
          year: '1871',
          rule: {
            "monday": [ 4, 14, 24, 3 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 9, 20, 30, 19 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/shoemaker-1881.jpg',
          title: 'Shoemaker',
          artist: 'Max Liebermann',
          year: '1881',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 4, 14, 24, 3 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 9, 20, 30, 19 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/spinning-workshop-in-laren-1889.jpg',
          title: 'Spinning Workshop in Laren',
          artist: 'Max Liebermann',
          year: '1889',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 4, 14, 24, 3 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 9, 20, 30, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/flight-of-the-bourgeoisie-from-novorossiysk-in-1920.jpg',
          title: 'Flight of the bourgeoisie from Novorossiysk in 1920',
          artist: 'Ivan Vladimirov',
          year: '1920',
          rule: {
            "monday": [ 9, 20, 30, 19 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 4, 14, 24, 3 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-defeat-of-the-strikers.jpg',
          title: 'The defeat of the strikers',
          artist: 'Ivan Vladimirov',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 10, 21, 31, 20 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 5, 15, 25, 4 ],
            "saturday": [ 17, 27, 6, 14 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/woman-ironing.jpg',
          title: 'Woman Ironing',
          artist: 'Corneliu Baba',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 10, 21, 31, 20 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 5, 15, 25, 4 ],
            "sunday": [ 17, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/a-plowman.jpg',
          title: 'A plowman',
          artist: 'David Burliuk',
          year: 'c.1910',
          rule: {
            "monday": [ 17, 27, 6, 14 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 10, 21, 31, 20 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 5, 15, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/stonemason-1910.jpg',
          title: 'Stonemason',
          artist: 'David Burliuk',
          year: '1910',
          rule: {
            "monday": [ 5, 15, 25, 4 ],
            "tuesday": [ 17, 27, 6, 14 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 10, 21, 31, 20 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/harvesting-1915.jpg',
          title: 'Harvesting',
          artist: 'David Burliuk',
          year: '1915',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 5, 15, 25, 4 ],
            "wednesday": [ 17, 27, 6, 14 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 10, 21, 31, 20 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/barbershop-1946.jpg',
          title: 'Barbershop',
          artist: 'David Burliuk',
          year: '1946',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 5, 15, 25, 4 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 10, 21, 31, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/a-milkmade.jpg',
          title: 'A milkmade',
          artist: 'David Burliuk',
          year: '?',
          rule: {
            "monday": [ 10, 21, 31, 20 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 5, 15, 25, 4 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/fishermen.jpg',
          title: 'Fishermen',
          artist: 'David Burliuk',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 11, 22, 1, 21 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 6, 16, 26, 5 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 16, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/ploughing-the-field(1).jpg',
          title: 'Happily ploughing',
          artist: 'David Burliuk',
          year: '?',
          rule: {
            "monday": [ 16, 26, 5, 15 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 11, 22, 1, 21 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 6, 16, 26, 5 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/laundress-on-the-banks-of-the-river.jpg',
          title: 'Laundress on the Banks of the River',
          artist: 'Camille Pissarro',
          year: 'c.1855',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 16, 26, 5, 15 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 11, 22, 1, 21 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 6, 16, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-harvest.jpg',
          title: 'The Harvest',
          artist: 'Camille Pissarro',
          year: 'c.1857',
          rule: {
            "monday": [ 6, 16, 26, 5 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 16, 26, 5, 15 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 11, 22, 1, 21 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-maidservant-1867.jpg',
          title: 'The Maidservant',
          artist: 'Camille Pissarro',
          year: '1867',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 6, 16, 26, 5 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 16, 26, 5, 15 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 11, 22, 1, 21 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-factory-1873.jpg',
          title: 'The Factory',
          artist: 'Camille Pissarro',
          year: '1873',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 6, 16, 26, 5 ],
            "thursday": [ 18, 28, 7, 15 ],
            "friday": [ 16, 26, 5, 15 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 11, 22, 1, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/resting-harvesters-montfoucault-1875.jpg',
          title: 'Resting Harvesters, Montfoucault',
          artist: 'Camille Pissarro',
          year: '1875',
          rule: {
            "monday": [ 11, 22, 1, 21 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 6, 16, 26, 5 ],
            "friday": [ 18, 28, 7, 15 ],
            "saturday": [ 16, 26, 5, 15 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-harvest-at-montfoucault-2-1876.jpg',
          title: 'The Harvest at Montfoucault 2',
          artist: 'Camille Pissarro',
          year: '1876',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 12, 23, 2, 22 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 7, 17, 27, 6 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/eugene-murer-at-his-pastry-oven-1877.jpg',
          title: 'Eugene Murer at His Pastry Oven',
          artist: 'Camille Pissarro',
          year: '1877',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 12, 23, 2, 22 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 7, 17, 27, 6 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/shoemakers.jpg',
          title: 'Shoemakers',
          artist: 'Camille Pissarro',
          year: 'c.1878',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 12, 23, 2, 22 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 7, 17, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-laundry-woman-1879.jpg',
          title: 'The Laundry Woman',
          artist: 'Camille Pissarro',
          year: '1879',
          rule: {
            "monday": [ 7, 17, 27, 6 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 12, 23, 2, 22 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/peasants-harvesting-potatoes-1882.jpg',
          title: 'Peasants Harvesting Potatoes',
          artist: 'Camille Pissarro',
          year: '1882',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 7, 17, 27, 6 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 12, 23, 2, 22 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/picking-apples.jpg',
          title: 'Picking Apples',
          artist: 'Camille Pissarro',
          year: 'c.1888',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 7, 17, 27, 6 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 12, 23, 2, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-gleaners-1889.jpg',
          title: 'The Gleaners',
          artist: 'Camille Pissarro',
          year: '1889',
          rule: {
            "monday": [ 12, 23, 2, 22 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 7, 17, 27, 6 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/peasant-women-planting-stakes-1891.jpg',
          title: 'Peasant Women Planting Stakes',
          artist: 'Camille Pissarro',
          year: '1891',
          rule: {
            "monday": [ 16, 26, 5, 15 ],
            "tuesday": [ 13, 24, 3, 23 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 8, 18, 28, 7 ],
            "saturday": [ 20, 30, 9, 17 ],
            "sunday": [ 18, 28, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/laundring-women-eragny-sur-eptes-1895.jpg',
          title: 'Laundring Women. Eragny sur Eptes',
          artist: 'Camille Pissarro',
          year: '1895',
          rule: {
            "monday": [ 18, 28, 7, 17 ],
            "tuesday": [ 16, 26, 5, 15 ],
            "wednesday": [ 13, 24, 3, 23 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 8, 18, 28, 7 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/unloading-wood-at-rouen-1896.jpg',
          title: 'Unloading Wood at Rouen',
          artist: 'Camille Pissarro',
          year: '1896',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 18, 28, 7, 17 ],
            "wednesday": [ 16, 26, 5, 15 ],
            "thursday": [ 13, 24, 3, 23 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 8, 18, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-laundry-woman.jpg',
          title: 'The Laundry Woman',
          artist: 'Camille Pissarro',
          year: 'c.1898',
          rule: {
            "monday": [ 8, 18, 28, 7 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 18, 28, 7, 17 ],
            "thursday": [ 16, 26, 5, 15 ],
            "friday": [ 13, 24, 3, 23 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/haymaking-in-eragny-1901.jpg',
          title: 'Haymaking in Eragny',
          artist: 'Camille Pissarro',
          year: '1901',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 8, 18, 28, 7 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 18, 28, 7, 17 ],
            "friday": [ 16, 26, 5, 15 ],
            "saturday": [ 13, 24, 3, 23 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-sugar-mill-1923.jpg',
          title: 'The Sugar Mill',
          artist: 'Diego Rivera',
          year: '1923',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 8, 18, 28, 7 ],
            "thursday": [ 20, 30, 9, 17 ],
            "friday": [ 18, 28, 7, 17 ],
            "saturday": [ 16, 26, 5, 15 ],
            "sunday": [ 13, 24, 3, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/la-era-the-threshing-floor-1904-oil-on-canvas-1904.jpg',
          title: 'La Era (The Threshing Floor) 1904 (oil on canvas)',
          artist: 'Diego Rivera',
          year: '1904',
          rule: {
            "monday": [ 13, 24, 3, 23 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 8, 18, 28, 7 ],
            "friday": [ 20, 30, 9, 17 ],
            "saturday": [ 18, 28, 7, 17 ],
            "sunday": [ 16, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/entry-into-the-mine-1923.jpg',
          title: 'Entry into the Mine',
          artist: 'Diego Rivera',
          year: '1923',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 14, 25, 4, 24 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 21, 31, 10 ],
            "friday": [ 9, 19, 29, 8 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 19, 29, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/exit-from-the-mine-1923.jpg',
          title: 'Exit from the Mine',
          artist: 'Diego Rivera',
          year: '1923',
          rule: {
            "monday": [ 19, 29, 8, 18 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 14, 25, 4, 24 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 21, 31, 10 ],
            "saturday": [ 9, 19, 29, 8 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/may-day-procession-in-moscow-1956.jpg',
          title: 'May Day Procession in Moscow',
          artist: 'Diego Rivera',
          year: '1956',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 19, 29, 8, 18 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 14, 25, 4, 24 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 21, 31, 10 ],
            "sunday": [ 9, 19, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-flower-seller.jpg',
          title: 'The Flower Seller',
          artist: 'Diego Rivera',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 9, 19, 29, 8 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 19, 29, 8, 18 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 14, 25, 4, 24 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 21, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/the-pinole-seller-1936.jpg',
          title: 'The Pinole Seller',
          artist: 'Diego Rivera',
          year: '1936',
          rule: {
            "monday": [ 11, 21, 31, 10 ],
            "tuesday": [ 9, 19, 29, 8 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 19, 29, 8, 18 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 14, 25, 4, 24 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/flower-carrier-1935.jpg',
          title: 'Flower Carrier',
          artist: 'Diego Rivera',
          year: '1935',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 21, 31, 10 ],
            "wednesday": [ 9, 19, 29, 8 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 19, 29, 8, 18 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 14, 25, 4, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/autumn-the-fruit-pickers-1912.jpg',
          title: 'Autumn: The Fruit Pickers',
          artist: 'Pierre Bonnard',
          year: '1912',
          rule: {
            "monday": [ 14, 25, 4, 24 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 21, 31, 10 ],
            "thursday": [ 9, 19, 29, 8 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 19, 29, 8, 18 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/rest-in-harvest.jpg',
          title: 'Rest in Harvest',
          artist: 'William-Adolphe Bouguereau',
          year: 'c.1865',
          rule: {
            "monday": [ 18, 28, 7, 17 ],
            "tuesday": [ 15, 26, 5, 25 ],
            "wednesday": [ 14, 24, 3, 13 ],
            "thursday": [ 12, 22, 1, 11 ],
            "friday": [ 10, 20, 30, 9 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 20, 30, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/young-shepherdess-1868.jpg',
          title: 'Young Shepherdess',
          artist: 'William-Adolphe Bouguereau',
          year: '1868',
          rule: {
            "monday": [ 20, 30, 9, 19 ],
            "tuesday": [ 18, 28, 7, 17 ],
            "wednesday": [ 15, 26, 5, 25 ],
            "thursday": [ 14, 24, 3, 13 ],
            "friday": [ 12, 22, 1, 11 ],
            "saturday": [ 10, 20, 30, 9 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/washerwomen-of-fouesnant-1869.jpg',
          title: 'Washerwomen of Fouesnant',
          artist: 'William-Adolphe Bouguereau',
          year: '1869',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 20, 30, 9, 19 ],
            "wednesday": [ 18, 28, 7, 17 ],
            "thursday": [ 15, 26, 5, 25 ],
            "friday": [ 14, 24, 3, 13 ],
            "saturday": [ 12, 22, 1, 11 ],
            "sunday": [ 10, 20, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/shepherdess-1889.jpg',
          title: 'Shepherdess',
          artist: 'William-Adolphe Bouguereau',
          year: '1889',
          rule: {
            "monday": [ 10, 20, 30, 9 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 20, 30, 9, 19 ],
            "thursday": [ 18, 28, 7, 17 ],
            "friday": [ 15, 26, 5, 25 ],
            "saturday": [ 14, 24, 3, 13 ],
            "sunday": [ 12, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/new-cover.jpg',
          title: 'New cover',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 12, 22, 1, 11 ],
            "tuesday": [ 10, 20, 30, 9 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 20, 30, 9, 19 ],
            "friday": [ 18, 28, 7, 17 ],
            "saturday": [ 15, 26, 5, 25 ],
            "sunday": [ 14, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/map.jpg',
          title: 'Map',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 13 ],
            "tuesday": [ 12, 22, 1, 11 ],
            "wednesday": [ 10, 20, 30, 9 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 20, 30, 9, 19 ],
            "saturday": [ 18, 28, 7, 17 ],
            "sunday": [ 15, 26, 5, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/copyright.jpg',
          title: 'Copyright',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 26, 5, 25 ],
            "tuesday": [ 14, 24, 3, 13 ],
            "wednesday": [ 12, 22, 1, 11 ],
            "thursday": [ 10, 20, 30, 9 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 20, 30, 9, 19 ],
            "sunday": [ 18, 28, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/thanks.jpg',
          title: 'Thanks',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 29, 6, 18 ],
            "tuesday": [ 16, 27, 6, 26 ],
            "wednesday": [ 15, 25, 4, 14 ],
            "thursday": [ 13, 23, 2, 12 ],
            "friday": [ 11, 19, 1, 10 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 21, 1, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/crow.jpg',
          title: 'Crow',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 1, 10, 20 ],
            "tuesday": [ 19, 29, 6, 18 ],
            "wednesday": [ 16, 27, 6, 26 ],
            "thursday": [ 15, 25, 4, 14 ],
            "friday": [ 13, 23, 2, 12 ],
            "saturday": [ 11, 19, 1, 10 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bullygate.jpg',
          title: 'Bullygate',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 21, 1, 10, 20 ],
            "wednesday": [ 19, 29, 6, 18 ],
            "thursday": [ 16, 27, 6, 26 ],
            "friday": [ 15, 25, 4, 14 ],
            "saturday": [ 13, 23, 2, 12 ],
            "sunday": [ 11, 19, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/rush.jpg',
          title: 'Rush',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 11, 19, 1, 10 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 21, 1, 10, 20 ],
            "thursday": [ 19, 29, 6, 18 ],
            "friday": [ 16, 27, 6, 26 ],
            "saturday": [ 15, 25, 4, 14 ],
            "sunday": [ 13, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/rush-1.jpg',
          title: 'Rush',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 23, 2, 12 ],
            "tuesday": [ 11, 19, 1, 10 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 21, 1, 10, 20 ],
            "friday": [ 19, 29, 6, 18 ],
            "saturday": [ 16, 27, 6, 26 ],
            "sunday": [ 15, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/condi.jpg',
          title: 'Condi',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 14 ],
            "tuesday": [ 13, 23, 2, 12 ],
            "wednesday": [ 11, 19, 1, 10 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 21, 1, 10, 20 ],
            "saturday": [ 19, 29, 6, 18 ],
            "sunday": [ 16, 27, 6, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/johnie.jpg',
          title: 'Johnie',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 27, 6, 26 ],
            "tuesday": [ 15, 25, 4, 14 ],
            "wednesday": [ 13, 23, 2, 12 ],
            "thursday": [ 11, 19, 1, 10 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 21, 1, 10, 20 ],
            "sunday": [ 19, 29, 6, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/dickie.jpg',
          title: 'Dickie',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 30, 7, 19 ],
            "tuesday": [ 17, 28, 7, 27 ],
            "wednesday": [ 16, 26, 5, 15 ],
            "thursday": [ 14, 24, 3, 11 ],
            "friday": [ 12, 20, 2, 11 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 22, 2, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/donnie.jpg',
          title: 'Donnie',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 2, 11, 21 ],
            "tuesday": [ 20, 30, 7, 19 ],
            "wednesday": [ 17, 28, 7, 27 ],
            "thursday": [ 16, 26, 5, 15 ],
            "friday": [ 14, 24, 3, 11 ],
            "saturday": [ 12, 20, 2, 11 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/george.jpg',
          title: 'George',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 22, 2, 11, 21 ],
            "wednesday": [ 20, 30, 7, 19 ],
            "thursday": [ 17, 28, 7, 27 ],
            "friday": [ 16, 26, 5, 15 ],
            "saturday": [ 14, 24, 3, 11 ],
            "sunday": [ 12, 20, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/troubleride.jpg',
          title: 'Troubleride',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 12, 20, 2, 11 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 22, 2, 11, 21 ],
            "thursday": [ 20, 30, 7, 19 ],
            "friday": [ 17, 28, 7, 27 ],
            "saturday": [ 16, 26, 5, 15 ],
            "sunday": [ 14, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/tower.jpg',
          title: 'Tower',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 24, 3, 11 ],
            "tuesday": [ 12, 20, 2, 11 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 22, 2, 11, 21 ],
            "friday": [ 20, 30, 7, 19 ],
            "saturday": [ 17, 28, 7, 27 ],
            "sunday": [ 16, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/ship.jpg',
          title: 'Ship',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 26, 5, 15 ],
            "tuesday": [ 14, 24, 3, 11 ],
            "wednesday": [ 12, 20, 2, 11 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 22, 2, 11, 21 ],
            "saturday": [ 20, 30, 7, 19 ],
            "sunday": [ 17, 28, 7, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/blow.jpg',
          title: 'Blow',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 28, 7, 27 ],
            "tuesday": [ 16, 26, 5, 15 ],
            "wednesday": [ 14, 24, 3, 11 ],
            "thursday": [ 12, 20, 2, 11 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 22, 2, 11, 21 ],
            "sunday": [ 20, 30, 7, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/ghoster.jpg',
          title: 'Ghoster',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 31, 8, 20 ],
            "tuesday": [ 18, 29, 8, 28 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 13, 21, 3, 12 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 23, 3, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/deficit.jpg',
          title: 'Deficit',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 12, 22 ],
            "tuesday": [ 21, 31, 8, 20 ],
            "wednesday": [ 18, 29, 8, 28 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 13, 21, 3, 12 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/shoot.jpg',
          title: 'Shoot',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 23, 3, 12, 22 ],
            "wednesday": [ 21, 31, 8, 20 ],
            "thursday": [ 18, 29, 8, 28 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 13, 21, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/corporape.jpg',
          title: 'Corporape',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 21, 3, 12 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 23, 3, 12, 22 ],
            "thursday": [ 21, 31, 8, 20 ],
            "friday": [ 18, 29, 8, 28 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/funhouse.jpg',
          title: 'Funhouse',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 13, 21, 3, 12 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 23, 3, 12, 22 ],
            "friday": [ 21, 31, 8, 20 ],
            "saturday": [ 18, 29, 8, 28 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/rolling-thunder.jpg',
          title: 'Rolling thunder',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 13, 21, 3, 12 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 23, 3, 12, 22 ],
            "saturday": [ 21, 31, 8, 20 ],
            "sunday": [ 18, 29, 8, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/gasp.jpg',
          title: 'Gasp',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 29, 8, 28 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 13, 21, 3, 12 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 23, 3, 12, 22 ],
            "sunday": [ 21, 31, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/trouble.jpg',
          title: 'Trouble',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 31, 8, 20 ],
            "tuesday": [ 18, 29, 8, 28 ],
            "wednesday": [ 17, 27, 6, 16 ],
            "thursday": [ 15, 25, 4, 12 ],
            "friday": [ 13, 21, 3, 12 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 23, 3, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bear.jpg',
          title: 'Bear',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 12, 22 ],
            "tuesday": [ 21, 31, 8, 20 ],
            "wednesday": [ 18, 29, 8, 28 ],
            "thursday": [ 17, 27, 6, 16 ],
            "friday": [ 15, 25, 4, 12 ],
            "saturday": [ 13, 21, 3, 12 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bear-1.jpg',
          title: 'Bear',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 23, 3, 12, 22 ],
            "wednesday": [ 21, 31, 8, 20 ],
            "thursday": [ 18, 29, 8, 28 ],
            "friday": [ 17, 27, 6, 16 ],
            "saturday": [ 15, 25, 4, 12 ],
            "sunday": [ 13, 21, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/arms.jpg',
          title: 'Arms',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 13, 21, 3, 12 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 23, 3, 12, 22 ],
            "thursday": [ 21, 31, 8, 20 ],
            "friday": [ 18, 29, 8, 28 ],
            "saturday": [ 17, 27, 6, 16 ],
            "sunday": [ 15, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/scam.jpg',
          title: 'Scam',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 15, 25, 4, 12 ],
            "tuesday": [ 13, 21, 3, 12 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 23, 3, 12, 22 ],
            "friday": [ 21, 31, 8, 20 ],
            "saturday": [ 18, 29, 8, 28 ],
            "sunday": [ 17, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/library.jpg',
          title: 'Library',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 27, 6, 16 ],
            "tuesday": [ 15, 25, 4, 12 ],
            "wednesday": [ 13, 21, 3, 12 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 23, 3, 12, 22 ],
            "saturday": [ 21, 31, 8, 20 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/airstrip.jpg',
          title: 'Airstrip',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 29, 8, 28 ],
            "tuesday": [ 17, 27, 6, 16 ],
            "wednesday": [ 15, 25, 4, 12 ],
            "thursday": [ 13, 21, 3, 12 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 23, 3, 12, 22 ],
            "sunday": [ 21, 31, 8, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/rupert.jpg',
          title: 'Rupert',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 1, 9, 21 ],
            "tuesday": [ 19, 30, 9, 29 ],
            "wednesday": [ 18, 28, 7, 17 ],
            "thursday": [ 16, 26, 5, 13 ],
            "friday": [ 14, 22, 4, 13 ],
            "saturday": [ 26, 5, 15, 23 ],
            "sunday": [ 24, 4, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/media.jpg',
          title: 'Media',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 4, 13, 23 ],
            "tuesday": [ 22, 1, 9, 21 ],
            "wednesday": [ 19, 30, 9, 29 ],
            "thursday": [ 18, 28, 7, 17 ],
            "friday": [ 16, 26, 5, 13 ],
            "saturday": [ 14, 22, 4, 13 ],
            "sunday": [ 26, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/flea.jpg',
          title: 'Flea',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 5, 15, 23 ],
            "tuesday": [ 24, 4, 13, 23 ],
            "wednesday": [ 22, 1, 9, 21 ],
            "thursday": [ 19, 30, 9, 29 ],
            "friday": [ 18, 28, 7, 17 ],
            "saturday": [ 16, 26, 5, 13 ],
            "sunday": [ 14, 22, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/snake-oil.jpg',
          title: 'Snake oil',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 14, 22, 4, 13 ],
            "tuesday": [ 26, 5, 15, 23 ],
            "wednesday": [ 24, 4, 13, 23 ],
            "thursday": [ 22, 1, 9, 21 ],
            "friday": [ 19, 30, 9, 29 ],
            "saturday": [ 18, 28, 7, 17 ],
            "sunday": [ 16, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/dogma.jpg',
          title: 'Dogma',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 26, 5, 13 ],
            "tuesday": [ 14, 22, 4, 13 ],
            "wednesday": [ 26, 5, 15, 23 ],
            "thursday": [ 24, 4, 13, 23 ],
            "friday": [ 22, 1, 9, 21 ],
            "saturday": [ 19, 30, 9, 29 ],
            "sunday": [ 18, 28, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/freaks.jpg',
          title: 'Freaks',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 28, 7, 17 ],
            "tuesday": [ 16, 26, 5, 13 ],
            "wednesday": [ 14, 22, 4, 13 ],
            "thursday": [ 26, 5, 15, 23 ],
            "friday": [ 24, 4, 13, 23 ],
            "saturday": [ 22, 1, 9, 21 ],
            "sunday": [ 19, 30, 9, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/gross.jpg',
          title: 'Gross',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 30, 9, 29 ],
            "tuesday": [ 18, 28, 7, 17 ],
            "wednesday": [ 16, 26, 5, 13 ],
            "thursday": [ 14, 22, 4, 13 ],
            "friday": [ 26, 5, 15, 23 ],
            "saturday": [ 24, 4, 13, 23 ],
            "sunday": [ 22, 1, 9, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/law.jpg',
          title: 'Law',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 2, 10, 22 ],
            "tuesday": [ 20, 31, 10, 30 ],
            "wednesday": [ 19, 29, 8, 18 ],
            "thursday": [ 17, 27, 6, 14 ],
            "friday": [ 15, 23, 5, 14 ],
            "saturday": [ 27, 6, 16, 24 ],
            "sunday": [ 25, 5, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/snack.jpg',
          title: 'Snack',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 5, 14, 24 ],
            "tuesday": [ 23, 2, 10, 22 ],
            "wednesday": [ 20, 31, 10, 30 ],
            "thursday": [ 19, 29, 8, 18 ],
            "friday": [ 17, 27, 6, 14 ],
            "saturday": [ 15, 23, 5, 14 ],
            "sunday": [ 27, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/trouble-war.jpg',
          title: 'Trouble war',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 7, 17, 25 ],
            "tuesday": [ 26, 6, 15, 25 ],
            "wednesday": [ 24, 3, 11, 23 ],
            "thursday": [ 21, 1, 11, 31 ],
            "friday": [ 20, 30, 9, 19 ],
            "saturday": [ 18, 28, 7, 15 ],
            "sunday": [ 16, 24, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/gulf-war.jpg',
          title: 'Gulf war',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 16, 24, 6, 15 ],
            "tuesday": [ 28, 7, 17, 25 ],
            "wednesday": [ 26, 6, 15, 25 ],
            "thursday": [ 24, 3, 11, 23 ],
            "friday": [ 21, 1, 11, 31 ],
            "saturday": [ 20, 30, 9, 19 ],
            "sunday": [ 18, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/party-animals.jpg',
          title: 'Party animals',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 28, 7, 15 ],
            "tuesday": [ 16, 24, 6, 15 ],
            "wednesday": [ 28, 7, 17, 25 ],
            "thursday": [ 26, 6, 15, 25 ],
            "friday": [ 24, 3, 11, 23 ],
            "saturday": [ 21, 1, 11, 31 ],
            "sunday": [ 20, 30, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/wheel.jpg',
          title: 'Wheel',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 30, 9, 19 ],
            "tuesday": [ 18, 28, 7, 15 ],
            "wednesday": [ 16, 24, 6, 15 ],
            "thursday": [ 28, 7, 17, 25 ],
            "friday": [ 26, 6, 15, 25 ],
            "saturday": [ 24, 3, 11, 23 ],
            "sunday": [ 21, 1, 11, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/transport.jpg',
          title: 'Transport',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 31 ],
            "tuesday": [ 20, 30, 9, 19 ],
            "wednesday": [ 18, 28, 7, 15 ],
            "thursday": [ 16, 24, 6, 15 ],
            "friday": [ 28, 7, 17, 25 ],
            "saturday": [ 26, 6, 15, 25 ],
            "sunday": [ 24, 3, 11, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/training.jpg',
          title: 'Training',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 12, 24 ],
            "tuesday": [ 22, 2, 12, 1 ],
            "wednesday": [ 21, 1, 10, 20 ],
            "thursday": [ 19, 29, 8, 16 ],
            "friday": [ 17, 25, 7, 16 ],
            "saturday": [ 29, 8, 18, 26 ],
            "sunday": [ 27, 7, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/fashion.jpg',
          title: 'Fashion',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 7, 16, 26 ],
            "tuesday": [ 25, 4, 12, 24 ],
            "wednesday": [ 22, 2, 12, 1 ],
            "thursday": [ 21, 1, 10, 20 ],
            "friday": [ 19, 29, 8, 16 ],
            "saturday": [ 17, 25, 7, 16 ],
            "sunday": [ 29, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/cull.jpg',
          title: 'Cull',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 8, 18, 26 ],
            "tuesday": [ 27, 7, 16, 26 ],
            "wednesday": [ 25, 4, 12, 24 ],
            "thursday": [ 22, 2, 12, 1 ],
            "friday": [ 21, 1, 10, 20 ],
            "saturday": [ 19, 29, 8, 16 ],
            "sunday": [ 17, 25, 7, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/hands (1).jpg',
          title: 'Hands',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 17, 25, 7, 16 ],
            "tuesday": [ 29, 8, 18, 26 ],
            "wednesday": [ 27, 7, 16, 26 ],
            "thursday": [ 25, 4, 12, 24 ],
            "friday": [ 22, 2, 12, 1 ],
            "saturday": [ 21, 1, 10, 20 ],
            "sunday": [ 19, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/carousel.jpg',
          title: 'Carousel',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 29, 8, 16 ],
            "tuesday": [ 17, 25, 7, 16 ],
            "wednesday": [ 29, 8, 18, 26 ],
            "thursday": [ 27, 7, 16, 26 ],
            "friday": [ 25, 4, 12, 24 ],
            "saturday": [ 22, 2, 12, 1 ],
            "sunday": [ 21, 1, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/trouble-farm.jpg',
          title: 'Trouble farm',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 1, 10, 20 ],
            "tuesday": [ 19, 29, 8, 16 ],
            "wednesday": [ 17, 25, 7, 16 ],
            "thursday": [ 29, 8, 18, 26 ],
            "friday": [ 27, 7, 16, 26 ],
            "saturday": [ 25, 4, 12, 24 ],
            "sunday": [ 22, 2, 12, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/factory.jpg',
          title: 'Factory',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 2, 12, 1 ],
            "tuesday": [ 21, 1, 10, 20 ],
            "wednesday": [ 19, 29, 8, 16 ],
            "thursday": [ 17, 25, 7, 16 ],
            "friday": [ 29, 8, 18, 26 ],
            "saturday": [ 27, 7, 16, 26 ],
            "sunday": [ 25, 4, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/downer.jpg',
          title: 'Downer',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 5, 13, 25 ],
            "tuesday": [ 23, 3, 13, 2 ],
            "wednesday": [ 22, 2, 11, 21 ],
            "thursday": [ 20, 30, 9, 17 ],
            "friday": [ 18, 26, 8, 17 ],
            "saturday": [ 30, 9, 19, 27 ],
            "sunday": [ 28, 8, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/pit.jpg',
          title: 'Pit',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 8, 17, 27 ],
            "tuesday": [ 26, 5, 13, 25 ],
            "wednesday": [ 23, 3, 13, 2 ],
            "thursday": [ 22, 2, 11, 21 ],
            "friday": [ 20, 30, 9, 17 ],
            "saturday": [ 18, 26, 8, 17 ],
            "sunday": [ 30, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/trouble-end.jpg',
          title: 'Trouble end',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 9, 19, 27 ],
            "tuesday": [ 28, 8, 17, 27 ],
            "wednesday": [ 26, 5, 13, 25 ],
            "thursday": [ 23, 3, 13, 2 ],
            "friday": [ 22, 2, 11, 21 ],
            "saturday": [ 20, 30, 9, 17 ],
            "sunday": [ 18, 26, 8, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/no-child.jpg',
          title: 'No child',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 18, 26, 8, 17 ],
            "tuesday": [ 30, 9, 19, 27 ],
            "wednesday": [ 28, 8, 17, 27 ],
            "thursday": [ 26, 5, 13, 25 ],
            "friday": [ 23, 3, 13, 2 ],
            "saturday": [ 22, 2, 11, 21 ],
            "sunday": [ 20, 30, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/plague.jpg',
          title: 'Plague',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 30, 9, 17 ],
            "tuesday": [ 18, 26, 8, 17 ],
            "wednesday": [ 30, 9, 19, 27 ],
            "thursday": [ 28, 8, 17, 27 ],
            "friday": [ 26, 5, 13, 25 ],
            "saturday": [ 23, 3, 13, 2 ],
            "sunday": [ 22, 2, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/god.jpg',
          title: 'God',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 2, 11, 21 ],
            "tuesday": [ 20, 30, 9, 17 ],
            "wednesday": [ 18, 26, 8, 17 ],
            "thursday": [ 30, 9, 19, 27 ],
            "friday": [ 28, 8, 17, 27 ],
            "saturday": [ 26, 5, 13, 25 ],
            "sunday": [ 23, 3, 13, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/chapel.jpg',
          title: 'Chapel',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 2 ],
            "tuesday": [ 22, 2, 11, 21 ],
            "wednesday": [ 20, 30, 9, 17 ],
            "thursday": [ 18, 26, 8, 17 ],
            "friday": [ 30, 9, 19, 27 ],
            "saturday": [ 28, 8, 17, 27 ],
            "sunday": [ 26, 5, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/genocide.jpg',
          title: 'Genocide',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 6, 14, 26 ],
            "tuesday": [ 24, 4, 14, 3 ],
            "wednesday": [ 23, 3, 2, 22 ],
            "thursday": [ 21, 31, 10, 18 ],
            "friday": [ 19, 27, 9, 18 ],
            "saturday": [ 31, 10, 20, 28 ],
            "sunday": [ 29, 9, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/homeland.jpg',
          title: 'Homeland',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 9, 18, 28 ],
            "tuesday": [ 27, 6, 14, 26 ],
            "wednesday": [ 24, 4, 14, 3 ],
            "thursday": [ 23, 3, 2, 22 ],
            "friday": [ 21, 31, 10, 18 ],
            "saturday": [ 19, 27, 9, 18 ],
            "sunday": [ 31, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/voter.jpg',
          title: 'Voter',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 10, 20, 28 ],
            "tuesday": [ 29, 9, 18, 28 ],
            "wednesday": [ 27, 6, 14, 26 ],
            "thursday": [ 24, 4, 14, 3 ],
            "friday": [ 23, 3, 2, 22 ],
            "saturday": [ 21, 31, 10, 18 ],
            "sunday": [ 19, 27, 9, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/alien.jpg',
          title: 'Alien',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 19, 27, 9, 18 ],
            "tuesday": [ 31, 10, 20, 28 ],
            "wednesday": [ 29, 9, 18, 28 ],
            "thursday": [ 27, 6, 14, 26 ],
            "friday": [ 24, 4, 14, 3 ],
            "saturday": [ 23, 3, 2, 22 ],
            "sunday": [ 21, 31, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/alien-1.jpg',
          title: 'Alien',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 31, 10, 18 ],
            "tuesday": [ 19, 27, 9, 18 ],
            "wednesday": [ 31, 10, 20, 28 ],
            "thursday": [ 29, 9, 18, 28 ],
            "friday": [ 27, 6, 14, 26 ],
            "saturday": [ 24, 4, 14, 3 ],
            "sunday": [ 23, 3, 2, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/liberty.jpg',
          title: 'Liberty',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 3, 2, 22 ],
            "tuesday": [ 21, 31, 10, 18 ],
            "wednesday": [ 19, 27, 9, 18 ],
            "thursday": [ 31, 10, 20, 28 ],
            "friday": [ 29, 9, 18, 28 ],
            "saturday": [ 27, 6, 14, 26 ],
            "sunday": [ 24, 4, 14, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/triumph.jpg',
          title: 'Triumph',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 4, 14, 3 ],
            "tuesday": [ 23, 3, 2, 22 ],
            "wednesday": [ 21, 31, 10, 18 ],
            "thursday": [ 19, 27, 9, 18 ],
            "friday": [ 31, 10, 20, 28 ],
            "saturday": [ 29, 9, 18, 28 ],
            "sunday": [ 27, 6, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/mill-fragment.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 7, 15, 27 ],
            "tuesday": [ 25, 5, 15, 4 ],
            "wednesday": [ 24, 4, 3, 23 ],
            "thursday": [ 22, 1, 11, 19 ],
            "friday": [ 20, 28, 10, 19 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/mill-fragment-1.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 10, 19, 29 ],
            "tuesday": [ 28, 7, 15, 27 ],
            "wednesday": [ 25, 5, 15, 4 ],
            "thursday": [ 24, 4, 3, 23 ],
            "friday": [ 22, 1, 11, 19 ],
            "saturday": [ 20, 28, 10, 19 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/mill-fragment-2.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 19, 29 ],
            "wednesday": [ 28, 7, 15, 27 ],
            "thursday": [ 25, 5, 15, 4 ],
            "friday": [ 24, 4, 3, 23 ],
            "saturday": [ 22, 1, 11, 19 ],
            "sunday": [ 20, 28, 10, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/mill.jpg',
          title: 'Mill',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 20, 28, 10, 19 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 19, 29 ],
            "thursday": [ 28, 7, 15, 27 ],
            "friday": [ 25, 5, 15, 4 ],
            "saturday": [ 24, 4, 3, 23 ],
            "sunday": [ 22, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/mill-fragment-3.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 1, 11, 19 ],
            "tuesday": [ 20, 28, 10, 19 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 19, 29 ],
            "friday": [ 28, 7, 15, 27 ],
            "saturday": [ 25, 5, 15, 4 ],
            "sunday": [ 24, 4, 3, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/mill-fragment-4.jpg',
          title: 'Mill(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 4, 3, 23 ],
            "tuesday": [ 22, 1, 11, 19 ],
            "wednesday": [ 20, 28, 10, 19 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 19, 29 ],
            "saturday": [ 28, 7, 15, 27 ],
            "sunday": [ 25, 5, 15, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/ark.jpg',
          title: 'Ark',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 4 ],
            "tuesday": [ 24, 4, 3, 23 ],
            "wednesday": [ 22, 1, 11, 19 ],
            "thursday": [ 20, 28, 10, 19 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 19, 29 ],
            "sunday": [ 28, 7, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bathen.jpg',
          title: 'Bathen',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 29, 8, 16, 28 ],
            "tuesday": [ 26, 6, 16, 5 ],
            "wednesday": [ 25, 5, 4, 24 ],
            "thursday": [ 23, 2, 12, 20 ],
            "friday": [ 21, 29, 11, 20 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 31, 11, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bearded-ladies.jpg',
          title: 'Bearded ladies',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 11, 20, 30 ],
            "tuesday": [ 29, 8, 16, 28 ],
            "wednesday": [ 26, 6, 16, 5 ],
            "thursday": [ 25, 5, 4, 24 ],
            "friday": [ 23, 2, 12, 20 ],
            "saturday": [ 21, 29, 11, 20 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/bill.jpg',
          title: 'Bill',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 31, 11, 20, 30 ],
            "wednesday": [ 29, 8, 16, 28 ],
            "thursday": [ 26, 6, 16, 5 ],
            "friday": [ 25, 5, 4, 24 ],
            "saturday": [ 23, 2, 12, 20 ],
            "sunday": [ 21, 29, 11, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/boot.jpg',
          title: 'Boot',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 21, 29, 11, 20 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 31, 11, 20, 30 ],
            "thursday": [ 29, 8, 16, 28 ],
            "friday": [ 26, 6, 16, 5 ],
            "saturday": [ 25, 5, 4, 24 ],
            "sunday": [ 23, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/monkey.jpg',
          title: 'monkey',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 2, 12, 20 ],
            "tuesday": [ 21, 29, 11, 20 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 31, 11, 20, 30 ],
            "friday": [ 29, 8, 16, 28 ],
            "saturday": [ 26, 6, 16, 5 ],
            "sunday": [ 25, 5, 4, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/cow-tif.jpg',
          title: 'Cow tif',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 5, 4, 24 ],
            "tuesday": [ 23, 2, 12, 20 ],
            "wednesday": [ 21, 29, 11, 20 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 31, 11, 20, 30 ],
            "saturday": [ 29, 8, 16, 28 ],
            "sunday": [ 26, 6, 16, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/cross.jpg',
          title: 'Cross',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 6, 16, 5 ],
            "tuesday": [ 25, 5, 4, 24 ],
            "wednesday": [ 23, 2, 12, 20 ],
            "thursday": [ 21, 29, 11, 20 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 31, 11, 20, 30 ],
            "sunday": [ 29, 8, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/dawn.jpg',
          title: 'Dawn',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 30, 9, 17, 29 ],
            "tuesday": [ 27, 7, 17, 6 ],
            "wednesday": [ 26, 6, 5, 25 ],
            "thursday": [ 24, 3, 13, 21 ],
            "friday": [ 22, 30, 12, 21 ],
            "saturday": [ 3, 13, 23, 31 ],
            "sunday": [ 1, 12, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/death-jumbo.jpg',
          title: 'Death Jumbo',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 12, 21, 31 ],
            "tuesday": [ 30, 9, 17, 29 ],
            "wednesday": [ 27, 7, 17, 6 ],
            "thursday": [ 26, 6, 5, 25 ],
            "friday": [ 24, 3, 13, 21 ],
            "saturday": [ 22, 30, 12, 21 ],
            "sunday": [ 3, 13, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/blind-children-feel-an-elephant.jpg',
          title: 'Blind children feel an elephant',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 3, 13, 23, 31 ],
            "tuesday": [ 1, 12, 21, 31 ],
            "wednesday": [ 30, 9, 17, 29 ],
            "thursday": [ 27, 7, 17, 6 ],
            "friday": [ 26, 6, 5, 25 ],
            "saturday": [ 24, 3, 13, 21 ],
            "sunday": [ 22, 30, 12, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/elejanjaweed.jpg',
          title: 'Elejanjaweed',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 22, 30, 12, 21 ],
            "tuesday": [ 3, 13, 23, 31 ],
            "wednesday": [ 1, 12, 21, 31 ],
            "thursday": [ 30, 9, 17, 29 ],
            "friday": [ 27, 7, 17, 6 ],
            "saturday": [ 26, 6, 5, 25 ],
            "sunday": [ 24, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/feed-lot.jpg',
          title: 'Feed lot',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 24, 3, 13, 21 ],
            "tuesday": [ 22, 30, 12, 21 ],
            "wednesday": [ 3, 13, 23, 31 ],
            "thursday": [ 1, 12, 21, 31 ],
            "friday": [ 30, 9, 17, 29 ],
            "saturday": [ 27, 7, 17, 6 ],
            "sunday": [ 26, 6, 5, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/final-alice-jumbo.jpg',
          title: 'Final alice Jumbo',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 26, 6, 5, 25 ],
            "tuesday": [ 24, 3, 13, 21 ],
            "wednesday": [ 22, 30, 12, 21 ],
            "thursday": [ 3, 13, 23, 31 ],
            "friday": [ 1, 12, 21, 31 ],
            "saturday": [ 30, 9, 17, 29 ],
            "sunday": [ 27, 7, 17, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/flyer-feb-fragment.jpg',
          title: 'Flyer feb(fragment)',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 7, 17, 6 ],
            "tuesday": [ 26, 6, 5, 25 ],
            "wednesday": [ 24, 3, 13, 21 ],
            "thursday": [ 22, 30, 12, 21 ],
            "friday": [ 3, 13, 23, 31 ],
            "saturday": [ 1, 12, 21, 31 ],
            "sunday": [ 30, 9, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/fur-coat.jpg',
          title: 'Fur coat',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 31, 10, 18, 30 ],
            "tuesday": [ 28, 8, 18, 7 ],
            "wednesday": [ 27, 7, 6, 26 ],
            "thursday": [ 25, 4, 14, 22 ],
            "friday": [ 23, 1, 13, 22 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 2, 13, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/genotek.jpg',
          title: 'Genotek',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 2, 13, 22, 1 ],
            "tuesday": [ 31, 10, 18, 30 ],
            "wednesday": [ 28, 8, 18, 7 ],
            "thursday": [ 27, 7, 6, 26 ],
            "friday": [ 25, 4, 14, 22 ],
            "saturday": [ 23, 1, 13, 22 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/goatetch.jpg',
          title: 'Goatetch',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 2, 13, 22, 1 ],
            "wednesday": [ 31, 10, 18, 30 ],
            "thursday": [ 28, 8, 18, 7 ],
            "friday": [ 27, 7, 6, 26 ],
            "saturday": [ 25, 4, 14, 22 ],
            "sunday": [ 23, 1, 13, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/horse-blanket.jpg',
          title: 'Horse blanket',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 23, 1, 13, 22 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 2, 13, 22, 1 ],
            "thursday": [ 31, 10, 18, 30 ],
            "friday": [ 28, 8, 18, 7 ],
            "saturday": [ 27, 7, 6, 26 ],
            "sunday": [ 25, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/hot-floor.jpg',
          title: 'Hot floor',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 25, 4, 14, 22 ],
            "tuesday": [ 23, 1, 13, 22 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 2, 13, 22, 1 ],
            "friday": [ 31, 10, 18, 30 ],
            "saturday": [ 28, 8, 18, 7 ],
            "sunday": [ 27, 7, 6, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/hot-lamb.jpg',
          title: 'Hot lamb',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 27, 7, 6, 26 ],
            "tuesday": [ 25, 4, 14, 22 ],
            "wednesday": [ 23, 1, 13, 22 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 2, 13, 22, 1 ],
            "saturday": [ 31, 10, 18, 30 ],
            "sunday": [ 28, 8, 18, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/jimmy.jpg',
          title: 'Jimmy',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 28, 8, 18, 7 ],
            "tuesday": [ 27, 7, 6, 26 ],
            "wednesday": [ 25, 4, 14, 22 ],
            "thursday": [ 23, 1, 13, 22 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 2, 13, 22, 1 ],
            "sunday": [ 31, 10, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Socialism & Worker\'s Rights',
          img_path: './img/may/judas-goat.jpg',
          title: 'Judas goat',
          artist: 'Sue Coe',
          year: '?',
          rule: {
            "monday": [ 1, 11, 19, 31 ],
            "tuesday": [ 29, 9, 19, 8 ],
            "wednesday": [ 28, 8, 7, 27 ],
            "thursday": [ 26, 5, 15, 23 ],
            "friday": [ 24, 2, 14, 23 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 3, 14, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_arts_id_seq', (SELECT MAX(id) FROM may_arts));");
    });
};
