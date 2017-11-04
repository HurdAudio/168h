'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('october_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('october_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_cinsovpost_00006.jpg',
          title: 'Poster of the film "The Sixth of the World," directed by Dziga Vetrov',
          artist: 'V.Stenberg, G.Stenberg, A.Naumov',
          year: '1926',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_cinsovpost_00003.jpg',
          title: 'Poster of the film "Mother" directed by V. Pudovkin',
          artist: 'I.Bograd',
          year: '1926',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_cinsovpost_00002.jpg',
          title: 'Poster of the film "October" directed by S. Eisenstein',
          artist: 'V.Stenberg, G.Stenberg,Ya. Ruklevski',
          year: '1927',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_cultsovpost_00005.jpg',
          title: 'Gostsir. Durovskaya Railway...',
          artist: 'E.Holstein',
          year: '1929',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_cultsovpost_00004.jpg',
          title: 'All-Russian Agricultural Exhibition...',
          artist: 'I.Lebedev, A. Fidman',
          year: '1923',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_cultsovpost_00002.jpg',
          title: 'Flea',
          artist: 'B.Kustodiev',
          year: '1926',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_industrysovpost_00003.jpg',
          title: 'The development of transport',
          artist: 'G.Klutsis',
          year: '1929',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 25, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0039.jpg',
          title: 'Give support...',
          artist: 'A.Dejneka',
          year: '1929',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 25, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0038.jpg',
          title: 'All on muster',
          artist: 'Yuri Pimenov',
          year: '1929',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 25, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0037.jpg',
          title: 'All-Russian festival of physical culture',
          artist: 'V. Pshenichnikov',
          year: '1927',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 25, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0032.jpg',
          title: 'A ticket to the zoo cost 2 x 20 kopeek',
          artist: 'D.Bulanov',
          year: '1928',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 25, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0030.jpg',
          title: 'Advertisement inside trolley cars',
          artist: 'D.Bulanov',
          year: '1927',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0027.jpg',
          title: 'Second all-union lottery',
          artist: 'I.Dlugach,P.Karachentsov',
          year: '1928',
          rule: {
            "monday": [ 4, 15, 25, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0026.jpg',
          title: 'Stocko shoe shine polish',
          artist: 'A.Zelensky',
          year: '1929',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0025.jpg',
          title: 'lottery Avtodor. The ticket price is 50 cents',
          artist: 'B. Titov, E. Pernikov',
          year: '1929',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0024.jpg',
          title: 'Pencils "Mospoligraf"',
          artist: '?',
          year: '1928',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0023.jpg',
          title: 'Movie poster "Communards\' Pipe"',
          artist: 'A.Bielski',
          year: '1929',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0022.jpg',
          title: 'Journey to Mars',
          artist: 'N.Prusakov, G.Borisov',
          year: '1926',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0019.jpg',
          title: 'Poster of the movie "1905 Bronenosits Potemkin"',
          artist: 'A.Lavinskii',
          year: '1928',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0018.jpg',
          title: 'Touring the poster of the Moscow Chamber Theatre (French language)',
          artist: 'V.Stenberg,G.Stenberg',
          year: '1923',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0021.jpg',
          title: 'Poster for the movie \'The Eleventh\' directed by Dziga Vertov',
          artist: 'V.Stenberg, G.Stenberg',
          year: '1928',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0016.jpg',
          title: 'À subscription to a Laborer Department at Home is open for new orders',
          artist: 'A.Lavinskii',
          year: '1925',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0015.jpg',
          title: 'The role of à premiere militant',
          artist: 'S.Senkin',
          year: '1927',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0013.jpg',
          title: 'Lenin and electrification',
          artist: 'Chass-Kobelev',
          year: '1925',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0011.jpg',
          title: 'Teacher Bubus Comedy',
          artist: 'I. Shlepanov',
          year: '1925',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0010.jpg',
          title: 'Kino glaz Dziga Vertov',
          artist: 'A.Rodchenko',
          year: '1924',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0009.jpg',
          title: 'Red Army Soldier',
          artist: 'A.Rodchenko',
          year: '1925',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0008.jpg',
          title: 'Lengiz Books for all sectors of knowledge',
          artist: 'A. Rodchenko',
          year: '1925',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0007.jpg',
          title: 'Dobrolet',
          artist: 'A. Rodchenko',
          year: '1923',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0006.jpg',
          title: 'Cheap bread',
          artist: 'A.Rodchenko, V. Mayakovsky',
          year: '1923',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0005.jpg',
          title: 'The most businesslike',
          artist: 'A.Rodchenko, V. Mayakovsky',
          year: '1923',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0004.jpg',
          title: 'Read Young Guard magazine',
          artist: 'A. Rodchenko, V. Mayakovsky',
          year: '1924',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_ksssrpost_0003.jpg',
          title: 'Best Pacifier',
          artist: 'A.Rodchenko,V.Mayakovsky',
          year: '1923',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_parenthoodsovpost_00009.jpg',
          title: 'Young Leninists....',
          artist: 'V.Izenberg',
          year: '1924',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_parenthoodsovpost_00006.jpg',
          title: 'Do not hit the child...',
          artist: 'A.Laptev',
          year: '1929',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_parenthoodsovpost_00005.jpg',
          title: 'Mothers...',
          artist: 'A.Soborova',
          year: '1925',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_parenthoodsovpost_00002.jpg',
          title: 'Meeting children!',
          artist: 'A.Komarov',
          year: '1923',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_socialsovpost_00007.jpg',
          title: 'Dad, do not drink...',
          artist: 'D.Bulanov',
          year: '1929',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_socialsovpost_00006.jpg',
          title: 'Stop...',
          artist: '?',
          year: '1929',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovmilpost18_50_0005.jpg',
          title: 'Red Army...',
          artist: 'A.Lavinskii',
          year: '1927',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_sportsovpost_00004.jpg',
          title: 'Spartakiada',
          artist: 'S. Vlasov',
          year: '1928',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_tradesovpost_00012.jpg',
          title: 'Rezinotrest',
          artist: 'D.Kravchenko',
          year: '1929',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_tradesovpost_00009.jpg',
          title: 'I drink beer and water...',
          artist: '?',
          year: '1928',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_tradesovpost_00007.jpg',
          title: 'Mosselprom. Tobacco products.',
          artist: 'M. Bulanov',
          year: '1927',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_tradesovpost_00005.jpg',
          title: 'Cigarettes "Pushkin"',
          artist: 'A. Zelensky',
          year: '1926',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_tradesovpost_00004.jpg',
          title: 'Best cigarettes...',
          artist: '?',
          year: '1925',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_tradesovpost_00002.jpg',
          title: 'Mosselprom...',
          artist: 'D. Tarhov',
          year: '1926',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/eafd2e2aa47b9841b8d3b4fd35d6be9b.jpg',
          title: 'Each absenteeism...',
          artist: 'V.Mayakovsky',
          year: '1920',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00036.jpg',
          title: 'Long live May 1st',
          artist: 'P. Sokolov-Skalya',
          year: '1928',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 17, 18, 29, 2 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00034.jpg',
          title: 'If you will not read books...',
          artist: 'A. Mogilevsky',
          year: '1925',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 17, 18, 29, 2 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00033.jpg',
          title: 'Proletarian host...',
          artist: '?',
          year: '1926',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 17, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00032.jpg',
          title: 'In case of full cooperation...',
          artist: '?',
          year: '1927',
          rule: {
            "monday": [ 17, 18, 29, 2 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00031.jpg',
          title: 'V. Ulianov (Lenin) 1870-1924',
          artist: 'A. Strakhov-Braslavsky',
          year: '1924',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 17, 18, 29, 2 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00028.jpg',
          title: 'A ghost wanders around Europe, a ghost of communism.',
          artist: 'V. Sherbakov',
          year: '1920',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 17, 18, 29, 2 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00027.jpg',
          title: 'March 8th',
          artist: '?',
          year: '1926',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 17, 18, 29, 2 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00026.jpg',
          title: 'Each cook must learn...',
          artist: 'Makarychev, Raev',
          year: '1925',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 21, 4 ],
            "friday": [ 18, 19, 30, 3 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00025.jpg',
          title: 'Knowledge will break the chains of slavery',
          artist: 'A. Rudakov',
          year: '1920',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 21, 4 ],
            "saturday": [ 18, 19, 30, 3 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00024.jpg',
          title: 'What October Revolution gave to a worker and peasant',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 21, 4 ],
            "sunday": [ 18, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00022.jpg',
          title: 'The one is an offender,..',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 18, 19, 30, 3 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 21, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00021.jpg',
          title: 'Woman! Learn how to read and write!',
          artist: 'E. Kruglikova',
          year: '1923',
          rule: {
            "monday": [ 9, 20, 21, 4 ],
            "tuesday": [ 18, 19, 30, 3 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00018.jpg',
          title: 'To get more - (we) have to produce more, to produce more - (we) have to know (learn) more.',
          artist: 'A. Zelensky',
          year: '1920',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 21, 4 ],
            "wednesday": [ 18, 19, 30, 3 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00017.jpg',
          title: 'Beware of mensheviks and SRs',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 21, 4 ],
            "thursday": [ 18, 19, 30, 3 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00012.jpg',
          title: 'Red gift to a white pan',
          artist: 'Dmitry Moor',
          year: '1920',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 22, 5 ],
            "friday": [ 19, 20, 31, 4 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00009.jpg',
          title: 'Ukrainians and Russians have the same slogan..',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 22, 5 ],
            "saturday": [ 19, 20, 31, 4 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00003.jpg',
          title: 'Who is against Soviet',
          artist: 'Dmitry Moor',
          year: '1919',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 22, 5 ],
            "sunday": [ 19, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00002.jpg',
          title: 'Women come to (get into) cooperatives',
          artist: 'Ignaty Nivinsky',
          year: '1918',
          rule: {
            "monday": [ 19, 20, 31, 4 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 22, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovaviapost_0002.jpg',
          title: 'Build Air Fleet of the USSR',
          artist: 'I. Simakov',
          year: '1923',
          rule: {
            "monday": [ 10, 21, 22, 5 ],
            "tuesday": [ 19, 20, 31, 4 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_St_049.jpg',
          title: 'Each kolkhoznik, every brigade...',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 22, 5 ],
            "wednesday": [ 19, 20, 31, 4 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_St_036.jpg',
          title: 'The stake of the interventionists is overbid!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 22, 5 ],
            "thursday": [ 19, 20, 31, 4 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_St_035.jpg',
          title: '(We will) Destroy kulak as a class',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 23, 6 ],
            "friday": [ 20, 21, 1, 5 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_St_032.jpg',
          title: 'All (come) to review!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 23, 6 ],
            "saturday": [ 20, 21, 1, 5 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00035.jpg',
          title: 'Liberated woman - build up socialism!',
          artist: 'Strahov-Bratislavsky Adolf Iosifovich',
          year: '1926',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 23, 6 ],
            "sunday": [ 20, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_St_023.jpg',
          title: 'Against kulak\'s howl - by a concerted, collective front to sow!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 21, 1, 5 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 23, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_St_026.jpg',
          title: '10 years (anniversary) of the october (revolution)',
          artist: '?',
          year: '1927',
          rule: {
            "monday": [ 11, 22, 23, 6 ],
            "tuesday": [ 20, 21, 1, 5 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/large_Le_086.jpg',
          title: 'Long live the 5th anniversary of the Great October Proletarian Revolution!',
          artist: '?',
          year: '1922',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 23, 6 ],
            "wednesday": [ 20, 21, 1, 5 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_085.jpg',
          title: 'Long live KOMSOMOL',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 23, 6 ],
            "thursday": [ 20, 21, 1, 5 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00020.jpg',
          title: 'HELP',
          artist: 'Dmitry Moor',
          year: '1921',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 4, 8 ],
            "thursday": [ 12, 23, 24, 7 ],
            "friday": [ 21, 22, 2, 6 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_083.jpg',
          title: 'Think about those who are starving',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 4, 8 ],
            "friday": [ 12, 23, 24, 7 ],
            "saturday": [ 21, 22, 2, 6 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_082.jpg',
          title: 'The victory of the Revolution is in cooperation of workers and peasants.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 24, 7 ],
            "sunday": [ 21, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_081.jpg',
          title: 'Workers',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 22, 2, 6 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 24, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_080.jpg',
          title: '(I) Believe (we) will celebrate the hundredth anniversary',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 23, 24, 7 ],
            "tuesday": [ 21, 22, 2, 6 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_sovpolpost_00005.jpg',
          title: 'Citizens, save the historical monuments',
          artist: 'Nikolay Kupreyanov',
          year: '1919',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 24, 7 ],
            "wednesday": [ 21, 22, 2, 6 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_078.jpg',
          title: 'Long live the genius of the world-wide marvels - mighty creative labor.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 24, 7 ],
            "thursday": [ 21, 22, 2, 6 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_077.jpg',
          title: '1st of May. All-Russian subbotnik.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 5, 9 ],
            "thursday": [ 13, 24, 25, 8 ],
            "friday": [ 22, 23, 3, 7 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'russian revolution',
          img_path: './img/october/popup_Le_076.jpg',
          title: 'By a powerful strike of labor, we will destroy the shackles of devastation.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 5, 9 ],
            "friday": [ 13, 24, 25, 8 ],
            "saturday": [ 22, 23, 3, 7 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_arts_id_seq', (SELECT MAX(id) FROM october_arts));");
    });
};
