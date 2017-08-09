'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('february_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('february_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/ironew-york-of-the-negro-policeman.jpg',
          title: 'Irony of the Negro Policeman',
          artist: 'Jean-Michel Basquiat',
          year: '1981',
          rule: {
            "monday": "[3, 11, 19, 27]",
            "tuesday": "[5, 13, 21, 29]",
            "wednesday": "[7, 15, 23, 2]",
            "thursday": "[9, 17, 25, 4]",
            "friday": "[11, 19, 27, 6]",
            "saturday": "[13, 21, 29, 8]",
            "sunday": "[1, 9, 17, 25]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/african-american-flag-1990.jpg',
          title: 'African-American Flag',
          artist: 'David Hammons',
          year: '1990',
          rule: {
            "monday": "[1, 9, 17, 25]",
            "tuesday": "[3, 11, 19, 27]",
            "wednesday": "[5, 13, 21, 29]",
            "thursday": "[7, 15, 23, 2]",
            "friday": "[9, 17, 25,4]",
            "saturday": "[11, 19, 27, 6]",
            "sunday": "[13, 21, 29, 8]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/obnoxious-liberals.jpg',
          title: 'Obnoxious Liberals',
          artist: 'Jean-Michel Basquiat',
          year: '1982',
          rule: {
            "monday": "[13, 21, 29, 8]",
            "tuesday": "[1, 9, 17, 25]",
            "wednesday": "[3, 11, 19, 27]",
            "thursday": "[5, 13, 21, 29]",
            "friday": "[7, 15, 23, 2]",
            "saturday": "[9, 17, 25, 4]",
            "sunday": "[11, 19, 27, 6]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/return-of-god-to-africa-1984.jpg',
          title: 'Return Of God to Africa',
          artist: 'Fab 5 Freddy',
          year: '1984',
          rule: {
            "monday": "[11, 19, 27, 6]",
            "tuesday": "[13, 21, 29, 8]",
            "wednesday": "[1, 9, 17, 25]",
            "thursday": "[3, 11, 19, 27]",
            "friday": "[5, 13, 21, 29]",
            "saturday": "[7, 15, 23, 2]",
            "sunday": "[9, 17, 25, 4]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/untitled-green-power-1975.jpg',
          title: 'Untitled/Green Power',
          artist: 'David Hammons',
          year: '1975',
          rule: {
            "monday": "[9, 17, 25, 4]",
            "tuesday": "[11, 19, 27, 6]",
            "wednesday": "[13, 21, 28, 8]",
            "thursday": "[1, 9, 17, 25]",
            "friday": "[3, 11, 19, 27]",
            "saturday": "[5, 13, 21, 29]",
            "sunday": "[7, 15, 23, 2]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/max-roach.jpg',
          title: 'Max Roach',
          artist: 'Jean-Michel Basquiat',
          year: '1984',
          rule: {
            "monday": "[7, 15, 23, 2]",
            "tuesday": "[9, 17, 25, 4]",
            "wednesday": "[11, 19, 27, 6]",
            "thursday": "[13, 21, 28, 8]",
            "friday": "[1, 9, 17, 25]",
            "saturday": "[3, 11, 19, 27]",
            "sunday": "[5, 13, 21, 29]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_arts_id_seq', (SELECT MAX(id) FROM february_arts));");
    });
};
