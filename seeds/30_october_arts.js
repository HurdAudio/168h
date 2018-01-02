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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_arts_id_seq', (SELECT MAX(id) FROM october_arts));");
    });
};
