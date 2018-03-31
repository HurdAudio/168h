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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
          theme: 'Modern Art after World War II',
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
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/cosmic-donut-2008.jpg',
          title: 'Cosmic Donut',
          artist: 'Kenny Scharf',
          year: '2008',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 18 ],
            "friday": [ 15, 21, 9, 16 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/green-triptych-1963.jpg',
          title: 'Green Triptych',
          artist: 'Marjorie Strider',
          year: '1963',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 18 ],
            "saturday": [ 15, 21, 9, 16 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/watching-the-sea-1989.jpg',
          title: 'Watching the Sea',
          artist: 'Yayoi Kusama',
          year: '1989',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 18 ],
            "sunday": [ 15, 21, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-death-of-james-lee-byars-1994.jpg',
          title: 'The Death of James Lee Byars',
          artist: 'James Lee Byars',
          year: '1994',
          rule: {
            "monday": [ 15, 21, 9, 16 ],
            "tuesday": [ 21, 27, 15, 23 ],
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
          id: 130,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/carnival-figures-1956.jpg',
          title: 'Carnival Figures',
          artist: 'Rene Portocarrero',
          year: '1956',
          rule: {
            "monday": [ 16, 22, 10, 18 ],
            "tuesday": [ 15, 21, 9, 16 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-1975--.jpg',
          title: 'Untitled',
          artist: 'Terry Frost',
          year: '1975',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 18 ],
            "wednesday": [ 15, 21, 9, 16 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/cadavre-exquis-surrealist-group-collective-work-1948.jpg',
          title: 'Cadavre Exquis (Surrealist Group Collective Work)',
          artist: 'Marcelino Vespeira',
          year: '1948',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 18 ],
            "thursday": [ 15, 21, 9, 16 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/blue-on-white-1961.jpg',
          title: 'Blue on White',
          artist: 'Ellsworth Kelly',
          year: '1961',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 19 ],
            "friday": [ 16, 22, 10, 17 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-olgas-for-ernest-giles-1985.jpg',
          title: 'The Olgas for Ernest Giles',
          artist: 'Brett Whiteley',
          year: '1985',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 19 ],
            "saturday": [ 16, 22, 10, 17 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-trial-1947.jpg',
          title: 'The Trial',
          artist: 'Sidney Nolan',
          year: '1947',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 19 ],
            "sunday": [ 16, 22, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-cardgame-1950.jpg',
          title: 'The cardgame',
          artist: 'Balthus',
          year: '1950',
          rule: {
            "monday": [ 16, 22, 10, 17 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/white-provincetown-1959.jpg',
          title: 'White Provincetown',
          artist: 'Edward Corbett',
          year: '1959',
          rule: {
            "monday": [ 17, 23, 11, 19 ],
            "tuesday": [ 16, 22, 10, 17 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/la-strada-1956(1).jpg',
          title: 'La Strada',
          artist: 'Renato Guttuso',
          year: '1956',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 19 ],
            "wednesday": [ 16, 22, 10, 17 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/apple-half-peeled-on-a-black-plate-1976.jpg',
          title: 'Apple, Half-Peeled on a Black Plate',
          artist: 'Avigdor Arikha',
          year: '1976',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 19 ],
            "thursday": [ 16, 22, 10, 17 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/brick-lane-remix-i-2003.jpg',
          title: 'Brick Lane Remix I',
          artist: 'David Batchelor',
          year: '2003',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 20 ],
            "friday": [ 17, 23, 11, 18 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/cateyeguy-2008.jpg',
          title: 'Cateyeguy',
          artist: 'Kenny Scharf',
          year: '2008',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 20 ],
            "saturday": [ 17, 23, 11, 18 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/yellow-painting-1969.jpg',
          title: 'Yellow Painting',
          artist: 'Peter Joseph',
          year: '1969',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 20 ],
            "sunday": [ 17, 23, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/delta-theta-1961.jpg',
          title: 'Delta Theta',
          artist: 'Morris Louis',
          year: '1961',
          rule: {
            "monday": [ 17, 23, 11, 18 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-prodigal-son-1973.jpg',
          title: 'The Prodigal Son',
          artist: 'Carlos Merida',
          year: '1973',
          rule: {
            "monday": [ 18, 24, 12, 20 ],
            "tuesday": [ 17, 23, 11, 18 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/joy-pop-1998.jpg',
          title: 'Joy Pop',
          artist: 'Peter Halley',
          year: '1998',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 20 ],
            "wednesday": [ 17, 23, 11, 18 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/goodbye-have-a-nice-journey-1973.jpg',
          title: 'Goodbye, Have a Nice Journey!!',
          artist: 'Jim Nutt',
          year: '1973',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 20 ],
            "thursday": [ 17, 23, 11, 18 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/mermaid-in-lotus-pond-iii-2008.jpg',
          title: 'Mermaid in Lotus Pond III',
          artist: 'Jahar Dasgupta',
          year: '2008',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 21 ],
            "friday": [ 18, 24, 12, 19 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/mulata-e-p-ssaros-1967.jpg',
          title: 'Mulata e Pássaros',
          artist: 'Emiliano Di Cavalcanti',
          year: '1967',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 21 ],
            "saturday": [ 18, 24, 12, 19 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/daisy-lolita-pog-1994.jpg',
          title: 'Daisy Lolita Pog',
          artist: 'Ashley Bickerton',
          year: '1994',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 21 ],
            "sunday": [ 18, 24, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/havskrumelur-2005.jpg',
          title: 'Havskrumelur',
          artist: 'Rune Jansson',
          year: '2005',
          rule: {
            "monday": [ 18, 24, 12, 19 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/chi-chi-meets-the-death-of-painting-1985.jpg',
          title: 'Chi-Chi Meets the Death of Painting',
          artist: 'Philip Taaffe',
          year: '1985',
          rule: {
            "monday": [ 19, 25, 13, 21 ],
            "tuesday": [ 18, 24, 12, 19 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/stardust-1993.jpg',
          title: 'Stardust',
          artist: 'Peter Alexander',
          year: '1993',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 21 ],
            "wednesday": [ 18, 24, 12, 19 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/square-motif-blue-and-gold-the-eclipse-1950.jpg',
          title: 'Square Motif, Blue and Gold: The Eclipse',
          artist: 'Victor Pasmore',
          year: '1950',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 21 ],
            "thursday": [ 18, 24, 12, 19 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/over-and-above-13-1964.jpg',
          title: 'Over and Above #13',
          artist: 'Clarence Holbrook Carter',
          year: '1964',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 22 ],
            "friday": [ 19, 25, 13, 20 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/happy-family-1982.jpg',
          title: 'Happy family',
          artist: 'Roger Raveel',
          year: '1982',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 22 ],
            "saturday": [ 19, 25, 13, 20 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/abstraktes-bild-abstract-picture-1994.jpg',
          title: 'Abstract Picture',
          artist: 'Gerhard Richter',
          year: '1994',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 22 ],
            "sunday": [ 19, 25, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-1973.jpg',
          title: 'Untitled',
          artist: 'Verena Loewensberg',
          year: '1973',
          rule: {
            "monday": [ 19, 25, 13, 20 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/shadowman-34-e-12th-street-1982.jpg',
          title: 'Shadowman (34 E 12th Street)',
          artist: 'Richard Hambleton',
          year: '1982',
          rule: {
            "monday": [ 20, 26, 14, 22 ],
            "tuesday": [ 19, 25, 13, 20 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/dancers-at-the-bar.jpg',
          title: 'Dancers at the Bar',
          artist: 'Fernando Botero',
          year: '2001',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 22 ],
            "wednesday": [ 19, 25, 13, 20 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/composition-ii-1955.jpg',
          title: 'Composition II',
          artist: 'Huguette Arthur Bertrand',
          year: '1955',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 22 ],
            "thursday": [ 19, 25, 13, 20 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/army-of-mushrooms-2003.jpg',
          title: 'Army of Mushrooms',
          artist: 'Takashi Murakami',
          year: '2003',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 23 ],
            "friday": [ 20, 26, 14, 21 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/magical-space-forms-1948.jpg',
          title: 'Magical Space Forms',
          artist: 'Lorser Feitelson',
          year: '1948',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 23 ],
            "saturday": [ 20, 26, 14, 21 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/hellblau-im-licht-1965.jpg',
          title: 'Hellblau im Licht',
          artist: 'Ernst Wilhelm Nay',
          year: '1965',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 23 ],
            "sunday": [ 20, 26, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/paisagem-com-a-filha-da-francesa-nesse-dia-1966.jpg',
          title: 'paisagem com a filha da francesa, nesse dia',
          artist: 'Antonio Areal',
          year: '1966',
          rule: {
            "monday": [ 20, 26, 14, 21 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/self-portrait-in-studio-1976.jpg',
          title: 'Self Portrait in Studio',
          artist: 'Brett Whiteley',
          year: '1976',
          rule: {
            "monday": [ 21, 27, 15, 23 ],
            "tuesday": [ 20, 26, 14, 21 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/corncob-horse-in-outer-space-1978.jpg',
          title: 'Corncob Horse in Outer Space',
          artist: 'Maria Primachenko',
          year: '1978',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 23 ],
            "wednesday": [ 20, 26, 14, 21 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/writing-2005.jpg',
          title: 'Writing',
          artist: 'Zhang Xiaogang',
          year: '2005',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 23 ],
            "thursday": [ 20, 26, 14, 21 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/at-the-clinic-1979.jpg',
          title: 'At the clinic',
          artist: 'George Pemba',
          year: '1979',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 22 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/studio-1958.jpg',
          title: 'Studio',
          artist: 'Craig Kauffman',
          year: '1958',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 22 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/andy-warhol-1970.jpg',
          title: 'Andy Warhol',
          artist: 'Alice Neel',
          year: '1970',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [24, 30, 18, 26  ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/jardin-fleuri-2000.jpg',
          title: 'Jardin fleuri',
          artist: 'Aurel Cojan',
          year: '2000',
          rule: {
            "monday": [ 21, 27, 15, 22 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/9-1963.jpg',
          title: '#9',
          artist: 'Karl Benjamin',
          year: '1963',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 22 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/sem-t-tulo-1969.jpg',
          title: 'Sem título',
          artist: 'Menez',
          year: '1969',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 22 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-1960.jpg',
          title: 'Untitled',
          artist: 'Enrique Grau',
          year: '1960',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 22 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-1974.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1974',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 24 ],
            "friday": [ 21, 27, 15, 22 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/self-portrait-in-fur-hat-1972.jpg',
          title: 'Self-Portrait in Fur Hat',
          artist: 'Joan Brown',
          year: '1972',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 24 ],
            "saturday": [ 21, 27, 15, 22 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/frog-test-1983.jpg',
          title: 'Frog Test',
          artist: 'Dieter Asmus',
          year: '1983',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 24 ],
            "sunday": [ 21, 27, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/dama-en-la-playa-1953.jpg',
          title: 'Dama en la playa',
          artist: 'Jose Manuel Capuletti',
          year: '1953',
          rule: {
            "monday": [ 21, 27, 15, 22 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/elements-for-meatball-curtain-1970.jpg',
          title: 'Elements for Meatball Curtain',
          artist: 'Oyvind Fahlstrom',
          year: '1970',
          rule: {
            "monday": [ 22, 28, 16, 24 ],
            "tuesday": [ 21, 27, 15, 22 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/cavaliere-che-cade-1982.jpg',
          title: 'Cavaliere che cade',
          artist: 'Gustavo Foppiani',
          year: '1982',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 24 ],
            "wednesday": [ 21, 27, 15, 22 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/anti-corpi-cilindrici-2006.jpg',
          title: 'Anti-corpi cilindrici',
          artist: 'Tomas Maldonado',
          year: '2006',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 24 ],
            "thursday": [ 21, 27, 15, 22 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/yellow-mandala-1970.jpg',
          title: 'Yellow Mandala',
          artist: 'Clarence Holbrook Carter',
          year: '1970',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 25 ],
            "friday": [ 22, 28, 16, 23 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/with-love-to-jean-paul-belmondo-1962.jpg',
          title: 'With Love to Jean-Paul Belmondo',
          artist: 'Pauline Boty',
          year: '1962',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 25 ],
            "saturday": [ 22, 28, 16, 23 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/wave-93-1-1993.jpg',
          title: 'Wave 93-1',
          artist: 'Matsutani',
          year: '1993',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 25 ],
            "sunday": [ 22, 28, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled1963.jpg',
          title: 'Untitled',
          artist: 'Adolf Fleischmann',
          year: '1963',
          rule: {
            "monday": [ 22, 28, 16, 23 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/double-captain-shit-and-the-legend-of-the-black-stars-1997.jpg',
          title: 'Double Captain Shit and the Legend of the Black Stars',
          artist: 'Chris Ofili',
          year: '1997',
          rule: {
            "monday": [ 23, 29, 17, 25 ],
            "tuesday": [ 22, 28, 16, 23 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/inner-structure-no-5-1955.jpg',
          title: 'Inner Structure no. 5',
          artist: 'Kazuo Nakamura',
          year: '1955',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 25 ],
            "wednesday": [ 22, 28, 16, 23 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-1980.jpg',
          title: 'Untitled',
          artist: 'Giuseppe Santomaso',
          year: '1980',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 25 ],
            "thursday": [ 22, 28, 16, 23 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/lebanon-2007.jpg',
          title: 'Lebanon',
          artist: 'John Hoyland',
          year: '2007',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 26 ],
            "friday": [ 23, 29, 17, 24 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/carne-vegetal-1948.jpg',
          title: 'Carne vegetal',
          artist: 'Marcelino Vespeira',
          year: '1948',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 26 ],
            "saturday": [ 23, 29, 17, 24 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/summer-moon-2005.jpg',
          title: 'Summer Moon',
          artist: 'Pat Steir',
          year: '2005',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 26 ],
            "sunday": [ 23, 29, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/fairfield-porter-1-1954.jpg',
          title: 'Fairfield Porter #1',
          artist: 'Elaine de Kooning',
          year: '1954',
          rule: {
            "monday": [ 23, 29, 17, 24 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-fish-shop-1955.jpg',
          title: 'The fish shop',
          artist: 'John Brack',
          year: '1955',
          rule: {
            "monday": [ 24, 30, 18, 26 ],
            "tuesday": [ 23, 29, 17, 24 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-eclipse-1952.jpg',
          title: 'The Eclipse',
          artist: 'Carlos Orozco Romero',
          year: '1952',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 26 ],
            "wednesday": [ 23, 29, 17, 24 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/dialogue-goggles-1968.jpg',
          title: 'Dialogue goggles',
          artist: 'Lygia Clark',
          year: '1968',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 26 ],
            "thursday": [ 23, 29, 17, 24 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/minuet-1966.jpg',
          title: 'Minuet',
          artist: 'Tess Jaray',
          year: '1966',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 27 ],
            "friday": [ 24, 30, 18, 25 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-rain-of-light-1994.jpg',
          title: 'The Rain of Light',
          artist: 'Silviu Oravitzan',
          year: '1994',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 27 ],
            "saturday": [ 24, 30, 18, 25 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/one-way-1984.jpg',
          title: 'One Way',
          artist: 'Robert Cottingham',
          year: '1984',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 27 ],
            "sunday": [ 24, 30, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-may-20-1950.jpg',
          title: 'Untitled (May 20)',
          artist: 'Myron Stout',
          year: '1950',
          rule: {
            "monday": [ 24, 30, 18, 25 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/alta-pink-corner-projection-1968.jpg',
          title: 'Alta Pink (Corner Projection)',
          artist: 'James Turrell',
          year: '1968',
          rule: {
            "monday": [ 25, 1, 19, 27 ],
            "tuesday": [ 24, 30, 18, 25 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-apotheosis-of-ramon-hoyos.jpg',
          title: 'The Apotheosis of Ramon Hoyos',
          artist: 'Fernando Botero',
          year: '1959',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 27 ],
            "wednesday": [ 24, 30, 18, 25 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/peinture-n-10-1965.jpg',
          title: 'Peinture n°10',
          artist: 'Michel Parmentier',
          year: '1965',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 27 ],
            "thursday": [ 24, 30, 18, 25 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/light-tree-1983.jpg',
          title: 'Light Tree',
          artist: 'Nanda Vigo',
          year: '1983',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 28 ],
            "friday": [ 25, 1, 19, 26 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/it-s-not-a-race-2008.jpg',
          title: 'It\'s Not A Race',
          artist: 'Banksy',
          year: '2008',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 28 ],
            "saturday": [ 25, 1, 19, 26 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/summon-up-11-1958.jpg',
          title: 'Summon up, #11',
          artist: 'Frederick Hammersley',
          year: '1958',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 28 ],
            "sunday": [ 25, 1, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-1992.jpg',
          title: 'Untitled',
          artist: 'Hassel Smith',
          year: '1992',
          rule: {
            "monday": [ 25, 1, 19, 26 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/ghost-and-friends-1999.jpg',
          title: 'Ghost and Friends',
          artist: 'Omer Uluc',
          year: '1999',
          rule: {
            "monday": [ 26, 2, 20, 28 ],
            "tuesday": [ 25, 1, 19, 26 ],
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
          id: 208,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/paul-mccartney-and-flowers-1967.jpg',
          title: 'Paul McCartney and Flowers',
          artist: 'John Bratby',
          year: '1967',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 28 ],
            "wednesday": [ 25, 1, 19, 26 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/remember-at-doftana-1972.jpg',
          title: 'Remember at Doftana',
          artist: 'Florin Maxa',
          year: '1972',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 28 ],
            "thursday": [ 25, 1, 19, 26 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/three-sorcerers-1977.jpg',
          title: 'Three Sorcerers',
          artist: 'Rene Portocarrero',
          year: '1977',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 29 ],
            "friday": [ 26, 2, 20, 27 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-witch-doctor-1963.jpg',
          title: 'The Witch Doctor',
          artist: 'John Ferren',
          year: '1963',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday": [ 27, 3, 21, 29 ],
            "saturday": [ 26, 2, 20, 27 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/michelangelo-s-david-1987.jpg',
          title: 'Michelangelo\'s \'David\'',
          artist: 'Eduardo Paolozzi',
          year: '1987',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 29 ],
            "sunday": [ 26, 2, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/ecstasy-b-1953.jpg',
          title: 'Ecstasy (B)',
          artist: 'Kiyoshi Saito',
          year: '1953',
          rule: {
            "monday": [ 26, 2, 20, 27 ],
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
          id: 214,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/glass-gold-fish-and-bird-1970.jpg',
          title: 'Glass, Gold Fish and Bird',
          artist: 'Ding Yanyong',
          year: '1970',
          rule: {
            "monday": [ 27, 3, 21, 29 ],
            "tuesday": [ 26, 2, 20, 27 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [  29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/adult-female-sexual-organs-2005.jpg',
          title: 'Adult Female Sexual Organs',
          artist: 'Wangechi Mutu',
          year: '2005',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 29 ],
            "wednesday": [ 26, 2, 20, 27 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/return-of-the-prodigal-1997.jpg',
          title: 'Return of the Prodigal',
          artist: 'Godfrey Blow',
          year: '1997',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday": [ 27, 3, 21, 29 ],
            "thursday": [ 26, 2, 20, 27 ],
            "friday":  [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/f-r-joseph-beuys-1987.jpg',
          title: 'Für Joseph Beuys',
          artist: 'Juliao Sarmento',
          year: '1987',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 30 ],
            "friday":  [ 27, 3, 21, 28 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/mona-lisa-at-the-age-of-twelve-years.jpg',
          title: 'Mona Lisa at the Age of Twelve Years',
          artist: 'Fernando Botero',
          year: '1959',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday":  [ 28, 4, 22, 30 ],
            "saturday": [ 27, 3, 21, 28 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/desta-vez-eu-consigo-fugir-1967.jpg',
          title: 'Desta vez eu consigo fugir',
          artist: 'Claudio Tozzi',
          year: '1967',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday":  [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 30 ],
            "sunday": [ 27, 3, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-satyr-1958.jpg',
          title: 'The Satyr',
          artist: 'Rafael Zabaleta',
          year: '1958',
          rule: {
            "monday": [ 27, 3, 21, 28 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday":  [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/hot-rod-race-1976.jpg',
          title: 'Hot Rod Race',
          artist: 'Robert Williams',
          year: '1976',
          rule: {
            "monday": [ 28, 4, 22, 30 ],
            "tuesday": [ 27, 3, 21, 28 ],
            "wednesday":  [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/john-f-kennedy-1963.jpg',
          title: 'John F. Kennedy',
          artist: 'Elaine de Kooning',
          year: '1963',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 30 ],
            "wednesday":  [ 27, 3, 21, 28 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/maculae-2009.jpg',
          title: 'Maculae',
          artist: 'Marjan Eggermont',
          year: '2009',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday":  [ 28, 4, 22, 30 ],
            "thursday": [ 27, 3, 21, 28 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/secret-1966.jpg',
          title: 'Secret',
          artist: 'Rodolfo Arico',
          year: '1966',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday":  [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 1 ],
            "friday": [ 28, 4, 22, 29 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/europa-1999.jpg',
          title: 'Europa',
          artist: 'Thomas Hirschhorn',
          year: '1999',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday":  [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 1 ],
            "saturday": [ 28, 4, 22, 29 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/two-squares-1967.jpg',
          title: 'Two Squares',
          artist: 'Almir Mavignier',
          year: '1967',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday":  [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 1 ],
            "sunday": [ 28, 4, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/green-frost-1957.jpg',
          title: 'Green Frost',
          artist: 'Norman Bluhm',
          year: '1957',
          rule: {
            "monday": [ 28, 4, 22, 29 ],
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
          id: 228,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/tennis-1983.jpg',
          title: 'Tennis',
          artist: 'Howard Arkley',
          year: '1983',
          rule: {
            "monday": [ 29, 5, 23, 1 ],
            "tuesday": [ 28, 4, 22, 29 ],
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
          id: 229,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/tux-2003.jpg',
          title: 'Tux',
          artist: 'Ralph Goings',
          year: '2003',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 1 ],
            "wednesday": [ 28, 4, 22, 29 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/little-joe-picking-his-nose-1975.jpg',
          title: 'Little Joe Picking His Nose',
          artist: 'Steve Wheeler',
          year: '1975',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 1 ],
            "thursday": [ 28, 4, 22, 29 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/portrait-of-wendy-1984.jpg',
          title: 'Portrait of Wendy',
          artist: 'Brett Whiteley',
          year: '1984',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 2 ],
            "friday": [ 29, 5, 23, 30 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/politipo-contrazione-espansione-1970.jpg',
          title: 'Politipo Contrazione-Espansione',
          artist: 'Alberto Biasi',
          year: '1970',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 2 ],
            "saturday": [ 29, 5, 23, 30 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/dandelions-1985.jpg',
          title: 'Dandelions',
          artist: 'Yayoi Kusama',
          year: '1985',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 2 ],
            "sunday": [ 29, 5, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/chrysanthum-1988.jpg',
          title: 'Chrysanthum',
          artist: 'Lin Fengmian',
          year: '1988',
          rule: {
            "monday": [ 29, 5, 23, 30 ],
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
          id: 235,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/mother-of-pearl-spirits-2002.jpg',
          title: 'Mother-of-pearl Spirits',
          artist: 'Rebecca Horn',
          year: '2002',
          rule: {
            "monday": [ 30, 6, 24, 2 ],
            "tuesday": [ 29, 5, 23, 30 ],
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
          id: 236,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-chickens-are-happy-sun-1949.jpg',
          title: 'The chickens are happy sun',
          artist: 'Qi Baishi',
          year: '1949',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 2 ],
            "wednesday": [ 29, 5, 23, 30 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/le-chemin-de-croix-1973.jpg',
          title: 'Le Chemin de Croix',
          artist: 'Dado',
          year: '1973',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 2 ],
            "thursday": [ 29, 5, 23, 30 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/passage-de-l-op-ra-1971.jpg',
          title: 'Passage de l\'Opéra',
          artist: 'Conroy Maddox',
          year: '1970 - 1971',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 5 ],
            "thursday": [ 1, 7, 25, 3 ],
            "friday": [ 30, 6, 24, 1 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/southern-justice-murder-in-mississippi-1965.jpg',
          title: 'Southern Justice (Murder in Mississippi)',
          artist: 'Norman Rockwell',
          year: '1965',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 5 ],
            "friday": [ 1, 7, 25, 3 ],
            "saturday": [ 30, 6, 24, 1 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/owl-1977.jpg',
          title: 'Owl',
          artist: 'Huang Yongyu',
          year: '1977',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 5 ],
            "saturday": [ 1, 7, 25, 3 ],
            "sunday": [ 30, 6, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/arbres-1984.jpg',
          title: 'Arbres',
          artist: 'Mario Prassinos',
          year: '1984',
          rule: {
            "monday": [ 30, 6, 24, 1 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 5 ],
            "sunday": [ 1, 7, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/komposition-1984.jpg',
          title: 'Komposition',
          artist: 'Martin Disler',
          year: '1984',
          rule: {
            "monday": [ 1, 7, 25, 3 ],
            "tuesday": [ 30, 6, 24, 1 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/zimmer-2004.jpg',
          title: 'Zimmer',
          artist: 'Matthias Weischer',
          year: '2004',
          rule: {
            "monday": [ 2, 8, 26, 5 ],
            "tuesday": [ 1, 7, 25, 3 ],
            "wednesday": [ 30, 6, 24, 1 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/well-done-1987.jpg',
          title: 'Well Done',
          artist: 'Bill Woodrow',
          year: '1987',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 5 ],
            "wednesday": [ 1, 7, 25, 3 ],
            "thursday": [ 30, 6, 24, 1 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/five-pears-1976.jpg',
          title: 'Five Pears',
          artist: 'William Scott',
          year: '1976',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 6 ],
            "wednesday": [ 3, 9, 27, 6 ],
            "thursday": [ 2, 8, 26, 4 ],
            "friday": [ 1, 7, 25, 2 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/self-portrait-1994.jpg',
          title: 'Self Portrait',
          artist: 'David Michael Hinnebusch',
          year: '1994',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 6 ],
            "thursday": [ 3, 9, 27, 6 ],
            "friday": [ 2, 8, 26, 4 ],
            "saturday": [ 1, 7, 25, 2 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/metaesquema-dois-brancos-1958.jpg',
          title: 'Metaesquema (Dois brancos)',
          artist: 'Helio Oiticica',
          year: '1958',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 6 ],
            "saturday": [ 2, 8, 26, 4 ],
            "sunday": [ 1, 7, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/le-poisson-choa-2000.jpg',
          title: 'Le poisson choa',
          artist: 'Nicolae Maniu',
          year: '2000',
          rule: {
            "monday": [ 1, 7, 25, 2 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 6 ],
            "sunday": [ 2, 8, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/invention-of-a-dream-1960.jpg',
          title: 'Invention of a Dream',
          artist: 'Richard Oelze',
          year: '1960',
          rule: {
            "monday": [ 2, 8, 26, 4 ],
            "tuesday": [ 1, 7, 25, 2 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 6 ],
            "sunday": [ 3, 9, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/she-dragon-1964.jpg',
          title: 'She-Dragon',
          artist: 'Konrad Klapheck',
          year: '1964',
          rule: {
            "monday": [ 3, 9, 27, 6 ],
            "tuesday": [ 2, 8, 26, 4 ],
            "wednesday": [ 1, 7, 25, 2 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/riviera-winter-colour-symphony-1955.jpg',
          title: 'Riviera Winter Colour Symphony',
          artist: 'Jock Macdonald',
          year: '1955',
          rule: {
            "monday": [ 4, 10, 28, 6 ],
            "tuesday": [ 3, 9, 27, 6 ],
            "wednesday": [ 2, 8, 26, 4 ],
            "thursday": [ 1, 7, 25, 2 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-blue-figure-and-tiger-1964.jpg',
          title: 'Untitled (Blue Figure and Tiger)',
          artist: 'M.F. Husain',
          year: '1964',
          rule: {
            "monday": [ 6, 12, 30, 8 ],
            "tuesday": [ 5, 11, 29, 7 ],
            "wednesday": [ 4, 10, 28, 7 ],
            "thursday": [ 3, 9, 27, 5 ],
            "friday": [ 2, 8, 26, 3 ],
            "saturday": [ 8, 14, 2, 10 ],
            "sunday": [ 7, 13, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/untitled-1974--.jpg',
          title: 'Untitled',
          artist: 'Kenneth Price',
          year: '1974',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 7 ],
            "thursday": [ 4, 10, 28, 7 ],
            "friday": [ 3, 9, 27, 5 ],
            "saturday": [ 2, 8, 26, 3 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/geometrische-komposition-1982.jpg',
          title: 'Geometrische Komposition',
          artist: 'Verena Loewensberg',
          year: '1982',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 7 ],
            "friday": [ 4, 10, 28, 7 ],
            "saturday": [ 3, 9, 27, 5 ],
            "sunday": [ 2, 8, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/echoed-forms-1947.jpg',
          title: 'Echoed Forms',
          artist: 'Boris Margo',
          year: '1947',
          rule: {
            "monday": [ 2, 8, 26, 3 ],
            "tuesday": [ 8, 14, 2, 10 ],
            "wednesday": [ 7, 13, 1, 9 ],
            "thursday": [ 6, 12, 30, 8 ],
            "friday": [ 5, 11, 29, 7 ],
            "saturday": [ 4, 10, 28, 7 ],
            "sunday": [ 3, 9, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/recorte-branco-1968.jpg',
          title: 'Recorte branco',
          artist: 'Jose Escada',
          year: '1968',
          rule: {
            "monday": [ 3, 9, 27, 5 ],
            "tuesday": [ 2, 8, 26, 3 ],
            "wednesday": [ 8, 14, 2, 10 ],
            "thursday": [ 7, 13, 1, 9 ],
            "friday": [ 6, 12, 30, 8 ],
            "saturday": [ 5, 11, 29, 7 ],
            "sunday": [ 4, 10, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/it-hurts-to-wait-with-love-if-love-is-somewhere-else(1).jpg',
          title: '630A It Hurts to Wait With Love if Love Is Somewhere Else',
          artist: 'Friedensreich Hundertwasser',
          year: '1971',
          rule: {
            "monday": [ 4, 10, 28, 7 ],
            "tuesday": [ 3, 9, 27, 5 ],
            "wednesday": [ 2, 8, 26, 3 ],
            "thursday": [ 8, 14, 2, 10 ],
            "friday": [ 7, 13, 1, 9 ],
            "saturday": [ 6, 12, 30, 8 ],
            "sunday": [ 5, 11, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/baj-chez-picasso-2-1969.jpg',
          title: 'Baj Chez Picasso 2',
          artist: 'Enrico Baj',
          year: '1969',
          rule: {
            "monday": [ 5, 11, 29, 7 ],
            "tuesday": [ 4, 10, 28, 7 ],
            "wednesday": [ 3, 9, 27, 5 ],
            "thursday": [ 2, 8, 26, 3 ],
            "friday": [ 8, 14, 2, 10 ],
            "saturday": [ 7, 13, 1, 9 ],
            "sunday": [ 6, 12, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/the-day-after-yesterday-1973.jpg',
          title: 'The Day After Yesterday',
          artist: 'Desmond Morris',
          year: '1973',
          rule: {
            "monday": [ 7, 13, 1, 9 ],
            "tuesday": [ 6, 12, 30, 8 ],
            "wednesday": [ 5, 11, 29, 8 ],
            "thursday": [ 4, 10, 28, 6 ],
            "friday": [ 3, 9, 27, 4 ],
            "saturday": [ 9, 15, 3, 11 ],
            "sunday": [ 8, 14, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Modern Art after World War II',
          img_path: './img/september/stone-age-1968.jpg',
          title: 'Stone Age',
          artist: 'Samuel Bak',
          year: '1968',
          rule: {
            "monday": [ 8, 14, 2, 10 ],
            "tuesday": [ 7, 13, 1, 9 ],
            "wednesday": [ 6, 12, 30, 8 ],
            "thursday": [ 5, 11, 29, 8 ],
            "friday": [ 4, 10, 28, 6 ],
            "saturday": [ 3, 9, 27, 4 ],
            "sunday": [ 9, 15, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_arts_id_seq', (SELECT MAX(id) FROM september_arts));");
    });
};
