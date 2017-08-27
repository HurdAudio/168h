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
        },
        {
          id: 21,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/moonlight-and-lamplight-1937.jpg',
          title: 'Moonlight and Lamplight',
          artist: 'Winifred Nicholson',
          year: '1937',
          rule: {
            "monday": "[12, 13, 15, 17]",
            "tuesday": "[15, 17, 19, 20]",
            "wednesday": "[17, 19, 23, 26]",
            "thursday": "[19, 21, 22, 25]",
            "friday": "[4, 5, 7, 8]",
            "saturday": "[7, 10, 11, 21]",
            "sunday": "[9, 10, 13, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/powidok-s-o-ca-1949.jpg',
          title: 'Powidok słońca',
          artist: 'Wladyslaw Strzeminski',
          year: '1949',
          rule: {
            "monday": "[9, 10, 13, 15]",
            "tuesday": "[12, 13, 15, 17]",
            "wednesday": "[15, 17, 19, 20]",
            "thursday": "[17, 19, 23, 26]",
            "friday": "[19, 21, 22, 25]",
            "saturday": "[4, 5, 7, 8]",
            "sunday": "[7, 10, 11, 21]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/untitled-35.jpg',
          title: 'Untitled',
          artist: 'Tiberiy Szilvashi',
          year: 'XX cent.',
          rule: {
            "monday": "[7, 10, 11, 21]",
            "tuesday": "[9, 10, 13, 15]",
            "wednesday": "[12, 13, 15, 17]",
            "thursday": "[15, 17, 19, 20]",
            "friday": "[17, 19, 23, 26]",
            "saturday": "[19, 21, 22, 25]",
            "sunday": "[4, 5, 7, 8]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/portrait.jpg',
          title: 'Portrait',
          artist: 'Lyubov Popova',
          year: 'XX cent.',
          rule: {
            "monday": "[4, 5, 7, 8]",
            "tuesday": "[7, 10, 11, 21]",
            "wednesday": "[9, 10, 13, 15]",
            "thursday": "[12, 13, 15, 17]",
            "friday": "[15, 17, 19, 20]",
            "saturday": "[17, 19, 23, 26]",
            "sunday": "[19, 21, 22, 25]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/city-of-the-sun.jpg',
          title: 'City of the Sun',
          artist: 'Darren Waterston',
          year: '2012',
          rule: {
            "monday": "[19, 21, 22, 25]",
            "tuesday": "[4, 5, 7, 8]",
            "wednesday": "[7, 10, 11, 21]",
            "thursday": "[9, 10, 13, 15]",
            "friday": "[12, 13, 15, 17]",
            "saturday": "[15, 17, 19, 20]",
            "sunday": "[17, 19, 23, 26]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/untitled-1973-3.jpg',
          title: 'Untitled',
          artist: 'Luciano Bartolini',
          year: '1973',
          rule: {
            "monday": "[17, 19, 23, 26]",
            "tuesday": "[19, 21, 22, 25]",
            "wednesday": "[4, 5, 7, 8]",
            "thursday": "[7, 10, 11, 21]",
            "friday": "[9, 10, 13, 15]",
            "saturday": "[12, 13, 15, 17]",
            "sunday": "[15, 17, 19, 20]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/reminiscence-2005.jpg',
          title: 'Reminiscence',
          artist: 'Toko Shinoda',
          year: '2005',
          rule: {
            "monday": "[15, 17, 19, 20]",
            "tuesday": "[17, 19, 23, 26]",
            "wednesday": "[19, 21, 22, 25]",
            "thursday": "[4, 5, 7, 8]",
            "friday": "[7, 10, 11, 21]",
            "saturday": "[9, 10, 13, 15]",
            "sunday": "[12, 13, 15, 17]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/hv2-no-17b-1992(1).jpg',
          title: 'HV2, No 17b',
          artist: 'John Cage',
          year: '1992',
          rule: {
            "monday": "[13, 14, 16, 18]",
            "tuesday": "[16, 18, 20, 21]",
            "wednesday": "[18, 20, 24, 27]",
            "thursday": "[20, 22, 23, 26]",
            "friday": "[5, 6, 8, 9]",
            "saturday": "[8, 11, 12, 22]",
            "sunday": "[10, 11, 14, 16]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/bacchus-1983.jpg',
          title: 'Bacchus',
          artist: 'Elaine de Kooning',
          year: '1983',
          rule: {
            "monday": "[10, 11, 14, 16]",
            "tuesday": "[13, 14, 16, 18]",
            "wednesday": "[16, 18, 20, 21]",
            "thursday": "[18, 20, 24, 27]",
            "friday": "[20, 22, 23, 26]",
            "saturday": "[5, 6, 8, 9]",
            "sunday": "[8, 11, 12, 22]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/le-vent-du-soleil-1996.jpg',
          title: 'Le vent du soleil',
          artist: 'Gotthard Graubner',
          year: '1996',
          rule: {
            "monday": "[ 8, 11, 12, 22]",
            "tuesday": "[10, 11, 14, 16]",
            "wednesday": "[13, 14, 16, 18]",
            "thursday": "[16, 18, 20, 21]",
            "friday": "[18, 20, 24, 27]",
            "saturday": "[20, 22, 23, 26]",
            "sunday": "[5, 6, 8, 9]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/heliogravuren-zu-den-documenta-bildern-1993.jpg',
          title: 'Heliogravuren zu den Documenta Bildern',
          artist: 'Gunther Forg',
          year: '1993',
          rule: {
            "monday": "[ 5, 6, 8, 9]",
            "tuesday": "[8, 11, 12, 22]",
            "wednesday": "[10, 11, 14, 16]",
            "thursday": "[13, 14, 16, 18]",
            "friday": "[16, 18, 20, 21]",
            "saturday": "[18, 20, 24, 27]",
            "sunday": "[20, 22, 23, 26]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/the-air-1937.jpg',
          title: 'The Air',
          artist: 'Joan Miro',
          year: '1937',
          rule: {
            "monday": "[ 20, 22, 23, 26]",
            "tuesday": "[5, 6, 8, 9]",
            "wednesday": "[8, 11, 12, 22]",
            "thursday": "[10, 11, 14, 16]",
            "friday": "[13, 14, 16, 18]",
            "saturday": "[16, 18, 20, 21]",
            "sunday": "[18, 20, 24, 27]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/the-moon-woman-cuts-the-circle-1943.jpg',
          title: 'The Moon-Woman Cuts the Circle',
          artist: 'Jackson Pollock',
          year: '1943',
          rule: {
            "monday": "[ 18, 20, 24, 27]",
            "tuesday": "[20, 22, 23, 26]",
            "wednesday": "[5, 6, 8, 9]",
            "thursday": "[8, 11, 12, 22]",
            "friday": "[10, 11, 14, 16]",
            "saturday": "[13, 14, 16, 18]",
            "sunday": "[16, 18, 20, 21]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/tyranny-of-space-1946.jpg',
          title: 'Tyranny of Space',
          artist: 'Perle Fine',
          year: '1946',
          rule: {
            "monday": "[ 16, 18, 20, 21]",
            "tuesday": "[18, 20, 24, 27]",
            "wednesday": "[20, 22, 23, 26]",
            "thursday": "[5, 6, 8, 9]",
            "friday": "[8, 11, 12, 22]",
            "saturday": "[10, 11, 14, 16]",
            "sunday": "[13, 14, 16, 18]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/yellow-predominance-1949.jpg',
          title: 'Yellow Predominance',
          artist: 'Hans Hofmann',
          year: '1949',
          rule: {
            "monday": "[ 14, 15, 17, 19]",
            "tuesday": "[17, 19, 21, 22]",
            "wednesday": "[19, 21, 25, 28]",
            "thursday": "[21, 23, 24, 27]",
            "friday": "[6, 7, 9, 10]",
            "saturday": "[9, 12, 13, 23]",
            "sunday": "[11, 12, 15, 17]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/number-236.jpg',
          title: 'Number 236',
          artist: 'Anne Ryan',
          year: '?',
          rule: {
            "monday": "[ 11, 12, 15, 17]",
            "tuesday": "[14, 15, 17, 10]",
            "wednesday": "[17, 19, 21, 22]",
            "thursday": "[19, 21, 25, 28]",
            "friday": "[21, 23, 24, 27]",
            "saturday": "[6, 7, 9, 10]",
            "sunday": "[9, 12, 13, 23]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/white-butterflies-sleep-on-a-violet-bed-1970.jpg',
          title: 'White Butterflies Sleep on a Violet Bed',
          artist: 'Walasse Ting',
          year: '1970',
          rule: {
            "monday": "[ 9, 12, 13, 23]",
            "tuesday": "[11, 12, 15, 17]",
            "wednesday": "[14, 15, 17, 10]",
            "thursday": "[17, 19, 21, 22]",
            "friday": "[19, 21, 25, 28]",
            "saturday": "[21, 23, 24, 27]",
            "sunday": "[6, 7, 9, 10]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/homenaje-a-diana-iii-acr-lico-sobre-tablex-2014-122x-100.jpg',
          title: 'Homenaje a Diana III',
          artist: 'Requena Nozal',
          year: '2014',
          rule: {
            "monday": "[ 6, 7, 9, 10]",
            "tuesday": "[9, 12, 13, 23]",
            "wednesday": "[11, 12, 15, 17]",
            "thursday": "[14, 15, 17, 10]",
            "friday": "[17, 19, 21, 22]",
            "saturday": "[19, 21, 25, 28]",
            "sunday": "[21, 23, 24, 27]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/untitled-1972.jpg',
          title: 'Untitled',
          artist: 'Rafa Nasiri',
          year: '1972',
          rule: {
            "monday": "[ 21, 23, 24, 27]",
            "tuesday": "[6, 7, 9, 10]",
            "wednesday": "[9, 12, 13, 23]",
            "thursday": "[11, 12, 15, 17]",
            "friday": "[14, 15, 17, 10]",
            "saturday": "[17, 19, 21, 22]",
            "sunday": "[19, 21, 25, 28]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/interior-temporary-factory-day.jpg',
          title: 'INTERIOR, TEMPORARY FACTORY - DAY',
          artist: 'Marc Horowitz',
          year: '2015',
          rule: {
            "monday": "[ 19, 21, 25, 28]",
            "tuesday": "[21, 23, 24, 27]",
            "wednesday": "[6, 7, 9, 10]",
            "thursday": "[9, 12, 13, 23]",
            "friday": "[11, 12, 15, 17]",
            "saturday": "[14, 15, 17, 10]",
            "sunday": "[17, 19, 21, 22]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/transparent-shadow.jpg',
          title: 'Transparent Shadow',
          artist: 'Toko Shinoda',
          year: '?',
          rule: {
            "monday": "[ 17, 19, 21, 22]",
            "tuesday": "[19, 21, 25, 28]",
            "wednesday": "[21, 23, 24, 27]",
            "thursday": "[6, 7, 9, 10]",
            "friday": "[9, 12, 13, 23]",
            "saturday": "[11, 12, 15, 17]",
            "sunday": "[14, 15, 17, 10]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/the-parachutists-1944.jpg',
          title: 'The Parachutists',
          artist: 'William Baziotes',
          year: '1944',
          rule: {
            "monday": "[ 15, 16, 18, 11]",
            "tuesday": "[18, 20, 22, 23]",
            "wednesday": "[20, 22, 26, 29]",
            "thursday": "[22, 24, 25, 28]",
            "friday": "[7, 8, 10, 11]",
            "saturday": "[10, 13, 14, 24]",
            "sunday": "[12, 13, 16, 18]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/bird-of-the-spirit-1943.jpg',
          title: 'Bird of the Spirit',
          artist: 'Morris Graves',
          year: '1943',
          rule: {
            "monday": "[ 12, 13, 16, 18]",
            "tuesday": "[15, 16, 18, 11]",
            "wednesday": "[18, 20, 22, 23]",
            "thursday": "[20, 22, 26, 29]",
            "friday": "[22, 24, 25, 28]",
            "saturday": "[7, 8, 10, 11]",
            "sunday": "[10, 13, 14, 24]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/untitled-1947.jpg',
          title: 'Untitled',
          artist: 'Giorgio Cavallon',
          year: '1947',
          rule: {
            "monday": "[ 10, 13, 14, 24]",
            "tuesday": "[12, 13, 16, 18]",
            "wednesday": "[15, 16, 18, 11]",
            "thursday": "[18, 20, 22, 23]",
            "friday": "[20, 22, 26, 29]",
            "saturday": "[22, 24, 25, 28]",
            "sunday": "[7, 8, 10, 11]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'abstract',
          img_path: './img/january/abstract-eye-1943.jpg',
          title: 'Abstract Eye',
          artist: 'Richard Pousette-Dart',
          year: '1943',
          rule: {
            "monday": "[ 7, 8, 10, 11]",
            "tuesday": "[10, 13, 14, 24]",
            "wednesday": "[12, 13, 16, 18]",
            "thursday": "[15, 16, 18, 11]",
            "friday": "[18, 20, 22, 23]",
            "saturday": "[20, 22, 26, 29]",
            "sunday": "[22, 24, 25, 28]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_arts_id_seq', (SELECT MAX(id) FROM january_arts));");
    });
};
