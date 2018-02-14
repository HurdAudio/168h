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
          theme: 'Abstract Art',
          img_path: './img/january/chaos-nr-2-1906.jpg',
          title: 'Chaos, Nr. 2',
          artist: 'Hilma af Klint',
          year: '1906',
          rule: {
            "monday": [4, 7, 8, 10],
            "tuesday": [6, 7, 10, 12],
            "wednesday": [9, 10, 12, 14],
            "thursday": [12, 14, 16, 17],
            "friday": [14, 16, 19, 20],
            "saturday": [16, 18, 19, 22],
            "sunday": [1, 2, 4, 5]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/improvisation-6-african-1909.jpg',
          title: 'Improvisation 6 (African)',
          artist: 'Wassily Kandinsky',
          year: '1909',
          rule: {
            "monday": [1, 2, 4, 5],
            "tuesday": [4, 7, 8, 10],
            "wednesday": [6, 7, 10, 12],
            "thursday": [9, 10, 12, 14],
            "friday": [12, 14, 16, 17],
            "saturday": [14, 16, 19, 20],
            "sunday": [16, 18, 19, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/de-tio-st-rsta-n-10-alderdomen-1907.jpg',
          title: 'De Tio Största, n°10 Alderdomen',
          artist: 'Hilma af Klint',
          year: '1907',
          rule: {
            "monday": [16, 18, 19, 22],
            "tuesday": [1, 2, 4, 5],
            "wednesday": [4, 7, 8, 10],
            "thursday": [6, 7, 10, 12],
            "friday": [9, 10, 12, 14],
            "saturday": [12, 14, 16, 17],
            "sunday": [14, 16, 19, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/schooner-yachts-deer-isle-maine-1928.jpg',
          title: 'Schooner Yachts, Deer Isle, Maine',
          artist: 'John Marin',
          year: '1928',
          rule: {
            "monday": [14, 16, 19, 20],
            "tuesday": [16, 18, 19, 22],
            "wednesday": [1, 2, 4, 5],
            "thursday": [4, 7, 8, 10],
            "friday": [6, 7, 10, 12],
            "saturday": [9, 10, 12, 14],
            "sunday": [12, 14, 16, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/improvisation-4-1909.jpg',
          title: 'Improvisation 4',
          artist: 'Wassily Kandinsky',
          year: '1909',
          rule: {
            "monday": [12, 14, 16, 17],
            "tuesday": [14, 16, 19, 20],
            "wednesday": [16, 18, 19, 22],
            "thursday": [1, 2, 4, 5],
            "friday": [4, 7, 8, 10],
            "saturday": [6, 7, 10, 12],
            "sunday": [9, 10, 12, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-dove-nr-12-1915.jpg',
          title: 'The Dove, Nr. 12',
          artist: 'Hilma af Klint',
          year: '1915',
          rule: {
            "monday": [9, 10, 12, 14],
            "tuesday": [12, 14, 16, 17],
            "wednesday": [14, 16, 19, 20],
            "thursday": [16, 18, 19, 22],
            "friday": [1, 2, 4, 5],
            "saturday": [4, 7, 8, 10],
            "sunday": [6, 7, 10, 12]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/landscape-1910.jpg',
          title: 'Landscape',
          artist: 'Arthur Beecher Carles',
          year: '1910',
          rule: {
            "monday": [6, 7, 10, 12],
            "tuesday": [9, 10, 12, 14],
            "wednesday": [12, 14, 16, 17],
            "thursday": [14, 16, 19, 20],
            "friday": [16, 18, 19, 22],
            "saturday": [1, 2, 4, 5],
            "sunday": [4, 7, 8, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1912.jpg',
          title: 'Untitled',
          artist: 'Gosta Adrian-Nilsson',
          year: '1912',
          rule: {
            "monday": [5, 8, 9, 19],
            "tuesday": [7, 8, 11, 13],
            "wednesday": [10, 11, 13, 15],
            "thursday": [13, 15, 17, 18],
            "friday": [15, 17, 20, 21],
            "saturday": [17, 19, 20, 23],
            "sunday": [2, 3, 5, 6]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/fire-evening-1929.jpg',
          title: 'Fire evening',
          artist: 'Paul Klee',
          year: '1929',
          rule: {
            "monday": [2, 3, 5, 6],
            "tuesday": [5, 8, 9, 19],
            "wednesday": [7, 8, 11, 13],
            "thursday": [10, 11, 13, 15],
            "friday": [13, 15, 17, 18],
            "saturday": [15, 17, 20, 21],
            "sunday": [17, 19, 20, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/festival-in-spring-1962.jpg',
          title: 'Festival in Spring',
          artist: 'Toshi Yoshida',
          year: '1962',
          rule: {
            "monday": [17, 19, 20, 23],
            "tuesday": [2, 3, 5, 6],
            "wednesday": [5, 8, 9, 19],
            "thursday": [7, 8, 11, 13],
            "friday": [10, 11, 13, 15],
            "saturday": [13, 15, 17, 18],
            "sunday": [15, 17, 20, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/underground-metaphysical-landscape-c-1960-4.jpg',
          title: 'Underground. Metaphysical Landscape',
          artist: 'Margit Selska',
          year: '1960',
          rule: {
            "monday": [15, 17, 20, 21],
            "tuesday": [17, 19, 20, 23],
            "wednesday": [2, 3, 5, 6],
            "thursday": [5, 8, 9, 19],
            "friday": [7, 8, 11, 13],
            "saturday": [10, 11, 13, 15],
            "sunday": [13, 15, 17, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/harmony-in-blue-and-green-abstract-composition.jpg',
          title: 'Harmony in Blue and Green. Abstract Composition',
          artist: 'Natalia Goncharova',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [13, 15, 17, 18],
            "tuesday": [15, 17, 20, 21],
            "wednesday": [17, 19, 20, 23],
            "thursday": [2, 3, 5, 6],
            "friday": [5, 8, 9, 19],
            "saturday": [7, 8, 11, 13],
            "sunday": [10, 11, 13, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/2005-60-80.jpg',
          title: 'Sorrow, Leaning Woman',
          artist: 'Volodymyr Loboda',
          year: '2005',
          rule: {
            "monday": [13, 15, 17, 18],
            "tuesday": [15, 17, 20, 21],
            "wednesday": [17, 19, 20, 23],
            "thursday": [2, 3, 5, 6],
            "friday": [5, 8, 9, 19],
            "saturday": [7, 8, 11, 13],
            "sunday": [10, 11, 13, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1.jpg',
          title: 'Untitled',
          artist: 'Tiberiy Szilvashi',
          year: 'XX cent.',
          rule: {
            "monday": [10, 11, 13, 15],
            "tuesday": [13, 15, 17, 18],
            "wednesday": [15, 17, 21, 24],
            "thursday": [17, 19, 20, 23],
            "friday": [2, 3, 5, 6],
            "saturday": [5, 8, 9, 19],
            "sunday": [7, 8, 11, 13]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/cote-de-provence(1).jpg',
          title: 'Cote de provence',
          artist: 'Paul Klee',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [8, 9, 12, 14],
            "tuesday": [11, 12, 14, 16],
            "wednesday": [14, 16, 18, 19],
            "thursday": [16, 18, 22, 25],
            "friday": [18, 20, 21, 24],
            "saturday": [3, 4, 6, 7],
            "sunday": [6, 9, 10, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/still-life-1945.jpg',
          title: 'Still Life',
          artist: 'William Baziotes',
          year: '1945',
          rule: {
            "monday": [6, 9, 10, 20],
            "tuesday": [8, 9, 12, 14],
            "wednesday": [11, 12, 14, 16],
            "thursday": [14, 16, 18, 19],
            "friday": [16, 18, 22, 25],
            "saturday": [18, 20, 21, 24],
            "sunday": [3, 4, 6, 7]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/asheville(1).jpg',
          title: 'Asheville',
          artist: 'Willem de Kooning',
          year: '1948',
          rule: {
            "monday": [3, 4, 6, 7],
            "tuesday": [6, 9, 10, 20],
            "wednesday": [8, 9, 12, 14],
            "thursday": [11, 12, 14, 16],
            "friday": [14, 16, 18, 19],
            "saturday": [16, 18, 22, 25],
            "sunday": [18, 20, 21, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/celeste-ii-acr-lico-sobre-tabla-2006-60x50.jpg',
          title: 'Celeste II',
          artist: 'Requena Nozal',
          year: '2006',
          rule: {
            "monday": [18, 20, 21, 24],
            "tuesday": [3, 4, 6, 7],
            "wednesday": [6, 9, 10, 20],
            "thursday": [8, 9, 12, 14],
            "friday": [11, 12, 14, 16],
            "saturday": [14, 16, 18, 19],
            "sunday": [16, 18, 22, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/taxi-cab-ii-1959.jpg',
          title: 'Taxi Cab II',
          artist: 'Al Held',
          year: '1959',
          rule: {
            "monday": [16, 18, 22, 25],
            "tuesday": [18, 20, 21, 24],
            "wednesday": [3, 4, 6, 7],
            "thursday": [6, 9, 10, 20],
            "friday": [8, 9, 12, 14],
            "saturday": [11, 12, 14, 16],
            "sunday": [14, 16, 18, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/abstract-composition.jpg',
          title: 'Abstract Composition',
          artist: 'Victor Hugo',
          year: 'XIX cent.',
          rule: {
            "monday": [14, 16, 18, 19],
            "tuesday": [16, 18, 22, 25],
            "wednesday": [18, 20, 21, 24],
            "thursday": [3, 4, 6, 7],
            "friday": [6, 9, 10, 20],
            "saturday": [8, 9, 12, 14],
            "sunday": [11, 12, 14, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/moonlight-and-lamplight-1937.jpg',
          title: 'Moonlight and Lamplight',
          artist: 'Winifred Nicholson',
          year: '1937',
          rule: {
            "monday": [12, 13, 15, 17],
            "tuesday": [15, 17, 19, 20],
            "wednesday": [17, 19, 23, 26],
            "thursday": [19, 21, 22, 25],
            "friday": [4, 5, 7, 8],
            "saturday": [7, 10, 11, 21],
            "sunday": [9, 10, 13, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/powidok-s-o-ca-1949.jpg',
          title: 'Powidok słońca',
          artist: 'Wladyslaw Strzeminski',
          year: '1949',
          rule: {
            "monday": [9, 10, 13, 15],
            "tuesday": [12, 13, 15, 17],
            "wednesday": [15, 17, 19, 20],
            "thursday": [17, 19, 23, 26],
            "friday": [19, 21, 22, 25],
            "saturday": [4, 5, 7, 8],
            "sunday": [7, 10, 11, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-35.jpg',
          title: 'Untitled',
          artist: 'Tiberiy Szilvashi',
          year: 'XX cent.',
          rule: {
            "monday": [7, 10, 11, 21],
            "tuesday": [9, 10, 13, 15],
            "wednesday": [12, 13, 15, 17],
            "thursday": [15, 17, 19, 20],
            "friday": [17, 19, 23, 26],
            "saturday": [19, 21, 22, 25],
            "sunday": [4, 5, 7, 8]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/portrait.jpg',
          title: 'Portrait',
          artist: 'Lyubov Popova',
          year: 'XX cent.',
          rule: {
            "monday": [4, 5, 7, 8],
            "tuesday": [7, 10, 11, 21],
            "wednesday": [9, 10, 13, 15],
            "thursday": [12, 13, 15, 17],
            "friday": [15, 17, 19, 20],
            "saturday": [17, 19, 23, 26],
            "sunday": [19, 21, 22, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/city-of-the-sun.jpg',
          title: 'City of the Sun',
          artist: 'Darren Waterston',
          year: '2012',
          rule: {
            "monday": [19, 21, 22, 25],
            "tuesday": [4, 5, 7, 8],
            "wednesday": [7, 10, 11, 21],
            "thursday": [9, 10, 13, 15],
            "friday": [12, 13, 15, 17],
            "saturday": [15, 17, 19, 20],
            "sunday": [17, 19, 23, 26]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1973-3.jpg',
          title: 'Untitled',
          artist: 'Luciano Bartolini',
          year: '1973',
          rule: {
            "monday": [17, 19, 23, 26],
            "tuesday": [19, 21, 22, 25],
            "wednesday": [4, 5, 7, 8],
            "thursday": [7, 10, 11, 21],
            "friday": [9, 10, 13, 15],
            "saturday": [12, 13, 15, 17],
            "sunday": [15, 17, 19, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/reminiscence-2005.jpg',
          title: 'Reminiscence',
          artist: 'Toko Shinoda',
          year: '2005',
          rule: {
            "monday": [15, 17, 19, 20],
            "tuesday": [17, 19, 23, 26],
            "wednesday": [19, 21, 22, 25],
            "thursday": [4, 5, 7, 8],
            "friday": [7, 10, 11, 21],
            "saturday": [9, 10, 13, 15],
            "sunday": [12, 13, 15, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/hv2-no-17b-1992(1).jpg',
          title: 'HV2, No 17b',
          artist: 'John Cage',
          year: '1992',
          rule: {
            "monday": [13, 14, 16, 18],
            "tuesday": [16, 18, 20, 21],
            "wednesday": [18, 20, 24, 27],
            "thursday": [20, 22, 23, 26],
            "friday": [5, 6, 8, 9],
            "saturday": [8, 11, 12, 22],
            "sunday": [10, 11, 14, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/bacchus-1983.jpg',
          title: 'Bacchus',
          artist: 'Elaine de Kooning',
          year: '1983',
          rule: {
            "monday": [10, 11, 14, 16],
            "tuesday": [13, 14, 16, 18],
            "wednesday": [16, 18, 20, 21],
            "thursday": [18, 20, 24, 27],
            "friday": [20, 22, 23, 26],
            "saturday": [5, 6, 8, 9],
            "sunday": [8, 11, 12, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/le-vent-du-soleil-1996.jpg',
          title: 'Le vent du soleil',
          artist: 'Gotthard Graubner',
          year: '1996',
          rule: {
            "monday": [ 8, 11, 12, 22],
            "tuesday": [10, 11, 14, 16],
            "wednesday": [13, 14, 16, 18],
            "thursday": [16, 18, 20, 21],
            "friday": [18, 20, 24, 27],
            "saturday": [20, 22, 23, 26],
            "sunday": [5, 6, 8, 9]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/heliogravuren-zu-den-documenta-bildern-1993.jpg',
          title: 'Heliogravuren zu den Documenta Bildern',
          artist: 'Gunther Forg',
          year: '1993',
          rule: {
            "monday": [ 5, 6, 8, 9],
            "tuesday": [8, 11, 12, 22],
            "wednesday": [10, 11, 14, 16],
            "thursday": [13, 14, 16, 18],
            "friday": [16, 18, 20, 21],
            "saturday": [18, 20, 24, 27],
            "sunday": [20, 22, 23, 26]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-air-1937.jpg',
          title: 'The Air',
          artist: 'Joan Miro',
          year: '1937',
          rule: {
            "monday": [ 20, 22, 23, 26],
            "tuesday": [5, 6, 8, 9],
            "wednesday": [8, 11, 12, 22],
            "thursday": [10, 11, 14, 16],
            "friday": [13, 14, 16, 18],
            "saturday": [16, 18, 20, 21],
            "sunday": [18, 20, 24, 27]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-moon-woman-cuts-the-circle-1943.jpg',
          title: 'The Moon-Woman Cuts the Circle',
          artist: 'Jackson Pollock',
          year: '1943',
          rule: {
            "monday": [ 18, 20, 24, 27],
            "tuesday": [20, 22, 23, 26],
            "wednesday": [5, 6, 8, 9],
            "thursday": [8, 11, 12, 22],
            "friday": [10, 11, 14, 16],
            "saturday": [13, 14, 16, 18],
            "sunday": [16, 18, 20, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/tyranny-of-space-1946.jpg',
          title: 'Tyranny of Space',
          artist: 'Perle Fine',
          year: '1946',
          rule: {
            "monday": [ 16, 18, 20, 21],
            "tuesday": [18, 20, 24, 27],
            "wednesday": [20, 22, 23, 26],
            "thursday": [5, 6, 8, 9],
            "friday": [8, 11, 12, 22],
            "saturday": [10, 11, 14, 16],
            "sunday": [13, 14, 16, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/yellow-predominance-1949.jpg',
          title: 'Yellow Predominance',
          artist: 'Hans Hofmann',
          year: '1949',
          rule: {
            "monday": [ 14, 15, 17, 19],
            "tuesday": [17, 19, 21, 22],
            "wednesday": [19, 21, 25, 28],
            "thursday": [21, 23, 24, 27],
            "friday": [6, 7, 9, 10],
            "saturday": [9, 12, 13, 23],
            "sunday": [11, 12, 15, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/number-236.jpg',
          title: 'Number 236',
          artist: 'Anne Ryan',
          year: '?',
          rule: {
            "monday": [ 11, 12, 15, 17],
            "tuesday": [14, 15, 17, 10],
            "wednesday": [17, 19, 21, 22],
            "thursday": [19, 21, 25, 28],
            "friday": [21, 23, 24, 27],
            "saturday": [6, 7, 9, 10],
            "sunday": [9, 12, 13, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/white-butterflies-sleep-on-a-violet-bed-1970.jpg',
          title: 'White Butterflies Sleep on a Violet Bed',
          artist: 'Walasse Ting',
          year: '1970',
          rule: {
            "monday": [ 9, 12, 13, 23],
            "tuesday": [11, 12, 15, 17],
            "wednesday": [14, 15, 17, 10],
            "thursday": [17, 19, 21, 22],
            "friday": [19, 21, 25, 28],
            "saturday": [21, 23, 24, 27],
            "sunday": [6, 7, 9, 10]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/homenaje-a-diana-iii-acr-lico-sobre-tablex-2014-122x-100.jpg',
          title: 'Homenaje a Diana III',
          artist: 'Requena Nozal',
          year: '2014',
          rule: {
            "monday": [ 6, 7, 9, 10],
            "tuesday": [9, 12, 13, 23],
            "wednesday": [11, 12, 15, 17],
            "thursday": [14, 15, 17, 10],
            "friday": [17, 19, 21, 22],
            "saturday": [19, 21, 25, 28],
            "sunday": [21, 23, 24, 27]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1972.jpg',
          title: 'Untitled',
          artist: 'Rafa Nasiri',
          year: '1972',
          rule: {
            "monday": [ 21, 23, 24, 27],
            "tuesday": [6, 7, 9, 10],
            "wednesday": [9, 12, 13, 23],
            "thursday": [11, 12, 15, 17],
            "friday": [14, 15, 17, 10],
            "saturday": [17, 19, 21, 22],
            "sunday": [19, 21, 25, 28]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/interior-temporary-factory-day.jpg',
          title: 'INTERIOR, TEMPORARY FACTORY - DAY',
          artist: 'Marc Horowitz',
          year: '2015',
          rule: {
            "monday": [ 19, 21, 25, 28],
            "tuesday": [21, 23, 24, 27],
            "wednesday": [6, 7, 9, 10],
            "thursday": [9, 12, 13, 23],
            "friday": [11, 12, 15, 17],
            "saturday": [14, 15, 17, 10],
            "sunday": [17, 19, 21, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/transparent-shadow.jpg',
          title: 'Transparent Shadow',
          artist: 'Toko Shinoda',
          year: '?',
          rule: {
            "monday": [ 17, 19, 21, 22],
            "tuesday": [19, 21, 25, 28],
            "wednesday": [21, 23, 24, 27],
            "thursday": [6, 7, 9, 10],
            "friday": [9, 12, 13, 23],
            "saturday": [11, 12, 15, 17],
            "sunday": [14, 15, 17, 10]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-parachutists-1944.jpg',
          title: 'The Parachutists',
          artist: 'William Baziotes',
          year: '1944',
          rule: {
            "monday": [ 15, 16, 18, 11],
            "tuesday": [18, 20, 22, 23],
            "wednesday": [20, 22, 26, 29],
            "thursday": [22, 24, 25, 28],
            "friday": [7, 8, 10, 11],
            "saturday": [10, 13, 14, 24],
            "sunday": [12, 13, 16, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/bird-of-the-spirit-1943.jpg',
          title: 'Bird of the Spirit',
          artist: 'Morris Graves',
          year: '1943',
          rule: {
            "monday": [ 12, 13, 16, 18],
            "tuesday": [15, 16, 18, 11],
            "wednesday": [18, 20, 22, 23],
            "thursday": [20, 22, 26, 29],
            "friday": [22, 24, 25, 28],
            "saturday": [7, 8, 10, 11],
            "sunday": [10, 13, 14, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1947.jpg',
          title: 'Untitled',
          artist: 'Giorgio Cavallon',
          year: '1947',
          rule: {
            "monday": [ 10, 13, 14, 24],
            "tuesday": [12, 13, 16, 18],
            "wednesday": [15, 16, 18, 11],
            "thursday": [18, 20, 22, 23],
            "friday": [20, 22, 26, 29],
            "saturday": [22, 24, 25, 28],
            "sunday": [7, 8, 10, 11]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/abstract-eye-1943.jpg',
          title: 'Abstract Eye',
          artist: 'Richard Pousette-Dart',
          year: '1943',
          rule: {
            "monday": [ 7, 8, 10, 11],
            "tuesday": [10, 13, 14, 24],
            "wednesday": [12, 13, 16, 18],
            "thursday": [15, 16, 18, 11],
            "friday": [18, 20, 22, 23],
            "saturday": [20, 22, 26, 29],
            "sunday": [22, 24, 25, 28]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/no-61-rust-and-blue.jpg',
          title: 'No.61 (Rust and Blue)',
          artist: 'Mark Rothko',
          year: '1953',
          rule: {
            "monday": [ 22, 24, 25, 28],
            "tuesday": [7, 8, 10, 11],
            "wednesday": [10, 13, 14, 24],
            "thursday": [12, 13, 16, 18],
            "friday": [15, 16, 18, 11],
            "saturday": [18, 20, 22, 23],
            "sunday": [20, 22, 26, 29]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/buchanan-1987.jpg',
          title: 'Buchanan',
          artist: 'Albert Irvin',
          year: '1987',
          rule: {
            "monday": [ 20, 22, 26, 29],
            "tuesday": [22, 24, 25, 28],
            "wednesday": [7, 8, 10, 11],
            "thursday": [10, 13, 14, 24],
            "friday": [12, 13, 16, 18],
            "saturday": [15, 16, 18, 11],
            "sunday": [18, 20, 22, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/bright-colors-on-pale-green-1976.jpg',
          title: 'Bright Colors on Pale Green',
          artist: 'Robert Goodnough',
          year: '1976',
          rule: {
            "monday": [ 18, 20, 22, 23],
            "tuesday": [20, 22, 26, 29],
            "wednesday": [22, 24, 25, 28],
            "thursday": [7, 8, 10, 11],
            "friday": [10, 13, 14, 24],
            "saturday": [12, 13, 16, 18],
            "sunday": [15, 16, 18, 11]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/black-red-1962.jpg',
          title: 'Black/Red',
          artist: 'Jack Youngerman',
          year: '1962',
          rule: {
            "monday": [ 16, 17, 19, 12],
            "tuesday": [19, 21, 23, 24],
            "wednesday": [21, 23, 27, 30],
            "thursday": [23, 25, 26, 29],
            "friday": [8, 9, 11, 12],
            "saturday": [11, 14, 15, 25],
            "sunday": [13, 14, 17, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/hoop-la-1965.jpg',
          title: 'Hoop-La',
          artist: 'Jeremy Moon',
          year: '1965',
          rule: {
            "monday": [ 13, 14, 17, 19],
            "tuesday": [16, 17, 19, 12],
            "wednesday": [19, 21, 23, 24],
            "thursday": [21, 23, 27, 30],
            "friday": [23, 25, 26, 29],
            "saturday": [8, 9, 11, 12],
            "sunday": [11, 14, 15, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/aeroflower-1942.jpg',
          title: 'Aeroflower',
          artist: 'Jimmy Ernst',
          year: '1942',
          rule: {
            "monday": [ 11, 14, 15, 25],
            "tuesday": [13, 14, 17, 19],
            "wednesday": [16, 17, 19, 12],
            "thursday": [19, 21, 23, 24],
            "friday": [21, 23, 27, 30],
            "saturday": [23, 25, 26, 29],
            "sunday": [8, 9, 11, 12]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/still-life-at-the-sea-1946.jpg',
          title: 'Still Life at the Sea',
          artist: 'Antonio Corpora',
          year: '1946',
          rule: {
            "monday": [ 8, 9, 11, 12],
            "tuesday": [11, 14, 15, 25],
            "wednesday": [13, 14, 17, 19],
            "thursday": [16, 17, 19, 12],
            "friday": [19, 21, 23, 24],
            "saturday": [21, 23, 27, 30],
            "sunday": [23, 25, 26, 29]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/dwarf-1947.jpg',
          title: 'Dwarf',
          artist: 'William Baziotes',
          year: '1947',
          rule: {
            "monday": [ 23, 25, 26, 29 ],
            "tuesday": [ 8, 9, 11, 12 ],
            "wednesday": [ 11, 14, 15, 25 ],
            "thursday": [ 13, 14, 16, 19 ],
            "friday": [ 16, 17, 19, 12 ],
            "saturday": [ 19, 21, 23, 24 ],
            "sunday": [ 21, 23, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/a-time-for-fear-1949.jpg',
          title: 'A Time for Fear',
          artist: 'Jimmy Ernst',
          year: '1949',
          rule: {
            "monday": [ 21, 23, 27, 30 ],
            "tuesday": [ 23, 25, 26, 29 ],
            "wednesday": [ 8, 9, 11, 12 ],
            "thursday": [ 11, 14, 15, 25 ],
            "friday": [ 13, 14, 16, 19 ],
            "saturday": [ 16, 17, 19, 12 ],
            "sunday": [ 19, 21, 23, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/chicago-1951.jpg',
          title: 'Chicago',
          artist: 'Aaron Siskind',
          year: '1951',
          rule: {
            "monday": [ 19, 21, 23, 24 ],
            "tuesday": [ 21, 23, 27, 30 ],
            "wednesday": [ 23, 25, 26, 29 ],
            "thursday": [ 8, 9, 11, 12 ],
            "friday": [ 11, 14, 15, 25 ],
            "saturday": [ 13, 14, 16, 19 ],
            "sunday": [ 16, 17, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/it-was-yellow-and-pink-ii.jpg',
          title: 'It Was Yellow and Pink II',
          artist: 'Georgia O\'Keeffe',
          year: '1959',
          rule: {
            "monday": [ 17, 18, 9, 13 ],
            "tuesday": [ 20, 22, 24, 25 ],
            "wednesday": [ 22, 24, 28, 31 ],
            "thursday": [ 24, 26, 27, 30 ],
            "friday": [ 9, 10, 12, 13 ],
            "saturday": [ 12, 15, 16, 26 ],
            "sunday": [ 14, 15, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/song-cycle-1988.jpg',
          title: 'Song Cycle',
          artist: 'Ralph Hotere',
          year: '1988',
          rule: {
            "monday": [ 14, 15, 17, 20 ],
            "tuesday": [ 17, 18, 9, 13 ],
            "wednesday": [ 20, 22, 24, 25 ],
            "thursday": [ 22, 24, 28, 31 ],
            "friday": [ 24, 26, 27, 30 ],
            "saturday": [ 9, 10, 12, 13 ],
            "sunday": [ 12, 15, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/sunset.jpg',
          title: 'Sunset',
          artist: 'Cy Twombly',
          year: '1957',
          rule: {
            "monday": [ 12, 15, 16, 26 ],
            "tuesday": [ 14, 15, 17, 20 ],
            "wednesday": [ 17, 18, 9, 13 ],
            "thursday": [ 20, 22, 24, 25 ],
            "friday": [ 22, 24, 28, 31 ],
            "saturday": [ 24, 26, 27, 30 ],
            "sunday": [ 9, 10, 12, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/iridescent-interpenetration-no-4-study-of-light-1912.jpg',
          title: 'Iridescent Interpenetration No. 4 - Study of light',
          artist: 'Giacomo Balla',
          year: '1912',
          rule: {
            "monday": [ 9, 10, 12, 13 ],
            "tuesday": [ 12, 15, 16, 26 ],
            "wednesday": [ 14, 15, 17, 20 ],
            "thursday": [ 17, 18, 9, 13 ],
            "friday": [ 20, 22, 24, 25 ],
            "saturday": [ 22, 24, 28, 31 ],
            "sunday": [ 24, 26, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/states-of-mind-iii-those-who-stay-1911-1.jpg',
          title: 'States of Mind III: Those Who Stay',
          artist: 'Umberto Boccioni',
          year: '1911',
          rule: {
            "monday": [ 24, 26, 27, 30 ],
            "tuesday": [ 9, 10, 12, 13 ],
            "wednesday": [ 12, 15, 16, 26 ],
            "thursday": [ 14, 15, 17, 20 ],
            "friday": [ 17, 18, 9, 13 ],
            "saturday": [ 20, 22, 24, 25 ],
            "sunday": [ 22, 24, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/machine-5-1950.jpg',
          title: 'Machine 5',
          artist: 'Hedda Sterne',
          year: '1950',
          rule: {
            "monday": [ 22, 24, 28, 31 ],
            "tuesday": [ 24, 26, 27, 30 ],
            "wednesday": [ 9, 10, 22, 13 ],
            "thursday": [ 12, 15, 16, 26 ],
            "friday": [ 14, 15, 17, 20 ],
            "saturday": [ 17, 18, 9, 13 ],
            "sunday": [ 20, 22, 24, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1945.jpg',
          title: 'Untitled',
          artist: 'Barnett Newman',
          year: '1945',
          rule: {
            "monday": [ 20, 22, 24, 25 ],
            "tuesday": [ 22, 24, 28, 31 ],
            "wednesday": [ 24, 26, 27, 30 ],
            "thursday": [ 9, 10, 22, 13 ],
            "friday": [ 12, 15, 16, 26 ],
            "saturday": [ 14, 15, 17, 20 ],
            "sunday": [ 17, 18, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/transection-i-1971.jpg',
          title: 'Transection I',
          artist: 'Clarence Holbrook Carter',
          year: '1971',
          rule: {
            "monday": [ 18, 19, 10, 14 ],
            "tuesday": [ 21, 23, 25, 26 ],
            "wednesday": [ 23, 25, 29, 1 ],
            "thursday": [ 25, 27, 28, 31 ],
            "friday": [ 10, 11, 23, 14 ],
            "saturday": [ 13, 15, 17, 27 ],
            "sunday": [ 15, 16, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/equinox-1958.jpg',
          title: 'Equinox',
          artist: 'Hans Hofmann',
          year: '1958',
          rule: {
            "monday": [ 15, 16, 18, 21 ],
            "tuesday": [ 18, 19, 10, 14 ],
            "wednesday": [ 21, 23, 25, 26 ],
            "thursday": [ 23, 25, 29, 1 ],
            "friday": [ 25, 27, 28, 31 ],
            "saturday": [ 10, 11, 23, 14 ],
            "sunday": [ 13, 15, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/moroccan-door-1991.jpg',
          title: 'Moroccan Door',
          artist: 'Howard Hodgkin',
          year: '1991',
          rule: {
            "monday": [ 13, 15, 17, 27 ],
            "tuesday": [ 15, 16, 18, 21 ],
            "wednesday": [ 18, 19, 10, 14 ],
            "thursday": [ 21, 23, 25, 26 ],
            "friday": [ 23, 25, 29, 1 ],
            "saturday": [ 25, 27, 28, 31 ],
            "sunday": [ 10, 11, 23, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/modinha-2007.jpg',
          title: 'Modinha',
          artist: 'Beatriz Milhazes',
          year: '2007',
          rule: {
            "monday": [ 10, 11, 23, 14 ],
            "tuesday": [ 13, 15, 17, 27 ],
            "wednesday": [ 15, 16, 18, 21 ],
            "thursday": [ 18, 19, 10, 14 ],
            "friday": [ 21, 23, 25, 26 ],
            "saturday": [ 23, 25, 29, 1 ],
            "sunday": [ 25, 27, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/after-monet-1878.jpg',
          title: 'After Monet',
          artist: 'Sherrie Levine',
          year: '1878',
          rule: {
            "monday": [ 25, 27, 28, 31 ],
            "tuesday": [ 10, 11, 23, 14 ],
            "wednesday": [ 13, 15, 17, 27 ],
            "thursday": [ 15, 16, 18, 21 ],
            "friday": [ 18, 19, 10, 14 ],
            "saturday": [ 21, 23, 25, 26 ],
            "sunday": [ 23, 25, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-black-city-i-new-york-1949.jpg',
          title: 'The Black City I (New York)',
          artist: 'William Congdon',
          year: '1949',
          rule: {
            "monday": [ 23, 25, 29, 1 ],
            "tuesday": [ 25, 27, 28, 31 ],
            "wednesday": [ 10, 11, 23, 14 ],
            "thursday": [ 13, 15, 17, 27 ],
            "friday": [ 15, 16, 18, 21 ],
            "saturday": [ 18, 19, 10, 14 ],
            "sunday": [ 21, 23, 25, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/n-y-1-road-4-1956.jpg',
          title: 'N.Y. 1 (Road #4)',
          artist: 'Hedda Sterne',
          year: '1956',
          rule: {
            "monday": [ 21, 23, 25, 26 ],
            "tuesday": [ 23, 25, 29, 1 ],
            "wednesday": [ 25, 27, 28, 31 ],
            "thursday": [ 10, 11, 23, 14],
            "friday": [ 13, 15, 17, 27 ],
            "saturday": [ 15, 16, 18, 21 ],
            "sunday": [ 18, 19, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/water-of-the-flowery-mill.jpg',
          title: 'Water of the Flowery Mill',
          artist: 'Arshile Gorky',
          year: 'XX cent.',
          rule: {
            "monday": [ 19, 20, 11, 15 ],
            "tuesday": [ 22, 24, 26, 27 ],
            "wednesday": [ 24, 26, 30, 2 ],
            "thursday": [ 26, 28, 29, 1],
            "friday": [ 11, 12, 24, 15 ],
            "saturday": [ 14, 16, 18, 28 ],
            "sunday": [ 16, 17, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/macchie-1971.jpg',
          title: 'Macchie',
          artist: 'Giulio Turcato',
          year: '1971',
          rule: {
            "monday": [ 16, 17, 19, 22 ],
            "tuesday": [ 19, 20, 11, 15 ],
            "wednesday": [ 22, 24, 26, 27 ],
            "thursday": [ 24, 26, 30, 2 ],
            "friday": [ 26, 28, 29, 1 ],
            "saturday": [ 11, 12, 24, 15 ],
            "sunday": [ 14, 16, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/ju-jitsu-1913.jpg',
          title: 'Ju-Jitsu',
          artist: 'David Bomberg',
          year: '1913',
          rule: {
            "monday": [ 14, 16, 18, 28 ],
            "tuesday": [ 16, 17, 19, 22 ],
            "wednesday": [ 19, 20, 11, 15 ],
            "thursday": [ 22, 24, 26, 27 ],
            "friday": [ 24, 26, 30, 2 ],
            "saturday": [ 26, 28, 29, 1 ],
            "sunday": [ 11, 12, 24, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1912tyt.jpg',
          title: 'Untitled',
          artist: 'Jacques Villon',
          year: '1912',
          rule: {
            "monday": [ 11, 12, 24, 15 ],
            "tuesday": [ 14, 16, 18, 28 ],
            "wednesday": [ 16, 17, 19, 22 ],
            "thursday": [ 19, 20, 11, 15 ],
            "friday": [ 22, 24, 26, 27 ],
            "saturday": [ 24, 26, 30, 2 ],
            "sunday": [ 26, 28, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/bomen-1915.jpg',
          title: 'Bomen',
          artist: 'Jacoba van Heemskerck',
          year: '1915',
          rule: {
            "monday": [ 26, 28, 29, 1 ],
            "tuesday": [ 11, 12, 24, 15 ],
            "wednesday": [ 14, 16, 18, 28 ],
            "thursday": [ 16, 17, 19, 22 ],
            "friday": [ 19, 20, 11, 15 ],
            "saturday": [ 22, 24, 26, 27 ],
            "sunday": [ 24, 26, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/woman-verso-untitled.jpg',
          title: 'Woman/Verso: Untitled',
          artist: 'Willem de Kooning',
          year: '1948',
          rule: {
            "monday": [ 24, 26, 30, 2 ],
            "tuesday": [ 26, 28, 29, 1 ],
            "wednesday": [ 11, 12, 24, 15 ],
            "thursday": [ 14, 16, 18, 28 ],
            "friday": [ 16, 17, 19, 22 ],
            "saturday": [ 19, 20, 11, 15 ],
            "sunday": [ 22, 24, 26, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/bleu-vert-jaune-orange-1954.jpg',
          title: 'Bleu-Vert-Jaune-Orange',
          artist: 'Francois Morellet',
          year: '1954',
          rule: {
            "monday": [ 22, 24, 26, 27 ],
            "tuesday": [ 24, 26, 30, 2 ],
            "wednesday": [ 26, 28, 29, 1 ],
            "thursday": [ 11, 12, 24, 15 ],
            "friday": [ 14, 16, 18, 28 ],
            "saturday": [ 16, 17, 19, 22 ],
            "sunday": [ 19, 20, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/floris-1964.jpg',
          title: 'Floris',
          artist: 'Bernard Cohen',
          year: '1964',
          rule: {
            "monday": [ 20, 21, 12, 16 ],
            "tuesday": [ 23, 25, 26, 28 ],
            "wednesday": [ 25, 27, 31, 3 ],
            "thursday": [ 27, 29, 30, 2 ],
            "friday": [ 12, 13, 25, 16 ],
            "saturday": [ 15, 17, 19, 29 ],
            "sunday": [ 17, 18, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/moby-dick-1956.jpg',
          title: 'Moby Dick',
          artist: 'Marcelle Loubchansky',
          year: '1956',
          rule: {
            "monday": [ 17, 18, 20, 23 ],
            "tuesday": [ 20, 21, 12, 16 ],
            "wednesday": [ 23, 25, 26, 28 ],
            "thursday": [ 25, 27, 31, 3 ],
            "friday": [ 27, 29, 30, 2 ],
            "saturday": [ 12, 13, 25, 16 ],
            "sunday": [ 15, 17, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/la-guitare-1944.jpg',
          title: 'La Guitare',
          artist: 'Gustave Singier',
          year: '1944',
          rule: {
            "monday": [ 15, 17, 19, 29 ],
            "tuesday": [ 17, 18, 20, 23 ],
            "wednesday": [ 20, 21, 12, 16 ],
            "thursday": [ 23, 25, 26, 28 ],
            "friday": [ 25, 27, 31, 3 ],
            "saturday": [ 27, 29, 30, 2 ],
            "sunday": [ 12, 13, 25, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/october-1955.jpg',
          title: 'October',
          artist: 'Roger Bissière',
          year: '1955',
          rule: {
            "monday": [ 12, 13, 25, 16 ],
            "tuesday": [ 15, 17, 19, 29 ],
            "wednesday": [ 17, 18, 20, 23 ],
            "thursday": [ 20, 21, 12, 16 ],
            "friday": [ 23, 25, 26, 28 ],
            "saturday": [ 25, 27, 31, 3 ],
            "sunday": [ 27, 29, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/volume-1958-1.jpg',
          title: 'Volume',
          artist: 'Dadamaino',
          year: '1958',
          rule: {
            "monday": [ 27, 29, 30, 2 ],
            "tuesday": [ 12, 13, 25, 16 ],
            "wednesday": [ 15, 17, 19, 29 ],
            "thursday": [ 17, 18, 20, 23 ],
            "friday": [ 20, 21, 12, 16 ],
            "saturday": [ 23, 25, 26, 28 ],
            "sunday": [ 25, 27, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/constructive-decorative-composition-1924-7.jpg',
          title: 'Constructive-decorative composition',
          artist: 'David Kakabadze',
          year: '1924',
          rule: {
            "monday": [ 25, 27, 31, 3 ],
            "tuesday": [ 27, 29, 30, 2 ],
            "wednesday": [ 12, 13, 25, 16 ],
            "thursday": [ 15, 17, 19, 29 ],
            "friday": [ 17, 18, 20, 23 ],
            "saturday": [ 20, 21, 12, 16 ],
            "sunday": [ 23, 25, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-2002.jpg',
          title: 'Untitled',
          artist: 'Doreen Reid Nakamarra',
          year: '2002',
          rule: {
            "monday": [ 23, 25, 26, 28 ],
            "tuesday": [ 25, 27, 31, 3 ],
            "wednesday": [ 27, 29, 30, 2 ],
            "thursday": [ 12, 13, 25, 16 ],
            "friday": [ 15, 17, 19, 29 ],
            "saturday": [ 17, 18, 20, 23 ],
            "sunday": [ 20, 21, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/mount-tamalpais.png',
          title: 'Mount Tamalpais',
          artist: 'Etel Adnan',
          year: '1985',
          rule: {
            "monday": [ 21, 22, 13, 17 ],
            "tuesday": [ 24, 26, 27, 29 ],
            "wednesday": [ 26, 28, 1, 4 ],
            "thursday": [ 28, 30, 31, 3 ],
            "friday": [ 13, 14, 26, 17 ],
            "saturday": [ 16, 18, 20, 30 ],
            "sunday": [ 18, 19, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1970-1.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 18, 19, 21, 24 ],
            "tuesday": [ 21, 22, 13, 17 ],
            "wednesday": [ 24, 26, 27, 29 ],
            "thursday": [ 26, 28, 1, 4 ],
            "friday": [ 28, 30, 31, 3 ],
            "saturday": [ 13, 14, 26, 17 ],
            "sunday": [ 16, 18, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/la-m-scara-m-gica-1969.jpg',
          title: 'La Máscara Mágica',
          artist: 'Carlos Merida',
          year: '1969',
          rule: {
            "monday": [ 16, 18, 20, 30 ],
            "tuesday": [ 18, 19, 21, 24 ],
            "wednesday": [ 21, 22, 13, 17 ],
            "thursday": [ 24, 26, 27, 29 ],
            "friday": [ 26, 28, 1, 4 ],
            "saturday": [ 28, 30, 31, 3 ],
            "sunday": [ 13, 14, 26, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/architectural-structures-1925.jpg',
          title: 'Architectural Structures',
          artist: 'Lajos Kassak',
          year: '1925',
          rule: {
            "monday": [ 13, 14, 26, 17 ],
            "tuesday": [ 16, 18, 20, 30 ],
            "wednesday": [ 18, 19, 21, 24 ],
            "thursday": [ 21, 22, 13, 17 ],
            "friday": [ 24, 26, 27, 29 ],
            "saturday": [ 26, 28, 1, 4 ],
            "sunday": [ 28, 30, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/painting-918-1972.jpg',
          title: 'Painting 918',
          artist: 'Luis Feito',
          year: '1972',
          rule: {
            "monday": [ 28, 30, 31, 3 ],
            "tuesday": [ 13, 14, 26, 17 ],
            "wednesday": [ 16, 18, 20, 30 ],
            "thursday": [ 18, 19, 21, 24 ],
            "friday": [ 21, 22, 13, 17 ],
            "saturday": [ 24, 26, 27, 29 ],
            "sunday": [ 26, 28, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/multichromic-i-1970.jpg',
          title: 'Multichromic I',
          artist: 'Wen-Ying Tsai',
          year: '1970',
          rule: {
            "monday": [ 26, 28, 1, 4 ],
            "tuesday": [ 28, 30, 31, 3 ],
            "wednesday": [ 13, 14, 26, 17 ],
            "thursday": [ 16, 18, 20, 30 ],
            "friday": [ 18, 19, 21, 24 ],
            "saturday": [ 21, 22, 13, 17 ],
            "sunday": [ 24, 26, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/q1-75-s-2-1977.jpg',
          title: 'Q1 75 S#2',
          artist: 'Jack Tworkov',
          year: '1977',
          rule: {
            "monday": [ 24, 26, 27, 29 ],
            "tuesday": [ 26, 28, 1, 4 ],
            "wednesday": [ 28, 30, 31, 3 ],
            "thursday": [ 13, 14, 26, 17 ],
            "friday": [ 16, 18, 20, 30 ],
            "saturday": [ 18, 19, 21, 24 ],
            "sunday": [ 21, 22, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/comp-100-1958.jpg',
          title: '#100',
          artist: 'Adolf Fleischmann',
          year: '1958',
          rule: {
            "monday": [ 22, 23, 14, 18 ],
            "tuesday": [ 25, 27, 28, 30 ],
            "wednesday": [ 27, 29, 2, 5 ],
            "thursday": [ 29, 31, 1, 4 ],
            "friday": [ 14, 15, 26, 18 ],
            "saturday": [ 17, 19, 21, 31 ],
            "sunday": [ 19, 20, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/planos-y-color-liberados-1947.jpg',
          title: 'Planos y color liberados',
          artist: 'Gyula Kosice',
          year: '1947',
          rule: {
            "monday": [ 19, 20, 22, 25 ],
            "tuesday": [ 22, 23, 14, 18 ],
            "wednesday": [ 25, 27, 28, 30 ],
            "thursday": [ 27, 29, 2, 5 ],
            "friday": [ 29, 31, 1, 4 ],
            "saturday": [ 14, 15, 26, 18 ],
            "sunday": [ 17, 19, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-2.jpg',
          title: 'Untitled',
          artist: 'Rubem Ludolf',
          year: 'XX-XXI cent.',
          rule: {
            "monday": [ 17, 19, 21, 31 ],
            "tuesday": [ 19, 20, 22, 25 ],
            "wednesday": [ 22, 23, 14, 18 ],
            "thursday": [ 25, 27, 28, 30 ],
            "friday": [ 27, 29, 2, 5 ],
            "saturday": [ 29, 31, 1, 4 ],
            "sunday": [ 14, 15, 26, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/santarossa-1974.jpg',
          title: 'Santarossa',
          artist: 'Afro',
          year: '1974',
          rule: {
            "monday": [ 14, 15, 26, 18 ],
            "tuesday": [ 17, 19, 21, 31 ],
            "wednesday": [ 19, 20, 22, 25 ],
            "thursday": [ 22, 23, 14, 18 ],
            "friday": [ 25, 27, 28, 30 ],
            "saturday": [ 27, 29, 2, 5 ],
            "sunday": [ 29, 31, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/m-cano-fracture-construction.jpg',
          title: 'Mécano-Fracture Construction',
          artist: 'Henryk Berlewi',
          year: 'XX cent.',
          rule: {
            "monday": [ 29, 31, 1, 4 ],
            "tuesday": [ 14, 15, 26, 18 ],
            "wednesday": [ 17, 19, 21, 31 ],
            "thursday": [ 19, 20, 22, 25 ],
            "friday": [ 22, 23, 14, 18 ],
            "saturday": [ 25, 27, 28, 30 ],
            "sunday": [ 27, 29, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/rudow-osa-1949.jpg',
          title: 'Rudowłosa',
          artist: 'Wladyslaw Strzeminski',
          year: '1949',
          rule: {
            "monday": [ 27, 29, 2, 5 ],
            "tuesday": [ 29, 31, 1, 4 ],
            "wednesday": [ 14, 15, 26, 18 ],
            "thursday": [ 17, 19, 21, 31 ],
            "friday": [ 19, 20, 22, 25 ],
            "saturday": [ 22, 23, 14, 18 ],
            "sunday": [ 25, 27, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1aa.jpg',
          title: 'Untitled',
          artist: 'Johannes Itten',
          year: 'XX cent.',
          rule: {
            "monday": [ 25, 27, 28, 30 ],
            "tuesday": [ 27, 29, 2, 5 ],
            "wednesday": [ 29, 31, 1, 4 ],
            "thursday": [ 14, 15, 26, 18 ],
            "friday": [ 17, 19, 21, 31 ],
            "saturday": [ 19, 20, 22, 25 ],
            "sunday": [ 22, 23, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/me-and-the-moon-1937.jpg',
          title: 'Me and the Moon',
          artist: 'Arthur Dove',
          year: '1937',
          rule: {
            "monday": [ 23, 24, 15, 19 ],
            "tuesday": [ 26, 28, 29, 31 ],
            "wednesday": [ 28, 30, 3, 6 ],
            "thursday": [ 30, 1, 2, 5 ],
            "friday": [ 15, 16, 27, 19 ],
            "saturday": [ 18, 20, 22, 1 ],
            "sunday": [ 20, 21, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/allah-2010.jpg',
          title: 'Allah',
          artist: 'M.F. Husain',
          year: '2010',
          rule: {
            "monday": [ 20, 21, 23, 26 ],
            "tuesday": [ 23, 24, 15, 19 ],
            "wednesday": [ 26, 28, 29, 31 ],
            "thursday": [ 28, 30, 3, 6 ],
            "friday": [ 30, 1, 2, 5 ],
            "saturday": [ 15, 16, 27, 19 ],
            "sunday": [ 18, 20, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/senza-titolo-1939(1).jpg',
          title: 'Senza titolo',
          artist: 'Bice Lazzari',
          year: '1939',
          rule: {
            "monday": [ 18, 20, 22, 1  ],
            "tuesday": [ 20, 21, 23, 26 ],
            "wednesday": [ 23, 24, 15, 19 ],
            "thursday": [ 26, 28, 29, 31 ],
            "friday": [ 28, 30, 3, 6 ],
            "saturday": [ 30, 1, 2, 5 ],
            "sunday": [ 15, 16, 27, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-35.jpg',
          title: 'Composition 35',
          artist: 'Sonia Delaunay',
          year: 'c.1930',
          rule: {
            "monday": [ 15, 16, 27, 19 ],
            "tuesday": [ 18, 20, 22, 1 ],
            "wednesday": [ 20, 21, 23, 26 ],
            "thursday": [ 23, 24, 15, 19 ],
            "friday": [ 26, 28, 29, 31 ],
            "saturday": [ 28, 30, 3, 6 ],
            "sunday": [ 30, 1, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/colored-composition-hommage-to-johann-sebastian-bachh.jpg',
          title: 'Colored composition (Hommage to Johann Sebastian Bachh)',
          artist: 'August Macke',
          year: '1912',
          rule: {
            "monday": [ 30, 1, 2, 5 ],
            "tuesday": [ 15, 16, 27, 19 ],
            "wednesday": [ 18, 20, 22, 1 ],
            "thursday": [ 20, 21, 23, 26 ],
            "friday": [ 23, 24, 15, 19 ],
            "saturday": [ 26, 28, 29, 31 ],
            "sunday": [ 28, 30, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/colored-rhythm-study-for-the-film-1913(35).jpg',
          title: 'Colored Rhythm: Study for the Film',
          artist: 'Leopold Survage',
          year: '1913',
          rule: {
            "monday": [ 28, 30, 3, 6 ],
            "tuesday": [ 30, 1, 2, 5 ],
            "wednesday": [ 15, 16, 27, 19 ],
            "thursday": [ 18, 20, 22, 1 ],
            "friday": [ 20, 21, 23, 26 ],
            "saturday": [ 23, 24, 15, 19 ],
            "sunday": [ 26, 28, 29, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/diagonal-planes-1925.jpg',
          title: 'Diagonal Planes',
          artist: 'Frantisek Kupka',
          year: '1925',
          rule: {
            "monday": [ 26, 28, 29, 31 ],
            "tuesday": [ 28, 30, 3, 6 ],
            "wednesday": [ 30, 1, 2, 5 ],
            "thursday": [ 15, 16, 27, 19 ],
            "friday": [ 18, 20, 22, 1 ],
            "saturday": [ 20, 21, 23, 26 ],
            "sunday": [ 23, 24, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/stained-glass-windows-for-the-university-of-caracas.jpg',
          title: 'Stained glass windows for the University of Caracas',
          artist: 'Fernand Leger',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 24, 25, 16, 20 ],
            "tuesday": [ 27, 29, 30, 1 ],
            "wednesday": [ 29, 31, 4, 7 ],
            "thursday": [ 31, 2, 3, 6 ],
            "friday": [ 16, 17, 28, 20 ],
            "saturday": [ 19, 21, 23, 2 ],
            "sunday": [ 21, 22, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/inganno-di-afrodite-1979.jpg',
          title: 'Inganno di Afrodite',
          artist: 'Alberto Biasi',
          year: '1979',
          rule: {
            "monday": [ 21, 22, 14, 17 ],
            "tuesday": [ 24, 25, 16, 20 ],
            "wednesday": [ 27, 29, 30, 1 ],
            "thursday": [ 29, 31, 4, 7 ],
            "friday": [ 31, 2, 3, 6 ],
            "saturday": [ 16, 17, 28, 20 ],
            "sunday": [ 19, 21, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/five-o-clock-tea-1917.jpg',
          title: 'Five o\'clock tea',
          artist: 'Julius Evola',
          year: '1917',
          rule: {
            "monday": [ 19, 21, 23, 2 ],
            "tuesday": [ 21, 22, 14, 17 ],
            "wednesday": [ 24, 25, 16, 20 ],
            "thursday": [ 27, 29, 30, 1 ],
            "friday": [ 29, 31, 4, 7 ],
            "saturday": [ 31, 2, 3, 6 ],
            "sunday": [ 16, 17, 28, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/new-york-city-i-1942.jpg',
          title: 'New York City I',
          artist: 'Piet Mondrian',
          year: '1942',
          rule: {
            "monday": [ 16, 17, 28, 20 ],
            "tuesday": [ 19, 21, 23, 2 ],
            "wednesday": [ 21, 22, 14, 17 ],
            "thursday": [ 24, 25, 16, 20 ],
            "friday": [ 27, 29, 30, 1 ],
            "saturday": [ 29, 31, 4, 7 ],
            "sunday": [ 31, 2, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1945a.jpg',
          title: 'Untitled',
          artist: 'Lidy Prati',
          year: '1945',
          rule: {
            "monday": [ 31, 2, 3, 6 ],
            "tuesday": [ 16, 17, 28, 20 ],
            "wednesday": [ 19, 21, 23, 2 ],
            "thursday": [ 21, 22, 14, 17 ],
            "friday": [ 24, 25, 16, 20 ],
            "saturday": [ 27, 29, 30, 1 ],
            "sunday": [ 29, 31, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/pintura-mad-1948.jpg',
          title: 'Pintura Madí',
          artist: 'Gyula Kosice',
          year: '1948',
          rule: {
            "monday": [ 29, 31, 4, 7 ],
            "tuesday": [ 31, 2, 3, 6 ],
            "wednesday": [ 16, 17, 28, 20 ],
            "thursday": [ 19, 21, 23, 2 ],
            "friday": [ 21, 22, 14, 17 ],
            "saturday": [ 24, 25, 16, 20 ],
            "sunday": [ 27, 29, 30, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/conjunto-dos-contr-rios-1989.jpg',
          title: 'Conjunto dos Contrários',
          artist: 'Eduardo Nery',
          year: '1989',
          rule: {
            "monday": [ 27, 29, 30, 1 ],
            "tuesday": [ 29, 31, 4, 7 ],
            "wednesday": [ 31, 2, 3, 6 ],
            "thursday": [ 16, 17, 28, 20 ],
            "friday": [ 19, 21, 23, 2 ],
            "saturday": [ 21, 22, 14, 17 ],
            "sunday": [ 24, 25, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1985.jpg',
          title: 'Untitled',
          artist: 'Alberto Biasi',
          year: '1985',
          rule: {
            "monday": [ 25, 26, 17, 21 ],
            "tuesday": [ 28, 30, 31, 2 ],
            "wednesday": [ 30, 1, 5, 8 ],
            "thursday": [ 1, 3, 4, 7 ],
            "friday": [ 17, 18, 29, 21 ],
            "saturday": [ 20, 22, 24, 3 ],
            "sunday": [ 22, 23, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/print-1-from-paper-clip-suite-1974.jpg',
          title: 'Print 1 From Paper Clip Suite',
          artist: 'Richard Smith',
          year: '1974',
          rule: {
            "monday": [ 22, 23, 15, 18 ],
            "tuesday": [ 25, 26, 17, 21 ],
            "wednesday": [ 28, 30, 31, 2 ],
            "thursday": [ 30, 1, 5, 8 ],
            "friday": [ 1, 3, 4, 7 ],
            "saturday": [ 17, 18, 29, 21 ],
            "sunday": [ 20, 22, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/after-malevich-02-2012.jpg',
          title: 'After Malevich 02',
          artist: 'Tess Jaray',
          year: '2012',
          rule: {
            "monday": [ 20, 22, 24, 3 ],
            "tuesday": [ 22, 23, 15, 18 ],
            "wednesday": [ 25, 26, 17, 21 ],
            "thursday": [ 28, 30, 31, 2 ],
            "friday": [ 30, 1, 5, 8 ],
            "saturday": [ 1, 3, 4, 7 ],
            "sunday": [ 17, 18, 29, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/4-trames-de-tirets-pivot-es-sur-un-c-t-1971.jpg',
          title: '4 trames de tirets pivotées sur un côté',
          artist: 'Francois Morellet',
          year: '1971',
          rule: {
            "monday": [ 17, 18, 29, 21 ],
            "tuesday": [ 20, 22, 24, 3 ],
            "wednesday": [ 22, 23, 15, 18 ],
            "thursday": [ 25, 26, 17, 21 ],
            "friday": [ 28, 30, 31, 2 ],
            "saturday": [ 30, 1, 5, 8 ],
            "sunday": [ 1, 3, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/le-temps-1975.jpg',
          title: 'Le temps',
          artist: 'Aki Kuroda',
          year: '1975',
          rule: {
            "monday": [ 1, 3, 4, 7 ],
            "tuesday": [ 17, 18, 29, 21 ],
            "wednesday": [ 20, 22, 24, 3 ],
            "thursday": [ 22, 23, 15, 18 ],
            "friday": [ 25, 26, 17, 21 ],
            "saturday": [ 28, 30, 31, 2 ],
            "sunday": [ 30, 1, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/18-l-1965.jpg',
          title: '#18 L',
          artist: 'Paul Reed',
          year: '1965',
          rule: {
            "monday": [ 30, 1, 5, 8 ],
            "tuesday": [ 1, 3, 4, 7 ],
            "wednesday": [ 17, 18, 29, 21 ],
            "thursday": [ 20, 22, 24, 3 ],
            "friday": [ 22, 23, 15, 18 ],
            "saturday": [ 25, 26, 17, 21 ],
            "sunday": [ 28, 30, 31, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/dialogue-i-1967.jpg',
          title: 'Dialogue I',
          artist: 'Constantin Flondor',
          year: '1967',
          rule: {
            "monday": [ 28, 30, 31, 2 ],
            "tuesday": [ 30, 1, 5, 8 ],
            "wednesday": [ 1, 3, 4, 7 ],
            "thursday": [ 17, 18, 29, 21 ],
            "friday": [ 20, 22, 24, 3 ],
            "saturday": [ 22, 23, 15, 18 ],
            "sunday": [ 25, 26, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/relational-painting-64-1953.jpg',
          title: 'Relational Painting #64',
          artist: 'Fritz Glarner',
          year: '1953',
          rule: {
            "monday": [ 26, 27, 18, 22 ],
            "tuesday": [ 29, 31, 1, 3 ],
            "wednesday": [ 31, 2, 6, 9 ],
            "thursday": [ 2, 4, 5, 8 ],
            "friday": [ 18, 19, 30, 22 ],
            "saturday": [ 21, 23, 15, 4 ],
            "sunday": [ 23, 24, 16, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/four-blue-five-1962.jpg',
          title: 'Four Blue Five',
          artist: 'Thomas Downing',
          year: '1962',
          rule: {
            "monday": [ 23, 24, 16, 19 ],
            "tuesday": [ 26, 27, 18, 22 ],
            "wednesday": [ 29, 31, 1, 3 ],
            "thursday": [ 31, 2, 6, 9 ],
            "friday": [ 2, 4, 5, 8 ],
            "saturday": [ 18, 19, 30, 22 ],
            "sunday": [ 21, 23, 15, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/ohne-titel-in-der-erde-1987.jpg',
          title: 'Ohne Titel (In Der Erde)',
          artist: 'Jurgen Partenheimer',
          year: '1987',
          rule: {
            "monday": [ 21, 23, 15, 4 ],
            "tuesday": [ 23, 24, 16, 19 ],
            "wednesday": [ 26, 27, 18, 22 ],
            "thursday": [ 29, 31, 1, 3 ],
            "friday": [ 31, 2, 6, 9 ],
            "saturday": [ 2, 4, 5, 8 ],
            "sunday": [ 18, 19, 30, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/seated-figure-1954.jpg',
          title: 'Seated Figure',
          artist: 'Conrad Marca-Relli',
          year: '1953 - 1954',
          rule: {
            "monday": [ 18, 19, 30, 22 ],
            "tuesday": [ 21, 23, 15, 4 ],
            "wednesday": [ 23, 24, 16, 19 ],
            "thursday": [ 26, 27, 18, 22 ],
            "friday": [ 29, 31, 1, 3 ],
            "saturday": [ 31, 2, 6, 9 ],
            "sunday": [ 2, 4, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/statue-in-a-cemetery-1959.jpg',
          title: 'Statue in a Cemetery',
          artist: 'Endre Balint',
          year: '1959',
          rule: {
            "monday": [ 2, 4, 5, 8 ],
            "tuesday": [ 18, 19, 30, 22 ],
            "wednesday": [ 21, 23, 15, 4 ],
            "thursday": [ 23, 24, 16, 19 ],
            "friday": [ 26, 27, 18, 22 ],
            "saturday": [ 29, 31, 1, 3 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/reclining-nude-red-nude-1956.jpg',
          title: 'Reclining Nude (Red Nude)',
          artist: 'William Scott',
          year: '1956',
          rule: {
            "monday": [ 31, 2, 6, 9 ],
            "tuesday": [ 2, 4, 5, 8 ],
            "wednesday": [ 18, 19, 30, 22 ],
            "thursday": [ 21, 23, 15, 4 ],
            "friday": [ 23, 24, 16, 19 ],
            "saturday": [ 26, 27, 18, 22 ],
            "sunday": [ 29, 31, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/tornado-1911.jpg',
          title: 'Tornado',
          artist: 'Joe Goode',
          year: '1911',
          rule: {
            "monday": [ 29, 31, 1, 3 ],
            "tuesday": [ 31, 2, 6, 9 ],
            "wednesday": [ 2, 4, 5, 8 ],
            "thursday": [ 18, 19, 30, 22 ],
            "friday": [ 21, 23, 15, 4 ],
            "saturday": [ 23, 24, 16, 19 ],
            "sunday": [ 26, 27, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/fluctuating-planes-1952.jpg',
          title: 'Fluctuating Planes',
          artist: 'Jock Macdonald',
          year: '1952',
          rule: {
            "monday": [ 27, 28, 19, 23 ],
            "tuesday": [ 30, 1, 2, 4 ],
            "wednesday": [ 1, 3, 7, 10 ],
            "thursday": [ 3, 5, 6, 9 ],
            "friday": [ 19, 20, 31, 23 ],
            "saturday": [ 22, 24, 16, 5 ],
            "sunday": [ 24, 25, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/astrazione-1921.jpg',
          title: 'Astrazione',
          artist: 'Julius Evola',
          year: '1921',
          rule: {
            "monday": [ 24, 25, 17, 20 ],
            "tuesday": [ 27, 28, 19, 23 ],
            "wednesday": [ 30, 1, 2, 4 ],
            "thursday": [ 1, 3, 7, 10 ],
            "friday": [ 3, 5, 6, 9 ],
            "saturday": [ 19, 20, 31, 23 ],
            "sunday": [ 22, 24, 16, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/bouquet-1928.jpg',
          title: 'Bouquet',
          artist: 'Jean Fautrier',
          year: '1928',
          rule: {
            "monday": [ 22, 24, 16, 5 ],
            "tuesday": [ 24, 25, 17, 20 ],
            "wednesday": [ 27, 28, 19, 23 ],
            "thursday": [ 30, 1, 2, 4 ],
            "friday": [ 1, 3, 7, 10 ],
            "saturday": [ 3, 5, 6, 9 ],
            "sunday": [ 19, 20, 31, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/lighthouse-1915.jpg',
          title: 'Lighthouse',
          artist: 'Marsden Hartley',
          year: '1915',
          rule: {
            "monday": [ 19, 20, 31, 23 ],
            "tuesday": [ 22, 24, 16, 5 ],
            "wednesday": [ 24, 25, 17, 20 ],
            "thursday": [ 27, 28, 19, 23 ],
            "friday": [ 30, 1, 2, 4 ],
            "saturday": [ 1, 3, 7, 10 ],
            "sunday": [ 3, 5, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/sketch-painted-in-santa-fe-new-mexico-1944.jpg',
          title: 'Sketch Painted in Santa Fe, New Mexico',
          artist: 'Lawren Harris',
          year: '1944',
          rule: {
            "monday": [ 3, 5, 6, 9 ],
            "tuesday": [ 19, 20, 31, 23 ],
            "wednesday": [ 22, 24, 16, 5 ],
            "thursday": [ 24, 25, 17, 20 ],
            "friday": [ 27, 28, 19, 23 ],
            "saturday": [ 30, 1, 2, 4 ],
            "sunday": [ 1, 3, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/grand-musicien-1920.jpg',
          title: 'Grand musicien',
          artist: 'Georges Ribemont-Dessaignes',
          year: '1920',
          rule: {
            "monday": [ 1, 3, 7, 10 ],
            "tuesday": [ 3, 5, 6, 9 ],
            "wednesday": [ 19, 20, 31, 23 ],
            "thursday": [ 22, 24, 16, 5 ],
            "friday": [ 24, 25, 17, 20 ],
            "saturday": [ 27, 28, 19, 23 ],
            "sunday": [ 30, 1, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-1937.jpg',
          title: 'Composition',
          artist: 'Sophie Taeuber-Arp',
          year: '1937',
          rule: {
            "monday": [ 30, 1, 2, 4 ],
            "tuesday": [ 1, 3, 7, 10 ],
            "wednesday": [ 3, 5, 6, 9 ],
            "thursday": [ 19, 20, 31, 23 ],
            "friday": [ 22, 24, 16, 5 ],
            "saturday": [ 24, 25, 17, 20 ],
            "sunday": [ 27, 28, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/legendary-landscape-azul-y-naranja-1964.jpg',
          title: 'Legendary Landscape (Azul y Naranja)',
          artist: 'Gunther Gerzso',
          year: '1964',
          rule: {
            "monday": [ 28, 29, 20, 24 ],
            "tuesday": [ 31, 2, 3, 5 ],
            "wednesday": [ 2, 4, 8, 11 ],
            "thursday": [ 4, 6, 7, 10 ],
            "friday": [ 20, 21, 1, 24 ],
            "saturday": [ 23, 25, 17, 6 ],
            "sunday": [ 25, 26, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/c-136-1965.jpg',
          title: 'C 136',
          artist: 'Tadasky',
          year: '1965',
          rule: {
            "monday": [ 25, 26, 18, 21 ],
            "tuesday": [ 28, 29, 20, 24 ],
            "wednesday": [ 31, 2, 3, 5 ],
            "thursday": [ 2, 4, 8, 11 ],
            "friday": [ 4, 6, 7, 10 ],
            "saturday": [ 20, 21, 1, 24 ],
            "sunday": [ 23, 25, 17, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/en-courbes-violontes-1947.jpg',
          title: 'En Courbes Violontes',
          artist: 'Marcelle Cahn',
          year: '1947',
          rule: {
            "monday": [ 23, 25, 17, 6 ],
            "tuesday": [ 25, 26, 18, 21 ],
            "wednesday": [ 28, 29, 20, 24 ],
            "thursday": [ 31, 2, 3, 5 ],
            "friday": [ 2, 4, 8, 11 ],
            "saturday": [ 4, 6, 7, 10 ],
            "sunday": [ 20, 21, 1, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/faixas-ritmadas-1958.jpg',
          title: 'Faixas Ritmadas',
          artist: 'Ivan Serpa',
          year: '1958',
          rule: {
            "monday": [ 20, 21, 1, 24 ],
            "tuesday": [ 23, 25, 17, 6 ],
            "wednesday": [ 25, 26, 18, 21 ],
            "thursday": [ 28, 29, 20, 24 ],
            "friday": [ 31, 2, 3, 5 ],
            "saturday": [ 2, 4, 8, 11 ],
            "sunday": [ 4, 6, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/nega-maluca-2006.jpg',
          title: 'Nega Maluca',
          artist: 'Beatriz Milhazes',
          year: '2006',
          rule: {
            "monday": [ 4, 6, 7, 10 ],
            "tuesday": [ 20, 21, 1, 24 ],
            "wednesday": [ 23, 25, 17, 6 ],
            "thursday": [ 25, 26, 18, 21 ],
            "friday": [ 28, 29, 20, 24 ],
            "saturday": [ 31, 2, 3, 5 ],
            "sunday": [ 2, 4, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/contra-relevo-objeto-n-7-1959.jpg',
          title: 'Contra Relevo (Objeto N. 7)',
          artist: 'Lygia Clark',
          year: '1959',
          rule: {
            "monday": [ 2, 4, 8, 11 ],
            "tuesday": [ 4, 6, 7, 10 ],
            "wednesday": [ 20, 21, 1, 24 ],
            "thursday": [ 23, 25, 17, 6 ],
            "friday": [ 25, 26, 18, 21 ],
            "saturday": [ 28, 29, 20, 24 ],
            "sunday": [ 31, 2, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/alba-1987.jpg',
          title: 'Alba',
          artist: 'Albert Irvin',
          year: '1987',
          rule: {
            "monday": [ 31, 2, 3, 5 ],
            "tuesday": [ 2, 4, 8, 11 ],
            "wednesday": [ 4, 6, 7, 10 ],
            "thursday": [ 20, 21, 1, 24 ],
            "friday": [ 23, 25, 17, 6 ],
            "saturday": [ 25, 26, 18, 21 ],
            "sunday": [ 28, 29, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/configuration-1988.jpg',
          title: 'Configuration',
          artist: 'Romul Nutiu',
          year: '1988',
          rule: {
            "monday": [ 29, 30, 21, 25 ],
            "tuesday": [ 1, 3, 4, 6 ],
            "wednesday": [ 3, 5, 9, 12 ],
            "thursday": [ 5, 7, 8, 11 ],
            "friday": [ 21, 22, 2, 25 ],
            "saturday": [ 24, 26, 18, 7 ],
            "sunday": [ 26, 27, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/lepanto-panel-12.jpg',
          title: 'Lepanto, panel 12',
          artist: 'Cy Twombly',
          year: 'XX-XXI cent.',
          rule: {
            "monday": [ 26, 27, 19, 22 ],
            "tuesday": [ 29, 30, 21, 25 ],
            "wednesday": [ 1, 3, 4, 6 ],
            "thursday": [ 3, 5, 9, 12 ],
            "friday": [ 5, 7, 8, 11 ],
            "saturday": [ 21, 22, 2, 25 ],
            "sunday": [ 24, 26, 18, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/atmospheric-effects-i-1970.jpg',
          title: 'Atmospheric Effects I',
          artist: 'Alma Woodsey Thomas',
          year: '1970',
          rule: {
            "monday": [ 24, 26, 18, 7 ],
            "tuesday": [ 26, 27, 19, 22 ],
            "wednesday": [ 29, 30, 21, 25 ],
            "thursday": [ 1, 3, 4, 6 ],
            "friday": [ 3, 5, 9, 12 ],
            "saturday": [ 5, 7, 8, 11 ],
            "sunday": [ 21, 22, 2, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/ominenda-1963.jpg',
          title: 'Ominenda',
          artist: 'Richard Mortensen',
          year: '1963',
          rule: {
            "monday": [ 21, 22, 2, 25 ],
            "tuesday": [ 24, 26, 18, 7 ],
            "wednesday": [ 26, 27, 19, 22 ],
            "thursday": [ 29, 30, 21, 25 ],
            "friday": [ 1, 3, 4, 6 ],
            "saturday": [ 3, 5, 9, 12 ],
            "sunday": [ 5, 7, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/non-objective-composition-suprematism.jpg',
          title: 'Non-Objective Composition (Suprematism)',
          artist: 'Olga Rozanova',
          year: '1916',
          rule: {
            "monday": [ 5, 7, 8, 11 ],
            "tuesday": [ 21, 22, 2, 25 ],
            "wednesday": [ 24, 26, 18, 7 ],
            "thursday": [ 26, 27, 19, 22 ],
            "friday": [ 29, 30, 21, 25 ],
            "saturday": [ 1, 3, 4, 6 ],
            "sunday": [ 3, 5, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/die-fahne-hoch-1959.jpg',
          title: 'Die Fahne Hoch!',
          artist: 'Frank Stella',
          year: '1959',
          rule: {
            "monday": [ 3, 5, 9, 12 ],
            "tuesday": [ 5, 7, 8, 11 ],
            "wednesday": [ 21, 22, 2, 25 ],
            "thursday": [ 24, 26, 18, 7 ],
            "friday": [ 26, 27, 19, 22 ],
            "saturday": [ 29, 30, 21, 25 ],
            "sunday": [ 1, 3, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-graphic-composition-1951-4(1).jpg',
          title: 'Untitled (Graphic Composition)',
          artist: 'Bruno Munari',
          year: '1951',
          rule: {
            "monday": [ 1, 3, 4, 6 ],
            "tuesday": [ 3, 5, 9, 12 ],
            "wednesday": [ 5, 7, 8, 11 ],
            "thursday": [ 21, 22, 2, 25 ],
            "friday": [ 24, 26, 18, 7 ],
            "saturday": [ 26, 27, 19, 22 ],
            "sunday": [ 29, 30, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/modality-series-spring-awakening-854a-1937.jpg',
          title: 'Modality Series, Spring Awakening 854A',
          artist: 'Jock Macdonald',
          year: '1937',
          rule: {
            "monday": [ 30, 31, 22, 26 ],
            "tuesday": [ 2, 4, 5, 7 ],
            "wednesday": [ 4, 6, 10, 13 ],
            "thursday": [ 6, 8, 9, 12 ],
            "friday": [ 22, 23, 3, 26 ],
            "saturday": [ 25, 27, 19, 8 ],
            "sunday": [ 27, 28, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/sun-1943.jpg',
          title: 'Sun',
          artist: 'Arthur Dove',
          year: '1943',
          rule: {
            "monday": [ 27, 28, 20, 23 ],
            "tuesday": [ 30, 31, 22, 26 ],
            "wednesday": [ 2, 4, 5, 7 ],
            "thursday": [ 4, 6, 10, 13 ],
            "friday": [ 6, 8, 9, 12 ],
            "saturday": [ 22, 23, 3, 26 ],
            "sunday": [ 25, 27, 19, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/night-creatures-1965.jpg',
          title: 'Night Creatures',
          artist: 'Lee Krasner',
          year: '1965',
          rule: {
            "monday": [ 25, 27, 19, 8 ],
            "tuesday": [ 27, 28, 20, 23 ],
            "wednesday": [ 30, 31, 22, 26 ],
            "thursday": [ 2, 4, 5, 7 ],
            "friday": [ 4, 6, 10, 13 ],
            "saturday": [ 6, 8, 9, 12 ],
            "sunday": [ 22, 23, 3, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/cinetic-composition-1968.jpg',
          title: 'Cinetic Composition',
          artist: 'Almir Mavignier',
          year: '1968',
          rule: {
            "monday": [ 22, 23, 3, 26 ],
            "tuesday": [ 25, 27, 19, 8 ],
            "wednesday": [ 27, 28, 20, 23 ],
            "thursday": [ 30, 31, 22, 26 ],
            "friday": [ 2, 4, 5, 7 ],
            "saturday": [ 4, 6, 10, 13 ],
            "sunday": [ 6, 8, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/relief-painting-19x-1960-61.jpg',
          title: 'Relief painting #19x',
          artist: 'Adolf Fleischmann',
          year: '1961',
          rule: {
            "monday": [ 6, 8, 9, 12 ],
            "tuesday": [ 22, 23, 3, 26 ],
            "wednesday": [ 25, 27, 19, 8 ],
            "thursday": [ 27, 28, 20, 23 ],
            "friday": [ 30, 31, 22, 26 ],
            "saturday": [ 2, 4, 5, 7 ],
            "sunday": [ 4, 6, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/easy-dark-2007.jpg',
          title: 'Easy Dark',
          artist: 'Julie Mehretu',
          year: '2007',
          rule: {
            "monday": [ 4, 6, 10, 13 ],
            "tuesday": [ 6, 8, 9, 12 ],
            "wednesday": [ 22, 23, 3, 26 ],
            "thursday": [ 25, 27, 19, 8 ],
            "friday": [ 27, 28, 20, 23 ],
            "saturday": [ 30, 31, 22, 26 ],
            "sunday": [ 2, 4, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1982.jpg',
          title: 'Untitled',
          artist: 'Gunther Gerzso',
          year: '1982',
          rule: {
            "monday": [ 2, 4, 5, 7 ],
            "tuesday": [ 4, 6, 10, 13 ],
            "wednesday": [ 6, 8, 9, 12 ],
            "thursday": [ 22, 23, 3, 26 ],
            "friday": [ 25, 27, 19, 8 ],
            "saturday": [ 27, 28, 20, 23 ],
            "sunday": [ 30, 31, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/galaxy-1990.jpg',
          title: 'Galaxy',
          artist: 'Tihamer Gyarmathy',
          year: '1990',
          rule: {
            "monday": [ 31, 1, 23, 27 ],
            "tuesday": [ 3, 5, 6, 8 ],
            "wednesday": [ 5, 7, 11, 14 ],
            "thursday": [ 7, 9, 10, 13 ],
            "friday": [ 23, 24, 4, 27 ],
            "saturday": [ 26, 28, 20, 9 ],
            "sunday": [ 28, 29, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/astre-bleu-1991.jpg',
          title: 'Astre-bleu',
          artist: 'Jean-Paul Jerome',
          year: '1991',
          rule: {
            "monday": [ 28, 29, 21, 24 ],
            "tuesday": [ 31, 1, 23, 27 ],
            "wednesday": [ 3, 5, 6, 8 ],
            "thursday": [ 5, 7, 11, 14 ],
            "friday": [ 7, 9, 10, 13 ],
            "saturday": [ 23, 24, 4, 27 ],
            "sunday": [ 26, 28, 20, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/hereditarius-no-1-68-a-1968.jpg',
          title: 'Hereditarius No.1-68-A',
          artist: 'Park Seo-Bo',
          year: '1968',
          rule: {
            "monday": [ 26, 28, 20, 9 ],
            "tuesday": [ 28, 29, 21, 24 ],
            "wednesday": [ 31, 1, 23, 27 ],
            "thursday": [ 3, 5, 6, 8 ],
            "friday": [ 5, 7, 11, 14 ],
            "saturday": [ 7, 9, 10, 13 ],
            "sunday": [ 23, 24, 4, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1963.jpg',
          title: 'Untitled',
          artist: 'David Smith',
          year: '1963',
          rule: {
            "monday": [ 23, 24, 4, 27 ],
            "tuesday": [ 26, 28, 20, 9 ],
            "wednesday": [ 28, 29, 21, 24 ],
            "thursday": [ 31, 1, 23, 27 ],
            "friday": [ 3, 5, 6, 8 ],
            "saturday": [ 5, 7, 11, 14 ],
            "sunday": [ 7, 9, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/africa-i-1942.jpg',
          title: 'Africa I',
          artist: 'Willi Baumeister',
          year: '1942',
          rule: {
            "monday": [ 7, 9, 10, 13 ],
            "tuesday": [ 23, 24, 4, 27 ],
            "wednesday": [ 26, 28, 20, 9 ],
            "thursday": [ 28, 29, 21, 24 ],
            "friday": [ 31, 1, 23, 27 ],
            "saturday": [ 3, 5, 6, 8 ],
            "sunday": [ 5, 7, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/epitalamio-1968.jpg',
          title: 'Epitalamio',
          artist: 'Carlos Merida',
          year: '1968',
          rule: {
            "monday": [ 5, 7, 11, 14 ],
            "tuesday": [ 7, 9, 10, 13 ],
            "wednesday": [ 23, 24, 4, 27 ],
            "thursday": [ 26, 28, 20, 9 ],
            "friday": [ 28, 29, 21, 24 ],
            "saturday": [ 31, 1, 23, 27 ],
            "sunday": [ 3, 5, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/where-1960.jpg',
          title: 'Where',
          artist: 'Morris Louis',
          year: '1960',
          rule: {
            "monday": [ 3, 5, 6, 8 ],
            "tuesday": [ 5, 7, 11, 14 ],
            "wednesday": [ 7, 9, 10, 13 ],
            "thursday": [ 23, 24, 4, 27 ],
            "friday": [ 26, 28, 20, 9 ],
            "saturday": [ 28, 29, 21, 24 ],
            "sunday": [ 31, 1, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/unknown-title-6.jpg',
          title: 'unknown title',
          artist: 'Michel Carrade',
          year: 'xx Cent.',
          rule: {
            "monday": [ 1, 2, 24, 28 ],
            "tuesday": [ 4, 6, 7, 9 ],
            "wednesday": [ 6, 8, 12, 15 ],
            "thursday": [ 8, 10, 11, 14 ],
            "friday": [ 24, 25, 5, 28 ],
            "saturday": [ 27, 29, 21, 10 ],
            "sunday": [ 29, 30, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/halo-1-1992.jpg',
          title: 'Halo-1',
          artist: 'Maki Haku',
          year: '1992',
          rule: {
            "monday": [ 29, 30, 22, 25 ],
            "tuesday": [ 1, 2, 24, 28 ],
            "wednesday": [ 4, 6, 7, 9 ],
            "thursday": [ 6, 8, 12, 15 ],
            "friday": [ 8, 10, 11, 14 ],
            "saturday": [ 24, 25, 5, 28 ],
            "sunday": [ 27, 29, 21, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-7.jpg',
          title: 'Untitled',
          artist: 'Antonio Sanfilippo',
          year: 'xx Cent.',
          rule: {
            "monday": [ 27, 29, 21, 10 ],
            "tuesday": [ 29, 30, 22, 25 ],
            "wednesday": [ 1, 2, 24, 28 ],
            "thursday": [ 4, 6, 7, 9 ],
            "friday": [ 6, 8, 12, 15 ],
            "saturday": [ 8, 10, 11, 14 ],
            "sunday": [ 24, 25, 5, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1959.jpg',
          title: 'Untitled',
          artist: 'Jean Bertholle',
          year: '1959',
          rule: {
            "monday": [ 24, 25, 5, 28 ],
            "tuesday": [ 27, 29, 21, 10 ],
            "wednesday": [ 29, 30, 22, 25 ],
            "thursday": [ 1, 2, 24, 28 ],
            "friday": [ 4, 6, 7, 9 ],
            "saturday": [ 6, 8, 12, 15 ],
            "sunday": [ 8, 10, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/dreiformvariation-1928.jpg',
          title: 'Dreiformvariation',
          artist: 'Carl Buchheister',
          year: '1928',
          rule: {
            "monday": [ 8, 10, 11, 14 ],
            "tuesday": [ 24, 25, 5, 28 ],
            "wednesday": [ 27, 29, 21, 10 ],
            "thursday": [ 29, 30, 22, 25 ],
            "friday": [ 1, 2, 24, 28 ],
            "saturday": [ 4, 6, 7, 9 ],
            "sunday": [ 6, 8, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/pintura-153-1948.jpg',
          title: 'Pintura 153',
          artist: 'Raul Lozza',
          year: '1948',
          rule: {
            "monday": [ 6, 8, 12, 15 ],
            "tuesday": [ 8, 10, 11, 14 ],
            "wednesday": [ 24, 25, 5, 28 ],
            "thursday": [ 27, 29, 21, 10 ],
            "friday": [ 29, 30, 22, 25 ],
            "saturday": [ 1, 2, 24, 28 ],
            "sunday": [ 4, 6, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-great-wall-i-1986.jpg',
          title: 'The Great Wall (I)',
          artist: 'Wu Guanzhong',
          year: '1986',
          rule: {
            "monday": [ 4, 6, 7, 9 ],
            "tuesday": [ 6, 8, 12, 15 ],
            "wednesday": [ 8, 10, 11, 14 ],
            "thursday": [ 24, 25, 5, 28 ],
            "friday": [ 27, 29, 21, 10 ],
            "saturday": [ 29, 30, 22, 25 ],
            "sunday": [ 1, 2, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/opposing-15-1959.jpg',
          title: 'Opposing (#15)',
          artist: 'Frederick Hammersley',
          year: '1959',
          rule: {
            "monday": [ 2, 3, 25, 29 ],
            "tuesday": [ 5, 7, 8, 10 ],
            "wednesday": [ 7, 9, 13, 16 ],
            "thursday": [ 9, 11, 12, 15 ],
            "friday": [ 25, 26, 6, 29 ],
            "saturday": [ 28, 30, 22, 11 ],
            "sunday": [ 30, 31, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/hillside-1954.jpg',
          title: 'Hillside',
          artist: 'Kazuo Nakamura',
          year: '1954',
          rule: {
            "monday": [ 30, 31, 23, 26 ],
            "tuesday": [ 2, 3, 25, 29 ],
            "wednesday": [ 5, 7, 8, 10 ],
            "thursday": [ 7, 9, 13, 16 ],
            "friday": [ 9, 11, 12, 15 ],
            "saturday": [ 25, 26, 6, 29 ],
            "sunday": [ 28, 30, 22, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/1944-n-no-1-1944.jpg',
          title: '1944-N No. 1',
          artist: 'Clyfford Still',
          year: '1944',
          rule: {
            "monday": [ 28, 30, 22, 11 ],
            "tuesday": [ 30, 31, 23, 26 ],
            "wednesday": [ 2, 3, 25, 29 ],
            "thursday": [ 5, 7, 8, 10 ],
            "friday": [ 7, 9, 13, 16 ],
            "saturday": [ 9, 11, 12, 15 ],
            "sunday": [ 25, 26, 6, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/green-sound-1964.jpg',
          title: 'Green Sound',
          artist: 'Jeremy Moon',
          year: '1964',
          rule: {
            "monday": [ 25, 26, 6, 29 ],
            "tuesday": [ 28, 30, 22, 11 ],
            "wednesday": [ 30, 31, 23, 26 ],
            "thursday": [ 2, 3, 25, 29 ],
            "friday": [ 5, 7, 8, 10 ],
            "saturday": [ 7, 9, 13, 16 ],
            "sunday": [ 9, 11, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/heroic-roses-1938(1).jpg',
          title: 'Heroic Roses',
          artist: 'Paul Klee',
          year: '1938',
          rule: {
            "monday": [ 9, 11, 12, 15 ],
            "tuesday": [ 25, 26, 6, 29 ],
            "wednesday": [ 28, 30, 22, 11 ],
            "thursday": [ 30, 31, 23, 26 ],
            "friday": [ 2, 3, 25, 29 ],
            "saturday": [ 5, 7, 8, 10 ],
            "sunday": [ 7, 9, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/work-2009.jpg',
          title: 'Work',
          artist: 'Tsuruko Yamazaki',
          year: '2009',
          rule: {
            "monday": [ 7, 9, 13, 16 ],
            "tuesday": [ 9, 11, 12, 15 ],
            "wednesday": [ 25, 26, 6, 29 ],
            "thursday": [ 28, 30, 22, 11 ],
            "friday": [ 30, 31, 23, 26 ],
            "saturday": [ 2, 3, 25, 29 ],
            "sunday": [ 5, 7, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/anima-mundi-10-ed-2011.jpg',
          title: 'Anima Mundi 10 Ed',
          artist: 'Imi Knoebel',
          year: '2011',
          rule: {
            "monday": [ 5, 7, 8, 10 ],
            "tuesday": [ 7, 9, 13, 16 ],
            "wednesday": [ 9, 11, 12, 15 ],
            "thursday": [ 25, 26, 6, 29 ],
            "friday": [ 28, 30, 22, 11 ],
            "saturday": [ 30, 31, 23, 26 ],
            "sunday": [ 2, 3, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/red-heart-1980.jpg',
          title: 'Red Heart',
          artist: 'Friedel Dzubas',
          year: '1980',
          rule: {
            "monday": [ 2, 3, 25, 29 ],
            "tuesday": [ 5, 7, 8, 10 ],
            "wednesday": [ 7, 9, 13, 16 ],
            "thursday": [ 9, 11, 12, 15 ],
            "friday": [ 25, 26, 6, 29 ],
            "saturday": [ 28, 30, 22, 11 ],
            "sunday": [ 30, 31, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/88-va-17-1988.jpg',
          title: '88. VA 17',
          artist: 'Jurgen Partenheimer',
          year: '1988',
          rule: {
            "monday": [ 30, 31, 23, 26 ],
            "tuesday": [ 2, 3, 25, 29 ],
            "wednesday": [ 5, 7, 8, 10 ],
            "thursday": [ 7, 9, 13, 16 ],
            "friday": [ 9, 11, 12, 15 ],
            "saturday": [ 25, 26, 6, 29 ],
            "sunday": [ 28, 30, 22, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/gdwf-2004.jpg',
          title: 'GDWF',
          artist: 'Paul Reed',
          year: '2004',
          rule: {
            "monday": [ 28, 30, 22, 11 ],
            "tuesday": [ 30, 31, 23, 26 ],
            "wednesday": [ 2, 3, 25, 29 ],
            "thursday": [ 5, 7, 8, 10 ],
            "friday": [ 7, 9, 13, 16 ],
            "saturday": [ 9, 11, 12, 15 ],
            "sunday": [ 25, 26, 6, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/work-1956.jpg',
          title: 'Work',
          artist: 'Sadamasa Motonaga',
          year: '1956',
          rule: {
            "monday": [ 25, 26, 6, 29 ],
            "tuesday": [ 28, 30, 22, 11 ],
            "wednesday": [ 30, 31, 23, 26 ],
            "thursday": [ 2, 3, 25, 29 ],
            "friday": [ 5, 7, 8, 10 ],
            "saturday": [ 7, 9, 13, 16 ],
            "sunday": [ 9, 11, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/iras-1959.jpg',
          title: 'Iras',
          artist: 'Olle Baertling',
          year: '1959',
          rule: {
            "monday": [ 9, 11, 12, 15 ],
            "tuesday": [ 25, 26, 6, 29 ],
            "wednesday": [ 28, 30, 22, 11 ],
            "thursday": [ 30, 31, 23, 26 ],
            "friday": [ 2, 3, 25, 29 ],
            "saturday": [ 5, 7, 8, 10 ],
            "sunday": [ 7, 9, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-no-212-1960.jpg',
          title: 'Composition No. 212',
          artist: 'Friedrich Vordemberge-Gildewart',
          year: '1960',
          rule: {
            "monday": [ 7, 9, 13, 16 ],
            "tuesday": [ 9, 11, 12, 15 ],
            "wednesday": [ 25, 26, 6, 29 ],
            "thursday": [ 28, 30, 22, 11 ],
            "friday": [ 30, 31, 23, 26 ],
            "saturday": [ 2, 3, 25, 29 ],
            "sunday": [ 5, 7, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-from-collection-resonance-2011-1.jpg',
          title: 'Untitled (from Collection Resonance)',
          artist: 'Monique Orsini',
          year: '2011',
          rule: {
            "monday": [ 5, 7, 8, 10 ],
            "tuesday": [ 7, 9, 13, 16 ],
            "wednesday": [ 9, 11, 12, 15 ],
            "thursday": [ 25, 26, 6, 29 ],
            "friday": [ 28, 30, 22, 11 ],
            "saturday": [ 30, 31, 23, 26 ],
            "sunday": [ 2, 3, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/grey-still-life-1969.jpg',
          title: 'Grey Still Life',
          artist: 'William Scott',
          year: '1969',
          rule: {
            "monday": [ 3, 4, 26, 30 ],
            "tuesday": [ 6, 8, 9, 11 ],
            "wednesday": [ 8, 10, 14, 17 ],
            "thursday": [ 10, 12, 13, 16 ],
            "friday": [ 26, 27, 7, 30 ],
            "saturday": [ 29, 31, 23, 12 ],
            "sunday": [ 31, 1, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/magical-space-forms-1948.jpg',
          title: 'Magical Space Forms',
          artist: 'Lorser Feitelson',
          year: '1948',
          rule: {
            "monday": [ 31, 1, 24, 27 ],
            "tuesday": [ 3, 4, 26, 30 ],
            "wednesday": [ 6, 8, 9, 11 ],
            "thursday": [ 8, 10, 14, 17 ],
            "friday": [ 10, 12, 13, 16 ],
            "saturday": [ 26, 27, 7, 30 ],
            "sunday": [ 29, 31, 23, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-summer-1962.jpg',
          title: 'Untitled (Summer)',
          artist: 'Howard Mehring',
          year: '1962',
          rule: {
            "monday": [ 29, 31, 23, 12 ],
            "tuesday": [ 31, 1, 24, 27 ],
            "wednesday": [ 3, 4, 26, 30 ],
            "thursday": [ 6, 8, 9, 11 ],
            "friday": [ 8, 10, 14, 17 ],
            "saturday": [ 10, 12, 13, 16 ],
            "sunday": [ 26, 27, 7, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1956.jpg',
          title: 'Untitled',
          artist: 'Karl Benjamin',
          year: '1956',
          rule: {
            "monday": [ 26, 27, 7, 30 ],
            "tuesday": [ 29, 31, 23, 12 ],
            "wednesday": [ 31, 1, 24, 27 ],
            "thursday": [ 3, 4, 26, 30 ],
            "friday": [ 6, 8, 9, 11 ],
            "saturday": [ 8, 10, 14, 17 ],
            "sunday": [ 10, 12, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/unknown-title-17.jpg',
          title: 'unknown title',
          artist: 'Constantin Blendea',
          year: 'XX-XXI cent.',
          rule: {
            "monday": [ 10, 12, 13, 16 ],
            "tuesday": [ 26, 27, 7, 30 ],
            "wednesday": [ 29, 31, 23, 12 ],
            "thursday": [ 31, 1, 24, 27 ],
            "friday": [ 3, 4, 26, 30 ],
            "saturday": [ 6, 8, 9, 11 ],
            "sunday": [ 8, 10, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/coloured-wall-2003.jpg',
          title: 'Coloured Wall',
          artist: 'Sean Scully',
          year: '2003',
          rule: {
            "monday": [ 8, 10, 14, 17 ],
            "tuesday": [ 10, 12, 13, 16 ],
            "wednesday": [ 26, 27, 7, 30 ],
            "thursday": [ 29, 31, 23, 12 ],
            "friday": [ 31, 1, 24, 27 ],
            "saturday": [ 3, 4, 26, 30 ],
            "sunday": [ 6, 8, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/mask-4-1936.jpg',
          title: 'Mask 4',
          artist: 'Willi Baumeister',
          year: '1936',
          rule: {
            "monday": [ 6, 8, 9, 11 ],
            "tuesday": [ 8, 10, 14, 17 ],
            "wednesday": [ 10, 12, 13, 16 ],
            "thursday": [ 26, 27, 7, 30 ],
            "friday": [ 29, 31, 23, 12 ],
            "saturday": [ 31, 1, 24, 27 ],
            "sunday": [ 3, 4, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/july-1954-1954.jpg',
          title: 'July 1954',
          artist: 'Frank Lobdell',
          year: '1954',
          rule: {
            "monday": [ 4, 5, 27, 31 ],
            "tuesday": [ 7, 9, 10, 12 ],
            "wednesday": [ 9, 11, 15, 18 ],
            "thursday": [ 11, 13, 14, 17 ],
            "friday": [ 27, 28, 8, 31 ],
            "saturday": [ 30, 1, 24, 13 ],
            "sunday": [ 1, 2, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/relational-painting-1951.jpg',
          title: 'Relational Painting',
          artist: 'Fritz Glarner',
          year: '1951',
          rule: {
            "monday": [ 1, 2, 25, 28 ],
            "tuesday": [ 4, 5, 27, 31 ],
            "wednesday": [ 7, 9, 10, 12 ],
            "thursday": [ 9, 11, 15, 18 ],
            "friday": [ 11, 13, 14, 17 ],
            "saturday": [ 27, 28, 8, 31 ],
            "sunday": [ 30, 1, 24, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/red-april-1970.jpg',
          title: 'Red April',
          artist: 'Sam Gilliam',
          year: '1970',
          rule: {
            "monday": [ 30, 1, 24, 13 ],
            "tuesday": [ 1, 2, 25, 28 ],
            "wednesday": [ 4, 5, 27, 31 ],
            "thursday": [ 7, 9, 10, 12 ],
            "friday": [ 9, 11, 15, 18 ],
            "saturday": [ 11, 13, 14, 17 ],
            "sunday": [ 27, 28, 8, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/oe-280-komposition-in-rot-mit-wei-und-blau-1959.jpg',
          title: 'OE 280 (Komposition in Rot mit Weiß und Blau)',
          artist: 'Rupprecht Geiger',
          year: '1959',
          rule: {
            "monday": [ 27, 28, 8, 31 ],
            "tuesday": [ 30, 1, 24, 13 ],
            "wednesday": [ 1, 2, 25, 28 ],
            "thursday": [ 4, 5, 27, 31 ],
            "friday": [ 7, 9, 10, 12 ],
            "saturday": [ 9, 11, 15, 18 ],
            "sunday": [ 11, 13, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/diminishing-circles-2001.jpg',
          title: 'Diminishing Circles',
          artist: 'Jennifer Bartlett',
          year: '2001',
          rule: {
            "monday": [ 11, 13, 14, 17 ],
            "tuesday": [ 27, 28, 8, 31 ],
            "wednesday": [ 30, 1, 24, 13 ],
            "thursday": [ 1, 2, 25, 28 ],
            "friday": [ 4, 5, 27, 31 ],
            "saturday": [ 7, 9, 10, 12 ],
            "sunday": [ 9, 11, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/summer-1960.jpg',
          title: 'Summer',
          artist: 'Thomas Downing',
          year: '1960',
          rule: {
            "monday": [ 9, 11, 15, 18 ],
            "tuesday": [ 11, 13, 14, 17 ],
            "wednesday": [ 27, 28, 8, 31 ],
            "thursday": [ 30, 1, 24, 13 ],
            "friday": [ 1, 2, 25, 28 ],
            "saturday": [ 4, 5, 27, 31 ],
            "sunday": [ 7, 9, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/chant-2-1967.jpg',
          title: 'Chant 2',
          artist: 'Bridget Riley',
          year: '1967',
          rule: {
            "monday": [ 7, 9, 10, 12 ],
            "tuesday": [ 9, 11, 15, 18 ],
            "wednesday": [ 11, 13, 14, 17 ],
            "thursday": [ 27, 28, 8, 31 ],
            "friday": [ 30, 1, 24, 13 ],
            "saturday": [ 1, 2, 25, 28 ],
            "sunday": [ 4, 5, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/abstract-painting-780-1-1.jpg',
          title: 'Abstract Painting 780-1',
          artist: 'Gerhard Richter',
          year: '1992',
          rule: {
            "monday": [ 5, 6, 28, 1 ],
            "tuesday": [ 8, 10, 11, 13 ],
            "wednesday": [ 10, 12, 16, 19 ],
            "thursday": [ 12, 14, 15, 18 ],
            "friday": [ 28, 29, 9, 1 ],
            "saturday": [ 31, 2, 25, 14 ],
            "sunday": [ 2, 3, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/orlando-1980.jpg',
          title: 'Orlando',
          artist: 'Albert Irvin',
          year: '1980',
          rule: {
            "monday": [ 2, 3, 26, 29 ],
            "tuesday": [ 5, 6, 28, 1 ],
            "wednesday": [ 8, 10, 11, 13 ],
            "thursday": [ 10, 12, 16, 19 ],
            "friday": [ 12, 14, 15, 18 ],
            "saturday": [ 28, 29, 9, 1 ],
            "sunday": [ 31, 2, 25, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-drawing-2006.jpg',
          title: 'Untitled Drawing',
          artist: 'David Batchelor',
          year: '2006',
          rule: {
            "monday": [ 31, 2, 25, 14 ],
            "tuesday": [ 2, 3, 26, 29 ],
            "wednesday": [ 5, 6, 28, 1 ],
            "thursday": [ 8, 10, 11, 13 ],
            "friday": [ 10, 12, 16, 19 ],
            "saturday": [ 12, 14, 15, 18 ],
            "sunday": [ 28, 29, 9, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/-1994-2.jpg',
          title: '人态二',
          artist: 'Xu Hongming',
          year: '1994',
          rule: {
            "monday": [ 28, 29, 9, 1 ],
            "tuesday": [ 31, 2, 25, 14 ],
            "wednesday": [ 2, 3, 26, 29 ],
            "thursday": [ 5, 6, 28, 1 ],
            "friday": [ 8, 10, 11, 13 ],
            "saturday": [ 10, 12, 16, 19 ],
            "sunday": [ 12, 14, 15, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-june-1999.jpg',
          title: 'Untitled, June',
          artist: 'Stanley Whitney',
          year: '1999',
          rule: {
            "monday": [ 12, 14, 15, 18 ],
            "tuesday": [ 28, 29, 9, 1 ],
            "wednesday": [ 31, 2, 25, 14 ],
            "thursday": [ 2, 3, 26, 29 ],
            "friday": [ 5, 6, 28, 1 ],
            "saturday": [ 8, 10, 11, 13 ],
            "sunday": [ 10, 12, 16, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-no-199.jpg',
          title: 'Composition No. 199',
          artist: 'Friedrich Vordemberge-Gildewart',
          year: 'xx cent.',
          rule: {
            "monday": [ 10, 12, 16, 19 ],
            "tuesday": [ 12, 14, 15, 18 ],
            "wednesday": [ 28, 29, 9, 1 ],
            "thursday": [ 31, 2, 25, 14 ],
            "friday": [ 2, 3, 26, 29 ],
            "saturday": [ 5, 6, 28, 1 ],
            "sunday": [ 8, 10, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/proun-19d-1922.jpg',
          title: 'Proun 19D',
          artist: 'El Lissitzky',
          year: '1922',
          rule: {
            "monday": [ 8, 10, 11, 13 ],
            "tuesday": [ 10, 12, 16, 19 ],
            "wednesday": [ 12, 14, 15, 18 ],
            "thursday": [ 28, 29, 9, 1 ],
            "friday": [ 31, 2, 25, 14 ],
            "saturday": [ 2, 3, 26, 29 ],
            "sunday": [ 5, 6, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/bluxao-1955.jpg',
          title: 'Bluxao',
          artist: 'Willi Baumeister',
          year: '1955',
          rule: {
            "monday": [ 6, 7, 29, 2 ],
            "tuesday": [ 9, 11, 12, 14 ],
            "wednesday": [ 11, 13, 17, 20 ],
            "thursday": [ 13, 15, 16, 19 ],
            "friday": [ 29, 30, 10, 2 ],
            "saturday": [ 1, 3, 26, 15 ],
            "sunday": [ 3, 4, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/appearance-of-crosses-in-six-parts-2005.jpg',
          title: 'Appearance of Crosses (in six parts)',
          artist: 'Ding Yi',
          year: '2005',
          rule: {
            "monday": [ 3, 4, 27, 30 ],
            "tuesday": [ 6, 7, 29, 2 ],
            "wednesday": [ 9, 11, 12, 14 ],
            "thursday": [ 11, 13, 17, 20 ],
            "friday": [ 13, 15, 16, 19 ],
            "saturday": [ 29, 30, 10, 2 ],
            "sunday": [ 1, 3, 26, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/choir.jpg',
          title: 'Choir',
          artist: 'Jack Tworkov',
          year: 'xx cent.',
          rule: {
            "monday": [ 1, 3, 26, 15 ],
            "tuesday": [ 3, 4, 27, 30 ],
            "wednesday": [ 6, 7, 29, 2 ],
            "thursday": [ 9, 11, 12, 14 ],
            "friday": [ 11, 13, 17, 20 ],
            "saturday": [ 13, 15, 16, 19 ],
            "sunday": [ 29, 30, 10, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/cunard-l-8-62-1962.jpg',
          title: 'Cunard L-8-62',
          artist: 'Conrad Marca-Relli',
          year: '1962',
          rule: {
            "monday": [ 29, 30, 10, 2 ],
            "tuesday": [ 1, 3, 26, 15 ],
            "wednesday": [ 3, 4, 27, 30 ],
            "thursday": [ 6, 7, 29, 2 ],
            "friday": [ 9, 11, 12, 14 ],
            "saturday": [ 11, 13, 17, 20 ],
            "sunday": [ 13, 15, 16, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/dalet-zayin-1959.jpg',
          title: 'Dalet Zayin',
          artist: 'Morris Louis',
          year: '1959',
          rule: {
            "monday": [ 13, 15, 16, 19 ],
            "tuesday": [ 29, 30, 10, 2 ],
            "wednesday": [ 1, 3, 26, 15 ],
            "thursday": [ 3, 4, 27, 30 ],
            "friday": [ 6, 7, 29, 2 ],
            "saturday": [ 9, 11, 12, 14 ],
            "sunday": [ 11, 13, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/an-accordment-73-1973.jpg',
          title: 'An Accordment #73',
          artist: 'Perle Fine',
          year: '1973',
          rule: {
            "monday": [ 11, 13, 17, 20 ],
            "tuesday": [ 13, 15, 16, 19 ],
            "wednesday": [ 29, 30, 10, 2 ],
            "thursday": [ 1, 3, 26, 15 ],
            "friday": [ 3, 4, 27, 30 ],
            "saturday": [ 6, 7, 29, 2 ],
            "sunday": [ 9, 11, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/from-a-riviera-window-1955.jpg',
          title: 'From a Riviera Window',
          artist: 'Jock Macdonald',
          year: '1955',
          rule: {
            "monday": [ 9, 11, 12, 14 ],
            "tuesday": [ 11, 13, 17, 20 ],
            "wednesday": [ 13, 15, 16, 19 ],
            "thursday": [ 29, 30, 10, 2 ],
            "friday": [ 1, 3, 26, 15 ],
            "saturday": [ 3, 4, 27, 30 ],
            "sunday": [ 6, 7, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/le-chevalier.jpg',
          title: 'Le Chevalier',
          artist: 'Paul Ackerman',
          year: 'xx cent.',
          rule: {
            "monday": [ 7, 8, 30, 3 ],
            "tuesday": [ 10, 12, 13, 15 ],
            "wednesday": [ 12, 14, 18, 21 ],
            "thursday": [ 14, 16, 17, 20 ],
            "friday": [ 30, 31, 11, 3 ],
            "saturday": [ 2, 4, 27, 16 ],
            "sunday": [ 4, 5, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/looks-of-the-colors.jpg',
          title: 'Looks of the Colors',
          artist: 'Ion Tuculescu',
          year: 'xx cent.',
          rule: {
            "monday": [ 4, 5, 28, 31 ],
            "tuesday": [ 7, 8, 30, 3 ],
            "wednesday": [ 10, 12, 13, 15 ],
            "thursday": [ 12, 14, 18, 21 ],
            "friday": [ 14, 16, 17, 20 ],
            "saturday": [ 30, 31, 11, 3 ],
            "sunday": [ 2, 4, 27, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/james-bond-meets-pussy-galore-1965.jpg',
          title: 'James Bond Meets Pussy Galore',
          artist: 'Nicholas Krushenick',
          year: '1965',
          rule: {
            "monday": [ 2, 4, 27, 16 ],
            "tuesday": [ 4, 5, 28, 31 ],
            "wednesday": [ 7, 8, 30, 3 ],
            "thursday": [ 10, 12, 13, 15 ],
            "friday": [ 12, 14, 18, 21 ],
            "saturday": [ 14, 16, 17, 20 ],
            "sunday": [ 30, 31, 11, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/la-ronde-marine-1987.jpg',
          title: 'La ronde marine',
          artist: 'Jean-Paul Jerome',
          year: '1987',
          rule: {
            "monday": [ 30, 31, 11, 3 ],
            "tuesday": [ 2, 4, 27, 16 ],
            "wednesday": [ 4, 5, 28, 31 ],
            "thursday": [ 7, 8, 30, 3 ],
            "friday": [ 10, 12, 13, 15 ],
            "saturday": [ 12, 14, 18, 21 ],
            "sunday": [ 14, 16, 17, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/early-morning-sky-1990.jpg',
          title: 'Early Morning Sky',
          artist: 'Tihamer Gyarmathy',
          year: '1990',
          rule: {
            "monday": [ 14, 16, 17, 20 ],
            "tuesday": [ 30, 31, 11, 3 ],
            "wednesday": [ 2, 4, 27, 16 ],
            "thursday": [ 4, 5, 28, 31 ],
            "friday": [ 7, 8, 30, 3 ],
            "saturday": [ 10, 12, 13, 15 ],
            "sunday": [ 12, 14, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/dusk-1958.jpg',
          title: 'Dusk',
          artist: 'William Baziotes',
          year: '1958',
          rule: {
            "monday": [ 12, 14, 18, 21 ],
            "tuesday": [ 14, 16, 17, 20 ],
            "wednesday": [ 30, 31, 11, 3 ],
            "thursday": [ 2, 4, 27, 16 ],
            "friday": [ 4, 5, 28, 31 ],
            "saturday": [ 7, 8, 30, 3 ],
            "sunday": [ 10, 12, 13, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/238-combinazioni-cromatiche-con-16-colori-moltiplicati-fra-loro-1969.jpg',
          title: '238 combinazioni cromatiche con 16 colori moltiplicati fra loro',
          artist: 'Dadamaino',
          year: '1969',
          rule: {
            "monday": [ 10, 12, 13, 15 ],
            "tuesday": [ 12, 14, 18, 21 ],
            "wednesday": [ 14, 16, 17, 20 ],
            "thursday": [ 30, 31, 11, 3 ],
            "friday": [ 2, 4, 27, 16 ],
            "saturday": [ 4, 5, 28, 31 ],
            "sunday": [ 7, 8, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/il-vicino-pianeta-1972.jpg',
          title: 'Il Vicino Pianeta',
          artist: 'Antonio Corpora',
          year: '1972',
          rule: {
            "monday": [ 8, 9, 31, 4 ],
            "tuesday": [ 11, 13, 14, 16 ],
            "wednesday": [ 13, 15, 19, 22 ],
            "thursday": [ 15, 17, 18, 21 ],
            "friday": [ 31, 1, 12, 4 ],
            "saturday": [ 3, 5, 28, 17 ],
            "sunday": [ 5, 6, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/source-7-1976.jpg',
          title: 'Source #7',
          artist: 'Leon Berkowitz',
          year: '1976',
          rule: {
            "monday": [ 5, 6, 29, 1 ],
            "tuesday": [ 8, 9, 31, 4 ],
            "wednesday": [ 11, 13, 14, 16 ],
            "thursday": [ 13, 15, 19, 22 ],
            "friday": [ 15, 17, 18, 21 ],
            "saturday": [ 31, 1, 12, 4 ],
            "sunday": [ 3, 5, 28, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/work-no-384-a-sheet-of-paper-folded-up-and-unfolded-2004.jpg',
          title: 'Work No. 384 (A sheet of paper folded up and unfolded)',
          artist: 'Martin Creed',
          year: '2004',
          rule: {
            "monday": [ 3, 5, 28, 17 ],
            "tuesday": [ 5, 6, 29, 1 ],
            "wednesday": [ 8, 9, 31, 4 ],
            "thursday": [ 11, 13, 14, 16 ],
            "friday": [ 13, 15, 19, 22 ],
            "saturday": [ 15, 17, 18, 21 ],
            "sunday": [ 31, 1, 12, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1965.jpg',
          title: 'Untitled',
          artist: 'Shozo Shimamoto',
          year: '1965',
          rule: {
            "monday": [ 31, 1, 12, 4 ],
            "tuesday": [ 3, 5, 28, 17 ],
            "wednesday": [ 5, 6, 29, 1 ],
            "thursday": [ 8, 9, 31, 4 ],
            "friday": [ 11, 13, 14, 16 ],
            "saturday": [ 13, 15, 19, 22 ],
            "sunday": [ 15, 17, 18, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/lotus-1962.jpg',
          title: 'Lotus',
          artist: 'Friedel Dzubas',
          year: '1962',
          rule: {
            "monday": [ 15, 17, 18, 21 ],
            "tuesday": [ 31, 1, 12, 4 ],
            "wednesday": [ 3, 5, 28, 17 ],
            "thursday": [ 5, 6, 29, 1 ],
            "friday": [ 8, 9, 31, 4 ],
            "saturday": [ 11, 13, 14, 16 ],
            "sunday": [ 13, 15, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/abstraction-1964.jpg',
          title: 'Abstraction',
          artist: 'Lawren Harris',
          year: '1964',
          rule: {
            "monday": [ 13, 15, 19, 22 ],
            "tuesday": [ 15, 17, 18, 21 ],
            "wednesday": [ 31, 1, 12, 4 ],
            "thursday": [ 3, 5, 28, 17 ],
            "friday": [ 5, 6, 29, 1 ],
            "saturday": [ 8, 9, 31, 4 ],
            "sunday": [ 11, 13, 14, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-time-machine-2002.jpg',
          title: 'The Time Machine',
          artist: 'Peter Halley',
          year: '2002',
          rule: {
            "monday": [ 11, 13, 14, 16 ],
            "tuesday": [ 13, 15, 19, 22 ],
            "wednesday": [ 15, 17, 18, 21 ],
            "thursday": [ 31, 1, 12, 4 ],
            "friday": [ 3, 5, 28, 17 ],
            "saturday": [ 5, 6, 29, 1 ],
            "sunday": [ 8, 9, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1968.jpg',
          title: 'Untitled',
          artist: 'Ron Gorchov',
          year: '1968',
          rule: {
            "monday": [ 9, 10, 1, 5 ],
            "tuesday": [ 12, 14, 15, 17 ],
            "wednesday": [ 14, 16, 20, 23 ],
            "thursday": [ 16, 18, 19, 22 ],
            "friday": [ 1, 2, 13, 5 ],
            "saturday": [ 4, 6, 29, 18 ],
            "sunday": [ 6, 7, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/intersuperficie-curva-dall-azzurro-1967.jpg',
          title: 'Intersuperficie curva dall\'azzurro',
          artist: 'Paolo Scheggi',
          year: '1967',
          rule: {
            "monday": [ 6, 7, 30, 2 ],
            "tuesday": [ 9, 10, 1, 5 ],
            "wednesday": [ 12, 14, 15, 17 ],
            "thursday": [ 14, 16, 20, 23 ],
            "friday": [ 16, 18, 19, 22 ],
            "saturday": [ 1, 2, 13, 5 ],
            "sunday": [ 4, 6, 29, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/vessel-in-a-drift-of-diamond-light-in-the-sky-of-the-mind-1944.jpg',
          title: 'Vessel in a Drift of Diamond Light in the Sky of the Mind',
          artist: 'Morris Graves',
          year: '1944',
          rule: {
            "monday": [ 4, 6, 29, 18 ],
            "tuesday": [ 6, 7, 30, 2 ],
            "wednesday": [ 9, 10, 1, 5 ],
            "thursday": [ 12, 14, 15, 17 ],
            "friday": [ 14, 16, 20, 23 ],
            "saturday": [ 16, 18, 19, 22 ],
            "sunday": [ 1, 2, 13, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/converge-2011.jpg',
          title: 'Converge',
          artist: 'Harriet Korman',
          year: '2011',
          rule: {
            "monday": [ 1, 2, 13, 5 ],
            "tuesday": [ 4, 6, 29, 18 ],
            "wednesday": [ 6, 7, 30, 2 ],
            "thursday": [ 9, 10, 1, 5 ],
            "friday": [ 12, 14, 15, 17 ],
            "saturday": [ 14, 16, 20, 23 ],
            "sunday": [ 16, 18, 19, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-with-evanescent-butterfly.jpg',
          title: 'Composition with Evanescent Butterfly',
          artist: 'Ion Pacea',
          year: 'xx cent.',
          rule: {
            "monday": [ 16, 18, 19, 22 ],
            "tuesday": [ 1, 2, 13, 5 ],
            "wednesday": [ 4, 6, 29, 18 ],
            "thursday": [ 6, 7, 30, 2 ],
            "friday": [ 9, 10, 1, 5 ],
            "saturday": [ 12, 14, 15, 17 ],
            "sunday": [ 14, 16, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/komposition-1950.jpg',
          title: 'Komposition',
          artist: 'Gosta Adrian-Nilsson',
          year: '1950',
          rule: {
            "monday": [ 14, 16, 20, 23 ],
            "tuesday": [ 16, 18, 19, 22 ],
            "wednesday": [ 1, 2, 13, 5 ],
            "thursday": [ 4, 6, 29, 18 ],
            "friday": [ 6, 7, 30, 2 ],
            "saturday": [ 9, 10, 1, 5 ],
            "sunday": [ 12, 14, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/clair-d-obscurite-1988.jpg',
          title: 'Éclair d\'obscurite',
          artist: 'Chu Teh-Chun',
          year: '1988',
          rule: {
            "monday": [ 12, 14, 15, 17 ],
            "tuesday": [ 14, 16, 20, 23 ],
            "wednesday": [ 16, 18, 19, 22 ],
            "thursday": [ 1, 2, 13, 5 ],
            "friday": [ 4, 6, 29, 18 ],
            "saturday": [ 6, 7, 30, 2 ],
            "sunday": [ 9, 10, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/battal-ebru-1.jpg',
          title: 'Battal Ebru',
          artist: 'Mustafa Duzgunman',
          year: 'xx cent.',
          rule: {
            "monday": [ 10, 11, 2, 6 ],
            "tuesday": [ 13, 15, 16, 18 ],
            "wednesday": [ 15, 17, 21, 24 ],
            "thursday": [ 17, 19, 20, 23 ],
            "friday": [ 2, 3, 14, 6 ],
            "saturday": [ 5, 7, 30, 19 ],
            "sunday": [ 7, 8, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1975 (1).jpg',
          title: 'Untitled',
          artist: 'Terry Frost',
          year: '1975',
          rule: {
            "monday": [ 7, 8, 31, 3 ],
            "tuesday": [ 10, 11, 2, 6 ],
            "wednesday": [ 13, 15, 16, 18 ],
            "thursday": [ 15, 17, 21, 24 ],
            "friday": [ 17, 19, 20, 23 ],
            "saturday": [ 2, 3, 14, 6 ],
            "sunday": [ 5, 7, 30, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/colonial-cubism-1954.jpg',
          title: 'Colonial Cubism',
          artist: 'Stuart Davis',
          year: '1954',
          rule: {
            "monday": [ 5, 7, 30, 19 ],
            "tuesday": [ 7, 8, 31, 3 ],
            "wednesday": [ 10, 11, 2, 6 ],
            "thursday": [ 13, 15, 16, 18 ],
            "friday": [ 15, 17, 21, 24 ],
            "saturday": [ 17, 19, 20, 23 ],
            "sunday": [ 2, 3, 14, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/wings-1.jpg',
          title: 'Wings',
          artist: 'Constantin Blendea',
          year: 'xx - xxi cent.',
          rule: {
            "monday": [ 2, 3, 14, 6 ],
            "tuesday": [ 5, 7, 30, 19 ],
            "wednesday": [ 7, 8, 31, 3 ],
            "thursday": [ 10, 11, 2, 6 ],
            "friday": [ 13, 15, 16, 18 ],
            "saturday": [ 15, 17, 21, 24 ],
            "sunday": [ 17, 19, 20, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-pattern.jpg',
          title: 'Untitled Pattern',
          artist: 'Peter Busa',
          year: '?',
          rule: {
            "monday": [ 17, 19, 20, 23 ],
            "tuesday": [ 2, 3, 14, 6 ],
            "wednesday": [ 5, 7, 30, 19 ],
            "thursday": [ 7, 8, 31, 3 ],
            "friday": [ 10, 11, 2, 6 ],
            "saturday": [ 13, 15, 16, 18 ],
            "sunday": [ 15, 17, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/collage-1973.jpg',
          title: 'Collage',
          artist: 'Jan Dibbets',
          year: '1973',
          rule: {
            "monday": [ 15, 17, 21, 24 ],
            "tuesday": [ 17, 19, 20, 23 ],
            "wednesday": [ 2, 3, 14, 6 ],
            "thursday": [ 5, 7, 30, 19 ],
            "friday": [ 7, 8, 31, 3 ],
            "saturday": [ 10, 11, 2, 6 ],
            "sunday": [ 13, 15, 16, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/sequenze-quadrangolari-concetto-di-distorsione-1964.jpg',
          title: 'Sequenze quadrangolari - concetto di distorsione',
          artist: 'Mario Ballocco',
          year: '1964',
          rule: {
            "monday": [ 13, 15, 16, 18 ],
            "tuesday": [ 15, 17, 21, 24 ],
            "wednesday": [ 17, 19, 20, 23 ],
            "thursday": [ 2, 3, 14, 6 ],
            "friday": [ 5, 7, 30, 19 ],
            "saturday": [ 7, 8, 31, 3 ],
            "sunday": [ 10, 11, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/kilroy-was-here.jpg',
          title: 'Kilroy Was Here',
          artist: 'Robert Goodnough',
          year: 'xx - xxi cent.',
          rule: {
            "monday": [ 11, 12, 3, 7 ],
            "tuesday": [ 14, 16, 17, 19 ],
            "wednesday": [ 16, 18, 22, 25 ],
            "thursday": [ 18, 20, 21, 24 ],
            "friday": [ 3, 4, 15, 7 ],
            "saturday": [ 6, 8, 31, 20 ],
            "sunday": [ 8, 9, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composi-o-1975(1).jpg',
          title: 'Composição',
          artist: 'Lothar Charoux',
          year: '1975',
          rule: {
            "monday": [ 8, 9, 1, 4 ],
            "tuesday": [ 11, 12, 3, 7 ],
            "wednesday": [ 14, 16, 17, 19 ],
            "thursday": [ 16, 18, 22, 25 ],
            "friday": [ 18, 20, 21, 24 ],
            "saturday": [ 3, 4, 15, 7 ],
            "sunday": [ 6, 8, 31, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/anoz-amazona-1984.jpg',
          title: 'Anoz Amazona',
          artist: 'Omar Rayo',
          year: '1984',
          rule: {
            "monday": [ 6, 8, 31, 20 ],
            "tuesday": [ 8, 9, 1, 4 ],
            "wednesday": [ 11, 12, 3, 7 ],
            "thursday": [ 14, 16, 17, 19 ],
            "friday": [ 16, 18, 22, 25 ],
            "saturday": [ 18, 20, 21, 24 ],
            "sunday": [ 3, 4, 15, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/panche-i-1970.jpg',
          title: 'Panche I',
          artist: 'Omar Rayo',
          year: '1970',
          rule: {
            "monday": [ 3, 4, 15, 7 ],
            "tuesday": [ 6, 8, 31, 20 ],
            "wednesday": [ 8, 9, 1, 4 ],
            "thursday": [ 11, 12, 3, 7 ],
            "friday": [ 14, 16, 17, 19 ],
            "saturday": [ 16, 18, 22, 25 ],
            "sunday": [ 18, 20, 21, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/qvh1-le-courrier-de-l-est-n-243-13-10-2007-2007.jpg',
          title: 'QVH1- Le courrier de l\'Est n° 243, 13.10.2007',
          artist: 'Jean-Francois Dubreuil',
          year: '2007',
          rule: {
            "monday": [ 18, 20, 21, 24 ],
            "tuesday": [ 3, 4, 15, 7 ],
            "wednesday": [ 6, 8, 31, 20 ],
            "thursday": [ 8, 9, 1, 4 ],
            "friday": [ 11, 12, 3, 7 ],
            "saturday": [ 14, 16, 17, 19 ],
            "sunday": [ 16, 18, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/dark-bridge-2003.jpg',
          title: 'Dark Bridge',
          artist: 'Sean Scully',
          year: '2003',
          rule: {
            "monday": [ 16, 18, 22, 25 ],
            "tuesday": [ 18, 20, 21, 24 ],
            "wednesday": [ 3, 4, 15, 7 ],
            "thursday": [ 6, 8, 31, 20 ],
            "friday": [ 8, 9, 1, 4 ],
            "saturday": [ 11, 12, 3, 7 ],
            "sunday": [ 14, 16, 17, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1950.jpg',
          title: 'Untitled',
          artist: 'Sandu Darie',
          year: '1950',
          rule: {
            "monday": [ 14, 16, 17, 19 ],
            "tuesday": [ 16, 18, 22, 25 ],
            "wednesday": [ 18, 20, 21, 24 ],
            "thursday": [ 3, 4, 15, 7 ],
            "friday": [ 6, 8, 31, 20 ],
            "saturday": [ 8, 9, 1, 4 ],
            "sunday": [ 11, 12, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-au-fond-cosmique-1996.jpg',
          title: 'Composition au fond cosmique',
          artist: 'Eugene Brands',
          year: '1996',
          rule: {
            "monday": [ 12, 13, 4, 8 ],
            "tuesday": [ 15, 17, 18, 20 ],
            "wednesday": [ 17, 19, 23, 26 ],
            "thursday": [ 19, 21, 22, 25 ],
            "friday": [ 4, 5, 16, 8 ],
            "saturday": [ 7, 9, 1, 21 ],
            "sunday": [ 9, 10, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-schwendi-1961.jpg',
          title: 'Composition Schwendi',
          artist: 'Samuel Buri',
          year: '1961',
          rule: {
            "monday": [ 9, 10, 2, 5 ],
            "tuesday": [ 12, 13, 4, 8 ],
            "wednesday": [ 15, 17, 18, 20 ],
            "thursday": [ 17, 19, 23, 26 ],
            "friday": [ 19, 21, 22, 25 ],
            "saturday": [ 4, 5, 16, 8 ],
            "sunday": [ 7, 9, 1, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/number-288-2014.jpg',
          title: 'Number 288',
          artist: 'Roger Weik',
          year: '2014',
          rule: {
            "monday": [ 7, 9, 1, 21 ],
            "tuesday": [ 9, 10, 2, 5 ],
            "wednesday": [ 12, 13, 4, 8 ],
            "thursday": [ 15, 17, 18, 20 ],
            "friday": [ 17, 19, 23, 26 ],
            "saturday": [ 19, 21, 22, 25 ],
            "sunday": [ 4, 5, 16, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/phi-1961.jpg',
          title: 'Phi',
          artist: 'Morris Louis',
          year: '1960 - 1961',
          rule: {
            "monday": [ 4, 5, 16, 8 ],
            "tuesday": [ 7, 9, 1, 21 ],
            "wednesday": [ 9, 10, 2, 5 ],
            "thursday": [ 12, 13, 4, 8 ],
            "friday": [ 15, 17, 18, 20 ],
            "saturday": [ 17, 19, 23, 26 ],
            "sunday": [ 19, 21, 22, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/lsh-134-1950.jpg',
          title: 'LSH 134',
          artist: 'Lawren Harris',
          year: '1950',
          rule: {
            "monday": [ 19, 21, 22, 25 ],
            "tuesday": [ 4, 5, 16, 8 ],
            "wednesday": [ 7, 9, 1, 21 ],
            "thursday": [ 9, 10, 2, 5 ],
            "friday": [ 12, 13, 4, 8 ],
            "saturday": [ 15, 17, 18, 20 ],
            "sunday": [ 17, 19, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/hanging-garden-10.jpg',
          title: 'Hanging Garden',
          artist: 'Ion Alin Gheorghiu',
          year: 'XX-XXI cent.',
          rule: {
            "monday": [ 17, 19, 23, 26 ],
            "tuesday": [ 19, 21, 22, 25 ],
            "wednesday": [ 4, 5, 16, 8 ],
            "thursday": [ 7, 9, 1, 21 ],
            "friday": [ 9, 10, 2, 5 ],
            "saturday": [ 12, 13, 4, 8 ],
            "sunday": [ 15, 17, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/opus-4-1949.jpg',
          title: 'Opus 4',
          artist: 'Victor Servranckx',
          year: '1949',
          rule: {
            "monday": [ 15, 17, 18, 20 ],
            "tuesday": [ 17, 19, 23, 26 ],
            "wednesday": [ 19, 21, 22, 25 ],
            "thursday": [ 4, 5, 16, 8 ],
            "friday": [ 7, 9, 1, 21 ],
            "saturday": [ 9, 10, 2, 5 ],
            "sunday": [ 12, 13, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/1952-a-1952.jpg',
          title: '1952-A',
          artist: 'Clyfford Still',
          year: '1952',
          rule: {
            "monday": [ 13, 14, 5, 9 ],
            "tuesday": [ 16, 18, 19, 21 ],
            "wednesday": [ 18, 20, 24, 27 ],
            "thursday": [ 20, 22, 23, 26 ],
            "friday": [ 5, 6, 17, 9 ],
            "saturday": [ 8, 10, 2, 22 ],
            "sunday": [ 10, 11, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/unknown-title-5.jpg',
          title: 'unknown title',
          artist: 'Michel Carrade',
          year: '?',
          rule: {
            "monday": [ 10, 11, 3, 6 ],
            "tuesday": [ 13, 14, 5, 9 ],
            "wednesday": [ 16, 18, 19, 21 ],
            "thursday": [ 18, 20, 24, 27 ],
            "friday": [ 20, 22, 23, 26 ],
            "saturday": [ 5, 6, 17, 9 ],
            "sunday": [ 8, 10, 2, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/spiral-2011.jpg',
          title: 'Spiral',
          artist: 'Romul Nutiu',
          year: '2011',
          rule: {
            "monday": [ 8, 10, 2, 22 ],
            "tuesday": [ 10, 11, 3, 6 ],
            "wednesday": [ 13, 14, 5, 9 ],
            "thursday": [ 16, 18, 19, 21 ],
            "friday": [ 18, 20, 24, 27 ],
            "saturday": [ 20, 22, 23, 26 ],
            "sunday": [ 5, 6, 17, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/regularity-irregularity-v-1960.jpg',
          title: 'Regularity - Irregularity V',
          artist: 'Gerhard von Graevenitz',
          year: '1960',
          rule: {
            "monday": [ 5, 6, 17, 9 ],
            "tuesday": [ 8, 10, 2, 22 ],
            "wednesday": [ 10, 11, 3, 6 ],
            "thursday": [ 13, 14, 5, 9 ],
            "friday": [ 16, 18, 19, 21 ],
            "saturday": [ 18, 20, 24, 27 ],
            "sunday": [ 20, 22, 23, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/concreto-1945.jpg',
          title: 'Concreto',
          artist: 'Lidy Prati',
          year: '1945',
          rule: {
            "monday": [ 20, 22, 23, 26 ],
            "tuesday": [ 5, 6, 17, 9 ],
            "wednesday": [ 8, 10, 2, 22 ],
            "thursday": [ 10, 11, 3, 6 ],
            "friday": [ 13, 14, 5, 9 ],
            "saturday": [ 16, 18, 19, 21 ],
            "sunday": [ 18, 20, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/cosmic-map-1930(1).jpg',
          title: 'Cosmic Map',
          artist: 'Bruno Munari',
          year: '1930',
          rule: {
            "monday": [ 18, 20, 24, 27 ],
            "tuesday": [ 20, 22, 23, 26 ],
            "wednesday": [ 5, 6, 17, 9 ],
            "thursday": [ 8, 10, 2, 22 ],
            "friday": [ 10, 11, 3, 6 ],
            "saturday": [ 13, 14, 5, 9 ],
            "sunday": [ 16, 18, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/corridor-1960.jpg',
          title: 'Corridor',
          artist: 'Karl Benjamin',
          year: '1960',
          rule: {
            "monday": [ 16, 18, 19, 21 ],
            "tuesday": [ 18, 20, 24, 27 ],
            "wednesday": [ 20, 22, 23, 26 ],
            "thursday": [ 5, 6, 17, 9 ],
            "friday": [ 8, 10, 2, 22 ],
            "saturday": [ 10, 11, 3, 6 ],
            "sunday": [ 13, 14, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/lemon-cards-1-1963.jpg',
          title: 'Lemon Cards #1',
          artist: 'Walter Darby Bannard',
          year: '1963',
          rule: {
            "monday": [ 14, 15, 6, 10 ],
            "tuesday": [ 17, 19, 20, 22 ],
            "wednesday": [ 19, 21, 25, 28 ],
            "thursday": [ 21, 23, 24, 27 ],
            "friday": [ 6, 7, 18, 10 ],
            "saturday": [ 9, 11, 3, 23 ],
            "sunday": [ 11, 12, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/infinity-field-lefkada-series-1980-1(1).jpg',
          title: 'Infinity Field, Lefkada Series',
          artist: 'Theodoros Stamos',
          year: '1980',
          rule: {
            "monday": [ 11, 12, 4, 7 ],
            "tuesday": [ 14, 15, 6, 10 ],
            "wednesday": [ 17, 19, 20, 22 ],
            "thursday": [ 19, 21, 25, 28 ],
            "friday": [ 21, 23, 24, 27 ],
            "saturday": [ 6, 7, 18, 10 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/composition-25.jpg',
          title: 'Composition 25',
          artist: 'Stefan Sevastre',
          year: 'xx cent.',
          rule: {
            "monday": [ 9, 11, 3, 23 ],
            "tuesday": [ 11, 12, 4, 7 ],
            "wednesday": [ 14, 15, 6, 10 ],
            "thursday": [ 17, 19, 20, 22 ],
            "friday": [ 19, 21, 25, 28 ],
            "saturday": [ 21, 23, 24, 27 ],
            "sunday": [ 6, 7, 18, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-1971-1.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1971',
          rule: {
            "monday": [ 6, 7, 18, 10 ],
            "tuesday": [ 9, 11, 3, 23 ],
            "wednesday": [ 11, 12, 4, 7 ],
            "thursday": [ 14, 15, 6, 10 ],
            "friday": [ 17, 19, 20, 22 ],
            "saturday": [ 19, 21, 25, 28 ],
            "sunday": [ 21, 23, 24, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-2001.jpg',
          title: 'Untitled',
          artist: 'Moon Pil Shim',
          year: '2001',
          rule: {
            "monday": [ 21, 23, 24, 27 ],
            "tuesday": [ 6, 7, 18, 10 ],
            "wednesday": [ 9, 11, 3, 23 ],
            "thursday": [ 11, 12, 4, 7 ],
            "friday": [ 14, 15, 6, 10 ],
            "saturday": [ 17, 19, 20, 22 ],
            "sunday": [ 19, 21, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/greenwood-1979.jpg',
          title: 'Greenwood',
          artist: 'Nicholas Krushenick',
          year: '1979',
          rule: {
            "monday": [ 19, 21, 25, 28 ],
            "tuesday": [ 21, 23, 24, 27 ],
            "wednesday": [ 6, 7, 18, 10 ],
            "thursday": [ 9, 11, 3, 23 ],
            "friday": [ 11, 12, 4, 7 ],
            "saturday": [ 14, 15, 6, 10 ],
            "sunday": [ 17, 19, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/all-over-pour-painting-1969.jpg',
          title: 'All Over Pour Painting',
          artist: 'Ronnie Landfield',
          year: '1969',
          rule: {
            "monday": [ 17, 19, 20, 22 ],
            "tuesday": [ 19, 21, 25, 28 ],
            "wednesday": [ 21, 23, 24, 27 ],
            "thursday": [ 6, 7, 18, 10 ],
            "friday": [ 9, 11, 3, 23 ],
            "saturday": [ 11, 12, 4, 7 ],
            "sunday": [ 14, 15, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/field-of-crosses-red-black-1996.jpg',
          title: 'Field of Crosses (Red & Black)',
          artist: 'Silviu Oravitzan',
          year: '1986',
          rule: {
            "monday": [ 15, 16, 7, 11 ],
            "tuesday": [ 18, 20, 21, 23 ],
            "wednesday": [ 20, 22, 26, 29 ],
            "thursday": [ 22, 24, 25, 28 ],
            "friday": [ 7, 8, 19, 11 ],
            "saturday": [ 10, 12, 4, 24 ],
            "sunday": [ 12, 13, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/spreadout-ron-kitaj-1986.jpg',
          title: 'Spreadout Ron Kitaj',
          artist: 'Frank Bowling',
          year: '1984 - 1986',
          rule: {
            "monday": [ 12, 13, 5, 8 ],
            "tuesday": [ 15, 16, 7, 11 ],
            "wednesday": [ 18, 20, 21, 23 ],
            "thursday": [ 20, 22, 26, 29 ],
            "friday": [ 22, 24, 25, 28 ],
            "saturday": [ 7, 8, 19, 11 ],
            "sunday": [ 10, 12, 4, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/the-passing-through-ii-1980.jpg',
          title: 'The Passing Through II',
          artist: 'Eduardo Nery',
          year: '1980',
          rule: {
            "monday": [ 10, 12, 4, 24 ],
            "tuesday": [ 12, 13, 5, 8 ],
            "wednesday": [ 15, 16, 7, 11 ],
            "thursday": [ 18, 20, 21, 23 ],
            "friday": [ 20, 22, 26, 29 ],
            "saturday": [ 22, 24, 25, 28 ],
            "sunday": [ 7, 8, 19, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/arianna-pitagora-1987.jpg',
          title: 'Arianna & Pitagora',
          artist: 'Luciano Bartolini',
          year: '1987',
          rule: {
            "monday": [ 7, 8, 19, 11 ],
            "tuesday": [ 10, 12, 4, 24 ],
            "wednesday": [ 12, 13, 5, 8 ],
            "thursday": [ 15, 16, 7, 11 ],
            "friday": [ 18, 20, 21, 23 ],
            "saturday": [ 20, 22, 26, 29 ],
            "sunday": [ 22, 24, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/landscape-at-eforie-1971.jpg',
          title: 'Landscape at Eforie',
          artist: 'Vasile Dobrian',
          year: '1971',
          rule: {
            "monday": [ 22, 24, 25, 28 ],
            "tuesday": [ 7, 8, 19, 11 ],
            "wednesday": [ 10, 12, 4, 24 ],
            "thursday": [ 12, 13, 5, 8 ],
            "friday": [ 15, 16, 7, 11 ],
            "saturday": [ 18, 20, 21, 23 ],
            "sunday": [ 20, 22, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/southern-tunisian-gardens-1919(1).jpg',
          title: 'Southern (Tunisian) gardens',
          artist: 'Paul Klee',
          year: '1919',
          rule: {
            "monday": [ 20, 22, 26, 29 ],
            "tuesday": [ 22, 24, 25, 28 ],
            "wednesday": [ 7, 8, 19, 11 ],
            "thursday": [ 10, 12, 4, 24 ],
            "friday": [ 12, 13, 5, 8 ],
            "saturday": [ 15, 16, 7, 11 ],
            "sunday": [ 18, 20, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/ryoan-ji-kyoto-b.jpg',
          title: 'Ryoan-ji Kyoto (B)',
          artist: 'Kiyoshi Saito',
          year: 'xx cent.',
          rule: {
            "monday": [ 18, 20, 21, 23 ],
            "tuesday": [ 20, 22, 26, 29 ],
            "wednesday": [ 22, 24, 25, 28 ],
            "thursday": [ 7, 8, 19, 11 ],
            "friday": [ 10, 12, 4, 24 ],
            "saturday": [ 12, 13, 5, 8 ],
            "sunday": [ 15, 16, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/south-seas-2001.jpg',
          title: 'South Seas',
          artist: 'Beatriz Milhazes',
          year: '2001',
          rule: {
            "monday": [ 16, 17, 8, 12 ],
            "tuesday": [ 19, 21, 22, 24 ],
            "wednesday": [ 21, 23, 27, 30 ],
            "thursday": [ 23, 25, 26, 29 ],
            "friday": [ 8, 9, 20, 12 ],
            "saturday": [ 11, 13, 5, 25 ],
            "sunday": [ 13, 14, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/oe-260-1957.jpg',
          title: 'OE 260',
          artist: 'Rupprecht Geiger',
          year: '1957',
          rule: {
            "monday": [ 13, 14, 6, 9 ],
            "tuesday": [ 16, 17, 8, 12 ],
            "wednesday": [ 19, 21, 22, 24 ],
            "thursday": [ 21, 23, 27, 30 ],
            "friday": [ 23, 25, 26, 29 ],
            "saturday": [ 8, 9, 20, 12 ],
            "sunday": [ 11, 13, 5, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-2006.jpg',
          title: 'Untitled',
          artist: 'Mostafa Dashti',
          year: '2006',
          rule: {
            "monday": [ 11, 13, 5, 25 ],
            "tuesday": [ 13, 14, 6, 9 ],
            "wednesday": [ 16, 17, 8, 12 ],
            "thursday": [ 19, 21, 22, 24 ],
            "friday": [ 21, 23, 27, 30 ],
            "saturday": [ 23, 25, 26, 29 ],
            "sunday": [ 8, 9, 20, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/twenty-1968.jpg',
          title: 'Twenty',
          artist: 'Thomas Downing',
          year: '1968',
          rule: {
            "monday": [ 8, 9, 20, 12 ],
            "tuesday": [ 11, 13, 5, 25 ],
            "wednesday": [ 13, 14, 6, 9 ],
            "thursday": [ 16, 17, 8, 12 ],
            "friday": [ 19, 21, 22, 24 ],
            "saturday": [ 21, 23, 27, 30 ],
            "sunday": [ 23, 25, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/paisaje-espejismo-2000.jpg',
          title: 'Paisaje Espejismo',
          artist: 'Gunther Gerzso',
          year: '2000',
          rule: {
            "monday": [ 23, 25, 26, 29 ],
            "tuesday": [ 8, 9, 20, 12 ],
            "wednesday": [ 11, 13, 5, 25 ],
            "thursday": [ 13, 14, 6, 9 ],
            "friday": [ 16, 17, 8, 12 ],
            "saturday": [ 19, 21, 22, 24 ],
            "sunday": [ 21, 23, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/people-1982.jpg',
          title: 'People',
          artist: 'Leon Ferrari',
          year: '1982',
          rule: {
            "monday": [ 21, 23, 27, 30 ],
            "tuesday": [ 23, 25, 26, 29 ],
            "wednesday": [ 8, 9, 20, 12 ],
            "thursday": [ 11, 13, 5, 25 ],
            "friday": [ 13, 14, 6, 9 ],
            "saturday": [ 16, 17, 8, 12 ],
            "sunday": [ 19, 21, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/farblitho-1968-2-nor-1968.jpg',
          title: 'Farblitho 1968 - 2 (NOR)',
          artist: 'Ernst Wilhelm Nay',
          year: '1968',
          rule: {
            "monday": [ 19, 21, 22, 24 ],
            "tuesday": [ 21, 23, 27, 30 ],
            "wednesday": [ 23, 25, 26, 29 ],
            "thursday": [ 8, 9, 20, 12 ],
            "friday": [ 11, 13, 5, 25 ],
            "saturday": [ 13, 14, 6, 9 ],
            "sunday": [ 16, 17, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Abstract Art',
          img_path: './img/january/untitled-torn-sky-1970.jpg',
          title: 'Untitled (Torn Sky)',
          artist: 'Joe Goode',
          year: '1970',
          rule: {
            "monday": [ 17, 18, 9, 13 ],
            "tuesday": [ 20, 22, 23, 25 ],
            "wednesday": [ 22, 24, 28, 31 ],
            "thursday": [ 24, 26, 27, 30 ],
            "friday": [ 9, 10, 21, 13 ],
            "saturday": [ 12, 14, 6, 26 ],
            "sunday": [ 14, 15, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_arts_id_seq', (SELECT MAX(id) FROM january_arts));");
    });
};
