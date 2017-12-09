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
        },
        {
          id: 7,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/capelli-rossi-red-hair.jpg',
          title: 'Capelli Rossi (Red Hair)',
          artist: 'Ernst Ludwig Kirchner',
          year: '1914',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 30, 3, 11, 27 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/jack-of-clubs-1916.jpg',
          title: 'Jack of Clubs',
          artist: 'Olga Rozanova',
          year: '1916',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 30, 3, 11, 27 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/a-victim-of-society.jpg',
          title: 'A Victim of Society',
          artist: 'George Grosz',
          year: '1919',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
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
          id: 10,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/flamboyant-landscape-1933.jpg',
          title: 'Flamboyant landscape',
          artist: 'Martiros Sarian',
          year: '1933',
          rule: {
            "monday": [ 30, 3, 11, 27 ],
            "tuesday": [ 5, 9, 17, 2 ],
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
          id: 11,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/entrance-hall-moffatt-ladd-house-1923.jpg',
          title: 'Entrance Hall, Moffatt-Ladd House',
          artist: 'Walter Gay',
          year: '1923',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 30, 3, 11, 27 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-blue-ship-1934.jpg',
          title: 'The Blue Ship',
          artist: 'Alfred Wallis',
          year: '1934',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 30, 3, 11, 27 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/moonlight-waning-winter-1924.jpg',
          title: 'Moonlight, Waning Winter',
          artist: 'Homer Watson',
          year: '1924',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 30, 3, 11, 27 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-chess-players-1929.jpg',
          title: 'The Chess Players',
          artist: 'John Lavery',
          year: '1929',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 31, 4, 12, 28 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/contrasting-sounds-1924.jpg',
          title: 'Contrasting sounds',
          artist: 'Wassily Kandinsky',
          year: '1924',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 31, 4, 12, 28 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/boy-with-the-birdie-1924.jpg',
          title: 'Boy with the Birdie',
          artist: 'Fedir Krychevsky',
          year: '1924',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
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
          id: 17,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/gr-relief-ii-1932.jpg',
          title: 'Grå relief II',
          artist: 'Gosta Adrian-Nilsson',
          year: '1932',
          rule: {
            "monday": [ 31, 4, 12, 28 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/l-glise-st-desir.jpg',
          title: 'L\'église St. Desir',
          artist: 'Louis Vivin',
          year: '?',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 31, 4, 12, 28 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/r-ckenakt-1920.jpg',
          title: 'Rückenakt',
          artist: 'Heinrich Kuhn',
          year: '1920',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 31, 4, 12, 28 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/clifton-grove-clifton-hall-nottingham-1.jpg',
          title: 'Clifton Grove, Clifton Hall, Nottingham',
          artist: 'Arthur Lowe',
          year: '?',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 31, 4, 12, 28 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/odalisque-1931.jpg',
          title: 'Odalisque',
          artist: 'Francisc Sirato',
          year: '1931',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 2, 5, 14, 30 ],
            "friday": [ 1, 5, 13, 29 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/nude-sitting-1902.jpg',
          title: 'Nude sitting',
          artist: 'Nicolae Vermont',
          year: '1902',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 2, 5, 14, 30 ],
            "saturday": [ 1, 5, 13, 29 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/j-zef-pankiewicz-fili-anka-herbaty-wizyta.jpg',
          title: 'Filiżanka Herbaty (wizyta)',
          artist: 'Józef Pankiewicz',
          year: '1922',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 2, 5, 14, 30 ],
            "sunday": [ 1, 5, 13, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/bittersweet-1935.jpg',
          title: 'Bittersweet',
          artist: 'Georges Rouault',
          year: '1935',
          rule: {
            "monday": [ 1, 5, 13, 29 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 2, 5, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/asakusa-kannon-tokyo-1926.jpg',
          title: 'Asakusa Kannon, Tokyo',
          artist: 'Shotei Takahashi',
          year: '1926',
          rule: {
            "monday": [ 2, 5, 14, 30 ],
            "tuesday": [ 1, 5, 13, 29 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/fanny-machine-the-machinery-1928.jpg',
          title: 'Fanny Machine - The machinery',
          artist: 'Frantisek Kupka',
          year: '1928',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 2, 5, 14, 30 ],
            "wednesday": [ 1, 5, 13, 29 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/october-idyll-1905.jpg',
          title: 'October Idyll',
          artist: 'Mstislav Dobuzhinsky',
          year: '1905',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 2, 5, 14, 30 ],
            "thursday": [ 1, 5, 13, 29 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/psyche-discovers-that-her-secret-lover-is-cupid.jpg',
          title: 'Psyche Discovers That Her Secret Lover Is Cupid',
          artist: 'Maurice Denis',
          year: '1908',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 3, 6, 15, 31 ],
            "friday": [ 2, 6, 14, 30 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/planos-de-color-con-dos-maderas-superpuestas-1928.jpg',
          title: 'Planos de color con dos maderas superpuestas',
          artist: 'Joaquin Torres Garcia',
          year: '1928',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 3, 6, 15, 31 ],
            "saturday": [ 2, 6, 14, 30 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/mottled-landscape-1924.jpg',
          title: 'Mottled landscape',
          artist: 'Martiros Sarian',
          year: '1924',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 3, 6, 15, 31 ],
            "sunday": [ 2, 6, 14, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-blonde-woman.jpg',
          title: 'The Blonde Woman',
          artist: 'Albert Marquet',
          year: '?',
          rule: {
            "monday": [ 2, 6, 14, 30 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 3, 6, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/wines-liquors-1910.jpg',
          title: 'Wines, Liquors',
          artist: 'Maurice de Vlaminck',
          year: '1910',
          rule: {
            "monday": [ 3, 6, 15, 31 ],
            "tuesday": [ 2, 6, 14, 30 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/le-maquereau-1935.jpg',
          title: 'Le Maquereau',
          artist: 'Camille Bombois',
          year: '1935',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 3, 6, 15, 31 ],
            "wednesday": [ 2, 6, 14, 30 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-tribute-money-1915.jpg',
          title: 'The tribute money',
          artist: 'Emil Nolde',
          year: '1915',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 3, 6, 15, 31 ],
            "thursday": [ 2, 6, 14, 30 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-demonstration.jpg',
          title: 'The Demonstration',
          artist: 'Emmanuel Zairis',
          year: '?',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 4, 7, 16, 1 ],
            "friday": [ 3, 7, 15, 31 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/proue-de-naivre-et-papillons-1925.jpg',
          title: 'Proue de naivre et papillons',
          artist: 'Pierre Roy',
          year: '1925',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 4, 7, 16, 1 ],
            "saturday": [ 3, 7, 15, 31 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/die-k-nigin-von-saba-1918.jpg',
          title: 'Die Königin von Saba',
          artist: 'Arthur Segal',
          year: '1918',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 4, 7, 16, 1 ],
            "sunday": [ 3, 7, 15, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/fishing-boats-at-collioure.jpg',
          title: 'Fishing boats at Collioure',
          artist: 'Henri Martin',
          year: '?',
          rule: {
            "monday": [ 3, 7, 15, 31 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 4, 7, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/mih-ly-k-rolyi-1930.jpg',
          title: 'Mihály Károlyi',
          artist: 'Bertalan Por',
          year: '1930',
          rule: {
            "monday": [ 4, 7, 16, 1 ],
            "tuesday": [ 3, 7, 15, 31 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-accordion-player-1919.jpg',
          title: 'The Accordion Player',
          artist: 'Gino Severini',
          year: '1919',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 4, 7, 16, 1 ],
            "wednesday": [ 3, 7, 15, 31 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/la-femme-l-ventail-woman-with-fan-1913.jpg',
          title: 'La Femme à l\'Éventail (Woman with Fan)',
          artist: 'Jean Metzinger',
          year: '1913',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 4, 7, 16, 1 ],
            "thursday": [ 3, 7, 15, 31 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/still-life-with-t-ang-horse-1921.jpg',
          title: 'Still Life with T\'ang Horse',
          artist: 'Roger Fry',
          year: '1921',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 5, 8, 17, 2 ],
            "friday": [ 4, 8, 16, 1 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/picture-xvi-the-great-gate-of-kiev-stage-set-for-mussorgsky-s-pictures-at-an-exhibition-in-1928(1).jpg',
          title: 'Picture XVI, The Great Gate of Kiev. Stage set for Mussorgsky\'s Pictures at an Exhibition in Friedrich Theater, Dessau.',
          artist: 'Wassily Kandinsky',
          year: '1928',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 5, 8, 17, 2 ],
            "saturday": [ 4, 8, 16, 1 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/eiffel-tower.jpg',
          title: 'Eiffel Tower',
          artist: 'Robert Delaunay',
          year: '1922',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 5, 8, 17, 2 ],
            "sunday": [ 4, 8, 16, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/visitation-in-blue.jpg',
          title: 'Visitation in Blue',
          artist: 'Maurice Denis',
          year: '?',
          rule: {
            "monday": [ 4, 8, 16, 1 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 5, 8, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/musicians-1927.jpg',
          title: 'Musicians',
          artist: 'Carlos Merida',
          year: '1927',
          rule: {
            "monday": [ 5, 8, 17, 2 ],
            "tuesday": [ 4, 8, 16, 1 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/hommage-delaunay-et-gleizes-1938.jpg',
          title: 'Hommage à Delaunay et Gleizes',
          artist: 'Adolf Fleischmann',
          year: '1938',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 5, 8, 17, 2 ],
            "wednesday": [ 4, 8, 16, 1 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/from-thorheiten-1901-3.jpg',
          title: 'from Thorheiten',
          artist: 'Thomas Theodor Heine',
          year: '1901',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 5, 8, 17, 2 ],
            "thursday": [ 4, 8, 16, 1 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/not_detected_235984.jpg',
          title: 'The Widow I',
          artist: 'Kathe Kollwitz',
          year: '1921',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 6, 9, 18, 3 ],
            "friday": [ 5, 9, 17, 2 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/ashbury-park-south-1920.jpg',
          title: 'Ashbury Park South',
          artist: 'Florine Stettheimer',
          year: '1920',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 6, 9, 18, 3 ],
            "saturday": [ 5, 9, 17, 2 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/petrograd-red-columns-1922.jpg',
          title: 'Petrograd. Red columns.',
          artist: 'Anna Ostroumova-Lebedeva',
          year: '1922',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 6, 9, 18, 3 ],
            "sunday": [ 5, 9, 17, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/homme-cactus-dansant-1939.jpg',
          title: 'Homme cactus dansant',
          artist: 'Julio Gonzalez',
          year: '1939',
          rule: {
            "monday": [ 5, 9, 17, 2 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 13, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 6, 9, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/portrait-of-natalia-petrovna-konchalovsky-the-artist-s-daughter-in-pink-dress-1925.jpg',
          title: 'Portrait of Natalia Petrovna Konchalovsky, the artist\'s daughter (in pink dress)',
          artist: 'Pyotr Konchalovsky',
          year: '1925',
          rule: {
            "monday": [ 6, 9, 18, 3 ],
            "tuesday": [ 5, 9, 17, 2 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/hauptstrasse-mit-mann-1934(1).jpg',
          title: 'Hauptstrasse (Mit Mann)',
          artist: 'Gabriele Munter',
          year: '1934',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 6, 9, 18, 3 ],
            "wednesday": [ 5, 9, 17, 2 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/not_detected_235938.jpg',
          title: 'Female nude seated on the ground',
          artist: 'Oskar Kokoschka',
          year: '1913',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 6, 9, 18, 3 ],
            "thursday": [ 5, 9, 17, 2 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/nude-on-sand-oceano-1935.jpg',
          title: 'Nude on Sand, Oceano',
          artist: 'Edward Weston',
          year: '1935',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 7, 10, 19, 4 ],
            "friday": [ 6, 10, 18, 3 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/portrait-of-b-khmelnitsky.jpg',
          title: 'Portrait of B. Khmelnitsky',
          artist: 'Heorhiy Narbut',
          year: '?',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 7, 10, 19, 4 ],
            "saturday": [ 6, 10, 18, 3 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/gypsies-from-dobruja.jpg',
          title: 'Gypsies from Dobruja',
          artist: 'Stefan Dimitrescu',
          year: '?',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 7, 10, 19, 4 ],
            "sunday": [ 6, 10, 18, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/model-1913.jpg',
          title: 'Model',
          artist: 'Vladimir Tatlin',
          year: '1913',
          rule: {
            "monday": [ 6, 10, 18, 3 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 7, 10, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/abstract-no-7-1939.jpg',
          title: 'Abstract No. 7',
          artist: 'Lawren Harris',
          year: '1939',
          rule: {
            "monday": [ 7, 10, 19, 4 ],
            "tuesday": [ 6, 10, 18, 3 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/highway-and-byways-1929(1).jpg',
          title: 'Highway and byways',
          artist: 'Paul Klee',
          year: '1929',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 7, 10, 19, 4 ],
            "wednesday": [ 6, 10, 18, 3 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-white-man-1907.jpg',
          title: 'The White Man',
          artist: 'Lyonel Feininger',
          year: '1907',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 7, 10, 19, 4 ],
            "thursday": [ 6, 10, 18, 3 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/chashma-shahi.jpg',
          title: 'Chashma Shahi',
          artist: 'Abanindranath Tagore',
          year: '?',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 8, 11, 20, 5 ],
            "friday": [ 7, 11, 19, 4 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/baigneuse.jpg',
          title: 'Baigneuse',
          artist: 'Nicolae Vermont',
          year: '?',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 13, 21, 6 ],
            "friday": [ 8, 11, 20, 5 ],
            "saturday": [ 7, 11, 19, 4 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/21439.jpg',
          title: 'Departure of Empress Elizabeth Petrovna',
          artist: 'Eugene Lanceray',
          year: '1916',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 8, 11, 20, 5 ],
            "sunday": [ 7, 11, 19, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/self-portrait.jpg',
          title: 'Self-Portrait',
          artist: 'Otto Dix',
          year: '1914',
          rule: {
            "monday": [ 7, 11, 19, 4 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 8, 11, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/haystacks-pankiewitcz.jpg',
          title: '73.5 Cm (28.94 In.). Painting - Oil on Canvas',
          artist: 'Józef Pankiewicz',
          year: '1912',
          rule: {
            "monday": [ 8, 11, 20, 5 ],
            "tuesday": [ 7, 11, 19, 4 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/sister-of-mercy.jpg',
          title: 'Sister of mercy',
          artist: 'Ivan Vladimirov',
          year: '?',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 8, 11, 20, 5 ],
            "wednesday": [ 7, 11, 19, 4 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/cochet-rie.jpg',
          title: 'Cochetărie',
          artist: 'Ipolit Strambu',
          year: '?',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 8, 11, 20, 5 ],
            "thursday": [ 7, 11, 19, 4 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/p-235-o-2-k-8-2-1.jpg',
          title: 'Unknown',
          artist: 'Boris Schatz',
          year: '?',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 9, 12, 21, 6 ],
            "friday": [ 8, 12, 20, 5 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/j-zef-pankiewicz-jasie-ski-przy-fortepianie-1908.jpg',
          title: 'Feliks Jasieński Przy Fortepianie',
          artist: 'Józef Pankiewicz',
          year: '1908',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 9, 12, 21, 6 ],
            "saturday": [ 8, 12, 20, 5 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/lunes-et-petites-lunes-tournez.jpg',
          title: 'Lunes et petites lunes tournez',
          artist: 'Louis Soutter',
          year: '?',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 9, 12, 21, 6 ],
            "sunday": [ 8, 12, 20, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/japonese-props-1930.jpg',
          title: 'Japonese Props',
          artist: 'Theodor Pallady',
          year: '1930',
          rule: {
            "monday": [ 8, 12, 20, 5 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 9, 12, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/notable-day-in-the-mountains-1926.jpg',
          title: 'Notable day in the mountains',
          artist: 'Martiros Sarian',
          year: '1926',
          rule: {
            "monday": [ 9, 12, 21, 6 ],
            "tuesday": [ 8, 12, 20, 5 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-kiss-1904.jpg',
          title: 'The Kiss',
          artist: 'Clarence White',
          year: '1904',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 9, 12, 21, 6 ],
            "wednesday": [ 8, 12, 20, 5 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/new-clouds-1937.jpg',
          title: 'New Clouds',
          artist: 'Nandalal Bose',
          year: '1937',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 9, 12, 21, 6 ],
            "thursday": [ 8, 12, 20, 5 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/landscape-with-a-pond-and-water-lilies-1915.jpg',
          title: 'Landscape with a Pond and Water Lilies',
          artist: 'Vanessa Bell',
          year: '1915',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 10, 13, 22, 7 ],
            "friday": [ 9, 13, 21, 6 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/nude-with-red-turban-1926.jpg',
          title: 'Nude with Red Turban',
          artist: 'Bela Czobel',
          year: '1926',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 10, 13, 22, 7 ],
            "saturday": [ 9, 13, 21, 6 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/pieta.jpg',
          title: 'Pieta',
          artist: 'Oskar Kokoschka',
          year: '1909',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 10, 13, 22, 7 ],
            "sunday": [ 9, 13, 21, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/goldfish-1902.jpg',
          title: 'Goldfish',
          artist: 'Gustav Klimt',
          year: '1901 - 1902',
          rule: {
            "monday": [ 9, 13, 21, 6 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 10, 13, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/meditation-1917(1).jpg',
          title: 'Meditation',
          artist: 'Gabriele Munter',
          year: '1917',
          rule: {
            "monday": [ 10, 13, 22, 7 ],
            "tuesday": [ 9, 13, 21, 6 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/holiday-mission-beach-1938.jpg',
          title: 'Holiday, Mission Beach',
          artist: 'Charles Reiffel',
          year: '1938',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 10, 13, 22, 7 ],
            "wednesday": [ 9, 13, 21, 6 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/la-table-1927.jpg',
          title: 'La Table',
          artist: 'Louis Marcoussis',
          year: '1927',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/cityscape-kiev.jpg',
          title: 'Cityscape. Kiev.',
          artist: 'Oleksandr Bogomazov',
          year: 'c.1913',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 16, 24, 9 ],
            "thursday": [ 11, 14, 23, 8 ],
            "friday": [ 10, 14, 22, 7 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/portrait-of-elena-annenkova-1917.jpg',
          title: 'Portrait of Elena Annenkova',
          artist: 'Jury Annenkov',
          year: '1917',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 16, 24, 9 ],
            "friday": [ 11, 14, 23, 8 ],
            "saturday": [ 10, 14, 22, 7 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-sailor-self-portrait-1912.jpg',
          title: 'The Sailor (Self Portrait)',
          artist: 'Vladimir Tatlin',
          year: '1911 - 1912',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 16, 24, 9 ],
            "saturday": [ 11, 14, 23, 8 ],
            "sunday": [ 10, 14, 22, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/sailor-and-his-girl-1920.jpg',
          title: 'Sailor and His Girl',
          artist: 'Boris Kustodiev',
          year: '1920',
          rule: {
            "monday": [ 10, 14, 22, 7 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 16, 24, 9 ],
            "sunday": [ 11, 14, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/orbits-of-the-planets-1921.jpg',
          title: 'Orbits of the Planets',
          artist: 'Erich Buchholz',
          year: '1921',
          rule: {
            "monday": [ 11, 14, 23, 8 ],
            "tuesday": [ 10, 14, 22, 7 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 16, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/apollo-1923.jpg',
          title: 'Apollo',
          artist: 'Willi Baumeister',
          year: '1923',
          rule: {
            "monday": [ 12, 16, 24, 9 ],
            "tuesday": [ 11, 14, 23, 8 ],
            "wednesday": [ 10, 14, 22, 7 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/composition-1936.jpg',
          title: 'Composition',
          artist: 'Karl Knaths',
          year: '1936',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 16, 24, 9 ],
            "wednesday": [ 11, 14, 23, 8 ],
            "thursday": [ 10, 14, 22, 7 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-sleeping-gypsy-1897.jpg',
          title: 'The Sleeping Gypsy',
          artist: 'Henri Rousseau',
          year: '1897',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 17, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 11, 15, 23, 8 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/fire-swept-algoma-1920.jpg',
          title: 'Fire Swept Algoma',
          artist: 'Frank Johnston',
          year: '1920',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 17, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 11, 15, 23, 8 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/castle-and-sun-1928.jpg',
          title: 'Castle and Sun',
          artist: 'Paul Klee',
          year: '1928',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 17, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 11, 15, 23, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-dancer-1938.jpg',
          title: 'he Dancer',
          artist: 'Greta Freist',
          year: '1938',
          rule: {
            "monday": [ 11, 15, 23, 8 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 17, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/la-rentr-e-1927.jpg',
          title: 'La rentrée',
          artist: 'Anita Malfatti',
          year: '1927',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 11, 15, 23, 8 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 17, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/workshop-1915.jpg',
          title: 'Workshop',
          artist: 'Wyndham Lewis',
          year: '1915',
          rule: {
            "monday": [ 13, 17, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 11, 15, 23, 8 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/automat-1927.jpg',
          title: 'Automat',
          artist: 'Edward Hopper',
          year: '1927',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 17, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 11, 15, 23, 8 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/balchik-beach-1926.jpg',
          title: 'Balchik Beach',
          artist: 'Stefan Dimitrescu',
          year: '1926',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 18, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 12, 15, 24, 9 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/composition-avec-7-tubes-1925.jpg',
          title: 'Composition avec 7 tubes',
          artist: 'Gustave Buchet',
          year: '1925',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 18, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 12, 15, 24, 9 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/futuristic-woman-1911.jpg',
          title: 'Futuristic woman',
          artist: 'David Burliuk',
          year: '1911',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 20, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 18, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 12, 15, 24, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/tuning-saws-1927.jpg',
          title: 'Tuning saws',
          artist: 'Oleksandr Bogomazov',
          year: '1927',
          rule: {
            "monday": [ 12, 15, 24, 9 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 20, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 18, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/sunrise-1924.jpg',
          title: 'Sunrise',
          artist: 'Arthur Dove',
          year: '1924',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 12, 15, 24, 9 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 18, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/bullfighting-amateur-1910.jpg',
          title: 'Bullfighting amateur',
          artist: 'Pyotr Konchalovsky',
          year: '1910',
          rule: {
            "monday": [ 14, 18, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 12, 15, 24, 9 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/radha-s-vihara-1936.jpg',
          title: 'Radha\'s Vihara',
          artist: 'Nandalal Bose',
          year: '1936',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 18, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 12, 15, 24, 9 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/grand-musicien-1920.jpg',
          title: 'Grand musicien',
          artist: 'Georges Ribemont-Dessaignes',
          year: '1920',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 19, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 13, 16, 25, 10 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 21, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/cinco-mo-as-de-guaratinguet-1930.jpg',
          title: 'Cinco Moças de Guaratinguetá',
          artist: 'Emiliano Di Cavalcanti',
          year: '1930',
          rule: {
            "monday": [ 18, 21, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 19, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 13, 16, 25, 10 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/lumberjack.jpg',
          title: 'Lumberjack',
          artist: 'Oleksandr Bogomazov',
          year: 'c.1913',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 21, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 19, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 13, 16, 25, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/adam-and-eve-1938.jpg',
          title: 'Adam and Eve',
          artist: 'Andre Bauchant',
          year: '1938',
          rule: {
            "monday": [ 13, 16, 25, 10 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 21, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 19, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-mermaid-1910.jpg',
          title: 'The Mermaid',
          artist: 'Howard Pyle',
          year: '1910',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 13, 16, 25, 10 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 21, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 19, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/they-tens-mainstay-iv-1907.jpg',
          title: 'They tens mainstay IV',
          artist: 'Hilma af Klint',
          year: '1907',
          rule: {
            "monday": [ 15, 19, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 13, 16, 25, 10 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 21, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/girl-on-a-hill-1928.jpg',
          title: 'Girl on a Hill',
          artist: 'Prudence Heward',
          year: '1928',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 19, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 13, 16, 25, 10 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 21, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/into-the-world-there-came-a-soul-called-ida-1930.jpg',
          title: 'Into the World There Came a Soul Called Ida',
          artist: 'Ivan Albright',
          year: '1929 - 1930',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 20, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 14, 17, 26, 11 ],
            "saturday": [ 20, 24, 1, 17 ],
            "sunday": [ 19, 22, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/early-spring-illustration-to-a-poem-by-rainer-maria-rilke-1901-1.jpg',
          title: 'Early spring. Illustration to a poem by Rainer Maria Rilke.',
          artist: 'Koloman Moser',
          year: '1901',
          rule: {
            "monday": [ 19, 22, 31, 16 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 20, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 14, 17, 26, 11 ],
            "sunday": [ 20, 24, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/three-girls-1935.jpg',
          title: 'Three Girls',
          artist: 'Amrita Sher-Gil',
          year: '1935',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 22, 31, 16 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 20, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 14, 17, 26, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/composition-1922-2.jpg',
          title: 'Composition',
          artist: 'Janos Mattis-Teutsch',
          year: '1922',
          rule: {
            "monday": [ 14, 17, 26, 11 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 22, 31, 16 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 20, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/color-study-squares-with-concentric-circles-1913(1).jpg',
          title: 'Color Study: Squares with Concentric Circles',
          artist: 'Wassily Kandinsky',
          year: 'c.1913',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 14, 17, 26, 11 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 22, 31, 16 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 20, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/portrait-of-lajos-kass-k-1920.jpg',
          title: 'Portrait of Lajos Kassák',
          artist: 'Sandor Bortnyik',
          year: '1920',
          rule: {
            "monday": [ 16, 20, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 14, 17, 26, 11 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 22, 31, 16 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/cover-for-a-book-by-julian-przybo-z-ponad-1930.jpg',
          title: 'Cover for a book by Julian Przyboś, Z ponad',
          artist: 'Wladyslaw Strzeminski',
          year: '1930',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 20, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 14, 17, 26, 11 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 22, 31, 16 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/l-annonce-de-l-hiver-1935.jpg',
          title: 'L\'annonce de l\'hiver',
          artist: 'Francis Gruber',
          year: '1935',
          rule: {
            "monday": [ 19, 23, 31, 16 ],
            "tuesday": [ 18, 22, 30, 15 ],
            "wednesday": [ 17, 21, 29, 14 ],
            "thursday": [ 16, 19, 28, 13 ],
            "friday": [ 15, 18, 27, 12 ],
            "saturday": [ 21, 25, 2, 18 ],
            "sunday": [ 20, 23, 1, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/telephone-1916.jpg',
          title: 'Telephone',
          artist: 'Morton Shamberg',
          year: '1916',
          rule: {
            "monday": [ 20, 23, 1, 17 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 22, 30, 15 ],
            "thursday": [ 17, 21, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 15, 18, 27, 12 ],
            "sunday": [ 21, 25, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/harvest-1933.jpg',
          title: 'Harvest',
          artist: 'Karl Knaths',
          year: '1933',
          rule: {
            "monday": [ 21, 25, 2, 18 ],
            "tuesday": [ 20, 23, 1, 17 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 22, 30, 15 ],
            "friday": [ 17, 21, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 15, 18, 27, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/northern-lights-1917.jpg',
          title: 'Northern Lights',
          artist: 'Tom Thomson',
          year: '1917',
          rule: {
            "monday": [ 15, 18, 27, 12 ],
            "tuesday": [ 21, 25, 2, 18 ],
            "wednesday": [ 20, 23, 1, 17 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 22, 30, 15 ],
            "saturday": [ 17, 21, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/synchromy-1916.jpg',
          title: 'Synchromy',
          artist: 'Morgan Russell',
          year: '1916',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 15, 18, 27, 12 ],
            "wednesday": [ 21, 25, 2, 18 ],
            "thursday": [ 20, 23, 1, 17 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 22, 30, 15 ],
            "sunday": [ 17, 21, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/morning-after-snowstorm-1913.jpg',
          title: 'Morning in the Village after Snowstorm',
          artist: 'Kazimir Malevich',
          year: '1913',
          rule: {
            "monday": [ 17, 21, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 15, 18, 27, 12 ],
            "thursday": [ 21, 25, 2, 18 ],
            "friday": [ 20, 23, 1, 17 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 22, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/red-muslin-1931.jpg',
          title: 'Red Muslin',
          artist: 'Ion Theodorescu-Sion',
          year: '1931',
          rule: {
            "monday": [ 18, 22, 30, 15 ],
            "tuesday": [ 17, 21, 29, 14 ],
            "wednesday": [ 16, 19, 28, 13 ],
            "thursday": [ 15, 18, 27, 12 ],
            "friday": [ 21, 25, 2, 18 ],
            "saturday": [ 20, 23, 1, 17 ],
            "sunday": [ 19, 23, 31, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/archers-1937.jpg',
          title: 'Archers',
          artist: 'Ernst Ludwig Kirchner',
          year: '1935 - 1937',
          rule: {
            "monday": [ 20, 24, 1, 17 ],
            "tuesday": [ 19, 23, 31, 16 ],
            "wednesday": [ 18, 20, 30, 15 ],
            "thursday": [ 17, 20, 29, 14 ],
            "friday": [ 16, 19, 28, 13 ],
            "saturday": [ 22, 26, 3, 19 ],
            "sunday": [ 21, 24, 2, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/1919-alarm-1934.jpg',
          title: '1919. Alarm',
          artist: 'Kuzma Petrov-Vodkin',
          year: '1934',
          rule: {
            "monday": [ 21, 24, 2, 18 ],
            "tuesday": [ 20, 24, 1, 17 ],
            "wednesday": [ 19, 23, 31, 16 ],
            "thursday": [ 18, 20, 30, 15 ],
            "friday": [ 17, 20, 29, 14 ],
            "saturday": [ 16, 19, 28, 13 ],
            "sunday": [ 22, 26, 3, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/untitled-1930.jpg',
          title: 'Untitled',
          artist: 'William Baziotes',
          year: '1930',
          rule: {
            "monday": [ 22, 26, 3, 19 ],
            "tuesday": [ 21, 24, 2, 18 ],
            "wednesday": [ 20, 24, 1, 17 ],
            "thursday": [ 19, 23, 31, 16 ],
            "friday": [ 18, 20, 30, 15 ],
            "saturday": [ 17, 20, 29, 14 ],
            "sunday": [ 16, 19, 28, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/dance-around-the-golden-calf-1910.jpg',
          title: 'Dance Around the Golden Calf',
          artist: 'Emil Nolde',
          year: '1910',
          rule: {
            "monday": [ 16, 19, 28, 13 ],
            "tuesday": [ 22, 26, 3, 19 ],
            "wednesday": [ 21, 24, 2, 18 ],
            "thursday": [ 20, 24, 1, 17 ],
            "friday": [ 19, 23, 31, 16 ],
            "saturday": [ 18, 20, 30, 15 ],
            "sunday": [ 17, 20, 29, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'pre-WWII modern',
          img_path: './img/august/the-riding-crop-1928.jpg',
          title: 'The Riding Crop',
          artist: 'Jean Dupas',
          year: '1928',
          rule: {
            "monday": [ 17, 20, 29, 14 ],
            "tuesday": [ 16, 19, 28, 13 ],
            "wednesday": [ 22, 26, 3, 19 ],
            "thursday": [ 21, 24, 2, 18 ],
            "friday": [ 20, 24, 1, 17 ],
            "saturday": [ 19, 23, 31, 16 ],
            "sunday": [ 18, 20, 30, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_arts_id_seq', (SELECT MAX(id) FROM august_arts));");
    });
};
