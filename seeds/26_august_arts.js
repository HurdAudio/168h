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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_arts_id_seq', (SELECT MAX(id) FROM august_arts));");
    });
};
