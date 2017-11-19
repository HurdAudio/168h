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
        },
        {
          id: 71,
          user_id: 1,
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
          theme: 'socialism/worker\'s struggle',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_arts_id_seq', (SELECT MAX(id) FROM may_arts));");
    });
};
