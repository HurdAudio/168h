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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
          theme: 'Russian Revolution',
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
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_075.jpg',
          title: 'Bread spider',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 25, 8 ],
            "sunday": [ 22, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_074.jpg',
          title: '(That) What Bolshevism brings to nation',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 23, 3, 7 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 25, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_073.jpg',
          title: 'Happy worker in Sovdepia',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 24, 25, 8 ],
            "tuesday": [ 22, 23, 3, 7 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00007.jpg',
          title: 'Every hit of the hammer - is a hit on the enemy!',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 25, 8 ],
            "wednesday": [ 22, 23, 3, 7 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_068.jpg',
          title: 'Pyotr Nikolayevich Wrangel',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 25, 8 ],
            "thursday": [ 22, 23, 3, 7 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/u-g-PU2WY80.jpg',
          title: 'Long Live the Soviet People - the Space Pioneers!',
          artist: 'Vadim Petrovich Volikov',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 26, 9 ],
            "friday": [ 23, 24, 4, 8 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/u-g-PU2OR80.jpg',
          title: 'Have You Volunteered for the Red Army?',
          artist: 'Dmitri Stachievich Moor',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 26, 9 ],
            "saturday": [ 23, 24, 4, 8 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/u-g-PI4H4N0.jpg',
          title: 'Forwards, Let Us Destroy the German Occupiers and Drive Them Beyond the...',
          artist: 'V.A. Nikolaev',
          year: '1944',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 26, 9 ],
            "sunday": [ 23, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/u-g-F17NTP0.jpg',
          title: 'Workers Transportation',
          artist: 'D. Bulanov',
          year: '?',
          rule: {
            "monday": [ 23, 24, 4, 8 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 26, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/u-g-P27CI80.jpg',
          title: 'Let\'s Storm the Production Target',
          artist: 'Gustav Klutsis',
          year: '?',
          rule: {
            "monday": [ 14, 25, 26, 9 ],
            "tuesday": [ 23, 24, 4, 8 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00006.jpg',
          title: 'The enemy wants to take Moscow over...',
          artist: 'V. Fidman',
          year: '1919',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 26, 9 ],
            "wednesday": [ 23, 24, 4, 8 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_066.jpg',
          title: '(We) Will not give up Petrograd',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 6, 10 ],
            "wednesday": [ 14, 25, 26, 9 ],
            "thursday": [ 23, 24, 4, 8 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_065.jpg',
          title: 'Staunchly (by chest) for the defense of petrograd!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 27, 10 ],
            "friday": [ 24, 25, 5, 9 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_064.jpg',
          title: 'Worker!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 27, 10 ],
            "saturday": [ 24, 25, 5, 9 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_063.jpg',
          title: 'For the United Russia',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 27, 10 ],
            "sunday": [ 24, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_062.jpg',
          title: 'Sign up for the loan of Freedom',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 24, 25, 5, 9 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 27, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00019.jpg',
          title: 'Illiterate is the same as blind',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 15, 26, 27, 10 ],
            "tuesday": [ 24, 25, 5, 9 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_058.jpg',
          title: 'A day of the Soviet Propaganda',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 7, 11 ],
            "tuesday": [ 15, 26, 27, 10 ],
            "wednesday": [ 24, 25, 5, 9 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00015.jpg',
          title: '1st of May',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 27, 10 ],
            "thursday": [ 24, 25, 5, 9 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00023.jpg',
          title: 'Red Moscow',
          artist: '?',
          year: '1921',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 28, 11 ],
            "friday": [ 25, 26, 6, 10 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_055.jpg',
          title: 'Long live communist International!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 28, 11 ],
            "saturday": [ 25, 26, 6, 10 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_054.jpg',
          title: 'Welcome Comrades!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 28, 11 ],
            "sunday": [ 25, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_052.jpg',
          title: '(Get) Off the road',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 26, 6, 10 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 28, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_051.jpg',
          title: 'Damnation and death to the hired assassins!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 27, 28, 11 ],
            "tuesday": [ 25, 26, 6, 10 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_050.jpg',
          title: 'The deserter\'s nightmare.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 28, 11 ],
            "wednesday": [ 25, 26, 6, 10 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_049.jpg',
          title: 'The lord of the world - Capital, gold idol.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 28, 11 ],
            "thursday": [ 25, 26, 6, 10 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_048.jpg',
          title: 'Corpses of the Paris commune, revive under the Red Flag of Soviets!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 29, 12 ],
            "friday": [ 26, 27, 7, 11 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00010.jpg',
          title: 'To work (we) have to, rifle is near',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 29, 12 ],
            "saturday": [ 26, 27, 7, 11 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_044.jpg',
          title: 'To the polish front',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 29, 12 ],
            "sunday": [ 26, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_043.jpg',
          title: 'Тhe League of Nations',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 26, 27, 7, 11 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 9, 13 ],
            "sunday": [ 17, 28, 29, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_040.jpg',
          title: 'R.S.F.S.R. Proletarians of all countries, unite!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 17, 28, 29, 12 ],
            "tuesday": [ 26, 27, 7, 11 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_036.jpg',
          title: 'Enemy at the gates!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 29, 12 ],
            "wednesday": [ 26, 27, 7, 11 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_034.jpg',
          title: 'lllrd International',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 29, 12 ],
            "thursday": [ 26, 27, 7, 11 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00016.jpg',
          title: 'Capital',
          artist: 'V. Deni',
          year: '1920',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 10, 14 ],
            "thursday": [ 18, 29, 30, 13 ],
            "friday": [ 27, 28, 8, 12 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_032.jpg',
          title: 'Тhe League of Nations',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 10, 14 ],
            "friday": [ 18, 29, 30, 13 ],
            "saturday": [ 27, 28, 8, 12 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_031.jpg',
          title: 'This will not happen!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 10, 14 ],
            "saturday": [ 18, 29, 30, 13 ],
            "sunday": [ 27, 28, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_030.jpg',
          title: 'A pig, trained in Paris.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 27, 28, 8, 12 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 30, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_029.jpg',
          title: 'Manifest',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 29, 30, 13 ],
            "tuesday": [ 27, 28, 8, 12 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_028.jpg',
          title: 'Liberators',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 30, 13 ],
            "wednesday": [ 27, 28, 8, 12 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_027.jpg',
          title: '1st of May is a holiday of labor.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 10, 14 ],
            "wednesday": [ 18, 29, 30, 13 ],
            "thursday": [ 27, 28, 8, 12 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_026.jpg',
          title: 'Soviet Russia. Sieged camp. All to defense!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 11, 15 ],
            "thursday": [ 19, 30, 31, 14 ],
            "friday": [ 28, 29, 9, 13 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_025.jpg',
          title: 'October 1917 October 1920',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 11, 15 ],
            "friday": [ 19, 30, 31, 14 ],
            "saturday": [ 28, 29, 9, 13 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_023.jpg',
          title: 'Priests help capital(ism) and disturb worker. Get out of the way!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 11, 15 ],
            "saturday": [ 19, 30, 31, 14 ],
            "sunday": [ 28, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_022.jpg',
          title: 'To the nations of the Caucasus',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 28, 29, 9, 13 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 11, 15 ],
            "sunday": [ 19, 30, 31, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00001.jpg',
          title: 'Have you signed up as a volunteer?',
          artist: 'Dmitry Moor',
          year: '1920',
          rule: {
            "monday": [ 19, 30, 31, 14 ],
            "tuesday": [ 28, 29, 9, 13 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_019.jpg',
          title: 'Christmas',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 20, 31, 11, 15 ],
            "tuesday": [ 19, 30, 31, 14 ],
            "wednesday": [ 28, 29, 9, 13 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_018.jpg',
          title: 'Labor.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 11, 15 ],
            "wednesday": [ 19, 30, 31, 14 ],
            "thursday": [ 28, 29, 9, 13 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_017.jpg',
          title: 'Soviet repka (Russian folk fairy tale Turnip).',
          artist: '',
          year: '',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 12, 16 ],
            "thursday": [ 20, 31, 1, 15 ],
            "friday": [ 29, 30, 10, 14 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00011.jpg',
          title: 'Death to world\'s imperialism',
          artist: 'Dmitry Moor',
          year: '1919',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 12, 16 ],
            "friday": [ 20, 31, 1, 15 ],
            "saturday": [ 29, 30, 10, 14 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0002.jpg',
          title: 'With red wedge, fight whites',
          artist: '?',
          year: '1920',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 12, 16 ],
            "saturday": [ 20, 31, 1, 15 ],
            "sunday": [ 29, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_012.jpg',
          title: 'Long live the sun, let the darkness disappear.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 29, 30, 10, 14 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 12, 16 ],
            "sunday": [ 20, 31, 1, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00014.jpg',
          title: '1st of May.',
          artist: 'Alexander Apsit',
          year: '1919',
          rule: {
            "monday": [ 20, 31, 1, 15 ],
            "tuesday": [ 29, 30, 10, 14 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_010.jpg',
          title: 'Onto a horse, proletarian!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 16 ],
            "tuesday": [ 20, 31, 1, 15 ],
            "wednesday": [ 29, 30, 10, 14 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_009.jpg',
          title: 'A day of a wounded Red Army man.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 12, 16 ],
            "wednesday": [ 20, 31, 1, 15 ],
            "thursday": [ 29, 30, 10, 14 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00004.jpg',
          title: 'A year (anniversary) to the dictatorship of the proletariat.',
          artist: 'Alexander Apsit',
          year: '1918',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 13, 17 ],
            "thursday": [ 21, 1, 2, 16 ],
            "friday": [ 30, 31, 11, 15 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_007.jpg',
          title: 'Antanta. Under the mask of piece.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 13, 17 ],
            "friday": [ 21, 1, 2, 16 ],
            "saturday": [ 30, 31, 11, 15 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_004.jpg',
          title: 'The Spider and the Flies.',
          artist: 'Viktor Deni',
          year: '1919',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 13, 17 ],
            "saturday": [ 21, 1, 2, 16 ],
            "sunday": [ 30, 31, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Le_002.jpg',
          title: 'Death to capital(ism), or death under the heel of Capital(ism)!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 30, 31, 11, 15 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 13, 17 ],
            "sunday": [ 21, 1, 2, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_Br_011.jpg',
          title: 'Peace to Nations!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 1, 2, 16 ],
            "tuesday": [ 30, 31, 11, 15 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00010.jpg',
          title: 'Women of collective farms- is a big power',
          artist: '?',
          year: '1933',
          rule: {
            "monday": [ 22, 2, 13, 17 ],
            "tuesday": [ 21, 1, 2, 16 ],
            "wednesday": [ 30, 31, 11, 15 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00004.jpg',
          title: 'Will complete fully and on time the schedule of the grain reserves',
          artist: 'A.Lobanov',
          year: '1930',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 13, 17 ],
            "wednesday": [ 21, 1, 2, 16 ],
            "thursday": [ 30, 31, 11, 15 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00003.jpg',
          title: 'Watchfully protect socialist harvest',
          artist: 'V. Govorkov',
          year: '1936',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 14, 18 ],
            "thursday": [ 22, 2, 3, 17 ],
            "friday": [ 31, 1, 12, 16 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00008.jpg',
          title: 'Women in collective farms',
          artist: 'V. Svarog',
          year: '1935',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 14, 18 ],
            "friday": [ 22, 2, 3, 17 ],
            "saturday": [ 31, 1, 12, 16 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00007.jpg',
          title: 'Komsomol...',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 14, 18 ],
            "saturday": [ 22, 2, 3, 17 ],
            "sunday": [ 31, 1, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00006.jpg',
          title: 'Collective farmers and individual farmers',
          artist: 'V.Govorkov',
          year: '1933',
          rule: {
            "monday": [ 31, 1, 12, 16 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 14, 18 ],
            "sunday": [ 22, 2, 3, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00002.jpg',
          title: 'Farmhands and Komsomol members - onto a tractor!',
          artist: 'V.Svarog',
          year: '1931',
          rule: {
            "monday": [ 22, 2, 3, 17 ],
            "tuesday": [ 31, 1, 12, 16 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cinsovpost_00010.jpg',
          title: 'Poster of the film "Doughnut" directed by M. Romm',
          artist: 'Yuri Pimenov',
          year: '1935',
          rule: {
            "monday": [ 23, 3, 14, 18 ],
            "tuesday": [ 22, 2, 3, 17 ],
            "wednesday": [ 31, 1, 12, 16 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cinsovpost_00009.jpg',
          title: 'L. Orlova in the film "Jolly Fellows" directed by Aleksandrov',
          artist: 'I.Gerasimovich',
          year: '1934',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 14, 18 ],
            "wednesday": [ 22, 2, 3, 17 ],
            "thursday": [ 31, 1, 12, 16 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cinsovpost_00007.jpg',
          title: 'Poster of the film "Alexander Nevsky" directed by S.Eisenstein',
          artist: 'A. Belsky',
          year: '1938',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 15, 19 ],
            "thursday": [ 23, 3, 4, 18 ],
            "friday": [ 1, 2, 13, 17 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cinsovpost_00004.jpg',
          title: 'Poster of the film "Chapaev" directed by brothers Vasilyev',
          artist: 'A.Belsky',
          year: '1935',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 15, 19 ],
            "friday": [ 23, 3, 4, 18 ],
            "saturday": [ 1, 2, 13, 17 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cultsovpost_00007.jpg',
          title: 'Intourist Moskau Hotel Metropol Trans-Siberian Railway',
          artist: 'Litvak & Maximov',
          year: '1930',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 15, 19 ],
            "saturday": [ 23, 3, 4, 18 ],
            "sunday": [ 1, 2, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cultsovpost_00008.jpg',
          title: 'Moscow Theatre Festival (French language)',
          artist: 'N.Zhukov & S. Sakharov',
          year: '1934',
          rule: {
            "monday": [ 1, 2, 13, 17 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 15, 19 ],
            "sunday": [ 23, 3, 4, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cultsovpost_00006.jpg',
          title: 'State Circus. Atraktsion "Flying torpreda"...',
          artist: 'I.Bograd',
          year: '1936',
          rule: {
            "monday": [ 23, 3, 4, 18 ],
            "tuesday": [ 1, 2, 13, 17 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00010.jpg',
          title: 'Woman (get) onto a (steam) locomotive!',
          artist: 'O.Deyneko',
          year: '1939',
          rule: {
            "monday": [ 24, 4, 15, 19 ],
            "tuesday": [ 23, 3, 4, 18 ],
            "wednesday": [ 1, 2, 13, 17 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00007.jpg',
          title: 'We (vote) for renovation of the Soviet transport',
          artist: 'I.Gromitsky',
          year: '1931',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 15, 19 ],
            "wednesday": [ 23, 3, 4, 18 ],
            "thursday": [ 1, 2, 13, 17 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00005.jpg',
          title: 'The train station is "socialism" to "communism"',
          artist: 'P.Sokolov-Scalia',
          year: '1931',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 16, 20 ],
            "thursday": [ 24, 4, 5, 19 ],
            "friday": [ 2, 3, 14, 18 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00004.jpg',
          title: 'Sleeping at work',
          artist: 'I.Chashnikov, B.Ioganson',
          year: '1931',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 16, 20 ],
            "friday": [ 24, 4, 5, 19 ],
            "saturday": [ 2, 3, 14, 18 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0059.jpg',
          title: 'Long Live our Happy Socialist Motherland',
          artist: 'G.Klutsis',
          year: '1935',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 16, 20 ],
            "saturday": [ 24, 4, 5, 19 ],
            "sunday": [ 2, 3, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0058.jpg',
          title: 'USSR - the country\'s largest',
          artist: 'D.Moor, S.Senkin',
          year: '1936',
          rule: {
            "monday": [ 2, 3, 14, 18 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 16, 20 ],
            "sunday": [ 24, 4, 5, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0057.jpg',
          title: 'Comrade believe ...',
          artist: 'B.Knoblock',
          year: '1936',
          rule: {
            "monday": [ 24, 4, 5, 19 ],
            "tuesday": [ 2, 3, 14, 18 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0056.jpg',
          title: 'The trade unions of the USSR...',
          artist: 'V.Koretsky, V. Glitsevich',
          year: '1932',
          rule: {
            "monday": [ 25, 5, 16, 20 ],
            "tuesday": [ 24, 4, 5, 19 ],
            "wednesday": [ 2, 3, 14, 18 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0055.jpg',
          title: 'Above the banner of Marx, Engels, Lenin and Stalin',
          artist: 'G.Klutsis',
          year: '1936',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 16, 20 ],
            "wednesday": [ 24, 4, 5, 19 ],
            "thursday": [ 2, 3, 14, 18 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0053.jpg',
          title: 'There metro!',
          artist: 'V. Deni, N.Dolgorukov',
          year: '1935',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 17, 21 ],
            "thursday": [ 25, 5, 6, 20 ],
            "friday": [ 3, 4, 15, 19 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0052.jpg',
          title: 'All Moscow is Building Metro (subway)',
          artist: 'G. Klutsis',
          year: '1934',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 17, 21 ],
            "friday": [ 25, 5, 6, 20 ],
            "saturday": [ 3, 4, 15, 19 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0050.jpg',
          title: 'Komsomol Fulfill Demands of Comrade Voroshilov',
          artist: 'V. Elkin',
          year: '1932',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 17, 21 ],
            "saturday": [ 25, 5, 6, 20 ],
            "sunday": [ 3, 4, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0046.jpg',
          title: 'Working men and women of all countries...',
          artist: 'V.Koretsky',
          year: '1932',
          rule: {
            "monday": [ 3, 4, 15, 19 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 17, 21 ],
            "sunday": [ 25, 5, 6, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0045.jpg',
          title: 'Socialist Forge of Health',
          artist: 'V.Gitsevich',
          year: '1932',
          rule: {
            "monday": [ 25, 5, 6, 20 ],
            "tuesday": [ 3, 4, 15, 19 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0044.jpg',
          title: 'Under a Flag of Lenin',
          artist: 'S.Senkin',
          year: '1931',
          rule: {
            "monday": [ 26, 6, 17, 21 ],
            "tuesday": [ 25, 5, 6, 20 ],
            "wednesday": [ 3, 4, 15, 19 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0042.jpg',
          title: 'Unions to fight...',
          artist: 'V.Elkin',
          year: '1932',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 17, 21 ],
            "wednesday": [ 25, 5, 6, 20 ],
            "thursday": [ 3, 4, 15, 19 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0041.jpg',
          title: 'Moscow says...',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 18, 22 ],
            "thursday": [ 26, 6, 7, 21 ],
            "friday": [ 4, 5, 16, 20 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0036.jpg',
          title: 'Exhibition of works by Vladimir Mayakovsky',
          artist: 'A.Gan',
          year: '1931',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 18, 22 ],
            "friday": [ 26, 6, 7, 21 ],
            "saturday": [ 4, 5, 16, 20 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0034.jpg',
          title: 'Hit! the enemy by a cultural revolution',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 18, 22 ],
            "saturday": [ 26, 6, 7, 21 ],
            "sunday": [ 4, 5, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00020.jpg',
          title: 'Thank you beloved Stalin for the joyful childhood',
          artist: 'V. Govorkov',
          year: '1936',
          rule: {
            "monday": [ 4, 5, 16, 20 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 18, 22 ],
            "sunday": [ 26, 6, 7, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00014.jpg',
          title: 'A.S. Pushkin 100 years since the death 1837-1937',
          artist: 'I.Buev, B.Iordanskyi',
          year: '1936',
          rule: {
            "monday": [ 26, 6, 7, 21 ],
            "tuesday": [ 4, 5, 16, 20 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00012.jpg',
          title: 'An illiterate child is a shame of a mother',
          artist: 'I.Gromitsky',
          year: '1930',
          rule: {
            "monday": [ 27, 7, 18, 22 ],
            "tuesday": [ 26, 6, 7, 21 ],
            "wednesday": [ 4, 5, 16, 20 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00011.jpg',
          title: 'Pioneer! Learn how to fight for the Ideas of the working class!',
          artist: 'N.Krasilnikov',
          year: '1930',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 18, 22 ],
            "wednesday": [ 26, 6, 7, 21 ],
            "thursday": [ 4, 5, 16, 20 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_socialsovpost_00016.jpg',
          title: 'Smoking tobacco...',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 19, 23 ],
            "thursday": [ 27, 7, 8, 22 ],
            "friday": [ 5, 6, 17, 21 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_socialsovpost_00008.jpg',
          title: 'Remember, when you...',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 19, 23 ],
            "friday": [ 27, 7, 8, 22 ],
            "saturday": [ 5, 6, 17, 21 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sportsovpost_00006.jpg',
          title: 'Athletic Padar',
          artist: 'G.Kibardin',
          year: '1938',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 19, 23 ],
            "saturday": [ 27, 7, 8, 22 ],
            "sunday": [ 5, 6, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_tradesovpost_00021.jpg',
          title: 'Toothpaste "Sanit"',
          artist: 'I. Bograd',
          year: '1938',
          rule: {
            "monday": [ 5, 6, 17, 21 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 19, 23 ],
            "sunday": [ 27, 7, 8, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_tradesovpost_00020.jpg',
          title: 'Pelmeni',
          artist: 'I.Bograd',
          year: '1936',
          rule: {
            "monday": [ 27, 7, 8, 22 ],
            "tuesday": [ 5, 6, 17, 21 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_tradesovpost_00018.jpg',
          title: 'Smoke cigarettes captain ...',
          artist: 'S.Sakharov',
          year: '1939',
          rule: {
            "monday": [ 28, 8, 19, 23 ],
            "tuesday": [ 27, 7, 8, 22 ],
            "wednesday": [ 5, 6, 17, 21 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_tradesovpost_00014.jpg',
          title: 'Smoke cigarettes "Derby"',
          artist: 'I.Bograd',
          year: '1936',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 19, 23 ],
            "wednesday": [ 27, 7, 8, 22 ],
            "thursday": [ 5, 6, 17, 21 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_tradesovpost_00013.jpg',
          title: 'Conserves SOCRA',
          artist: 'S.Igumnov',
          year: '1932',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 20, 24 ],
            "thursday": [ 28, 8, 9, 23 ],
            "friday": [ 6, 7, 18, 22 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_tradesovpost_00011.jpg',
          title: 'Iris-Prima.Mosselprom',
          artist: 'A.Zelensky',
          year: '1930',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 20, 24 ],
            "friday": [ 28, 8, 9, 23 ],
            "saturday": [ 6, 7, 18, 22 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_tradesovpost_00010.jpg',
          title: 'Fruit-drink. Mosselprom.',
          artist: 'A. Zelensky',
          year: '1930',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 20, 24 ],
            "saturday": [ 28, 8, 9, 23 ],
            "sunday": [ 6, 7, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00008.jpg',
          title: 'Working woman fight...',
          artist: 'M. Bri-Bain',
          year: '1931',
          rule: {
            "monday": [ 6, 7, 18, 22 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 20, 24 ],
            "sunday": [ 28, 8, 9, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00006.jpg',
          title: 'Experienced workers....',
          artist: 'I.Young,A.Chernomordik',
          year: '1930',
          rule: {
            "monday": [ 28, 8, 9, 23 ],
            "tuesday": [ 6, 7, 18, 22 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00005.jpg',
          title: 'Give ( me) quality....',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 29, 9, 20, 24 ],
            "tuesday": [ 28, 8, 9, 23 ],
            "wednesday": [ 6, 7, 18, 22 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00004.jpg',
          title: 'Your lamp....',
          artist: 'V.Govorkov',
          year: '1933',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 20, 24 ],
            "wednesday": [ 28, 8, 9, 23 ],
            "thursday": [ 6, 7, 18, 22 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00062.jpg',
          title: 'Fascism - is an enemy of culture.',
          artist: 'B.Prorokov',
          year: '1939',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 21, 25 ],
            "thursday": [ 29, 9, 10, 24 ],
            "friday": [ 7, 8, 19, 23 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00061.jpg',
          title: '(Let us) eradicate spies and saboteurs,..',
          artist: 'S. Igumnov',
          year: '1937',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 21, 25 ],
            "friday": [ 29, 9, 10, 24 ],
            "saturday": [ 7, 8, 19, 23 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00059.jpg',
          title: 'If the war is tomorrow...',
          artist: 'V. Koretsky',
          year: '1938',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 21, 25 ],
            "saturday": [ 29, 9, 10, 24 ],
            "sunday": [ 7, 8, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00058.jpg',
          title: 'Greetings to great Stalin...',
          artist: 'G.Kun, V.Elkin, K.Sobolevsky',
          year: '1937',
          rule: {
            "monday": [ 7, 8, 19, 23 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 21, 25 ],
            "sunday": [ 29, 9, 10, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00057.jpg',
          title: 'Long live equal (in rights) woman of the USSR.',
          artist: 'M.Volkova, N.Pinus',
          year: '1938',
          rule: {
            "monday": [ 29, 9, 10, 24 ],
            "tuesday": [ 7, 8, 19, 23 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00055.jpg',
          title: 'Greetings to a Congress of Soviet writers!',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 30, 10, 21, 25 ],
            "tuesday": [ 29, 9, 10, 24 ],
            "wednesday": [ 7, 8, 19, 23 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00054.jpg',
          title: 'To Chelyuskintsy and to the heroic pilots...',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 21, 25 ],
            "wednesday": [ 29, 9, 10, 24 ],
            "thursday": [ 7, 8, 19, 23 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00053.jpg',
          title: 'Human resources solve everything',
          artist: 'G. Klutsis',
          year: '1935',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 22, 26 ],
            "thursday": [ 30, 10, 11, 25 ],
            "friday": [ 8, 9, 20, 24 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00052.jpg',
          title: 'Kukryniksy. 15.',
          artist: 'Kukryniksy',
          year: '1932',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 22, 26 ],
            "friday": [ 30, 10, 11, 25 ],
            "saturday": [ 8, 9, 20, 24 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00051.jpg',
          title: 'Life has become better, life has become merrier!',
          artist: 'B. Efimov and M. Ioffe',
          year: '1936',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 22, 26 ],
            "saturday": [ 30, 10, 11, 25 ],
            "sunday": [ 8, 9, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00050.jpg',
          title: 'Long live Lenin Komsomol',
          artist: 'G. Klutsis',
          year: '1932',
          rule: {
            "monday": [ 8, 9, 20, 24 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 22, 26 ],
            "sunday": [ 30, 10, 11, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00049.jpg',
          title: 'March 8th - day of uprising of working women against kitchen slavery',
          artist: 'B. Deykin',
          year: '1932',
          rule: {
            "monday": [ 30, 10, 11, 25 ],
            "tuesday": [ 8, 9, 20, 24 ],
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
          id: 208,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00048.jpg',
          title: 'Rotfront',
          artist: 'V. Deni',
          year: '1932',
          rule: {
            "monday": [ 31, 11, 22, 26 ],
            "tuesday": [ 30, 10, 11, 25 ],
            "wednesday": [ 8, 9, 20, 24 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00047.jpg',
          title: 'Black crows are setting up a bandit raid on the U.S.S.R.',
          artist: 'Dmitry Moor',
          year: '1930',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 22, 26 ],
            "wednesday": [ 30, 10, 11, 25 ],
            "thursday": [ 8, 9, 20, 24 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00046.jpg',
          title: 'China is on the way to become free from imperialism.',
          artist: 'A. Deineka',
          year: '1932',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 23, 27 ],
            "thursday": [ 31, 11, 12, 26 ],
            "friday": [ 9, 10, 21, 25 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00044.jpg',
          title: 'Long live the World\'s October',
          artist: 'G. Klutsis',
          year: '1933',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 23, 27 ],
            "friday": [ 31, 11, 12, 26 ],
            "saturday": [ 9, 10, 21, 25 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00043.jpg',
          title: 'Mechanize Donbas',
          artist: 'A. Deineka',
          year: '1930',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 23, 27 ],
            "saturday": [ 31, 11, 12, 26 ],
            "sunday": [ 9, 10, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00042.jpg',
          title: 'No to kolkhoz! We - in favor of collective farms!',
          artist: 'B. Efimov',
          year: '1933',
          rule: {
            "monday": [ 9, 10, 21, 25 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 23, 27 ],
            "sunday": [ 31, 11, 12, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00041.jpg',
          title: '(tobacco) Pipe of Stalin',
          artist: 'V. Deni',
          year: '1930',
          rule: {
            "monday": [ 31, 11, 12, 26 ],
            "tuesday": [ 9, 10, 21, 25 ],
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
          id: 215,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00040.jpg',
          title: 'Stop kitchen slavery!..',
          artist: 'Gregory Shegal',
          year: '1931',
          rule: {
            "monday": [ 1, 12, 23, 27 ],
            "tuesday": [ 31, 11, 12, 26 ],
            "wednesday": [ 9, 10, 21, 25 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00038.jpg',
          title: 'Get workers into the native council',
          artist: 'G. Horoshevsky',
          year: '1931',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 23, 27 ],
            "wednesday": [ 31, 11, 12, 26 ],
            "thursday": [ 9, 10, 21, 25 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00037.jpg',
          title: 'A member of sect - is a kulak\'s Petrushka',
          artist: 'M. Chermnyh',
          year: '1930',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 24, 28 ],
            "thursday": [ 1, 12, 13, 27 ],
            "friday": [ 10, 11, 22, 26 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0011.jpg',
          title: 'Who is strong in the air...',
          artist: 'V. Deni, N. Dolgorukov, A. Umashev',
          year: '1938',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 24, 28 ],
            "friday": [ 1, 12, 13, 27 ],
            "saturday": [ 10, 11, 22, 26 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0009.jpg',
          title: 'Long live Soviet pilots,..',
          artist: 'N. Zhukov and V. Dobrovolsky',
          year: '1939',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 24, 28 ],
            "saturday": [ 1, 12, 13, 27 ],
            "sunday": [ 10, 11, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0008.jpg',
          title: 'There is no such fortress...',
          artist: 'Karachentsov Petr Yakovlevich',
          year: '1937',
          rule: {
            "monday": [ 10, 11, 22, 26 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 24, 28 ],
            "sunday": [ 1, 12, 13, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0006.jpg',
          title: 'Honor to the falcons of Stalin...',
          artist: 'V. Deni and Nikolay Dolgorukov',
          year: '1937',
          rule: {
            "monday": [ 1, 12, 13, 27 ],
            "tuesday": [ 10, 11, 22, 26 ],
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
          id: 222,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0005.jpg',
          title: 'Every kolhoz, each plant...',
          artist: 'Karachentsov Petr Yakovlevich',
          year: '1936',
          rule: {
            "monday": [ 2, 13, 24, 28 ],
            "tuesday": [ 1, 12, 13, 27 ],
            "wednesday": [ 10, 11, 22, 26 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0004.jpg',
          title: 'Komsomolets, young worker, pioneer!..',
          artist: 'I. Buev and Iordansky Boris Vyacheslavovich',
          year: '1934',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 24, 28 ],
            "wednesday": [ 1, 12, 13, 27 ],
            "thursday": [ 10, 11, 22, 26 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0003.jpg',
          title: 'Youth, - to airplanes',
          artist: 'Gustav Klutsis',
          year: '1934',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 25, 29 ],
            "thursday": [ 2, 13, 14, 28 ],
            "friday": [ 11, 12, 23, 27 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovaviapost_0007.jpg',
          title: 'Glory to the mighty aviation of the country of the Socialism! 1939',
          artist: '?',
          year: '1939',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 25, 29 ],
            "friday": [ 2, 13, 14, 28 ],
            "saturday": [ 11, 12, 23, 27 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_060.jpg',
          title: 'Stalin and Klement Voroshilov',
          artist: 'Gustav Klutsis',
          year: '1935',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 25, 29 ],
            "saturday": [ 2, 13, 14, 28 ],
            "sunday": [ 11, 12, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_059.jpg',
          title: 'January 1st, 1939. Happy New Year!',
          artist: '?',
          year: '1939',
          rule: {
            "monday": [ 11, 12, 23, 27 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 25, 29 ],
            "sunday": [ 2, 13, 14, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_058.jpg',
          title: 'To work, to build and not to whine!',
          artist: 'Dejneka Alexander Aleksandrovich',
          year: '1933',
          rule: {
            "monday": [ 2, 13, 14, 28 ],
            "tuesday": [ 11, 12, 23, 27 ],
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
          id: 229,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_056.jpg',
          title: 'Long live Stalin\'s constitution!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 3, 14, 25, 29 ],
            "tuesday": [ 2, 13, 14, 28 ],
            "wednesday": [ 11, 12, 23, 27 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_055.jpg',
          title: 'The Soviet woman',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 25, 29 ],
            "wednesday": [ 2, 13, 14, 28 ],
            "thursday": [ 11, 12, 23, 27 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_053.jpg',
          title: 'Shock woman-workers, strengthen shock-brigades ! ',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 26, 30 ],
            "thursday": [ 3, 14, 15, 29 ],
            "friday": [ 12, 13, 24, 28 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_052.jpg',
          title: 'Invent! Make way for the workers\' mother wit!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 26, 30 ],
            "friday": [ 3, 14, 15, 29 ],
            "saturday": [ 12, 13, 24, 28 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_051.jpg',
          title: 'Life\'s Getting Better. Stalin 1934.',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 26, 30 ],
            "saturday": [ 3, 14, 15, 29 ],
            "sunday": [ 12, 13, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_050.jpg',
          title: 'Who is glorious and famous in the country of Socialism',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 13, 24, 28 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 26, 30 ],
            "sunday": [ 3, 14, 15, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00005.jpg',
          title: 'Shock harvesting to a Bolshevik\'s crop.',
          artist: '?',
          year: '1934',
          rule: {
            "monday": [ 3, 14, 15, 29 ],
            "tuesday": [ 12, 13, 24, 28 ],
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
          id: 236,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_046.jpg',
          title: 'Long live the Union of the workers and peasants - the basis of the Soviet power',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 30 ],
            "tuesday": [ 3, 14, 15, 29 ],
            "wednesday": [ 12, 13, 24, 28 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_045.jpg',
          title: 'Subway Komsomol members',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 26, 30 ],
            "wednesday": [ 3, 14, 15, 29 ],
            "thursday": [ 12, 13, 24, 28 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_044.jpg',
          title: 'The Dneprostroy has been built.',
          artist: '?',
          year: '1932',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 27, 31 ],
            "thursday": [ 4, 15, 16, 30 ],
            "friday": [ 13, 14, 25, 29 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_043.jpg',
          title: 'Let\'s make stronger industrial power of Soviet Union ! ',
          artist: '?',
          year: '1932',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 27, 31 ],
            "friday": [ 4, 15, 16, 30 ],
            "saturday": [ 13, 14, 25, 29 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_042.jpg',
          title: 'Let\'s take by storm the last - fourth year of five-year plan !',
          artist: '?',
          year: '1931',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 27, 31 ],
            "saturday": [ 4, 15, 16, 30 ],
            "sunday": [ 13, 14, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00006.jpg',
          title: 'The train goes from the Socialism Station to the Communism Station.',
          artist: '?',
          year: '1939',
          rule: {
            "monday": [ 13, 14, 25, 29 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 27, 31 ],
            "sunday": [ 4, 15, 16, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_stalin_wheel.jpg',
          title: 'The captain of the country of Soviets, leads us from victory to victory!',
          artist: 'B. Efimov',
          year: '1933',
          rule: {
            "monday": [ 4, 15, 16, 30 ],
            "tuesday": [ 13, 14, 25, 29 ],
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
          id: 243,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_039.jpg',
          title: 'Red Army is a reliable guard of the Soviet country.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 5, 16, 27, 31 ],
            "tuesday": [ 4, 15, 16, 30 ],
            "wednesday": [ 13, 14, 25, 29 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_038.jpg',
          title: 'Stalin.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 27, 31 ],
            "wednesday": [ 4, 15, 16, 30 ],
            "thursday": [ 13, 14, 25, 29 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_037.jpg',
          title: 'GPU. counter-revolutionary saboteur.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 28, 1 ],
            "thursday": [ 5, 16, 17, 31 ],
            "friday": [ 14, 15, 26, 30 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_034.jpg',
          title: 'Soviet propaganda poster',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 28, 1 ],
            "friday": [ 5, 16, 17, 31 ],
            "saturday": [ 14, 15, 26, 30 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_033.jpg',
          title: 'Steelcast the strike detachments, into the through strike brigades',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 28, 1 ],
            "saturday": [ 5, 16, 17, 31 ],
            "sunday": [ 14, 15, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_031.jpg',
          title: 'By all means, at any cost (we will) eliminate the gap.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 14, 15, 26, 30 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 28, 1 ],
            "sunday": [ 5, 16, 17, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_029.jpg',
          title: 'Building of Socialism',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 5, 16, 17, 31 ],
            "tuesday": [ 14, 15, 26, 30 ],
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
          id: 250,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_027.jpg',
          title: '(We will) Fulfil the plan of the great jobs',
          artist: 'Gustav Klutsis',
          year: '?',
          rule: {
            "monday": [ 6, 17, 28, 1 ],
            "tuesday": [ 5, 16, 17, 31 ],
            "wednesday": [ 14, 15, 26, 30 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_025.jpg',
          title: 'Not one hectare of not sown land!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 28, 1 ],
            "wednesday": [ 5, 16, 17, 31 ],
            "thursday":[ 14, 15, 26, 30 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_1521856238kolhoz.jpg',
          title: 'Comrade come to our kolkhoz!',
          artist: '?',
          year: '1930',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 29, 2 ],
            "thursday": [ 6, 17, 18, 1 ],
            "friday": [ 15, 16, 27, 31 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_022.jpg',
          title: 'Peasant woman, strengthen the union of workers and peasants.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 29, 2 ],
            "friday": [ 6, 17, 18, 1 ],
            "saturday": [ 15, 16, 27, 31 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_021.jpg',
          title: 'Leningrad society of linkage of the city with a village.',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 29, 2 ],
            "saturday": [ 6, 17, 18, 1 ],
            "sunday": [ 15, 16, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_002.jpg',
          title: 'Greetings to the fighters against fascism.',
          artist: 'Koretsky V. B.',
          year: '1937',
          rule: {
            "monday": [ 15, 16, 27, 31 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 29, 2 ],
            "sunday": [ 6, 17, 18, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_St_001.jpg',
          title: 'Fascism - is a starvation! Fascism - is a terror! Fascism - is a war!',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 6, 17, 18, 1 ],
            "tuesday": [ 15, 16, 27, 31 ],
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
          id: 257,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00029.jpg',
          title: 'Drinking water of dear Dnepr!',
          artist: 'Victor Ivanov',
          year: '1943',
          rule: {
            "monday": [ 7, 18, 29, 2 ],
            "tuesday": [ 6, 17, 18, 1 ],
            "wednesday": [ 15, 16, 27, 31 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 30, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00022.jpg',
          title: 'Trading culturally - is a respectable job!',
          artist: '?',
          year: '1949',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 29, 2 ],
            "wednesday": [ 6, 17, 18, 1 ],
            "thursday": [ 15, 16, 27, 31 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00016.jpg',
          title: '(we) Will serve culturally each (and every) visitor!',
          artist: '?',
          year: '1948',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 30, 3 ],
            "thursday": [ 7, 18, 19, 2 ],
            "friday": [ 16, 17, 28, 1 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00013.jpg',
          title: 'At labor time (some people) work at night time as well!',
          artist: '?',
          year: '1947',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 30, 3 ],
            "friday": [ 7, 18, 19, 2 ],
            "saturday": [ 16, 17, 28, 1 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00011.jpg',
          title: '(we) Will build back to fame!',
          artist: '?',
          year: '1945',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 30, 3 ],
            "saturday": [ 7, 18, 19, 2 ],
            "sunday": [ 16, 17, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00011.jpg',
          title: '(if we) Seed at the right time - will get a mountain of grain!',
          artist: 'V. Govorkov',
          year: '1946',
          rule: {
            "monday": [ 16, 17, 28, 1 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 30, 3 ],
            "sunday": [ 7, 18, 19, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00009.jpg',
          title: '(We) will provide the highest yield in 1944...',
          artist: '?',
          year: '1944',
          rule: {
            "monday": [ 7, 18, 19, 2 ],
            "tuesday": [ 16, 17, 28, 1 ],
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
          id: 264,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cinsovpost_00005.jpg',
          title: 'Poster of the film "Ivan the Terrible" directed by S. Eisenstein',
          artist: '?',
          year: '1945',
          rule: {
            "monday": [ 8, 19, 30, 3 ],
            "tuesday": [ 7, 18, 19, 2 ],
            "wednesday": [ 16, 17, 28, 1 ],
            "thursday": [ 12, 23, 3, 7 ],
            "friday": [ 11, 22, 2, 6 ],
            "saturday": [ 10, 21, 1, 5 ],
            "sunday": [ 9, 20, 31, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_cultsovpost_00010.jpg',
          title: 'Salute. Jas-State Orchestra',
          artist: '?',
          year: '1944',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 30, 3 ],
            "wednesday": [ 7, 18, 19, 2 ],
            "thursday": [ 16, 17, 28, 1 ],
            "friday": [ 12, 23, 3, 7 ],
            "saturday": [ 11, 22, 2, 6 ],
            "sunday": [ 10, 21, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00016.jpg',
          title: 'Oilmen, more oil to the Motherland!',
          artist: 'P. Krivonogov',
          year: '1948',
          rule: {
            "monday": [ 11, 22, 2, 6 ],
            "tuesday": [ 10, 21, 1, 5 ],
            "wednesday": [ 9, 20, 31, 4 ],
            "thursday": [ 8, 19, 20, 3 ],
            "friday": [ 17, 18, 29, 2 ],
            "saturday": [ 13, 24, 4, 8 ],
            "sunday": [ 12, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00013.jpg',
          title: 'Transport (is) a sibling of the Red Army...',
          artist: 'I. Gromitsky',
          year: '1941',
          rule: {
            "monday": [ 12, 23, 3, 7 ],
            "tuesday": [ 11, 22, 2, 6 ],
            "wednesday": [ 10, 21, 1, 5 ],
            "thursday": [ 9, 20, 31, 4 ],
            "friday": [ 8, 19, 20, 3 ],
            "saturday": [ 17, 18, 29, 2 ],
            "sunday": [ 13, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_industrysovpost_00011.jpg',
          title: 'Over 38 million tons of oil with gas in 1941...',
          artist: '?',
          year: '1941',
          rule: {
            "monday": [ 13, 24, 4, 8 ],
            "tuesday": [ 12, 23, 3, 7 ],
            "wednesday": [ 11, 22, 2, 6 ],
            "thursday": [ 10, 21, 1, 5 ],
            "friday": [ 9, 20, 31, 4 ],
            "saturday": [ 8, 19, 20, 3 ],
            "sunday": [ 17, 18, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_ksssrpost_0060.jpg',
          title: 'Everything for the front! Everything for the victory!',
          artist: 'L. Lisitsky',
          year: '1942',
          rule: {
            "monday": [ 17, 18, 29, 2 ],
            "tuesday": [ 13, 24, 4, 8 ],
            "wednesday": [ 12, 23, 3, 7 ],
            "thursday": [ 11, 22, 2, 6 ],
            "friday": [ 10, 21, 1, 5 ],
            "saturday": [ 9, 20, 31, 4 ],
            "sunday": [ 8, 19, 20, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00031.jpg',
          title: 'Talents',
          artist: 'V. Koretsky',
          year: '1948',
          rule: {
            "monday": [ 8, 19, 20, 3 ],
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
          id: 271,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00030.jpg',
          title: 'Study excellent!',
          artist: 'M. Nesterov-Berzina',
          year: '1948',
          rule: {
            "monday": [ 9, 20, 31, 4 ],
            "tuesday": [ 8, 19, 20, 3 ],
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
          id: 272,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00026.jpg',
          title: 'I will become a metalworker!',
          artist: 'N. Vatolina',
          year: '1948',
          rule: {
            "monday": [ 10, 21, 1, 5 ],
            "tuesday": [ 9, 20, 31, 4 ],
            "wednesday": [ 8, 19, 20, 3 ],
            "thursday": [ 17, 18, 29, 2 ],
            "friday": [ 13, 24, 4, 8 ],
            "saturday": [ 12, 23, 3, 7 ],
            "sunday": [ 11, 22, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00022.jpg',
          title: 'Healthy parents - healthy posterity',
          artist: 'N. Vatolina',
          year: '1948',
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
          id: 274,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00019.jpg',
          title: 'Our children should not get sick with diarrhea',
          artist: 'G. Shubina',
          year: '1940',
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
          id: 275,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_parenthoodsovpost_00018.jpg',
          title: 'Glory to a mother - a heroine!',
          artist: 'N. Vatolina',
          year: '1944',
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
          id: 276,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00005.jpg',
          title: 'How did YOU help the front line?',
          artist: 'D.Moor',
          year: '1941',
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
          id: 277,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00040.jpg',
          title: 'Our flag is a flag of the victory!',
          artist: 'V.Koretsky',
          year: '1945',
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
          id: 278,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00039.jpg',
          title: 'You will live a happy life!',
          artist: 'V. Ivanov',
          year: '1944',
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
          id: 279,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00038.jpg',
          title: 'Hi motherland!',
          artist: 'N.Vatolina',
          year: '1945',
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
          id: 280,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00036.jpg',
          title: 'We will walk to Berlin',
          artist: 'L.Golovanov',
          year: '1944',
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
          id: 281,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00032.jpg',
          title: 'To the West!',
          artist: 'V. Ivanov',
          year: '1943',
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
          id: 282,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00027.jpg',
          title: 'Soldier, respond to Motherland by a Victory!',
          artist: 'D.Shmarinov',
          year: '1942',
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
          id: 283,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00025.jpg',
          title: 'Ural to the Front',
          artist: 'P.Karachentsov',
          year: '1942',
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
          id: 284,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00024.jpg',
          title: 'For The Motherland!',
          artist: 'I. Toidze',
          year: '1943',
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
          id: 285,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00022.jpg',
          title: 'Red Army soldier!',
          artist: 'F.Antonov',
          year: '1942',
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
          id: 286,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00021.jpg',
          title: 'For the motherland!',
          artist: 'A.Kokorekin',
          year: '1942',
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
          id: 287,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00020.jpg',
          title: 'Red Army soldier SAVE!',
          artist: 'V.Kopecky',
          year: '1942',
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
          id: 288,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00018.jpg',
          title: 'German invaders!',
          artist: 'B. Efimov, N. Dolgorukov',
          year: '1942',
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
          id: 289,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00013.jpg',
          title: 'To Moscow! From Moscow!',
          artist: 'V. Deni',
          year: '1941 - 1942',
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
          id: 290,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00012.jpg',
          title: 'The people and the army are invincible!',
          artist: 'V. Koretsky',
          year: '1941',
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
          id: 291,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00011.jpg',
          title: 'Every hit of a hammer hits the enemy!',
          artist: 'V. Deni, N. Dolgorukov',
          year: '1941',
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
          id: 292,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00009.jpg',
          title: 'How it was - how it will be!',
          artist: 'N. Golgorukov',
          year: '1941',
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
          id: 293,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00008.jpg',
          title: 'All on G',
          artist: 'D. Moore',
          year: '1941',
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
          id: 294,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00006.jpg',
          title: 'Partisans, kill the enemy without mercy!',
          artist: 'V.Koretsky',
          year: '1941',
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
          id: 295,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sportsovpost_00013.jpg',
          title: 'Youth - to the stadiums!',
          artist: 'L.Golovanov',
          year: '1947',
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
          id: 296,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sportsovpost_00011.jpg',
          title: 'Youth to ski!',
          artist: 'M.Nestorova-Berzina,O.Nesterova',
          year: '1945',
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
          id: 297,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sportsovpost_00009.jpg',
          title: 'Everyone to skis!',
          artist: 'A.Nemukhin',
          year: '1942',
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
          id: 298,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00004.jpg',
          title: 'Be a hero',
          artist: 'V.Koretsky',
          year: 'c.1940',
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
          id: 299,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00002.jpg',
          title: 'Our forces are countless!',
          artist: 'V.Koretsky',
          year: '1941',
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
          id: 300,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_warsovpost_00001.jpg',
          title: 'Homeland - Mother is Calling!',
          artist: 'I.Toidze',
          year: '1941',
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
          id: 301,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_1525946205replace.jpg',
          title: '(we) Will Replace!',
          artist: 'V. Serov',
          year: '1941',
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
          id: 302,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00020.jpg',
          title: 'My student...',
          artist: 'V.Govorkov',
          year: '1948',
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
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_worksovpost_00021.jpg',
          title: 'My happiness...',
          artist: 'V.Koretsky',
          year: '1947',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 5, 9 ],
            "saturday": [ 13, 24, 25, 8 ],
            "sunday": [ 22, 23, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_enemyalert.jpg',
          title: 'The enemy is treacherous - be on the alert!',
          artist: 'V. Ivanov',
          year: '1945',
          rule: {
            "monday": [ 22, 23, 3, 7 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 5, 9 ],
            "sunday": [ 13, 24, 25, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_breadsovpost_00001.jpg',
          title: 'Do a good job - a good result will come',
          artist: '?',
          year: '1947',
          rule: {
            "monday": [ 13, 24, 25, 8 ],
            "tuesday": [ 22, 23, 3, 7 ],
            "wednesday": [ 18, 29, 9, 13 ],
            "thursday": [ 17, 28, 8, 12 ],
            "friday": [ 16, 27, 7, 11 ],
            "saturday": [ 15, 26, 6, 10 ],
            "sunday": [ 14, 25, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_capitalism_socialism.jpg',
          title: 'Under capitalism...Under socialism!',
          artist: 'V. Koretsky',
          year: '1948',
          rule: {
            "monday": [ 14, 25, 5, 9 ],
            "tuesday": [ 13, 24, 25, 8 ],
            "wednesday": [ 22, 23, 3, 7 ],
            "thursday": [ 18, 29, 9, 13 ],
            "friday": [ 17, 28, 8, 12 ],
            "saturday": [ 16, 27, 7, 11 ],
            "sunday": [ 15, 26, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00079.jpg',
          title: 'Delegate - is a servant of people',
          artist: 'L.Golovanov',
          year: '1947',
          rule: {
            "monday": [ 15, 26, 6, 10 ],
            "tuesday": [ 14, 25, 5, 9 ],
            "wednesday": [ 13, 24, 25, 8 ],
            "thursday": [ 22, 23, 3, 7 ],
            "friday": [ 18, 29, 9, 13 ],
            "saturday": [ 17, 28, 8, 12 ],
            "sunday": [ 16, 27, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00077.jpg',
          title: 'We will beat drought!',
          artist: 'V. Govorkov',
          year: '1949',
          rule: {
            "monday": [ 17, 28, 8, 12 ],
            "tuesday": [ 16, 27, 7, 11 ],
            "wednesday": [ 15, 26, 6, 10 ],
            "thursday": [ 14, 25, 26, 9 ],
            "friday": [ 23, 24, 4, 8 ],
            "saturday": [ 19, 30, 10, 14 ],
            "sunday": [ 18, 29, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00075.jpg',
          title: '(we) Will come to plenty!',
          artist: 'V.Ivanov',
          year: '1949',
          rule: {
            "monday": [ 18, 29, 9, 13 ],
            "tuesday": [ 17, 28, 8, 12 ],
            "wednesday": [ 16, 27, 7, 11 ],
            "thursday": [ 15, 26, 6, 10 ],
            "friday": [ 14, 25, 26, 9 ],
            "saturday": [ 23, 24, 4, 8 ],
            "sunday": [ 19, 30, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Russian Revolution',
          img_path: './img/october/popup_sovpolpost_00074.jpg',
          title: 'Vote for the prosperity of each town, each village of our beloved Motherland!',
          artist: 'G.Shubina',
          year: '1947',
          rule: {
            "monday": [ 19, 30, 10, 14 ],
            "tuesday": [ 18, 29, 9, 13 ],
            "wednesday": [ 17, 28, 8, 12 ],
            "thursday": [ 16, 27, 7, 11 ],
            "friday": [ 15, 26, 6, 10 ],
            "saturday": [ 14, 25, 26, 9 ],
            "sunday": [ 23, 24, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_arts_id_seq', (SELECT MAX(id) FROM october_arts));");
    });
};
