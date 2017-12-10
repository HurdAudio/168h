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
        },
        {
          id: 26,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/zurich-1974.jpg',
          title: 'Zurich',
          artist: 'Raoul Ubac',
          year: '1974',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/moon-meditation-1960.jpg',
          title: 'Moon Meditation',
          artist: 'Richard Pousette-Dart',
          year: '1960',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/minoa-1962.jpg',
          title: 'Minoa',
          artist: 'Paul Feeley',
          year: '1962',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/digging-for-night-crawlers-1985.jpg',
          title: 'Digging for Night Crawlers',
          artist: 'Robert Qualters',
          year: '1985',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-1950-1.jpg',
          title: 'Untitled',
          artist: 'Julius Bissier',
          year: '1950',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
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
          id: 31,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/monadi-1949.jpg',
          title: 'Monadi',
          artist: 'Mario Ballocco',
          year: '1949',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/est-calor-em-evora-1983.jpg',
          title: 'Està Calor em Evora',
          artist: 'Antonio Dacosta',
          year: '1983',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/cronus-young-1968.jpg',
          title: 'Cronus Young',
          artist: 'David Hare',
          year: '1968',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/typographic-nude-1965.jpg',
          title: 'Typographic Nude',
          artist: 'Robert Heinecken',
          year: '1965',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/10th-sculpture-1963.jpg',
          title: '10th Sculpture',
          artist: 'Michael Bolus',
          year: '1963',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/fish-bowl.jpg',
          title: 'Fish Bowl',
          artist: 'Erte',
          year: '?',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/three-trees-georgia-1969.jpg',
          title: 'Three Trees, Georgia',
          artist: 'Ivan Albright',
          year: '1969',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/tricomplex-1959.jpg',
          title: 'Tricomplex',
          artist: 'Leo Leuppi',
          year: '1959',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/cotyo-perfica-volupie-1963.jpg',
          title: 'Cotyo, Perfica, Volupie',
          artist: 'Felix Labisse',
          year: '1963',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/x-ray-of-m-o-s-skull-1964.jpg',
          title: 'X-Ray of M.O.\'s Skull',
          artist: 'Meret Oppenheim',
          year: '1964',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/madchen-am-meer.jpg',
          title: 'Madchen am Meer',
          artist: 'Dieter Asmus',
          year: '1973',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/sunrise-in-mallorca.jpg',
          title: 'Sunrise in Mallorca',
          artist: 'Jerry W. McDaniel',
          year: '2011',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/escale-1964.jpg',
          title: 'Escale',
          artist: 'Herve Telemaque',
          year: '1964',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/web910.jpg',
          title: 'Para Largo Tiempo',
          artist: 'Vlady Kibalchich Rusakov',
          year: '?',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-death-mask-1978-1.jpg',
          title: 'Untitled (Death Mask)',
          artist: 'Arnulf Rainer',
          year: '1978',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/self-portrait-1955.jpg',
          title: 'Self-portrait',
          artist: 'John Brack',
          year: '1955',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/forme-1998.jpg',
          title: 'Forme',
          artist: 'Olivier Debre',
          year: '1998',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-1956-1.jpg',
          title: 'Untitled',
          artist: 'Zao Wou-Ki',
          year: '1956',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/composition-1954.jpg',
          title: 'Composition',
          artist: 'Huguette Arthur Bertrand',
          year: '1954',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/peinture-23-mai-1969-1969.jpg',
          title: 'Peinture 23 Mai 1969',
          artist: 'Pierre Soulages',
          year: '1969',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/naufragio-2003.jpg',
          title: 'Naufragio',
          artist: 'Carlo Maria Mariani',
          year: '2003',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/black-and-blue-3-2011.jpg',
          title: 'Black and Blue 3',
          artist: 'Cesar Paternosto',
          year: '2011',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/noir-jaune-et-bleu-1991.jpg',
          title: 'Noir, Jaune et bleu',
          artist: 'Albert Bitran',
          year: '1991',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/macarena-esperanza-1971.jpg',
          title: 'Macarena Esperanza',
          artist: 'Audrey Flack',
          year: '1971',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/ombre-port-e-de-maurice-henry-1968.jpg',
          title: 'Ombre portée de Maurice Henry',
          artist: 'Lourdes Castro',
          year: '1968',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/interno-con-piano-forte-1968.jpg',
          title: 'Interno con piano forte',
          artist: 'Valerio Adami',
          year: '1968',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/serigrafia.jpg',
          title: 'Serigrafia',
          artist: 'Ramirez Villamizar',
          year: '?',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/exist-ncia-1985.jpg',
          title: 'Existência',
          artist: 'Manabu Mabe',
          year: '1985',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/fish.jpg',
          title: 'Fish',
          artist: 'Aldemir Martins',
          year: '?',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/accomplishments-1964.jpg',
          title: 'Accomplishments',
          artist: 'James Lee Byars',
          year: '1964',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-one-hundred-spaces-1997.jpg',
          title: 'Untitled (One Hundred Spaces)',
          artist: 'Rachel Whiteread',
          year: '1997',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/composition-2010.jpg',
          title: 'Composition',
          artist: 'JonOne',
          year: '2010',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/time-to-dance-2012.jpg',
          title: 'Time to Dance',
          artist: 'John C. Kuchera',
          year: '2012',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/flat-1000x1000-075-f-u1-1-2.jpg',
          title: 'Unspiral',
          artist: 'Gianni Sarcone',
          year: '2013',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/karma-2003.jpg',
          title: 'Karma',
          artist: 'Do-ho Suh',
          year: '2003',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/islam-1965.jpg',
          title: 'Islam',
          artist: 'Carla Accardi',
          year: '1965',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/light-1961.jpg',
          title: 'Light',
          artist: 'Petre Abrudan',
          year: '1961',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/eve-1963.jpg',
          title: 'Eve',
          artist: 'Mordecai Ardon',
          year: '1963',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/four-darks-in-red-1958.jpg',
          title: 'Four Darks in Red',
          artist: 'Mark Rothko',
          year: '1958',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/corona-i-1995.jpg',
          title: 'Corona I',
          artist: 'Paul Brach',
          year: '1995',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 8 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/number-23-1960.jpg',
          title: 'Number 23',
          artist: 'John McLaughlin',
          year: '1960',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 8 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/the-cold-war-blonde-1959.jpg',
          title: 'The Cold-War Blonde',
          artist: 'Robert G. Harris',
          year: '1959',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/le-passage-1956.jpg',
          title: 'Le Passage',
          artist: 'Kay Sage',
          year: '1956',
          rule: {
            "monday": [ 7, 13, 1, 8 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/dried-flowers-1964.jpg',
          title: 'Dried Flowers',
          artist: 'Hiroyuki Tajima',
          year: '1964',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 8 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/dr-pepper-1948.jpg',
          title: 'Dr. Pepper',
          artist: 'Eduardo Paolozzi',
          year: '1948',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 8 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/desmaterializa-o-ascens-o-1990.jpg',
          title: 'Desmaterialização - Ascensão',
          artist: 'Eduardo Nery',
          year: '1990',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 8 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/may-that-nuclear-war-be-cursed-1978.jpg',
          title: 'May That Nuclear War Be Cursed!',
          artist: 'Maria Primachenko',
          year: '1978',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 11 ],
            "friday": [ 8, 14, 2, 9 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/pilar-1955.jpg',
          title: 'Pilar',
          artist: 'Jose Manuel Capuletti',
          year: '1955',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 11 ],
            "saturday": [ 8, 14, 2, 9 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/nino-2000.jpg',
          title: 'Nino',
          artist: 'George Mavroides',
          year: '2000',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/sliced-tomatoes-1979.jpg',
          title: 'Sliced Tomatoes',
          artist: 'Marjorie Strider',
          year: '1979',
          rule: {
            "monday": [ 8, 14, 2, 9 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/over-ten-thousand-individual-works-1991.jpg',
          title: 'Over Ten Thousand Individual Works',
          artist: 'Allan McCollum',
          year: '1987 - 1991',
          rule: {
            "monday": [ 9, 15, 3, 11 ],
            "tuesday": [ 8, 14, 2, 9 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/cambridge-green-1968.jpg',
          title: 'Cambridge Green',
          artist: 'Mark Lancaster',
          year: '1968',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 11 ],
            "wednesday": [ 8, 14, 2, 9 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/new-frontiers-slogan-von-j-f-kennedy-1964.jpg',
          title: 'New Frontiers (Slogan von J.F. Kennedy)',
          artist: 'Samuel Buri',
          year: '1964',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 11 ],
            "thursday": [ 8, 14, 2, 9 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-1989(4).jpg',
          title: 'Untitled',
          artist: 'Mostafa Dashti',
          year: '1989',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 12 ],
            "friday": [ 9, 15, 3, 10 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/ang-magbabayo-pounding-rice-1979.jpg',
          title: 'Ang Magbabayo (Pounding Rice)',
          artist: 'Vicente Manansala',
          year: '1979',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 12 ],
            "saturday": [ 9, 15, 3, 10 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/eclipse-1962.jpg',
          title: 'Eclipse',
          artist: 'Jeremy Moon',
          year: '1962',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 12 ],
            "sunday": [ 9, 15, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/polyptych-m-1968.jpg',
          title: 'Polyptych M',
          artist: 'Alberto Biasi',
          year: '1968',
          rule: {
            "monday": [ 9, 15, 3, 10 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/stone-bird-1952.jpg',
          title: 'Stone Bird',
          artist: 'Endre Balint',
          year: '1952',
          rule: {
            "monday": [ 10, 16, 4, 12 ],
            "tuesday": [ 9, 15, 3, 10 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/black-flowers-september-26-1999-1999.jpg',
          title: 'Black Flowers, September 26, 1999',
          artist: 'Donald Sultan',
          year: '1999',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 12 ],
            "wednesday": [ 9, 15, 3, 10 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/still-life-autumn-fashion-1978.jpg',
          title: 'Still Life: Autumn Fashion',
          artist: 'Patrick Caulfield',
          year: '1978',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 12 ],
            "thursday": [ 9, 15, 3, 10 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/number-20-1949.jpg',
          title: 'Number 20',
          artist: 'Bradley Walker Tomlin',
          year: '1949',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 13 ],
            "friday": [ 10, 16, 4, 11 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-1947.jpg',
          title: 'Untitled',
          artist: 'Forrest Bess',
          year: '1947',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 13 ],
            "saturday": [ 10, 16, 4, 11 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/460-hommage-au-tachisme-1961(1).jpg',
          title: '460 Hommage au Tachisme',
          artist: 'Friedensreich Hundertwasser',
          year: '1961',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 13 ],
            "sunday": [ 10, 16, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/ideal-life-1950.jpg',
          title: 'Ideal Life',
          artist: 'Leonor Fini',
          year: '1950',
          rule: {
            "monday": [ 10, 16, 4, 11 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/piron-piron-1975.jpg',
          title: 'Piron Piron',
          artist: 'Sadamasa Motonaga',
          year: '1975',
          rule: {
            "monday": [ 11, 17, 5, 13 ],
            "tuesday": [ 10, 16, 4, 11 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/john-coltrane-1961.jpg',
          title: 'John Coltrane',
          artist: 'Gandy Brodie',
          year: '1961',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 13 ],
            "wednesday": [ 10, 16, 4, 11 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/east-wind-moon-wind-1959.jpg',
          title: 'East Wind / Moon Wind',
          artist: 'Tadashi Nakayama',
          year: '1959',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 13 ],
            "thursday": [ 10, 16, 4, 11 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/zone.jpg',
          title: 'Zone',
          artist: 'Philip Guston',
          year: '1953 - 1954',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 14 ],
            "friday": [ 11, 17, 5, 12 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/freeway-exit-1995.jpg',
          title: 'Freeway (Exit)',
          artist: 'Howard Arkley',
          year: '1995',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 14 ],
            "saturday": [ 11, 17, 5, 12 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-1946.jpg',
          title: 'Untitled',
          artist: 'Mario Prassinos',
          year: '1946',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 14 ],
            "sunday": [ 11, 17, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/f-los-ouvir-a-tua-corneta-negro-1974.jpg',
          title: 'Fá-los ouvir a tua corneta negro',
          artist: 'Sa Nogueira',
          year: '1974',
          rule: {
            "monday": [ 11, 17, 5, 12 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/bloodline-big-family-1995.jpg',
          title: 'Bloodline - Big Family',
          artist: 'Zhang Xiaogang',
          year: '1995',
          rule: {
            "monday": [ 12, 18, 6, 14 ],
            "tuesday": [ 11, 17, 5, 12 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/tang-2007.jpg',
          title: 'Tang',
          artist: 'Kenny Scharf',
          year: '2007',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 14 ],
            "wednesday": [ 11, 17, 5, 12 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/lippy-1968.jpg',
          title: 'Lippy',
          artist: 'Jim Nutt',
          year: '1968',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 14 ],
            "thursday": [ 11, 17, 5, 12 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/untitled-1968.jpg',
          title: 'Untitled',
          artist: 'Dan Christensen',
          year: '1968',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 15 ],
            "friday": [ 12, 18, 6, 13 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/still-life-with-bud-1992.jpg',
          title: 'Still Life with Bud',
          artist: 'Paul Wonner',
          year: '1992',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 15 ],
            "saturday": [ 12, 18, 6, 13 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/women-and-dog-1964.jpg',
          title: 'Women and Dog',
          artist: 'Marisol Escobar',
          year: '1964',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 15 ],
            "sunday": [ 12, 18, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/big-sur-and-branch-1974.jpg',
          title: 'Big Sur and Branch',
          artist: 'Eyvind Earle',
          year: '1974',
          rule: {
            "monday": [ 12, 18, 6, 13 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/wild-orange-story-1971.jpg',
          title: 'Wild Orange Story',
          artist: 'Johnny Warangkula Tjupurrula',
          year: '1971',
          rule: {
            "monday": [ 13, 19, 7, 15 ],
            "tuesday": [ 12, 18, 6, 13 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/green-fields-1994.jpg',
          title: 'Green Fields',
          artist: 'Eyvind Earle',
          year: '1994',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 15 ],
            "wednesday": [ 12, 18, 6, 13 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/custom-print-no-ii-1965.jpg',
          title: 'Custom Print No. II',
          artist: 'Peter Phillips',
          year: '1965',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 15 ],
            "thursday": [ 12, 18, 6, 13 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/here-is-a-sign-1970.jpg',
          title: 'Here is a Sign',
          artist: 'Forrest Bess',
          year: '1970',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 16 ],
            "friday": [ 13, 19, 7, 14 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/neoconcret-ballet-ii-1959.jpg',
          title: 'Neoconcret Ballet #II',
          artist: 'Lygia Pape',
          year: '1959',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 16 ],
            "saturday": [ 13, 19, 7, 14 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/blue-head-1961.jpg',
          title: 'Blue head',
          artist: 'Gerard Sekoto',
          year: '1961',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 16 ],
            "sunday": [ 13, 19, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/think-tank-2003.jpg',
          title: 'Think Tank',
          artist: 'Banksy',
          year: '2003',
          rule: {
            "monday": [ 13, 19, 7, 14 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/fractal-flasher-1994.jpg',
          title: 'Fractal Flasher',
          artist: 'Nam June Paik',
          year: '1994',
          rule: {
            "monday": [ 14, 20, 8, 16 ],
            "tuesday": [ 13, 19, 7, 14 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/luna-de-silencio-1961.jpg',
          title: 'Luna de silencio',
          artist: 'Lilia Carrillo',
          year: '1961',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 16 ],
            "wednesday": [ 13, 19, 7, 14 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/bichos-1963(1).jpg',
          title: 'Bichos',
          artist: 'Ivan Serpa',
          year: '1963',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 16 ],
            "thursday": [ 13, 19, 7, 14 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/delaumbre-bleue-1950.jpg',
          title: 'Delaumbre Bleue',
          artist: 'Olle Baertling',
          year: '1950',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 17 ],
            "friday": [ 14, 20, 8, 15 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/african-night-market-1965.jpg',
          title: 'African Night Market',
          artist: 'Walter Battiss',
          year: '1965',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 17 ],
            "saturday": [ 14, 20, 8, 15 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/puissance-oc-anique-2004.jpg',
          title: 'Puissance océanique',
          artist: 'Chu Teh-Chun',
          year: '2004',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 17 ],
            "sunday": [ 14, 20, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/leopard.jpg',
          title: 'Leopard',
          artist: 'Antonio Ligabue',
          year: '1955',
          rule: {
            "monday": [ 14, 20, 8, 15 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/dyptique-1987.jpg',
          title: 'Dyptique',
          artist: 'Luciano Bartolini',
          year: '1987',
          rule: {
            "monday": [ 15, 21, 9, 17 ],
            "tuesday": [ 14, 20, 8, 15 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/the-dressmaker-1982.jpg',
          title: 'The Dressmaker',
          artist: 'Conrad Marca-Relli',
          year: '1982',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 17 ],
            "wednesday": [ 14, 20, 8, 15 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'post-WWII modern',
          img_path: './img/september/mlr-1992-1.jpg',
          title: 'MLR',
          artist: 'Isa Genzken',
          year: '1992',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 17 ],
            "thursday": [ 14, 20, 8, 15 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_arts_id_seq', (SELECT MAX(id) FROM september_arts));");
    });
};
