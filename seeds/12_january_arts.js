'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('january_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('january_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/chaos-nr-2-1906.jpg',
          title: 'Chaos, Nr. 2',
          artist: 'Hilma af Klint',
          year: '1906',
          rule: {
            "monday": "[4, 7, 8, 10]",
            "tuesday": "[6, 7, 10, 12]",
            "wednesday": "[9, 10, 12, 14]",
            "thursday": "[12, 14, 16, 17]",
            "friday": "[14, 16, 19, 20]",
            "saturday": "[16, 18, 19, 22]",
            "sunday": "[1, 2, 4, 5]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/improvisation-6-african-1909.jpg',
          title: 'Improvisation 6 (African)',
          artist: 'Wassily Kandinsky',
          year: '1909',
          rule: {
            "monday": "[1, 2, 4, 5]",
            "tuesday": "[4, 7, 8, 10]",
            "wednesday": "[6, 7, 10, 12]",
            "thursday": "[9, 10, 12, 14]",
            "friday": "[12, 14, 16, 17]",
            "saturday": "[14, 16, 19, 20]",
            "sunday": "[16, 18, 19, 22]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/de-tio-st-rsta-n-10-alderdomen-1907.jpg',
          title: 'De Tio Största, n°10 Alderdomen',
          artist: 'Hilma af Klint',
          year: '1907',
          rule: {
            "monday": "[16, 18, 19, 22]",
            "tuesday": "[1, 2, 4, 5]",
            "wednesday": "[4, 7, 8, 10]",
            "thursday": "[6, 7, 10, 12]",
            "friday": "[9, 10, 12, 14]",
            "saturday": "[12, 14, 16, 17]",
            "sunday": "[14, 16, 19, 20]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/schooner-yachts-deer-isle-maine-1928.jpg',
          title: 'Schooner Yachts, Deer Isle, Maine',
          artist: 'John Marin',
          year: '1928',
          rule: {
            "monday": "[14, 16, 19, 20]",
            "tuesday": "[16, 18, 19, 22]",
            "wednesday": "[1, 2, 4, 5]",
            "thursday": "[4, 7, 8, 10]",
            "friday": "[6, 7, 10, 12]",
            "saturday": "[9, 10, 12, 14]",
            "sunday": "[12, 14, 16, 17]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/improvisation-4-1909.jpg',
          title: 'Improvisation 4',
          artist: 'Wassily Kandinsky',
          year: '1909',
          rule: {
            "monday": "[12, 14, 16, 17]",
            "tuesday": "[14, 16, 19, 20]",
            "wednesday": "[16, 18, 19, 22]",
            "thursday": "[1, 2, 4, 5]",
            "friday": "[4, 7, 8, 10]",
            "saturday": "[6, 7, 10, 12]",
            "sunday": "[9, 10, 12, 14]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/the-dove-nr-12-1915.jpg',
          title: 'The Dove, Nr. 12',
          artist: 'Hilma af Klint',
          year: '1915',
          rule: {
            "monday": "[9, 10, 12, 14]",
            "tuesday": "[12, 14, 16, 17]",
            "wednesday": "[14, 16, 19, 20]",
            "thursday": "[16, 18, 19, 22]",
            "friday": "[1, 2, 4, 5]",
            "saturday": "[4, 7, 8, 10]",
            "sunday": "[6, 7, 10, 12]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/.jpg',
          title: '',
          artist: '',
          year: '',
          rule: {
            "monday": "[]",
            "tuesday": "[]",
            "wednesday": "[]",
            "thursday": "[]",
            "friday": "[]",
            "saturday": "[]",
            "sunday": "[]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_arts_id_seq', (SELECT MAX(id) FROM january_arts));");
    });
};
