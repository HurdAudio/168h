'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('september_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('september_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/the-bird-lover-1952.jpg',
          title: 'The Bird Lover',
          artist: 'Adja Yunkers',
          year: '1952',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/composition-1974.jpg',
          title: 'Composition',
          artist: 'Cesar Domela',
          year: '1974',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/verdi-requiem-pg-201-05-fragm-1958.jpg',
          title: 'Verdi Requiem, pg. 201-05 (Fragm.)',
          artist: 'Robert Strubin',
          year: '1958',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/les-ongles-noirs-1981.jpg',
          title: 'Les ongles noirs',
          artist: 'Aurelie Nemours',
          year: '1981',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/venus-of-szentendre-1968.jpg',
          title: 'Venus of Szentendre',
          artist: 'Bela Czobel',
          year: '1968',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/garden-in-saint-denis-1980.jpg',
          title: 'Garden in Saint Denis',
          artist: 'Betty Parsons',
          year: '1980',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/mankind-s-struggle-for-lasting-peace-detail-1953-1.jpg',
          title: 'Mankind\'s Struggle for Lasting Peace (detail)',
          artist: 'Vela Zanetti',
          year: '1953',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/jaune-1962.jpg',
          title: 'Jaune',
          artist: 'Fernand Leduc',
          year: '1962',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/man-in-silver-suit.jpg',
          title: 'Man in Silver Suit',
          artist: 'Lucian Freud',
          year: '1998',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/infra-black-drawing-1963.jpg',
          title: 'Infra-Black Drawing',
          artist: 'Paul Paun',
          year: '1963',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/wait-untitled-xix-1968.jpg',
          title: 'Wait - Untitled XIX',
          artist: 'Piero Dorazio',
          year: '1968',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-12-part-circle-8ft-6in-diameter-1970.jpg',
          title: 'Untitled,12 part Circle, 8ft 6in Diameter',
          artist: 'Robert Swain',
          year: '1970',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/les-indes-sur-la-rivi-re-1967.jpg',
          title: 'Les Indes sur la rivière',
          artist: 'Jean Messagier',
          year: '1967',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/wachstum-ii-1950.jpg',
          title: 'Wachstum II',
          artist: 'Leo Leuppi',
          year: '1950',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/abduction-a-1961.jpg',
          title: 'Abduction A',
          artist: 'Robert Goodnough',
          year: '1961',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/multiplicatiion-of-the-arcs-1954.jpg',
          title: 'Multiplicatiion of the Arcs',
          artist: 'Yves Tanguy',
          year: '1954',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/illustration-for-v-voiculescu-s-last-shakespearean-sonnets-1982(3).jpg',
          title: 'Illustration for V. Voiculescu\'s "Last Shakespearean Sonnets"',
          artist: 'Margareta Sterian',
          year: '1982',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/my-oneness-a-universe-of-colours-1957.jpg',
          title: 'My Oneness, A Universe of Colours',
          artist: 'Alfred Jensen',
          year: '1957',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/two-bathers-1960.jpg',
          title: 'Two Bathers',
          artist: 'Elmer Bischoff',
          year: '1960',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/collins-st-5p-m-1955.jpg',
          title: 'Collins St. 5p.m.',
          artist: 'John Brack',
          year: '1955',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/improvisation-modern-city-cacophonic-1956.jpg',
          title: 'Improvisation (Modern City): Cacophonic!',
          artist: 'Robert Strubin',
          year: '1956',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/the-acrobatic-rectangle-per-eleven-1967.jpg',
          title: 'The Acrobatic Rectangle, Per Eleven',
          artist: 'Alfred Jensen',
          year: '1967',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/portrait-of-a-beauty-among-peonies-1958.jpg',
          title: 'Portrait of a Beauty Among Peonies',
          artist: 'Le Pho',
          year: '1958',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-1958.jpg',
          title: 'Untitled',
          artist: 'Gunther Gerzso',
          year: '1958',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/portrait-1970.jpg',
          title: 'Portrait',
          artist: 'Abidin Dino',
          year: '1970',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_arts_id_seq', (SELECT MAX(id) FROM september_arts));");
    });
};
