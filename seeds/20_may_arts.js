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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_arts_id_seq', (SELECT MAX(id) FROM may_arts));");
    });
};
