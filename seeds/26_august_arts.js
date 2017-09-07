'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('august_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('august_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/company-visit.jpg',
          title: 'Company visit',
          artist: 'Niko Pirosmani',
          year: 'c. 1917',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 29, 2, 10, 26 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-good-samaritan-1907.jpg',
          title: 'The Good Samaritan',
          artist: 'Paula Modersohn-Becker',
          year: '1907',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 29, 2, 10, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/gasometer-in-vorortbahn-1920.jpg',
          title: 'Gasometer in Vorortbahn',
          artist: 'Ernst Ludwig Kirchner',
          year: '1914 - 1912',
          rule: {
            "monday": [ 29, 2, 10, 26 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 30, 3, 11, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/firefly-1907.jpg',
          title: 'Firefly',
          artist: 'George Seeley',
          year: '1907',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 29, 2, 10, 26 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 31, 4, 12, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/soapdish-1929.jpg',
          title: 'Soapdish',
          artist: 'Luigi Russolo',
          year: '1929',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 29, 2, 10, 26 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/vertigo-1908.jpg',
          title: 'Vertigo',
          artist: 'Leon Spilliaert',
          year: '1908',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 29, 2, 10, 26 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_arts_id_seq', (SELECT MAX(id) FROM august_arts));");
    });
};
