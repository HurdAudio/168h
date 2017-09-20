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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_arts_id_seq', (SELECT MAX(id) FROM may_arts));");
    });
};
