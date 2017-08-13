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
        },
        {
          id: 7,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/harriet-tubman-series-panel-4-1940(1).jpg',
          title: 'Harriet Tubman Series (Panel #4)',
          artist: 'Jacob Lawrence',
          year: '1940',
          rule: {
            "monday": "[5, 13, 21, 29]",
            "tuesday": "[7, 15, 23, 2]",
            "wednesday": "[9, 17, 25, 4]",
            "thursday": "[11, 19, 27, 6]",
            "friday": "[13, 21, 28, 8]",
            "saturday": "[1, 9, 17, 25]",
            "sunday": "[3, 11, 19, 27]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/cabeza.jpg',
          title: 'Cabeza',
          artist: 'Jean-Michel Basquiat',
          year: '1982',
          rule: {
            "monday": "[4, 12, 20, 28]",
            "tuesday": "[6, 14, 22, 1]",
            "wednesday": "[8, 16, 24, 3]",
            "thursday": "[10, 18, 26, 5]",
            "friday": "[12, 20, 28, 7]",
            "saturday": "[14, 22, 29, 9]",
            "sunday": "[2, 10, 18, 26]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/untitled-2000.jpg',
          title: 'Untitled',
          artist: 'David Hammons',
          year: '2000',
          rule: {
            "monday": "[2, 10, 18, 26]",
            "tuesday": "[4, 12, 20, 28]",
            "wednesday": "[6, 14, 22, 1]",
            "thursday": "[8, 16, 24, 3]",
            "friday": "[10, 18, 26, 5]",
            "saturday": "[12, 20, 28, 7]",
            "sunday": "[14, 22, 29, 9]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/untitled-1986.jpg',
          title: 'Untitled',
          artist: 'Fab 5 Freddy',
          year: '1986',
          rule: {
            "monday": "[14, 22, 29, 9]",
            "tuesday": "[2, 10, 18, 26]",
            "wednesday": "[4, 12, 20, 28]",
            "thursday": "[6, 14, 22, 1]",
            "friday": "[8, 16, 24, 3]",
            "saturday": "[10, 18, 26, 5]",
            "sunday": "[12, 20, 28, 7]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/starry-night-and-the-astronauts-1972.jpg',
          title: 'Starry Night and the Astronauts',
          artist: 'Alma Woodsey Thomas',
          year: '1972',
          rule: {
            "monday": "[12, 20, 28, 7]",
            "tuesday": "[14, 22, 29, 9]",
            "wednesday": "[2, 10, 18, 26]",
            "thursday": "[4, 12, 20, 28]",
            "friday": "[9, 14, 22, 1]",
            "saturday": "[8, 16, 24, 3]",
            "sunday": "[10, 18, 26, 5]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/untitled-1986-3.jpg',
          title: 'Untitled',
          artist: 'Fab 5 Freddy',
          year: '1986',
          rule: {
            "monday": "[10, 18, 26, 5]",
            "tuesday": "[12, 20, 28, 7]",
            "wednesday": "[14, 22, 29, 9]",
            "thursday": "[2, 10, 18, 26]",
            "friday": "[4, 12, 20, 28]",
            "saturday": "[9, 14, 22, 1]",
            "sunday": "[8, 16, 24, 3]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/untitled-1989.jpg',
          title: 'Untitled',
          artist: 'David Hammons',
          year: '1989',
          rule: {
            "monday": "[8, 16, 24, 3]",
            "tuesday": "[10, 18, 26, 5]",
            "wednesday": "[12, 20, 28, 9]",
            "thursday": "[14, 22, 29, 9]",
            "friday": "[2, 10, 18, 26]",
            "saturday": "[4, 12, 20, 28]",
            "sunday": "[9, 14, 22, 1]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/flexible.jpg',
          title: 'Flexible',
          artist: 'Jean-Michel Basquiat',
          year: '1984',
          rule: {
            "monday": "[10, 15, 23, 2]",
            "tuesday": "[9, 17, 25, 4]",
            "wednesday": "[11, 19, 27, 6]",
            "thursday": "[13, 21, 29, 10]",
            "friday": "[15, 23, 1, 10]",
            "saturday": "[3, 11, 19, 27]",
            "sunday": "[5, 13, 21, 29]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'black history',
          img_path: './img/february/strike-1949.jpg',
          title: 'Strike',
          artist: 'Jacob Lawrence',
          year: '1949',
          rule: {
            "monday": "[5, 13, 21, 29]",
            "tuesday": "[10, 15, 23, 2]",
            "wednesday": "[9, 17, 25, 4]",
            "thursday": "[11, 19, 27, 6]",
            "friday": "[13, 21, 29, 10]",
            "saturday": "[15, 23, 1, 10]",
            "sunday": "[3, 11, 19, 27]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_arts_id_seq', (SELECT MAX(id) FROM february_arts));");
    });
};
