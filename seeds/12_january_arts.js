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
          img_path: './img/january/landscape-1910.jpg',
          title: 'Landscape',
          artist: 'Arthur Beecher Carles',
          year: '1910',
          rule: {
            "monday": "[6, 7, 10, 12]",
            "tuesday": "[9, 10, 12, 14]",
            "wednesday": "[12, 14, 16, 17]",
            "thursday": "[14, 16, 19, 20]",
            "friday": "[16, 18, 19, 22]",
            "saturday": "[1, 2, 4, 5]",
            "sunday": "[4, 7, 8, 18]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/untitled-1912.jpg',
          title: 'Untitled',
          artist: 'Gosta Adrian-Nilsson',
          year: '1912',
          rule: {
            "monday": "[5, 8, 9, 19]",
            "tuesday": "[7, 8, 11, 13]",
            "wednesday": "[10, 11, 13, 15]",
            "thursday": "[13, 15, 17, 18]",
            "friday": "[15, 17, 20, 21]",
            "saturday": "[17, 19, 20, 23]",
            "sunday": "[2, 3, 5, 6]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/fire-evening-1929.jpg',
          title: 'Fire evening',
          artist: 'Paul Klee',
          year: '1929',
          rule: {
            "monday": "[2, 3, 5, 6]",
            "tuesday": "[5, 8, 9, 19]",
            "wednesday": "[7, 8, 11, 13]",
            "thursday": "[10, 11, 13, 15]",
            "friday": "[13, 15, 17, 18]",
            "saturday": "[15, 17, 20, 21]",
            "sunday": "[17, 19, 20, 23]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/festival-in-spring-1962.jpg',
          title: 'Festival in Spring',
          artist: 'Toshi Yoshida',
          year: '1962',
          rule: {
            "monday": "[17, 19, 20, 23]",
            "tuesday": "[2, 3, 5, 6]",
            "wednesday": "[5, 8, 9, 19]",
            "thursday": "[7, 8, 11, 13]",
            "friday": "[10, 11, 13, 15]",
            "saturday": "[13, 15, 17, 18]",
            "sunday": "[15, 17, 20, 21]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/underground-metaphysical-landscape-c-1960-4.jpg',
          title: 'Underground. Metaphysical Landscape',
          artist: 'Margit Selska',
          year: '1960',
          rule: {
            "monday": "[15, 17, 20, 21]",
            "tuesday": "[17, 19, 20, 23]",
            "wednesday": "[2, 3, 5, 6]",
            "thursday": "[5, 8, 9, 19]",
            "friday": "[7, 8, 11, 13]",
            "saturday": "[10, 11, 13, 15]",
            "sunday": "[13, 15, 17, 18]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/harmony-in-blue-and-green-abstract-composition.jpg',
          title: 'Harmony in Blue and Green. Abstract Composition',
          artist: 'Natalia Goncharova',
          year: 'XIX-XX cent.',
          rule: {
            "monday": "[13, 15, 17, 18]",
            "tuesday": "[15, 17, 20, 21]",
            "wednesday": "[17, 19, 20, 23]",
            "thursday": "[2, 3, 5, 6]",
            "friday": "[5, 8, 9, 19]",
            "saturday": "[7, 8, 11, 13]",
            "sunday": "[10, 11, 13, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/2005-60-80.jpg',
          title: 'Sorrow, Leaning Woman',
          artist: 'Volodymyr Loboda',
          year: '2005',
          rule: {
            "monday": "[13, 15, 17, 18]",
            "tuesday": "[15, 17, 20, 21]",
            "wednesday": "[17, 19, 20, 23]",
            "thursday": "[2, 3, 5, 6]",
            "friday": "[5, 8, 9, 19]",
            "saturday": "[7, 8, 11, 13]",
            "sunday": "[10, 11, 13, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/untitled-1.jpg',
          title: 'Untitled',
          artist: 'Tiberiy Szilvashi',
          year: 'XX cent.',
          rule: {
            "monday": "[10, 11, 13, 15]",
            "tuesday": "[13, 15, 17, 18]",
            "wednesday": "[15, 17, 21, 24]",
            "thursday": "[17, 19, 20, 23]",
            "friday": "[2, 3, 5, 6]",
            "saturday": "[5, 8, 9, 19]",
            "sunday": "[7, 8, 11, 13]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/cote-de-provence(1).jpg',
          title: 'Cote de provence',
          artist: 'Paul Klee',
          year: 'XIX-XX cent.',
          rule: {
            "monday": "[8, 9, 12, 14]",
            "tuesday": "[11, 12, 14, 16]",
            "wednesday": "[14, 16, 18, 19]",
            "thursday": "[16, 18, 22, 25]",
            "friday": "[18, 20, 21, 24]",
            "saturday": "[3, 4, 6, 7]",
            "sunday": "[6, 9, 10, 20]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/still-life-1945.jpg',
          title: 'Still Life',
          artist: 'William Baziotes',
          year: '1945',
          rule: {
            "monday": "[6, 9, 10, 20]",
            "tuesday": "[8, 9, 12, 14]",
            "wednesday": "[11, 12, 14, 16]",
            "thursday": "[14, 16, 18, 19]",
            "friday": "[16, 18, 22, 25]",
            "saturday": "[18, 20, 21, 24]",
            "sunday": "[3, 4, 6, 7]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/asheville(1).jpg',
          title: 'Asheville',
          artist: 'Willem de Kooning',
          year: '1948',
          rule: {
            "monday": "[3, 4, 6, 7]",
            "tuesday": "[6, 9, 10, 20]",
            "wednesday": "[8, 9, 12, 14]",
            "thursday": "[11, 12, 14, 16]",
            "friday": "[14, 16, 18, 19]",
            "saturday": "[16, 18, 22, 25]",
            "sunday": "[18, 20, 21, 24]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/celeste-ii-acr-lico-sobre-tabla-2006-60x50.jpg',
          title: 'Celeste II',
          artist: 'Requena Nozal',
          year: '2006',
          rule: {
            "monday": "[18, 20, 21, 24]",
            "tuesday": "[3, 4, 6, 7]",
            "wednesday": "[6, 9, 10, 20]",
            "thursday": "[8, 9, 12, 14]",
            "friday": "[11, 12, 14, 16]",
            "saturday": "[14, 16, 18, 19]",
            "sunday": "[16, 18, 22, 25]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/taxi-cab-ii-1959.jpg',
          title: 'Taxi Cab II',
          artist: 'Al Held',
          year: '1959',
          rule: {
            "monday": "[16, 18, 22, 25]",
            "tuesday": "[18, 20, 21, 24]",
            "wednesday": "[3, 4, 6, 7]",
            "thursday": "[6, 9, 10, 20]",
            "friday": "[8, 9, 12, 14]",
            "saturday": "[11, 12, 14, 16]",
            "sunday": "[14, 16, 18, 19]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/abstract-composition.jpg',
          title: 'Abstract Composition',
          artist: 'Victor Hugo',
          year: 'XIX cent.',
          rule: {
            "monday": "[14, 16, 18, 19]",
            "tuesday": "[16, 18, 22, 25]",
            "wednesday": "[18, 20, 21, 24]",
            "thursday": "[3, 4, 6, 7]",
            "friday": "[6, 9, 10, 20]",
            "saturday": "[8, 9, 12, 14]",
            "sunday": "[11, 12, 14, 16]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_arts_id_seq', (SELECT MAX(id) FROM january_arts));");
    });
};
