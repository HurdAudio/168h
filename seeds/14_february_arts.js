'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('february_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('february_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ironew-york-of-the-negro-policeman.jpg',
          title: 'Irony of the Negro Policeman',
          artist: 'Jean-Michel Basquiat',
          year: '1981',
          rule: {
            "monday": [3, 11, 19, 27],
            "tuesday": [5, 13, 21, 29],
            "wednesday": [7, 15, 23, 2],
            "thursday": [9, 17, 25, 4],
            "friday": [11, 19, 27, 6],
            "saturday": [13, 21, 29, 8],
            "sunday": [1, 9, 17, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/african-american-flag-1990.jpg',
          title: 'African-American Flag',
          artist: 'David Hammons',
          year: '1990',
          rule: {
            "monday": [1, 9, 17, 25],
            "tuesday": [3, 11, 19, 27],
            "wednesday": [5, 13, 21, 29],
            "thursday": [7, 15, 23, 2],
            "friday": [9, 17, 25,4],
            "saturday": [11, 19, 27, 6],
            "sunday": [13, 21, 29, 8]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/obnoxious-liberals.jpg',
          title: 'Obnoxious Liberals',
          artist: 'Jean-Michel Basquiat',
          year: '1982',
          rule: {
            "monday": [13, 21, 29, 8],
            "tuesday": [1, 9, 17, 25],
            "wednesday": [3, 11, 19, 27],
            "thursday": [5, 13, 21, 29],
            "friday": [7, 15, 23, 2],
            "saturday": [9, 17, 25, 4],
            "sunday": [11, 19, 27, 6]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/return-of-god-to-africa-1984.jpg',
          title: 'Return Of God to Africa',
          artist: 'Fab 5 Freddy',
          year: '1984',
          rule: {
            "monday": [11, 19, 27, 6],
            "tuesday": [13, 21, 29, 8],
            "wednesday": [1, 9, 17, 25],
            "thursday": [3, 11, 19, 27],
            "friday": [5, 13, 21, 29],
            "saturday": [7, 15, 23, 2],
            "sunday": [9, 17, 25, 4]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/untitled-green-power-1975.jpg',
          title: 'Untitled/Green Power',
          artist: 'David Hammons',
          year: '1975',
          rule: {
            "monday": [9, 17, 25, 4],
            "tuesday": [11, 19, 27, 6],
            "wednesday": [13, 21, 28, 8],
            "thursday": [1, 9, 17, 25],
            "friday": [3, 11, 19, 27],
            "saturday": [5, 13, 21, 29],
            "sunday": [7, 15, 23, 2]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/max-roach.jpg',
          title: 'Max Roach',
          artist: 'Jean-Michel Basquiat',
          year: '1984',
          rule: {
            "monday": [7, 15, 23, 2],
            "tuesday": [9, 17, 25, 4],
            "wednesday": [11, 19, 27, 6],
            "thursday": [13, 21, 28, 8],
            "friday": [1, 9, 17, 25],
            "saturday": [3, 11, 19, 27],
            "sunday": [5, 13, 21, 29]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/harriet-tubman-series-panel-4-1940(1).jpg',
          title: 'Harriet Tubman Series (Panel #4)',
          artist: 'Jacob Lawrence',
          year: '1940',
          rule: {
            "monday": [5, 13, 21, 29],
            "tuesday": [7, 15, 23, 2],
            "wednesday": [9, 17, 25, 4],
            "thursday": [11, 19, 27, 6],
            "friday": [13, 21, 28, 8],
            "saturday": [1, 9, 17, 25],
            "sunday": [3, 11, 19, 27]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/cabeza.jpg',
          title: 'Cabeza',
          artist: 'Jean-Michel Basquiat',
          year: '1982',
          rule: {
            "monday": [4, 12, 20, 28],
            "tuesday": [6, 14, 22, 1],
            "wednesday": [8, 16, 24, 3],
            "thursday": [10, 18, 26, 5],
            "friday": [12, 20, 28, 7],
            "saturday": [14, 22, 29, 9],
            "sunday": [2, 10, 18, 26]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/untitled-2000.jpg',
          title: 'Untitled',
          artist: 'David Hammons',
          year: '2000',
          rule: {
            "monday": [2, 10, 18, 26],
            "tuesday": [4, 12, 20, 28],
            "wednesday": [6, 14, 22, 1],
            "thursday": [8, 16, 24, 3],
            "friday": [10, 18, 26, 5],
            "saturday": [12, 20, 28, 7],
            "sunday": [14, 22, 29, 9]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/untitled-1986.jpg',
          title: 'Untitled',
          artist: 'Fab 5 Freddy',
          year: '1986',
          rule: {
            "monday": [14, 22, 29, 9],
            "tuesday": [2, 10, 18, 26],
            "wednesday": [4, 12, 20, 28],
            "thursday": [6, 14, 22, 1],
            "friday": [8, 16, 24, 3],
            "saturday": [10, 18, 26, 5],
            "sunday": [12, 20, 28, 7]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/starry-night-and-the-astronauts-1972.jpg',
          title: 'Starry Night and the Astronauts',
          artist: 'Alma Woodsey Thomas',
          year: '1972',
          rule: {
            "monday": [12, 20, 28, 7],
            "tuesday": [14, 22, 29, 9],
            "wednesday": [2, 10, 18, 26],
            "thursday": [4, 12, 20, 28],
            "friday": [9, 14, 22, 1],
            "saturday": [8, 16, 24, 3],
            "sunday": [10, 18, 26, 5]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/untitled-1986-3.jpg',
          title: 'Untitled',
          artist: 'Fab 5 Freddy',
          year: '1986',
          rule: {
            "monday": [10, 18, 26, 5],
            "tuesday": [12, 20, 28, 7],
            "wednesday": [14, 22, 29, 9],
            "thursday": [2, 10, 18, 26],
            "friday": [4, 12, 20, 28],
            "saturday": [9, 14, 22, 1],
            "sunday": [8, 16, 24, 3]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/untitled-1989.jpg',
          title: 'Untitled',
          artist: 'David Hammons',
          year: '1989',
          rule: {
            "monday": [8, 16, 24, 3],
            "tuesday": [10, 18, 26, 5],
            "wednesday": [12, 20, 28, 9],
            "thursday": [14, 22, 29, 9],
            "friday": [2, 10, 18, 26],
            "saturday": [4, 12, 20, 28],
            "sunday": [9, 14, 22, 1]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/flexible.jpg',
          title: 'Flexible',
          artist: 'Jean-Michel Basquiat',
          year: '1984',
          rule: {
            "monday": [10, 15, 23, 2],
            "tuesday": [9, 17, 25, 4],
            "wednesday": [11, 19, 27, 6],
            "thursday": [13, 21, 29, 10],
            "friday": [15, 23, 1, 10],
            "saturday": [3, 11, 19, 27],
            "sunday": [5, 13, 21, 29]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/strike-1949.jpg',
          title: 'Strike',
          artist: 'Jacob Lawrence',
          year: '1949',
          rule: {
            "monday": [5, 13, 21, 29],
            "tuesday": [10, 15, 23, 2],
            "wednesday": [9, 17, 25, 4],
            "thursday": [11, 19, 27, 6],
            "friday": [13, 21, 29, 10],
            "saturday": [15, 23, 1, 10],
            "sunday": [3, 11, 19, 27]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/the-return-of-odysseus-homage-to-pintoricchio-and-benin-1977.jpg',
          title: 'The Return of Odysseus (Homage to Pintoricchio and Benin)',
          artist: 'Romare Bearden',
          year: '1977',
          rule: {
            "monday": [3, 11, 19, 27],
            "tuesday": [5, 13, 21, 29],
            "wednesday": [10, 15, 23, 2],
            "thursday": [9, 17, 25, 4],
            "friday": [11, 19, 27, 6],
            "saturday": [13, 21, 29, 10],
            "sunday": [15, 23, 1, 10]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/salome-1900.jpg',
          title: 'Salome',
          artist: 'Henry Ossawa Tanner',
          year: '1900',
          rule: {
            "monday": [15, 23, 1, 10],
            "tuesday": [3, 11, 19, 27],
            "wednesday": [5, 13, 21, 29],
            "thursday": [10, 15, 23, 2],
            "friday": [9, 17, 25, 4],
            "saturday": [11, 19, 27, 6],
            "sunday": [13, 21, 29, 10]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/time-before-history-1994.jpg',
          title: 'Time Before History',
          artist: 'Sam Gilliam',
          year: '1994',
          rule: {
            "monday": [13, 21, 29, 10],
            "tuesday": [15, 23, 1, 10],
            "wednesday": [3, 11, 19, 27],
            "thursday": [5, 13, 21, 29],
            "friday": [10, 15, 23, 2],
            "saturday": [9, 17, 25, 4],
            "sunday": [11, 19, 27, 6]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/self-portrait-1941.jpg',
          title: 'Self-Portrait',
          artist: 'Horace Pippin',
          year: '1941',
          rule: {
            "monday": [11, 19, 27, 6],
            "tuesday": [13, 21, 29, 10],
            "wednesday": [15, 23, 1, 10],
            "thursday": [3, 11, 19, 27],
            "friday": [5, 13, 21, 29],
            "saturday": [10, 15, 23, 2],
            "sunday": [9, 17, 25, 4]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/white-roses-sing-and-sing-1976.jpg',
          title: 'White Roses Sing and Sing',
          artist: 'Alma Woodsey Thomas',
          year: '1976',
          rule: {
            "monday": [9, 17, 25, 4],
            "tuesday": [11, 19, 27, 6],
            "wednesday": [13, 21, 29, 10],
            "thursday": [15, 23, 1, 10],
            "friday": [3, 11, 19, 27],
            "saturday": [5, 13, 21, 29],
            "sunday": [10, 15, 23, 2]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/anna-mae-1944.jpg',
          title: 'Anna Mae',
          artist: 'William H. Johnson',
          year: '1944',
          rule: {
            "monday": [11, 16, 24, 3],
            "tuesday": [10, 18, 26, 5],
            "wednesday": [12, 20, 28, 7],
            "thursday": [14, 22, 1, 11],
            "friday": [16, 24, 2, 11],
            "saturday": [4, 12, 20, 28],
            "sunday": [6, 14, 22, 1]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/portrait-of-an-african-american-man-1820.jpg',
          title: 'Portrait of an African American Man',
          artist: 'Joshua Johnson',
          year: '1820',
          rule: {
            "monday": [6, 14, 22, 1],
            "tuesday": [11, 16, 24, 3],
            "wednesday": [10, 18, 26, 5],
            "thursday": [12, 20, 28, 7],
            "friday": [14, 22, 1, 11],
            "saturday": [16, 24, 2, 11],
            "sunday": [4, 12, 20, 28]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/newspaper-boy-1869.jpg',
          title: 'Newspaper Boy',
          artist: 'Edward Mitchell Bannister',
          year: '1869',
          rule: {
            "monday": [4, 12, 20, 28],
            "tuesday": [6, 14, 22, 1],
            "wednesday": [11, 16, 24, 3],
            "thursday": [10, 18, 26, 5],
            "friday": [12, 20, 28, 7],
            "saturday": [14, 22, 1, 11],
            "sunday": [16, 24, 2, 11]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/sojourner-truth-et-al.jpg',
          title: 'Sojourner Truth, Et. Al',
          artist: 'Charles Wilbert White',
          year: '?',
          rule: {
            "monday": [16, 24, 2, 11],
            "tuesday": [4, 12, 20, 28],
            "wednesday": [6, 14, 22, 1],
            "thursday": [11, 16, 24, 3],
            "friday": [10, 18, 26, 5],
            "saturday": [12, 20, 28, 7],
            "sunday": [14, 22, 1, 11]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/254613800-03182015-terry_adkins_16_bomb_oral_history.jpg',
          title: 'Fire\'s Either',
          artist: 'Terry Adkins',
          year: '1994',
          rule: {
            "monday": [14, 22, 1, 11],
            "tuesday": [16, 24, 2, 11],
            "wednesday": [4, 12, 20, 28],
            "thursday": [6, 14, 22, 1],
            "friday": [11, 16, 24, 3],
            "saturday": [10, 18, 26, 5],
            "sunday": [12, 20, 28, 7]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/dsc-0046-copy_orig.jpg',
          title: 'Border Distilled',
          artist: 'Mequitta Ahuja',
          year: '2016',
          rule: {
            "monday": [12, 20, 28, 7],
            "tuesday": [14, 22, 1, 11],
            "wednesday": [16, 24, 20, 11],
            "thursday": [4, 12, 20, 28],
            "friday": [6, 14, 22, 1],
            "saturday": [11, 16, 24, 3],
            "sunday": [10, 18, 26, 5]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/The_Artwork_of_Larry_D._Alexander_013.jpg',
          title: 'Princess of the Blue',
          artist: 'Larry D. Alexander',
          year: '2007',
          rule: {
            "monday": [10, 18, 26, 5],
            "tuesday": [12, 20, 28, 7],
            "wednesday": [14, 22, 1, 11],
            "thursday": [16, 24, 20, 11],
            "friday": [4, 12, 20, 28],
            "saturday": [6, 14, 22, 1],
            "sunday": [11, 16, 24, 3]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/303gallery-LaylahAli_h.jpg',
          title: 'Untitled',
          artist: 'Laylah Ali',
          year: '2005 - 2007',
          rule: {
            "monday": [12, 17, 25, 4],
            "tuesday": [11, 19, 27, 6],
            "wednesday": [13, 21, 29, 8],
            "thursday": [15, 23, 2, 12],
            "friday": [17, 25, 21, 12],
            "saturday": [5, 13, 21, 29],
            "sunday": [7, 15, 23, 2]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/JulesAllenPhotography-Rhythmology3.jpg',
          title: 'Rhythmology Series',
          artist: 'Jules Allen',
          year: '2006',
          rule: {
            "monday": [7, 15, 23, 2],
            "tuesday": [12, 17, 25, 4],
            "wednesday": [11, 19, 27, 6],
            "thursday": [13, 21, 29, 8],
            "friday": [15, 23, 2, 12],
            "saturday": [17, 25, 21, 12],
            "sunday": [5, 13, 21, 29]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/110106carverfallcolor1a.jpg',
          title: 'Statue of George Washington Carver',
          artist: 'Tina Allen',
          year: 'xx - xxi Cent.',
          rule: {
            "monday": [5, 13, 21, 29],
            "tuesday": [7, 15, 23, 2],
            "wednesday": [12, 17, 25, 4],
            "thursday": [11, 19, 27, 6],
            "friday": [13, 21, 29, 8],
            "saturday": [15, 23, 2, 12],
            "sunday": [17, 25, 21, 12]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/symbolAllston.jpg',
          title: 'Symbol',
          artist: 'Charles Alston',
          year: '1953',
          rule: {
            "monday": [17, 25, 21, 12],
            "tuesday": [5, 13, 21, 29],
            "wednesday": [7, 15, 23, 2],
            "thursday": [12, 17, 25, 4],
            "friday": [11, 19, 27, 6],
            "saturday": [13, 21, 29, 8],
            "sunday": [15, 23, 2, 12]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/IdRatherTwoStepThanWaltz.jpg',
          title: 'I\'d Rather Two-Step Than Waltz',
          artist: 'Amalia Amaki',
          year: '2001',
          rule: {
            "monday": [15, 23, 2, 12],
            "tuesday": [17, 25, 21, 12],
            "wednesday": [5, 13, 21, 29],
            "thursday": [7, 15, 23, 2],
            "friday": [12, 17, 25, 4],
            "saturday": [11, 19, 27, 6],
            "sunday": [13, 21, 29, 8]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/932_my_mother_was_the_greatest_dancer1.90b7m3itx6w4wsg88wkg84wgw.6ylu316ao144c8c4woosog48w.th.jpeg',
          title: 'My Mother Was the Greatest Dancer',
          artist: 'Emma Amos',
          year: '2009',
          rule: {
            "monday": [13, 21, 29, 8],
            "tuesday": [15, 23, 2, 12],
            "wednesday": [17, 25, 21, 12],
            "thursday": [5, 13, 21, 29],
            "friday": [ 7, 15, 23, 2 ],
            "saturday": [12, 17, 25, 4],
            "sunday": [11, 19, 27, 6]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/7795.jpg',
          title: 'Corner Pocket',
          artist: 'Benny Andrews',
          year: '1989',
          rule: {
            "monday": [11, 19, 27, 6],
            "tuesday": [13, 21, 29, 8],
            "wednesday": [15, 23, 2, 12],
            "thursday": [17, 25, 21, 12],
            "friday": [ 5, 13, 21, 29 ],
            "saturday": [7, 15, 23, 2],
            "sunday": [12, 17, 25, 4]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/hqdefault.jpg',
          title: 'Walking on Thin Ice',
          artist: 'Edgar Arceneaux',
          year: '2003',
          rule: {
            "monday": [13, 18, 24, 5],
            "tuesday": [12, 20, 28, 7],
            "wednesday": [14, 22, 1, 9],
            "thursday": [16, 24, 3, 13],
            "friday": [ 18, 26, 22, 13 ],
            "saturday": [6, 14, 22, 1],
            "sunday": [8, 16, 24, 3]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/a88554e480b8305523f99878b1823408.jpg',
          title: 'For God\'s Sake, Look at that Art!',
          artist: 'Kyle Baker',
          year: 'xxi Cent.',
          rule: {
            "monday": [8, 16, 24, 3],
            "tuesday": [13, 18, 24, 5],
            "wednesday": [12, 20, 28, 7],
            "thursday": [14, 22, 1, 9],
            "friday": [ 16, 24, 3, 13 ],
            "saturday": [18, 26, 22, 13],
            "sunday": [6, 14, 22, 1]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/baker,m_crown46nov.jpg',
          title: 'Western Bandit Trails No. 7',
          artist: 'Matt Baker',
          year: '1946',
          rule: {
            "monday": [6, 14, 22, 1],
            "tuesday": [8, 16, 24, 3],
            "wednesday": [13, 18, 24, 5],
            "thursday": [12, 20, 28, 7],
            "friday": [ 14, 22, 1, 9 ],
            "saturday": [16, 24, 3, 13],
            "sunday": [18, 26, 22, 13]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/seattle-pic-470.jpg',
          title: 'Image of two women taken in Seattle',
          artist: 'James Presley Ball',
          year: '1869',
          rule: {
            "monday": [ 18, 26, 22, 13 ],
            "tuesday": [6, 14, 22, 1 ],
            "wednesday": [8, 16, 24, 3 ],
            "thursday": [13, 18, 24, 5 ],
            "friday": [ 12, 20, 28, 7 ],
            "saturday": [14, 22, 1, 9 ],
            "sunday": [16, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/7dc4b_july10_camh_img.jpg',
          title: 'Three Navy Sailors',
          artist: 'Alvin Baltrop',
          year: '1979 - 1972',
          rule: {
            "monday": [ 16, 24, 3, 13 ],
            "tuesday": [ 18, 26, 22, 13 ],
            "wednesday": [ 6, 14, 22, 1 ],
            "thursday": [ 8, 16, 24, 3 ],
            "friday": [ 13, 18, 24, 5 ],
            "saturday": [12, 20, 28, 7 ],
            "sunday": [14, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/H0045-L24499585.jpg',
          title: 'Untitled',
          artist: 'Henry Wilmer Bannarn',
          year: 'xx Cent.',
          rule: {
            "monday": [ 14, 22, 1, 9 ],
            "tuesday": [ 16, 24, 3, 13 ],
            "wednesday": [ 18, 26, 22, 13 ],
            "thursday": [ 6, 14, 22, 1 ],
            "friday": [ 8, 16, 24, 3 ],
            "saturday": [13, 18, 24, 5 ],
            "sunday": [12, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Edward_Mitchell_Bannisters_painting_Driving_Home_the_Cows.jpg',
          title: 'Driving Home the Cows',
          artist: 'Edward Mitchell Bannister',
          year: '1881',
          rule: {
            "monday": [ 12, 20, 28, 7 ],
            "tuesday": [ 14, 24, 1, 9 ],
            "wednesday": [ 16, 24, 3, 13 ],
            "thursday": [ 18, 26, 22, 13 ],
            "friday": [ 6, 14, 22, 1 ],
            "saturday": [ 8, 16, 24, 3 ],
            "sunday": [ 13, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/arniebarnes.jpg',
          title: 'Fastbreak',
          artist: 'Ernie Barnes',
          year: 'xx Cent.',
          rule: {
            "monday": [ 14, 19, 25, 6 ],
            "tuesday": [ 13, 21, 29, 8 ],
            "wednesday": [ 15, 25, 2, 10 ],
            "thursday": [ 17, 25, 4, 14 ],
            "friday": [ 19, 27, 23, 13 ],
            "saturday": [ 7, 15, 23, 2 ],
            "sunday": [ 9, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Richmond-Barthe-The-Singing-Slave-1940.jpg',
          title: 'The Singing Slave',
          artist: 'Richmond Barthé',
          year: '1940',
          rule: {
            "monday": [ 9, 17, 25, 4 ],
            "tuesday": [ 14, 19, 25, 6 ],
            "wednesday": [ 13, 21, 29, 8 ],
            "thursday": [ 15, 25, 2, 10 ],
            "friday": [ 17, 25, 4, 14 ],
            "saturday": [ 19, 27, 23, 13 ],
            "sunday": [ 7, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/800px-WEB_DuBois_1918.jpg',
          title: 'W.E.B. Du Bois, photographed in 1918',
          artist: 'C.M. Battey',
          year: '1918',
          rule: {
            "monday": [ 7, 15, 23, 2 ],
            "tuesday": [ 9, 17, 25, 4 ],
            "wednesday": [ 14, 19, 25, 6 ],
            "thursday": [ 13, 21, 29, 8 ],
            "friday": [ 15, 25, 2, 10 ],
            "saturday": [ 17, 25, 4, 14 ],
            "sunday": [ 19, 27, 23, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Romare_Bearden_-_The_Calabash,_1970,_Library_of_Congress.jpg',
          title: 'The Calabash',
          artist: 'Romare Bearden',
          year: '1970',
          rule: {
            "monday": [ 19, 27, 23, 13 ],
            "tuesday": [ 7, 15, 23, 2 ],
            "wednesday": [ 9, 17, 25, 4 ],
            "thursday": [ 14, 19, 25, 6 ],
            "friday": [ 13, 21, 29, 8 ],
            "saturday": [ 15, 25, 2, 10 ],
            "sunday": [ 17, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/990705.jpg',
          title: 'Country Morning',
          artist: 'Arthello Beck, Jr.',
          year: 'xx Cent.',
          rule: {
            "monday": [ 17, 25, 4, 14 ],
            "tuesday": [ 19, 27, 23, 13 ],
            "wednesday": [ 7, 15, 23, 2 ],
            "thursday": [ 9, 17, 25, 4 ],
            "friday": [ 14, 19, 25, 6 ],
            "saturday": [ 13, 21, 29, 8 ],
            "sunday": [ 15, 25, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Booker_T_Washington_New_Orleans_1915.jpg',
          title: 'Booker T. Washington, New Orleans',
          artist: 'Arthur P. Bedou',
          year: '1915',
          rule: {
            "monday": [ 15, 25, 2, 10 ],
            "tuesday": [ 17, 25, 4, 14 ],
            "wednesday": [ 19, 27, 23, 13 ],
            "thursday": [ 7, 15, 23, 2 ],
            "friday": [ 9, 17, 25, 4 ],
            "saturday": [ 14, 19, 25, 6 ],
            "sunday": [ 13, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2013-12-09-mandela.jpg',
          title: 'Nelson Mandela, Father of a Rainbow Nation, Goes Home',
          artist: 'Darrin Bell',
          year: '2013',
          rule: {
            "monday": [ 13, 21, 29, 8 ],
            "tuesday": [ 15, 25, 2, 10 ],
            "wednesday": [ 17, 25, 4, 14 ],
            "thursday": [ 19, 27, 23, 13 ],
            "friday": [ 7, 15, 23, 2 ],
            "saturday": [ 9, 17, 25, 4 ],
            "sunday": [ 14, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/1013542.jpg',
          title: 'Intimate Circles',
          artist: 'Mary Bell',
          year: 'xx Cent.',
          rule: {
            "monday": [ 15, 20, 26, 7 ],
            "tuesday": [ 14, 22, 1, 9 ],
            "wednesday": [ 16, 26, 3, 11 ],
            "thursday": [ 18, 26, 5, 15 ],
            "friday": [ 20, 28, 24, 14 ],
            "saturday": [ 8, 16, 24, 3 ],
            "sunday": [ 10, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/20120729-BEY-slide-R3DW-articleLarge.jpg',
          title: '1970s Harlem',
          artist: 'Dawoud Bey',
          year: 'xx Cent.',
          rule: {
            "monday": [ 10, 18, 26, 5 ],
            "tuesday": [ 15, 20, 26, 7 ],
            "wednesday": [ 14, 22, 1, 9 ],
            "thursday": [ 16, 26, 3, 11 ],
            "friday": [ 18, 26, 5, 15 ],
            "saturday": [ 20, 28, 24, 14 ],
            "sunday": [ 8, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/13nubia.jpg',
          title: 'House of the Turtle',
          artist: 'John T. Biggers',
          year: 'xx Cent.',
          rule: {
            "monday": [ 8, 16, 24, 3 ],
            "tuesday": [ 10, 18, 26, 5 ],
            "wednesday": [ 15, 20, 26, 7 ],
            "thursday": [ 14, 22, 1, 9 ],
            "friday": [ 16, 26, 3, 11 ],
            "saturday": [ 18, 26, 5, 15 ],
            "sunday": [ 20, 28, 24, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2011_Sanford_Biggers_CHESHIRE_428H.jpg',
          title: 'Cheshire',
          artist: 'Sanford Biggers',
          year: '2008',
          rule: {
            "monday": [ 20, 28, 24, 14 ],
            "tuesday": [ 8, 16, 24, 3 ],
            "wednesday": [ 10, 18, 26, 5 ],
            "thursday": [ 15, 20, 26, 7 ],
            "friday": [ 14, 22, 1, 9 ],
            "saturday": [ 16, 26, 3, 11 ],
            "sunday": [ 18, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Co4SwDqXEAAoHvT.jpg',
          title: 'Fantastique',
          artist: 'Gene Bilbrew',
          year: '1950s',
          rule: {
            "monday": [ 18, 26, 5, 15 ],
            "tuesday": [ 20, 28, 24, 14 ],
            "wednesday": [ 8, 16, 24, 3 ],
            "thursday": [ 10, 18, 26, 5 ],
            "friday": [ 15, 20, 26, 7 ],
            "saturday": [ 14, 22, 1, 9 ],
            "sunday": [ 16, 26, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Mcarthur-binion-self-portrait.jpg',
          title: 'Self Portrait: XVI',
          artist: 'McArthur Binion',
          year: '2014',
          rule: {
            "monday": [ 16, 26, 3, 11 ],
            "tuesday": [ 18, 26, 5, 15 ],
            "wednesday": [ 20, 28, 24, 14 ],
            "thursday": [ 8, 16, 24, 3 ],
            "friday": [ 10, 18, 26, 5 ],
            "saturday": [ 15, 20, 26, 7 ],
            "sunday": [ 14, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/129291288091107104_984d57ff-cd88-4daf-963d-b64ca1ffc6e7_180908_570.jpeg',
          title: 'Youth',
          artist: 'Robert Blackburn',
          year: '1951',
          rule: {
            "monday": [ 14, 22, 1, 9 ],
            "tuesday": [ 16, 26, 3, 11 ],
            "wednesday": [ 18, 26, 5, 15 ],
            "thursday": [ 20, 28, 24, 14 ],
            "friday": [ 8, 16, 24, 3 ],
            "saturday": [ 10, 18, 26, 5 ],
            "sunday": [ 15, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/preparing-to-sound-the-alarm-thomas-blackshear.jpg',
          title: 'Preparing to Sound the Alarm',
          artist: 'Thomas Blackshear',
          year: 'xx Cent.',
          rule: {
            "monday": [ 16, 21, 27, 8 ],
            "tuesday": [ 15, 23, 2, 10 ],
            "wednesday": [ 17, 27, 4, 12 ],
            "thursday": [ 19, 27, 6, 16 ],
            "friday": [ 21, 29, 25, 15 ],
            "saturday": [ 9, 17, 25, 4 ],
            "sunday": [ 11, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/20161004_134100292_B Blayton Spirits In Space 1971.jpg',
          title: 'Spirits in Space',
          artist: 'Betty Blayton-Taylor',
          year: '1971',
          rule: {
            "monday": [ 11, 19, 27, 6 ],
            "tuesday": [ 16, 21, 27, 8 ],
            "wednesday": [ 15, 23, 2, 10 ],
            "thursday": [ 17, 27, 4, 12 ],
            "friday": [ 19, 27, 6, 16 ],
            "saturday": [ 21, 29, 25, 15 ],
            "sunday": [ 9, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/p1010558.jpg',
          title: 'The Conversationalist',
          artist: 'Chakaia Booker',
          year: '1997',
          rule: {
            "monday": [ 9, 17, 25, 4 ],
            "tuesday": [ 11, 19, 27, 6 ],
            "wednesday": [ 16, 21, 27, 8 ],
            "thursday": [ 15, 23, 2, 10 ],
            "friday": [ 17, 27, 4, 12 ],
            "saturday": [ 19, 27, 6, 16 ],
            "sunday": [ 21, 29, 25, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Mural-_Those_We_Remember_by_Edythe_Boone_located_in_Balmy_Alley,_San_Francisco,_California_LCCN2013630325.tif.jpg',
          title: 'Those We Remember',
          artist: 'Edythe Boone',
          year: '2011',
          rule: {
            "monday": [ 21, 29, 25, 15 ],
            "tuesday": [ 9, 17, 25, 4 ],
            "wednesday": [ 11, 19, 27, 6 ],
            "thursday": [ 16, 21, 27, 8 ],
            "friday": [ 15, 23, 2, 10 ],
            "saturday": [ 17, 27, 4, 12 ],
            "sunday": [ 19, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/5fb19a8e2e14c1e5fb1b6658e7f5fbdc.jpg',
          title: 'Compu-toon',
          artist: 'Charles Boyce',
          year: '2004',
          rule: {
            "monday": [ 19, 27, 6, 16 ],
            "tuesday": [ 21, 29, 25, 15 ],
            "wednesday": [ 9, 17, 25, 4 ],
            "thursday": [ 11, 19, 27, 6 ],
            "friday": [ 16, 21, 27, 8 ],
            "saturday": [ 15, 23, 2, 10 ],
            "sunday": [ 17, 27, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/BREWER-Unity-COURIER-SERIES_web-600.jpg',
          title: 'Unity',
          artist: 'Tina Williams Brewer',
          year: '2015',
          rule: {
            "monday": [ 17, 27, 4, 12 ],
            "tuesday": [ 19, 27, 6, 16 ],
            "wednesday": [ 21, 29, 25, 15 ],
            "thursday": [ 9, 17, 25, 4 ],
            "friday": [ 11, 19, 27, 6 ],
            "saturday": [ 16, 21, 27, 8 ],
            "sunday": [ 15, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/25426_h550w916gt.3.jpg',
          title: 'Strange Fruit (Urban Suite)',
          artist: 'Michael Bramwell',
          year: '1999',
          rule: {
            "monday": [ 15, 23, 2, 10 ],
            "tuesday": [ 17, 27, 4, 12 ],
            "wednesday": [ 19, 27, 6, 16 ],
            "thursday": [ 21, 29, 25, 15 ],
            "friday": [ 9, 17, 25, 4 ],
            "saturday": [ 11, 19, 27, 6 ],
            "sunday": [ 16, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/bradford1_1.jpg',
          title: 'No Time to Expand the Sea',
          artist: 'Mark Bradford',
          year: '?',
          rule: {
            "monday": [ 17, 22, 28, 9 ],
            "tuesday": [ 16, 24, 3, 11 ],
            "wednesday": [ 18, 28, 5, 13 ],
            "thursday": [ 20, 28, 7, 17 ],
            "friday": [ 22, 1, 26, 16 ],
            "saturday": [ 10, 18, 26, 5 ],
            "sunday": [ 12, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/1item0527.jpg',
          title: 'A Community Within reach',
          artist: 'Frank J. Brown',
          year: '?',
          rule: {
            "monday": [ 12, 20, 28, 7 ],
            "tuesday": [ 17, 22, 28, 9 ],
            "wednesday": [ 16, 24, 3, 11 ],
            "thursday": [ 18, 28, 5, 13 ],
            "friday": [ 20, 28, 7, 17 ],
            "saturday": [ 22, 1, 26, 16 ],
            "sunday": [ 10, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Anthony_Braxton.jpg',
          title: 'Anthony Braxton, 1970',
          artist: 'Frederick J. Brown',
          year: '2002',
          rule: {
            "monday": [ 10, 18, 26, 5 ],
            "tuesday": [ 12, 20, 28, 7 ],
            "wednesday": [ 17, 22, 28, 9 ],
            "thursday": [ 16, 24, 3, 11 ],
            "friday": [ 18, 28, 5, 13 ],
            "saturday": [ 20, 28, 7, 17 ],
            "sunday": [ 22, 1, 26, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/DSC0097online.jpg',
          title: 'Les Croisses',
          artist: 'Manuelita Brown',
          year: 'xx Cent.',
          rule: {
            "monday": [ 22, 1, 26, 16 ],
            "tuesday": [ 10, 18, 26, 5 ],
            "wednesday": [ 12, 20, 28, 7 ],
            "thursday": [ 17, 22, 28, 9 ],
            "friday": [ 16, 24, 3, 11 ],
            "saturday": [ 18, 28, 5, 13 ],
            "sunday": [ 20, 28, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Granny_Buck_Brown_Cartoon.JPG',
          title: 'A Playboy Buck Brown cartoon used on a subscription form for the magazine in 1972',
          artist: 'Robert Brown',
          year: '1972',
          rule: {
            "monday": [ 20, 28, 7, 17 ],
            "tuesday": [ 22, 1, 26, 16 ],
            "wednesday": [ 10, 18, 26, 5 ],
            "thursday": [ 12, 20, 28, 7 ],
            "friday": [ 17, 22, 28, 9 ],
            "saturday": [ 16, 24, 3, 11 ],
            "sunday": [ 18, 28, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Pb233585-1024x773.jpg',
          title: 'Three Shacks',
          artist: 'Beverly Buchanan',
          year: '2004',
          rule: {
            "monday": [ 18, 28, 5, 13 ],
            "tuesday": [ 20, 28, 7, 17 ],
            "wednesday": [ 22, 1, 26, 16 ],
            "thursday": [ 10, 18, 26, 5 ],
            "friday": [ 12, 20, 28, 7 ],
            "saturday": [ 17, 22, 28, 9 ],
            "sunday": [ 16, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Booker_T._Washington,_portrait_bust_in_patined_plaster.jpg',
          title: 'Booker T. Washington',
          artist: 'Selma Burke',
          year: '1935',
          rule: {
            "monday": [ 16, 24, 3, 11 ],
            "tuesday": [ 18, 28, 5, 13 ],
            "wednesday": [ 20, 28, 7, 17 ],
            "thursday": [ 22, 1, 26, 16 ],
            "friday": [ 10, 18, 26, 5 ],
            "saturday": [ 12, 20, 28, 7 ],
            "sunday": [ 17, 22, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/calvinburnett_561_0.jpg',
          title: '?',
          artist: 'Calvin Burnett',
          year: '?',
          rule: {
            "monday": [ 18, 23, 29, 10 ],
            "tuesday": [ 17, 25, 4, 12 ],
            "wednesday": [ 19, 29, 6, 14 ],
            "thursday": [ 21, 29, 8, 18 ],
            "friday": [ 23, 2, 27, 17 ],
            "saturday": [ 11, 19, 27, 6 ],
            "sunday": [ 13, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/684431.jpg',
          title: 'Violets',
          artist: 'Pauline Powell Burns',
          year: 'c. 1890',
          rule: {
            "monday": [ 13, 21, 29, 8 ],
            "tuesday": [ 18, 23, 29, 10 ],
            "wednesday": [ 17, 25, 4, 12 ],
            "thursday": [ 19, 29, 6, 14 ],
            "friday": [ 21, 29, 8, 18 ],
            "saturday": [ 23, 2, 27, 17 ],
            "sunday": [ 11, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Event_horizon-1091793626.jpg',
          title: 'Event Horizon',
          artist: 'Robert Butler Jr',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 11, 19, 27, 6 ],
            "tuesday": [ 13, 21, 29, 8 ],
            "wednesday": [ 18, 23, 29, 10 ],
            "thursday": [ 17, 25, 4, 12 ],
            "friday": [ 19, 29, 6, 14 ],
            "saturday": [ 21, 29, 8, 18 ],
            "sunday": [ 23, 2, 27, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/frank__calloway_untitled_detail_802_118.jpg',
          title: 'Untitled',
          artist: 'Frank Calloway',
          year: 'xx Cent.',
          rule: {
            "monday": [ 23, 2, 27, 17 ],
            "tuesday": [ 11, 19, 27, 6 ],
            "wednesday": [ 13, 21, 29, 8 ],
            "thursday": [ 18, 23, 29, 10 ],
            "friday": [ 17, 25, 4, 12 ],
            "saturday": [ 19, 29, 6, 14 ],
            "sunday": [ 21, 29, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ESimmsCampbell.png',
          title: 'Cuties',
          artist: 'E. Simms Campbell',
          year: '1968',
          rule: {
            "monday": [ 21, 29, 8, 18 ],
            "tuesday": [ 23, 2, 27, 17 ],
            "wednesday": [ 11, 19, 27, 6 ],
            "thursday": [ 13, 21, 29, 8 ],
            "friday": [ 18, 23, 29, 10 ],
            "saturday": [ 17, 25, 4, 12 ],
            "sunday": [ 19, 29, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/casey-vision.jpg',
          title: 'Vision',
          artist: 'Bernie Casey',
          year: 'xx Cent.',
          rule: {
            "monday": [ 19, 29, 6, 14 ],
            "tuesday": [ 21, 29, 8, 18 ],
            "wednesday": [ 23, 2, 27, 17 ],
            "thursday": [ 11, 19, 27, 6 ],
            "friday": [ 13, 21, 29, 8 ],
            "saturday": [ 18, 23, 29, 10 ],
            "sunday": [ 17, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Mother_and_Child.gif',
          title: 'Mother and Child',
          artist: 'Elizabeth Catlett',
          year: '1939',
          rule: {
            "monday": [ 17, 25, 4, 12 ],
            "tuesday": [ 19, 29, 6, 14 ],
            "wednesday": [ 21, 29, 8, 18 ],
            "thursday": [ 23, 2, 27, 17 ],
            "friday": [ 11, 19, 27, 6 ],
            "saturday": [ 13, 21, 29, 8 ],
            "sunday": [ 18, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2e739b173b8654380f211f2f2dc957bd.jpg',
          title: 'Soundsuit',
          artist: 'Nick Cave',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 19, 24, 1, 11 ],
            "tuesday": [ 18, 26, 5, 13 ],
            "wednesday": [ 20, 1, 7, 15 ],
            "thursday": [ 22, 1, 9, 19 ],
            "friday": [ 24, 3, 28, 18 ],
            "saturday": [ 12, 20, 28, 7 ],
            "sunday": [ 14, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Michael_Ray_Charles_-(Forever_Free)_‘Servin_with_a_smile’,-_1994.gif',
          title: '(Forever Free) ‘Servin with a smile’',
          artist: 'Michael Ray Charles',
          year: '1994',
          rule: {
            "monday": [ 14, 22, 1, 9 ],
            "tuesday": [ 19, 24, 1, 11 ],
            "wednesday": [ 18, 26, 5, 13 ],
            "thursday": [ 20, 1, 7, 15 ],
            "friday": [ 22, 1, 9, 19 ],
            "saturday": [ 24, 3, 28, 18 ],
            "sunday": [ 12, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2adcd_sept7_pma_img.jpg',
          title: 'Malcolm X #3',
          artist: 'Barbara Chase-Riboud',
          year: '1969',
          rule: {
            "monday": [ 12, 20, 28, 7 ],
            "tuesday": [ 14, 22, 1, 9 ],
            "wednesday": [ 19, 24, 1, 11 ],
            "thursday": [ 18, 26, 5, 13 ],
            "friday": [ 20, 1, 7, 15 ],
            "saturday": [ 22, 1, 9, 19 ],
            "sunday": [ 24, 3, 28, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2550028-DVKSMXZY-7.jpg',
          title: 'Parisian Rose for Her',
          artist: 'Jamour Chames',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 24, 3, 28, 18 ],
            "tuesday": [ 12, 20, 28, 7 ],
            "wednesday": [ 14, 22, 1, 9  ],
            "thursday": [ 19, 24, 1, 11 ],
            "friday": [ 18, 26, 5, 13 ],
            "saturday": [ 20, 1, 7, 15 ],
            "sunday": [ 22, 1, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ClaudeClark_FreedomMorning.jpg',
          title: 'Freedom Morning',
          artist: 'Claude Clark',
          year: '1941',
          rule: {
            "monday": [ 22, 1, 9, 19 ],
            "tuesday": [ 24, 3, 28, 18 ],
            "wednesday": [ 12, 20, 28, 7 ],
            "thursday": [ 14, 22, 1, 9 ],
            "friday": [ 19, 24, 1, 11 ],
            "saturday": [ 18, 26, 5, 13 ],
            "sunday": [ 20, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/1120652a.jpg',
          title: 'Untitled',
          artist: 'Edward Clark',
          year: '2013',
          rule: {
            "monday": [ 20, 1, 7, 15 ],
            "tuesday": [ 22, 1, 9, 19 ],
            "wednesday": [ 24, 3, 28, 18 ],
            "thursday": [ 12, 20, 28, 7 ],
            "friday": [ 14, 22, 1, 9 ],
            "saturday": [ 19, 24, 1, 11 ],
            "sunday": [ 18, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/0a463f06bc738536f4f56a1c08003233.jpg',
          title: 'Afro Abe',
          artist: 'Sonya Clark',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 18, 26, 5, 13 ],
            "tuesday": [ 20, 1, 7, 15 ],
            "wednesday": [ 22, 1, 9, 19 ],
            "thursday": [ 24, 3, 28, 18 ],
            "friday": [ 12, 20, 28, 7 ],
            "saturday": [ 14, 22, 1, 9 ],
            "sunday": [ 19, 24, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/WillieCole05.jpg',
          title: 'Wind Mask',
          artist: 'Willie Cole',
          year: '1991',
          rule: {
            "monday": [ 20, 25, 2, 12 ],
            "tuesday": [ 19, 27, 6, 14 ],
            "wednesday": [ 21, 2, 8, 16 ],
            "thursday": [ 23, 2, 10, 20 ],
            "friday": [ 25, 4, 29, 19 ],
            "saturday": [ 13, 21, 29, 8 ],
            "sunday": [ 15, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/RobertCHeartbreak.jpg',
          title: 'Heartbreak Hotel',
          artist: 'Robert Colescott',
          year: '1990',
          rule: {
            "monday": [ 15, 23, 2, 10 ],
            "tuesday": [ 20, 25, 2, 12 ],
            "wednesday": [ 19, 27, 6, 14 ],
            "thursday": [ 21, 2, 8, 16 ],
            "friday": [ 23, 2, 10, 20 ],
            "saturday": [ 25, 4, 29, 19 ],
            "sunday": [ 13, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/cortor-woman-in-an-interior.jpg',
          title: 'Woman in an Interior',
          artist: 'Eldzier Cortor',
          year: 'xx Cent.',
          rule: {
            "monday": [ 13, 21, 29, 8 ],
            "tuesday": [ 15, 23, 2, 10 ],
            "wednesday": [ 20, 25, 2, 12 ],
            "thursday": [ 19, 27, 6, 14 ],
            "friday": [ 21, 2, 8, 16 ],
            "saturday": [ 23, 2, 10, 20 ],
            "sunday": [ 25, 4, 29, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/rr.jpg',
          title: 'Shoe Shine',
          artist: 'Ernest Crichlow',
          year: '1953',
          rule: {
            "monday": [ 25, 4, 29, 19 ],
            "tuesday": [ 13, 21, 29, 8 ],
            "wednesday": [ 15, 23, 2, 10 ],
            "thursday": [ 20, 25, 2, 12 ],
            "friday": [ 19, 27, 6, 14 ],
            "saturday": [ 21, 2, 8, 16 ],
            "sunday": [ 23, 2, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/800px-American-cities-145.jpg',
          title: 'Douglass Square, Boston',
          artist: 'Allan Crite',
          year: '1936',
          rule: {
            "monday": [ 23, 2, 10, 20 ],
            "tuesday": [ 25, 4, 29, 19 ],
            "wednesday": [ 13, 21, 29, 8 ],
            "thursday": [ 15, 23, 2, 10 ],
            "friday": [ 20, 25, 2, 12 ],
            "saturday": [ 19, 27, 6, 14 ],
            "sunday": [ 21, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2e5e366f865231cbd11b4b783ccf659b.jpg',
          title: 'Figurative Composition #7',
          artist: 'Emilio Cruz',
          year: '1965',
          rule: {
            "monday": [ 21, 2, 8, 16 ],
            "tuesday": [ 23, 2, 10, 20 ],
            "wednesday": [ 25, 4, 29, 19 ],
            "thursday": [ 13, 21, 29, 8 ],
            "friday": [ 15, 23, 2, 10 ],
            "saturday": [ 20, 25, 2, 12 ],
            "sunday": [ 19, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/splendid.jpg',
          title: 'Splendid',
          artist: 'Frank E. Cummings III',
          year: 'xx Cent.',
          rule: {
            "monday": [ 19, 27, 6, 14 ],
            "tuesday": [ 21, 2, 8, 16 ],
            "wednesday": [ 23, 2, 10, 20 ],
            "thursday": [ 25, 4, 29, 19 ],
            "friday": [ 13, 21, 29, 8 ],
            "saturday": [ 15, 23, 2, 10 ],
            "sunday": [ 20, 25, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/image11.jpg',
          title: 'American Jazz Series #11',
          artist: 'Michael A. Cumings',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 21, 26, 3, 13 ],
            "tuesday": [ 20, 28, 7, 15 ],
            "wednesday": [ 22, 3, 9, 17 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 26, 5, 1, 20 ],
            "saturday": [ 14, 22, 1, 9 ],
            "sunday": [ 16, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/folk_5146_image.jpg',
          title: 'M.L. King',
          artist: 'Ulysses Davis',
          year: 'xx Cent.',
          rule: {
            "monday": [ 16, 24, 3, 11 ],
            "tuesday": [ 21, 26, 3, 13 ],
            "wednesday": [ 20, 28, 7, 15 ],
            "thursday": [ 22, 3, 9, 17 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 26, 5, 1, 20 ],
            "sunday": [ 14, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/501450dc3006ca275de386e59b39e852.jpg',
          title: 'Diversity',
          artist: 'Bing Davis',
          year: '?',
          rule: {
            "monday": [ 14, 22, 1, 9 ],
            "tuesday": [ 16, 24, 3, 11 ],
            "wednesday": [ 21, 26, 3, 13 ],
            "thursday": [ 20, 28, 7, 15 ],
            "friday": [ 22, 3, 9, 17 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 26, 5, 1, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/roy-decarava-pickets.jpg',
          title: 'Pickets',
          artist: 'Roy DeCarava ',
          year: '1946',
          rule: {
            "monday": [ 26, 5, 1, 20 ],
            "tuesday": [ 14, 22, 1, 9 ],
            "wednesday": [ 16, 24, 3, 11 ],
            "thursday": [ 21, 26, 3, 13 ],
            "friday": [ 20, 28, 7, 15 ],
            "saturday": [ 22, 3, 9, 17 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Jazz Quartet 1946.jpg',
          title: 'Jazz Quartet',
          artist: 'Beauford Delaney',
          year: '1946',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 26, 5, 1, 20 ],
            "wednesday": [ 14, 22, 1, 9 ],
            "thursday": [ 16, 24, 3, 11 ],
            "friday": [ 21, 26, 3, 13 ],
            "saturday": [ 20, 28, 7, 15 ],
            "sunday": [ 22, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/joseph-delaney.png',
          title: 'Woman in Striped Dress',
          artist: 'Joseph Delaney',
          year: '1964',
          rule: {
            "monday": [ 22, 3, 9, 17 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 26, 5, 1, 20 ],
            "thursday": [ 14, 22, 1, 9 ],
            "friday": [ 16, 24, 3, 11 ],
            "saturday": [ 21, 26, 3, 13 ],
            "sunday": [ 20, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ExhibitImgs-RomancingTheEye2.jpg',
          title: 'Adam and Eve',
          artist: 'Louis Delsarte',
          year: '?',
          rule: {
            "monday": [ 20, 28, 7, 15 ],
            "tuesday": [ 22, 3, 9, 17 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 26, 5, 1, 20 ],
            "friday": [ 14, 22, 1, 9 ],
            "saturday": [ 16, 24, 3, 11 ],
            "sunday": [ 21, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Dont-Matter-How-Raggly-The-Flag-It-Still-Got-To-Tie-Us-Together.jpg',
          title: 'Don’t Matter How Raggly The Flag, It Still Got To Tie Us Together',
          artist: 'Thornton Dial',
          year: '2003',
          rule: {
            "monday": [ 21, 26, 3, 13 ],
            "tuesday": [ 20, 28, 7, 15 ],
            "wednesday": [ 22, 3, 9, 17 ],
            "thursday": [ 24, 3, 11, 21 ],
            "friday": [ 26, 5, 1, 20 ],
            "saturday": [ 14, 22, 1, 9 ],
            "sunday": [ 16, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/788355-6.jpg',
          title: 'Sharecroppers',
          artist: 'Terry Dixon',
          year: '?',
          rule: {
            "monday": [ 16, 24, 3, 11 ],
            "tuesday": [ 21, 26, 3, 13 ],
            "wednesday": [ 20, 28, 7, 15 ],
            "thursday": [ 22, 3, 9, 17 ],
            "friday": [ 24, 3, 11, 21 ],
            "saturday": [ 26, 5, 1, 20 ],
            "sunday": [ 14, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/AfriCOBRA.jpg',
          title: 'Majority',
          artist: 'Jeff Donaldson',
          year: '1977',
          rule: {
            "monday": [ 14, 22, 1, 9 ],
            "tuesday": [ 16, 24, 3, 11 ],
            "wednesday": [ 21, 26, 3, 13 ],
            "thursday": [ 20, 28, 7, 15 ],
            "friday": [ 22, 3, 9, 17 ],
            "saturday": [ 24, 3, 11, 21 ],
            "sunday": [ 26, 5, 1, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Aspiration,_Aaron_Douglas,_1936,_DeYoung_Museum_of_Fine_Arts.jpg',
          title: 'Aspiration',
          artist: 'Aaron Douglas',
          year: '1936',
          rule: {
            "monday": [ 26, 5, 1, 20 ],
            "tuesday": [ 14, 22, 1, 9 ],
            "wednesday": [ 16, 24, 3, 11 ],
            "thursday": [ 21, 26, 3, 13 ],
            "friday": [ 20, 28, 7, 15 ],
            "saturday": [ 22, 3, 9, 17 ],
            "sunday": [ 24, 3, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/EMORY-DOUGLASforbobbyseale.jpg',
          title: 'for Bobby Seale',
          artist: 'Emory Douglas',
          year: 'XX cent.',
          rule: {
            "monday": [ 24, 3, 11, 21 ],
            "tuesday": [ 26, 5, 1, 20 ],
            "wednesday": [ 14, 22, 1, 9 ],
            "thursday": [ 16, 24, 3, 11 ],
            "friday": [ 21, 26, 3, 13 ],
            "saturday": [ 20, 28, 7, 15 ],
            "sunday": [ 22, 3, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/jd-white-paintings-4.jpg',
          title: 'White Painting',
          artist: 'John E. Dowell Jr.',
          year: 'XX cent.',
          rule: {
            "monday": [ 22, 3, 9, 17 ],
            "tuesday": [ 24, 3, 11, 21 ],
            "wednesday": [ 26, 5, 1, 20 ],
            "thursday": [ 14, 22, 1, 9 ],
            "friday": [ 16, 24, 3, 11 ],
            "saturday": [ 21, 26, 3, 13 ],
            "sunday": [ 20, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Driskell_Woman_with_Flowers.jpg',
          title: 'Woman with Flowers',
          artist: 'David Driskell',
          year: '1972',
          rule: {
            "monday": [ 20, 28, 7, 15 ],
            "tuesday": [ 22, 3, 9, 17 ],
            "wednesday": [ 24, 3, 11, 21 ],
            "thursday": [ 26, 5, 1, 20 ],
            "friday": [ 14, 22, 1, 9 ],
            "saturday": [ 16, 24, 3, 11 ],
            "sunday": [ 21, 26, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Robert-Duncanson-Land-of-the-Lotos-Eaters-631.jpg',
          title: 'Land of the Lotus Eaters',
          artist: 'Robert S. Duncanson',
          year: '1860 - 1861',
          rule: {
            "monday": [ 22, 27, 4, 14 ],
            "tuesday": [ 21, 29, 8, 16 ],
            "wednesday": [ 23, 4, 10, 18 ],
            "thursday": [ 25, 4, 12, 22 ],
            "friday": [ 27, 6, 2, 21 ],
            "saturday": [ 15, 23, 2, 10 ],
            "sunday": [ 17, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/william-edmondson-noahs-ark.jpg',
          title: 'Noah\'s Ark',
          artist: 'William Edmondson',
          year: '1930',
          rule: {
            "monday": [ 17, 25, 4, 12 ],
            "tuesday": [ 22, 27, 4, 14 ],
            "wednesday": [ 21, 29, 8, 16 ],
            "thursday": [ 23, 4, 10, 18 ],
            "friday": [ 25, 4, 12, 22 ],
            "saturday": [ 27, 6, 2, 21 ],
            "sunday": [ 15, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/melvin-edwards-steel-life-1985-1991.jpg',
          title: 'Steel Life',
          artist: 'Melvin Edwards',
          year: '1985-91',
          rule: {
            "monday": [ 15, 23, 2, 10 ],
            "tuesday": [ 17, 25, 4, 12 ],
            "wednesday": [ 22, 27, 4, 14 ],
            "thursday": [ 21, 29, 8, 16 ],
            "friday": [ 23, 4, 10, 18 ],
            "saturday": [ 25, 4, 12, 22 ],
            "sunday": [ 27, 6, 2, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Ellison_Walter_Old_Policy_Wheel_resize.jpg',
          title: 'Old Policy Wheel',
          artist: 'Walter Ellison',
          year: '1935',
          rule: {
            "monday": [ 27, 6, 2, 21 ],
            "tuesday": [ 15, 23, 2, 10 ],
            "wednesday": [ 17, 25, 4, 12 ],
            "thursday": [ 22, 27, 4, 14 ],
            "friday": [ 21, 29, 8, 16 ],
            "saturday": [ 23, 4, 10, 18 ],
            "sunday": [ 25, 4, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/MinnieEvans-visionary-artist.jpeg',
          title: 'Wrightsville Beach',
          artist: 'Minnie Evans',
          year: '1968',
          rule: {
            "monday": [ 25, 4, 12, 22 ],
            "tuesday": [ 27, 6, 2, 21 ],
            "wednesday": [ 15, 23, 2, 10 ],
            "thursday": [ 17, 25, 4, 12 ],
            "friday": [ 22, 27, 4, 14 ],
            "saturday": [ 21, 29, 8, 16 ],
            "sunday": [ 23, 4, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Meta_Vaux_Warrick_Fuller,_Ethiopia_Awakening.jpg',
          title: 'Meta Vaux Warrick Fuller',
          artist: 'Ethiopia Awakening',
          year: '1914',
          rule: {
            "monday": [ 23, 4, 10, 18 ],
            "tuesday": [ 25, 4, 12, 22 ],
            "wednesday": [ 27, 6, 2, 21 ],
            "thursday": [ 15, 23, 2, 10 ],
            "friday": [ 17, 25, 4, 12 ],
            "saturday": [ 22, 27, 4, 14 ],
            "sunday": [ 21, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Gallagher,_Wiglette_from,_DeLuxe.jpeg',
          title: ' Wiglette from "DeLuxe"',
          artist: 'Ellen Gallagher',
          year: '2004-2005',
          rule: {
            "monday": [ 21, 29, 8, 16 ],
            "tuesday": [ 23, 4, 10, 18 ],
            "wednesday": [ 25, 4, 12, 22 ],
            "thursday": [ 27, 6, 2, 21 ],
            "friday": [ 15, 23, 2, 10 ],
            "saturday": [ 17, 25, 4, 12 ],
            "sunday": [ 22, 27, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/20110521013911-Gallery000832.jpg',
          title: 'Shoe Shine Stands',
          artist: 'Theaster Gates',
          year: '2010',
          rule: {
            "monday": [ 23, 28, 5, 15 ],
            "tuesday": [ 22, 1, 9, 17 ],
            "wednesday": [ 24, 5, 11, 19 ],
            "thursday": [ 26, 5, 13, 23 ],
            "friday": [ 28, 7, 3, 22 ],
            "saturday": [ 16, 24, 3, 11 ],
            "sunday": [ 18, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/reginald-k-gee-two-normal-people.jpg',
          title: 'Two Normal People',
          artist: 'Reginald K Gee',
          year: '2014',
          rule: {
            "monday": [ 18, 26, 5, 13 ],
            "tuesday": [ 23, 28, 5, 15 ],
            "wednesday": [ 22, 1, 9, 17 ],
            "thursday": [ 24, 5, 11, 19 ],
            "friday": [ 26, 5, 13, 23 ],
            "saturday": [ 28, 7, 3, 22 ],
            "sunday": [ 16, 24, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/dance.jpg',
          title: 'Dance Turquoise',
          artist: 'Herbert Gentry',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 16, 24, 3, 11 ],
            "tuesday": [ 18, 26, 5, 13 ],
            "wednesday": [ 23, 28, 5, 15 ],
            "thursday": [ 22, 1, 9, 17 ],
            "friday": [ 24, 5, 11, 19 ],
            "saturday": [ 26, 5, 13, 23 ],
            "sunday": [ 28, 7, 3, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Squires-WG-02.jpg',
          title: 'Abstract I',
          artist: 'Wilda Gerideau-Squires',
          year: '2008',
          rule: {
            "monday": [ 28, 7, 3, 22 ],
            "tuesday": [ 16, 24, 3, 11 ],
            "wednesday": [ 18, 26, 5, 13 ],
            "thursday": [ 23, 28, 5, 15 ],
            "friday": [ 22, 1, 9, 17 ],
            "saturday": [ 24, 5, 11, 19 ],
            "sunday": [ 26, 5, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/sam-gilliam-as-kids-go!.jpg',
          title: 'As Kids Go!',
          artist: 'Sam Gilliam',
          year: '1996',
          rule: {
            "monday": [ 26, 5, 13, 23 ],
            "tuesday": [ 28, 7, 3, 22 ],
            "wednesday": [ 16, 24, 3, 11 ],
            "thursday": [ 18, 26, 5, 13 ],
            "friday": [ 23, 28, 5, 15 ],
            "saturday": [ 22, 1, 9, 17 ],
            "sunday": [ 24, 5, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/1974.118.12_1a.jpg',
          title: 'Hot Dog Bridge',
          artist: 'Russell T. Gordon',
          year: '1974',
          rule: {
            "monday": [ 24, 5, 11, 19 ],
            "tuesday": [ 26, 5, 13, 23 ],
            "wednesday": [ 28, 7, 3, 22 ],
            "thursday": [ 16, 24, 3, 11 ],
            "friday": [ 18, 26, 5, 13 ],
            "saturday": [ 23, 28, 5, 15 ],
            "sunday": [ 22, 1, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/HeroForHire15.jpg',
          title: 'Luke Cage, Hero for Hire #15',
          artist: 'Billy Graham',
          year: '1973',
          rule: {
            "monday": [ 22, 1, 9, 17 ],
            "tuesday": [ 24, 5, 11, 19 ],
            "wednesday": [ 26, 5, 13, 23 ],
            "thursday": [ 28, 7, 3, 22 ],
            "friday": [ 16, 24, 3, 11 ],
            "saturday": [ 18, 26, 5, 13 ],
            "sunday": [ 23, 28, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/LonnieGraham_AIR_03.jpg',
          title: 'Young Man with Sunday Dinner, Muguga, Kenya',
          artist: 'Lonnie Graham',
          year: '1996',
          rule: {
            "monday": [ 24, 29, 6, 16 ],
            "tuesday": [ 23, 2, 10, 18 ],
            "wednesday": [ 25, 6, 12, 20 ],
            "thursday": [ 27, 6, 14, 24 ],
            "friday": [ 29, 8, 4, 23 ],
            "saturday": [ 17, 25, 4, 12 ],
            "sunday": [ 19, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/pntg-gra.005126c-cropped.jpg',
          title: 'The Birth of a Genius in the Midnight Sun',
          artist: 'Deborah Grant',
          year: '1912',
          rule: {
            "monday": [ 19, 27, 6, 14 ],
            "tuesday": [ 24, 29, 6, 16 ],
            "wednesday": [ 23, 2, 10, 18 ],
            "thursday": [ 25, 6, 12, 20 ],
            "friday": [ 27, 6, 14, 24 ],
            "saturday": [ 29, 8, 4, 23 ],
            "sunday": [ 17, 25, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/todd-gray-wumbus-l-CR.jpg',
          title: 'Wumbus',
          artist: 'Todd Gray',
          year: '2015',
          rule: {
            "monday": [ 17, 25, 4, 12 ],
            "tuesday": [ 19, 27, 6, 14 ],
            "wednesday": [ 24, 29, 6, 16 ],
            "thursday": [ 23, 2, 10, 18 ],
            "friday": [ 25, 6, 12, 20 ],
            "saturday": [ 27, 6, 14, 24 ],
            "sunday": [ 29, 8, 4, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/What She Said Study (Yellow).jpg',
          title: 'What She Said (Yellow)',
          artist: 'Leamon Green',
          year: '2011',
          rule: {
            "monday": [ 29, 8, 4, 23 ],
            "tuesday": [ 17, 25, 4, 12 ],
            "wednesday": [ 19, 27, 6, 14 ],
            "thursday": [ 24, 29, 6, 16 ],
            "friday": [ 23, 2, 10, 18 ],
            "saturday": [ 25, 6, 12, 20 ],
            "sunday": [ 27, 6, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ee1468c39055d6eb8f2017ee1b47151d.jpg',
          title: 'Partially Buried in Three Parts',
          artist: 'Renée Green',
          year: '1996 - 1997',
          rule: {
            "monday": [ 27, 6, 14, 24 ],
            "tuesday": [ 29, 8, 4, 23 ],
            "wednesday": [ 17, 25, 4, 12 ],
            "thursday": [ 19, 27, 6, 14 ],
            "friday": [ 24, 29, 6, 16 ],
            "saturday": [ 23, 2, 10, 18 ],
            "sunday": [ 25, 6, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/mario-4.jpg',
          title: 'The Ant No. 4',
          artist: 'Mario Gully',
          year: '2004',
          rule: {
            "monday": [ 25, 6, 12, 20 ],
            "tuesday": [ 27, 6, 14, 24 ],
            "wednesday": [ 29, 8, 4, 23 ],
            "thursday": [ 17, 25, 4, 12 ],
            "friday": [ 19, 27, 6, 14 ],
            "saturday": [ 24, 29, 6, 16 ],
            "sunday": [ 23, 2, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/detroit_vacuum_streetart_374475_o.jpg',
          title: 'The Heidelberg Project',
          artist: 'Tyree Guyton',
          year: '2004',
          rule: {
            "monday": [ 23, 2, 10, 18 ],
            "tuesday": [ 25, 6, 12, 20 ],
            "wednesday": [ 27, 6, 14, 24 ],
            "thursday": [ 29, 8, 4, 23 ],
            "friday": [ 17, 25, 4, 12 ],
            "saturday": [ 19, 27, 6, 14 ],
            "sunday": [ 24, 29, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/edhamilton-8.jpg',
          title: 'The Unfinished March',
          artist: 'Ed Hamilton',
          year: '2014',
          rule: {
            "monday": [ 25, 1, 7, 17 ],
            "tuesday": [ 24, 3, 11, 19 ],
            "wednesday": [ 26, 7, 13, 21 ],
            "thursday": [ 28, 7, 15, 25 ],
            "friday": [ 1, 9, 5, 24 ],
            "saturday": [ 18, 26, 5, 13 ],
            "sunday": [ 20, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/download.jpeg',
          title: 'Nadir',
          artist: 'Patrick Earl Hammie',
          year: '2012',
          rule: {
            "monday": [ 20, 28, 7, 15 ],
            "tuesday": [ 25, 1, 7, 17 ],
            "wednesday": [ 24, 3, 11, 19 ],
            "thursday": [ 26, 7, 13, 21 ],
            "friday": [ 28, 7, 15, 25 ],
            "saturday": [ 1, 9, 5, 24 ],
            "sunday": [ 18, 26, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Trenton-Doyle-Hancock-I-Know-Just-How-You-Feel-2015.jpg',
          title: 'I Know Just How You Feel',
          artist: 'Trenton Doyle Hancock',
          year: '2015',
          rule: {
            "monday": [ 18, 26, 5, 13 ],
            "tuesday": [ 20, 28, 7, 15 ],
            "wednesday": [ 25, 1, 7, 17 ],
            "thursday": [ 24, 3, 11, 19 ],
            "friday": [ 26, 7, 13, 21 ],
            "saturday": [ 28, 7, 15, 25 ],
            "sunday": [ 1, 9, 5, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Edwin_A._Harleston_-_Portrait_of_a_Woman_-_Google_Art_Project.jpg',
          title: 'Portrait of a Woman',
          artist: 'Edwin Harleston',
          year: '1920',
          rule: {
            "monday": [ 1, 9, 5, 24 ],
            "tuesday": [ 18, 26, 5, 13 ],
            "wednesday": [ 20, 28, 7, 15 ],
            "thursday": [ 25, 1, 7, 17 ],
            "friday": [ 24, 3, 11, 19 ],
            "saturday": [ 26, 7, 13, 21 ],
            "sunday": [ 28, 7, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/5dd417f42367bdb5ba3694e21269489d--the-block-pastel.jpg',
          title: 'The Block',
          artist: 'Kira Lynn Harris',
          year: '2011',
          rule: {
            "monday": [ 28, 7, 15, 25 ],
            "tuesday": [ 1, 9, 5, 24 ],
            "wednesday": [ 18, 26, 5, 13 ],
            "thursday": [ 20, 28, 7, 15 ],
            "friday": [ 25, 1, 7, 17 ],
            "saturday": [ 24, 3, 11, 19 ],
            "sunday": [ 26, 7, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/0_full.jpg',
          title: 'Little Brown Girl',
          artist: 'John Wesley Hardrick',
          year: '1927',
          rule: {
            "monday": [ 26, 7, 13, 21 ],
            "tuesday": [ 28, 7, 15, 25 ],
            "wednesday": [ 1, 9, 5, 24 ],
            "thursday": [ 18, 26, 5, 13 ],
            "friday": [ 20, 28, 7, 15 ],
            "saturday": [ 25, 1, 7, 17 ],
            "sunday": [ 24, 3, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Jerry_Harris.sculpture.jpg',
          title: 'Dogon mother and child',
          artist: 'Jerry Harris',
          year: '2007',
          rule: {
            "monday": [ 24, 3, 11, 19 ],
            "tuesday": [ 26, 7, 13, 21 ],
            "wednesday": [ 28, 7, 15, 25 ],
            "thursday": [ 1, 9, 5, 24 ],
            "friday": [ 18, 26, 5, 13 ],
            "saturday": [ 20, 28, 7, 15 ],
            "sunday": [ 25, 1, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Lawrence_Harris_-_Abandoned_Ship.jpg',
          title: 'Abandoned Ship',
          artist: 'Lawrence Harris',
          year: '?',
          rule: {
            "monday": [ 26, 2, 8, 18 ],
            "tuesday": [ 25, 4, 12, 20 ],
            "wednesday": [ 27, 8, 14, 22 ],
            "thursday": [ 29, 8, 16, 26 ],
            "friday": [ 2, 10, 6, 25 ],
            "saturday": [ 19, 27, 6, 14 ],
            "sunday": [ 21, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Walking_1978.jpg',
          title: 'Walking',
          artist: 'Maren Hassinger',
          year: '1978',
          rule: {
            "monday": [ 21, 29, 8, 16 ],
            "tuesday": [ 26, 2, 8, 18 ],
            "wednesday": [ 25, 4, 12, 20 ],
            "thursday": [ 27, 8, 14, 22 ],
            "friday": [ 29, 8, 16, 26 ],
            "saturday": [ 2, 10, 6, 25 ],
            "sunday": [ 19, 27, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ahynhmv3lir9jbomhiym5aa7o1_500.jpg',
          title: 'Midsummer Night in Harlem',
          artist: 'Palmer Hayden',
          year: 'xx Cent.',
          rule: {
            "monday": [ 19, 27, 6, 14 ],
            "tuesday": [ 21, 29, 8, 16 ],
            "wednesday": [ 26, 2, 8, 18 ],
            "thursday": [ 25, 4, 12, 20 ],
            "friday": [ 27, 8, 14, 22 ],
            "saturday": [ 29, 8, 16, 26 ],
            "sunday": [ 2, 10, 6, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/lead_960.jpg',
          title: 'What\'s Going On',
          artist: 'Barkley L. Hendricks',
          year: '1974',
          rule: {
            "monday": [ 2, 10, 6, 25 ],
            "tuesday": [ 19, 27, 6, 14 ],
            "wednesday": [ 21, 29, 8, 16 ],
            "thursday": [ 26, 2, 8, 18 ],
            "friday": [ 25, 4, 12, 20 ],
            "saturday": [ 27, 8, 14, 22 ],
            "sunday": [ 29, 8, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/1937_1107_kkat_brick_500.jpg',
          title: 'Krazy Kat',
          artist: 'George Herriman',
          year: '1935',
          rule: {
            "monday": [ 29, 8, 16, 26 ],
            "tuesday": [ 2, 10, 6, 25 ],
            "wednesday": [ 19, 27, 6, 14 ],
            "thursday": [ 21, 29, 8, 16 ],
            "friday": [ 26, 2, 8, 18 ],
            "saturday": [ 25, 4, 12, 20 ],
            "sunday": [ 27, 8, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/large.jpg',
          title: 'Strange Fruit,',
          artist: 'Alvin Hollingsworth',
          year: '1975',
          rule: {
            "monday": [ 27, 8, 14, 22 ],
            "tuesday": [ 29, 8, 16, 26 ],
            "wednesday": [ 2, 10, 6, 25 ],
            "thursday": [ 19, 27, 6, 14 ],
            "friday": [ 21, 29, 8, 16 ],
            "saturday": [ 26, 2, 8, 18 ],
            "sunday": [ 25, 4, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/rhythmReunion.jpg',
          title: 'Rhythm Reunion',
          artist: 'Joseph Holston',
          year: 'XX cent.',
          rule: {
            "monday": [ 25, 4, 12, 20 ],
            "tuesday": [ 27, 8, 14, 22 ],
            "wednesday": [ 29, 8, 16, 26 ],
            "thursday": [ 2, 10, 6, 25 ],
            "friday": [ 19, 27, 6, 14 ],
            "saturday": [ 21, 29, 8, 16 ],
            "sunday": [ 26, 2, 8, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/v0_master.jpg',
          title: 'Funky, Black and Catch Me',
          artist: 'Bill Henderson',
          year: '1978',
          rule: {
            "monday": [ 27, 3, 9, 19 ],
            "tuesday": [ 26, 5, 13, 21 ],
            "wednesday": [ 28, 9, 15, 23 ],
            "thursday": [ 1, 9, 17, 27 ],
            "friday": [ 3, 11, 7, 26 ],
            "saturday": [ 20, 28, 7, 15 ],
            "sunday": [ 22, 1, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Geometric-Abstract-Painting-Composition-43-Bryce-Hudson-30x40-2014.jpg',
          title: 'Composition 43',
          artist: 'Bryce Hudson',
          year: '2014',
          rule: {
            "monday": [ 22, 1, 9, 17 ],
            "tuesday": [ 27, 3, 9, 19 ],
            "wednesday": [ 26, 5, 13, 21 ],
            "thursday": [ 28, 9, 15, 23 ],
            "friday": [ 1, 9, 17, 27 ],
            "saturday": [ 3, 11, 7, 26 ],
            "sunday": [ 20, 28, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Julien_Hudson_-_Portrait_of_a_Creole_Gentleman.jpg',
          title: 'Portrait of a Creole Gentleman',
          artist: 'Julien Hudson',
          year: '1835 - 1387',
          rule: {
            "monday": [ 20, 28, 7, 15 ],
            "tuesday": [ 22, 1, 9, 17 ],
            "wednesday": [ 27, 3, 9, 19 ],
            "thursday": [ 26, 5, 13, 21 ],
            "friday": [ 28, 9, 15, 23 ],
            "saturday": [ 1, 9, 17, 27 ],
            "sunday": [ 3, 11, 7, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/huffman_2.jpg',
          title: 'Justice',
          artist: 'David Huffman',
          year: '2008',
          rule: {
            "monday": [ 3, 11, 7, 26 ],
            "tuesday": [ 20, 28, 7, 15 ],
            "wednesday": [ 22, 1, 9, 17 ],
            "thursday": [ 27, 3, 9, 19 ],
            "friday": [ 26, 5, 13, 21 ],
            "saturday": [ 28, 9, 15, 23 ],
            "sunday": [ 1, 9, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Hunt-Sea-HorseTH.jpg',
          title: 'Seahorse',
          artist: 'Richard Hunt',
          year: 'xx Cent.',
          rule: {
            "monday": [ 1, 9, 17, 27 ],
            "tuesday": [ 3, 11, 7, 26 ],
            "wednesday": [ 20, 28, 7, 15 ],
            "thursday": [ 22, 1, 9, 17 ],
            "friday": [ 27, 3, 9, 19 ],
            "saturday": [ 26, 5, 13, 21 ],
            "sunday": [ 28, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Clementine_Hunter_-_Funeral_Procession_-_Google_Art_Project.jpg',
          title: 'Funeral Procession',
          artist: 'Clementine Hunter',
          year: '1950',
          rule: {
            "monday": [ 28, 9, 15, 23 ],
            "tuesday": [ 1, 9, 17, 27 ],
            "wednesday": [ 3, 11, 7, 26 ],
            "thursday": [ 20, 28, 7, 15 ],
            "friday": [ 22, 1, 9, 17 ],
            "saturday": [ 27, 3, 9, 19 ],
            "sunday": [ 26, 5, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/downloadStJam.jpeg',
          title: 'Steffani Jemison at Jacob Lawrence Gallery',
          artist: 'Steffani Jemison',
          year: '2016',
          rule: {
            "monday": [ 26, 5, 13, 21 ],
            "tuesday": [ 28, 9, 15, 23 ],
            "wednesday": [ 1, 9, 17, 27 ],
            "thursday": [ 3, 11, 7, 26 ],
            "friday": [ 20, 28, 7, 15 ],
            "saturday": [ 22, 1, 9, 17 ],
            "sunday": [ 27, 3, 9, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Jazz_Giants.jpg',
          title: 'Jazz Giants',
          artist: 'Wadsworth Jarrell',
          year: '1987',
          rule: {
            "monday": [ 28, 4, 10, 20 ],
            "tuesday": [ 27, 6, 14, 22 ],
            "wednesday": [ 29, 10, 16, 24 ],
            "thursday": [ 2, 10, 18, 28 ],
            "friday": [ 4, 12, 8, 27 ],
            "saturday": [ 21, 29, 8, 16 ],
            "sunday": [ 23, 2, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Trademarkeyes.jpg',
          title: 'Trademarkeyes',
          artist: 'Annette Jimerson',
          year: '?',
          rule: {
            "monday": [ 23, 2, 10, 18 ],
            "tuesday": [ 28, 4, 10, 20 ],
            "wednesday": [ 27, 6, 14, 22 ],
            "thursday": [ 29, 10, 16, 24 ],
            "friday": [ 2, 10, 18, 28 ],
            "saturday": [ 4, 12, 8, 27 ],
            "sunday": [ 21, 29, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Brooklyn_Museum_-_John_Jacob_Anderson_and_Sons,_John_and_Edward_-_Joshua_Johnson_-_overall.jpg',
          title: 'John Jacob Anderson and Sons, John and Edward',
          artist: 'Joshua Johnson',
          year: 'ca.1812',
          rule: {
            "monday": [ 21, 29, 8, 16 ],
            "tuesday": [ 23, 2, 10, 18 ],
            "wednesday": [ 28, 4, 10, 20 ],
            "thursday": [ 27, 6, 14, 22 ],
            "friday": [ 29, 10, 16, 24 ],
            "saturday": [ 2, 10, 18, 28 ],
            "sunday": [ 4, 12, 8, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/7b1a81a4ffa4a2a59b09a72cff71d3f6--gray-johnson-african-american-art.jpg',
          title: 'Arrangement',
          artist: 'Malvin Gray Johnson',
          year: '1933',
          rule: {
            "monday": [ 4, 12, 8, 27 ],
            "tuesday": [ 21, 29, 8, 16 ],
            "wednesday": [ 23, 2, 10, 18 ],
            "thursday": [ 28, 4, 10, 20 ],
            "friday": [ 27, 6, 14, 22 ],
            "saturday": [ 29, 10, 16, 24 ],
            "sunday": [ 2, 10, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/RJ-15-0221-1024x745.jpg',
          title: 'Untitled Anxious Men',
          artist: 'Rashid Johnson',
          year: '2015',
          rule: {
            "monday": [ 2, 10, 18, 28 ],
            "tuesday": [ 4, 12, 8, 27 ],
            "wednesday": [ 21, 29, 8, 16 ],
            "thursday": [ 23, 2, 10, 18 ],
            "friday": [ 28, 4, 10, 20 ],
            "saturday": [ 27, 6, 14, 22 ],
            "sunday": [ 29, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/-Chester-_-_NARA_-_559078.jpg',
          title: 'Cheste',
          artist: 'Sargent Claude Johnson',
          year: '1931',
          rule: {
            "monday": [ 29, 10, 16, 24 ],
            "tuesday": [ 2, 10, 18, 28 ],
            "wednesday": [ 4, 12, 8, 27 ],
            "thursday": [ 21, 29, 8, 16 ],
            "friday": [ 23, 2, 10, 18 ],
            "saturday": [ 28, 4, 10, 20 ],
            "sunday": [ 27, 6, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Street_Musicians,_by_William_H._Johnson.jpg',
          title: 'Street Musicians',
          artist: 'William H. Johnson',
          year: '1939 - 1940',
          rule: {
            "monday": [ 27, 6, 14, 22 ],
            "tuesday": [ 29, 10, 16, 24 ],
            "wednesday": [ 2, 10, 18, 28 ],
            "thursday": [ 4, 12, 8, 27 ],
            "friday": [ 21, 29, 8, 16 ],
            "saturday": [ 23, 2, 10, 18 ],
            "sunday": [ 28, 4, 10, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Calvin-B.-Jones-1.jpg',
          title: 'Mural',
          artist: 'Calvin B. Jones',
          year: 'xx Cent.',
          rule: {
            "monday": [ 29, 5, 11, 21 ],
            "tuesday": [ 28, 7, 15, 23 ],
            "wednesday": [ 1, 11, 17, 25 ],
            "thursday": [ 3, 11, 19, 29 ],
            "friday": [ 5, 13, 9, 28 ],
            "saturday": [ 22, 1, 9, 17 ],
            "sunday": [ 24, 3, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Jennie-C-Jones-462x569.jpg',
          title: 'Bold, Double, Barline (variation #1)',
          artist: 'Jennie C. Jones',
          year: '2013',
          rule: {
            "monday": [ 24, 3, 11, 19 ],
            "tuesday": [ 29, 5, 11, 21 ],
            "wednesday": [ 28, 7, 15, 23 ],
            "thursday": [ 1, 11, 17, 25 ],
            "friday": [ 3, 11, 19, 29 ],
            "saturday": [ 5, 13, 9, 28 ],
            "sunday": [ 22, 1, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/lois-mailou-jones-initiation-liberia-1983-acrylic-on-canvas_jpg.jpg',
          title: 'Initiation, Liberia',
          artist: 'Loïs Mailou Jones',
          year: '1983',
          rule: {
            "monday": [ 22, 1, 9, 17 ],
            "tuesday": [ 24, 3, 11, 19 ],
            "wednesday": [ 29, 5, 11, 21 ],
            "thursday": [ 28, 7, 15, 23 ],
            "friday": [ 1, 11, 17, 25 ],
            "saturday": [ 3, 11, 19, 29 ],
            "sunday": [ 5, 13, 9, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/conversation-between-paint.jpg',
          title: 'Descending from a Cross to be Nourished at the Breast of Our Mother',
          artist: 'Titus Kaphar',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 5, 13, 9, 28 ],
            "tuesday": [ 22, 1, 9, 17 ],
            "wednesday": [ 24, 3, 11, 19 ],
            "thursday": [ 29, 5, 11, 21 ],
            "friday": [ 28, 7, 15, 23 ],
            "saturday": [ 1, 11, 17, 25 ],
            "sunday": [ 3, 11, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/360_fs.jpg',
          title: 'In the North the Negro had Better Education Facilities',
          artist: 'Gwendolyn Knight',
          year: '1941',
          rule: {
            "monday": [ 3, 11, 19, 29 ],
            "tuesday": [ 5, 13, 9, 28 ],
            "wednesday": [ 22, 1, 9, 17 ],
            "thursday": [ 24, 3, 11, 19 ],
            "friday": [ 29, 5, 11, 21 ],
            "saturday": [ 28, 7, 15, 23 ],
            "sunday": [ 1, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Lawrence_Jacob_Self-Portrait_1977.jpg',
          title: 'Self Portrait',
          artist: 'Jacob Lawrence',
          year: '1977',
          rule: {
            "monday": [ 1, 11, 17, 25 ],
            "tuesday": [ 3, 11, 19, 29 ],
            "wednesday": [ 5, 13, 9, 28 ],
            "thursday": [ 22, 1, 9, 17 ],
            "friday": [ 24, 3, 11, 19 ],
            "saturday": [ 29, 5, 11, 21 ],
            "sunday": [ 28, 7, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/large_Lawson.D_03_forweb.jpg',
          title: 'Ring Bearer',
          artist: 'Deana Lawson',
          year: '2016',
          rule: {
            "monday": [ 28, 7, 15, 23 ],
            "tuesday": [ 1, 11, 17, 25 ],
            "wednesday": [ 3, 11, 19, 29 ],
            "thursday": [ 5, 13, 9, 28 ],
            "friday": [ 22, 1, 9, 17 ],
            "saturday": [ 24, 3, 11, 19 ],
            "sunday": [ 29, 5, 11, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Reflection_1957.jpg',
          title: 'Reflection',
          artist: 'Hughie Lee-Smith',
          year: '1957',
          rule: {
            "monday": [ 1, 6, 12, 22 ],
            "tuesday": [ 29, 8, 16, 24 ],
            "wednesday": [ 2, 12, 18, 26 ],
            "thursday": [ 4, 12, 20, 1 ],
            "friday": [ 6, 14, 10, 29 ],
            "saturday": [ 23, 2, 10, 18 ],
            "sunday": [ 25, 4, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Hiawatha_MET_DP371840.jpg',
          title: 'Hiawatha',
          artist: 'Edmonia Lewis',
          year: '1868',
          rule: {
            "monday": [ 25, 4, 12, 20 ],
            "tuesday": [ 1, 6, 12, 22 ],
            "wednesday": [ 29, 8, 16, 24 ],
            "thursday": [ 2, 12, 18, 26 ],
            "friday": [ 4, 12, 20, 1 ],
            "saturday": [ 6, 14, 10, 29 ],
            "sunday": [ 23, 2, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Jazz_Band_by_Norman_Lewis,_1948.jpg',
          title: 'Jazz Band',
          artist: 'Norman Lewis',
          year: '1948',
          rule: {
            "monday": [ 23, 2, 10, 18 ],
            "tuesday": [ 25, 4, 12, 20 ],
            "wednesday": [ 1, 6, 12, 22 ],
            "thursday": [ 29, 8, 16, 24 ],
            "friday": [ 2, 12, 18, 26 ],
            "saturday": [ 4, 12, 20, 1 ],
            "sunday": [ 6, 14, 10, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/glenn-ligon-web.jpg',
          title: 'Warm Broad Glow',
          artist: 'Glenn Ligon',
          year: '2005',
          rule: {
            "monday": [ 6, 14, 10, 29 ],
            "tuesday": [ 23, 2, 10, 18 ],
            "wednesday": [ 25, 4, 12, 20 ],
            "thursday": [ 1, 6, 12, 22 ],
            "friday": [ 29, 8, 16, 24 ],
            "saturday": [ 2, 12, 18, 26 ],
            "sunday": [ 4, 12, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/llana5.jpg',
          title: 'Llana5',
          artist: 'Llanakila',
          year: '2014',
          rule: {
            "monday": [ 4, 12, 20, 1 ],
            "tuesday": [ 6, 14, 10, 29 ],
            "wednesday": [ 23, 2, 10, 18 ],
            "thursday": [ 25, 4, 12, 20 ],
            "friday": [ 1, 6, 12, 22 ],
            "saturday": [ 29, 8, 16, 24 ],
            "sunday": [ 2, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Edward_Loper_34_St_Pierre_1980.jpg',
          title: '34 St. Pierre, Quebec',
          artist: 'Edward L. Loper Sr.',
          year: '1978',
          rule: {
            "monday": [ 2, 12, 18, 26 ],
            "tuesday": [ 4, 12, 20, 1 ],
            "wednesday": [ 6, 14, 10, 29 ],
            "thursday": [ 23, 2, 10, 18 ],
            "friday": [ 25, 4, 12, 20 ],
            "saturday": [ 1, 6, 12, 22 ],
            "sunday": [ 29, 8, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Lovell_28M.jpg',
          title: '2 8 M',
          artist: 'Whitfield Lovell',
          year: '2008',
          rule: {
            "monday": [ 29, 8, 16, 24 ],
            "tuesday": [ 2, 12, 18, 26 ],
            "wednesday": [ 4, 12, 20, 1 ],
            "thursday": [ 6, 14, 10, 29 ],
            "friday": [ 23, 2, 10, 18 ],
            "saturday": [ 25, 4, 12, 20 ],
            "sunday": [ 1, 6, 12, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2c2f2f35fd81b404fa6df8af92123d3d.png',
          title: 'Hard Labor',
          artist: 'Gwendolyn Ann Magee',
          year: '2001',
          rule: {
            "monday": [ 2, 7, 13, 23 ],
            "tuesday": [ 1, 9, 17, 25 ],
            "wednesday": [ 3, 13, 19, 27 ],
            "thursday": [ 5, 13, 21, 2 ],
            "friday": [ 7, 15, 11, 1 ],
            "saturday": [ 24, 3, 11, 19 ],
            "sunday": [ 26, 5, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/892537-7.jpg',
          title: 'Merinita',
          artist: 'Clarence Major',
          year: '?',
          rule: {
            "monday": [ 26, 5, 13, 21 ],
            "tuesday": [ 2, 7, 13, 23 ],
            "wednesday": [ 1, 9, 17, 25 ],
            "thursday": [ 3, 13, 19, 27 ],
            "friday": [ 5, 13, 21, 2 ],
            "saturday": [ 7, 15, 11, 1 ],
            "sunday": [ 24, 3, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Vignette_-2,_2008,_Kerry_James_Marshall.jpeg',
          title: 'Vignette #2',
          artist: 'Kerry James Marshall',
          year: '2008',
          rule: {
            "monday": [ 24, 3, 11, 19 ],
            "tuesday": [ 26, 5, 13, 21 ],
            "wednesday": [ 2, 7, 13, 23 ],
            "thursday": [ 1, 9, 17, 25 ],
            "friday": [ 3, 13, 19, 27 ],
            "saturday": [ 5, 13, 21, 2 ],
            "sunday": [ 7, 15, 11, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/EugeneJ.Martin_Janus.jpg',
          title: 'Janus',
          artist: 'Eugene J. Martin',
          year: '1995',
          rule: {
            "monday": [ 7, 15, 11, 1 ],
            "tuesday": [ 24, 3, 11, 19 ],
            "wednesday": [ 26, 5, 13, 21 ],
            "thursday": [ 2, 7, 13, 23 ],
            "friday": [ 1, 9, 17, 25 ],
            "saturday": [ 3, 13, 19, 27 ],
            "sunday": [ 5, 13, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Maynard2b.jpg',
          title: 'Polyrhythmics of Consciousness and Light',
          artist: 'Valerie Maynard',
          year: '2003',
          rule: {
            "monday": [ 5, 13, 21, 2 ],
            "tuesday": [ 7, 15, 11, 1 ],
            "wednesday": [ 24, 3, 11, 19 ],
            "thursday": [ 26, 5, 13, 21 ],
            "friday": [ 2, 7, 13, 23 ],
            "saturday": [ 1, 9, 17, 25 ],
            "sunday": [ 3, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/The_Dead_Dance.jpg',
          title: 'The Dead Dance',
          artist: 'Ealy Mays',
          year: '2012',
          rule: {
            "monday": [ 3, 13, 19, 27 ],
            "tuesday": [ 5, 13, 21, 2 ],
            "wednesday": [ 7, 15, 11, 1 ],
            "thursday": [ 24, 3, 11, 19 ],
            "friday": [ 26, 5, 13, 21 ],
            "saturday": [ 2, 7, 13, 23 ],
            "sunday": [ 1, 9, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Butterfly_(Red)_Standing_.jpg',
          title: 'Butterfly',
          artist: 'Howard McCalebb',
          year: '2008',
          rule: {
            "monday": [ 1, 9, 17, 25 ],
            "tuesday": [ 3, 13, 19, 27 ],
            "wednesday": [ 5, 13, 21, 2 ],
            "thursday": [ 7, 15, 11, 1 ],
            "friday": [ 24, 3, 11, 19 ],
            "saturday": [ 26, 5, 13, 21 ],
            "sunday": [ 2, 7, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/lp1.jpg',
          title: 'Big Fun (Album Cover)',
          artist: 'Corky McCoy',
          year: '1974',
          rule: {
            "monday": [ 2, 7, 13, 23 ],
            "tuesday": [ 1, 9, 17, 25 ],
            "wednesday": [ 3, 13, 19, 27 ],
            "thursday": [ 5, 13, 21, 2 ],
            "friday": [ 7, 15, 11, 1 ],
            "saturday": [ 24, 3, 11, 19 ],
            "sunday": [ 26, 5, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/BlackTondo.jpg',
          title: 'Black Tondo',
          artist: 'Charles McGill',
          year: '2015',
          rule: {
            "monday": [ 26, 5, 13, 21 ],
            "tuesday": [ 2, 7, 13, 23 ],
            "wednesday": [ 1, 9, 17, 25 ],
            "thursday": [ 3, 13, 19, 27 ],
            "friday": [ 5, 13, 21, 2 ],
            "saturday": [ 7, 15, 11, 1 ],
            "sunday": [ 24, 3, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/614532604_295x166.jpg',
          title: 'Mural',
          artist: 'Julie Mehretu',
          year: '2002',
          rule: {
            "monday": [ 25, 4, 12, 20 ],
            "tuesday": [ 27, 6, 14, 22 ],
            "wednesday": [ 3, 8, 14, 24 ],
            "thursday": [ 2, 10, 18, 26 ],
            "friday": [ 4, 14, 20, 26 ],
            "saturday": [ 6, 14, 22, 3 ],
            "sunday": [ 8, 16, 12, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Dean+Mitchell+3.jpg',
          title: 'Parking on the Reservation',
          artist: 'Dean Mitchell',
          year: '2014',
          rule: {
            "monday": [ 8, 16, 12, 2 ],
            "tuesday": [ 25, 4, 12, 20 ],
            "wednesday": [ 27, 6, 14, 22 ],
            "thursday": [ 3, 8, 14, 24 ],
            "friday": [ 2, 10, 18, 26 ],
            "saturday": [ 4, 14, 20, 26 ],
            "sunday": [ 6, 14, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Phillis_Wheatley_frontispiece.jpg',
          title: 'Phillis Wheatley',
          artist: 'Scipio Moorhead',
          year: '1773',
          rule: {
            "monday": [ 6, 14, 22, 3 ],
            "tuesday": [ 8, 16, 12, 2 ],
            "wednesday": [ 25, 4, 12, 20 ],
            "thursday": [ 27, 6, 14, 22 ],
            "friday": [ 3, 8, 14, 24 ],
            "saturday": [ 2, 10, 18, 26 ],
            "sunday": [ 4, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/tumblr_lhvr2bXwfD1qeq7tpo1_500.jpeg',
          title: 'St. Mary\'s Riverside Parish',
          artist: 'Archibald Motley',
          year: '?',
          rule: {
            "monday": [ 4, 14, 20, 26 ],
            "tuesday": [ 6, 14, 22, 3 ],
            "wednesday": [ 8, 16, 12, 2 ],
            "thursday": [ 25, 4, 12, 20 ],
            "friday": [ 27, 6, 14, 22 ],
            "saturday": [ 3, 8, 14, 24 ],
            "sunday": [ 2, 10, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Gus_Nall_Untitled_1950.jpg',
          title: 'Untitled',
          artist: 'Gus Nall',
          year: '1950',
          rule: {
            "monday": [ 2, 10, 18, 26 ],
            "tuesday": [ 4, 14, 20, 26 ],
            "wednesday": [ 6, 14, 22, 3 ],
            "thursday": [ 8, 16, 12, 2 ],
            "friday": [ 25, 4, 12, 20 ],
            "saturday": [ 27, 6, 14, 22 ],
            "sunday": [ 3, 8, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/AR-140619809.jpg',
          title: '?',
          artist: 'Harold Newton',
          year: '2004',
          rule: {
            "monday": [ 4, 9, 15, 25 ],
            "tuesday": [ 3, 11, 19, 27 ],
            "wednesday": [ 5, 15, 21, 27 ],
            "thursday": [ 7, 15, 23, 4 ],
            "friday": [ 9, 17, 13, 3 ],
            "saturday": [ 26, 5, 13, 21 ],
            "sunday": [ 28, 7, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/larger.jpg',
          title: 'Sisters III (L: Nefertiti\'s daughter, Maketaten; R: Devonia\'s Daughter, Kimberley), from the "Miscegenated Family Album',
          artist: 'Lorraine O\'Grady',
          year: '1980',
          rule: {
            "monday": [ 28, 7, 15, 23 ],
            "tuesday": [ 4, 9, 15, 25 ],
            "wednesday": [ 3, 11, 19, 27 ],
            "thursday": [ 5, 15, 21, 27 ],
            "friday": [ 7, 15, 23, 4 ],
            "saturday": [ 9, 17, 13, 3 ],
            "sunday": [ 26, 5, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/As-the-Sirens-Sweetly-Sang-300x230.jpg',
          title: 'As the Sirens Sweetly Sang',
          artist: 'Turtel Onli',
          year: '2010',
          rule: {
            "monday": [ 26, 5, 13, 21 ],
            "tuesday": [ 28, 7, 15, 23 ],
            "wednesday": [ 4, 9, 15, 25 ],
            "thursday": [ 3, 11, 19, 27 ],
            "friday": [ 5, 15, 21, 27 ],
            "saturday": [ 7, 15, 23, 4 ],
            "sunday": [ 9, 17, 13, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/JackieOrmesTorchyinHearbeats.jpg',
          title: 'Image of Torcy Brown comic strip',
          artist: 'Jackie Ormes',
          year: '1942',
          rule: {
            "monday": [ 9, 17, 13, 3 ],
            "tuesday": [ 26, 5, 13, 21 ],
            "wednesday": [ 28, 7, 15, 23 ],
            "thursday": [ 4, 9, 15, 25 ],
            "friday": [ 3, 11, 19, 27 ],
            "saturday": [ 5, 15, 21, 27 ],
            "sunday": [ 7, 15, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/john_outterbridge_no_time_for_jivingco_from_the_containment_series_1969_hammer_now_dig_this_for_pst_700.jpg',
          title: 'No Time for Jivin\'',
          artist: 'John Outterbridge',
          year: '1969',
          rule: {
            "monday": [ 7, 15, 23, 4 ],
            "tuesday": [ 9, 17, 13, 3 ],
            "wednesday": [ 26, 5, 13, 21 ],
            "thursday": [ 28, 7, 15, 23 ],
            "friday": [ 4, 9, 15, 25 ],
            "saturday": [ 3, 11, 19, 27 ],
            "sunday": [ 5, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Eclipse_by_Joe_Overstreet,_2002.jpg',
          title: 'Eclipse',
          artist: 'Joe Overstreet',
          year: '2002',
          rule: {
            "monday": [ 5, 15, 21, 27 ],
            "tuesday": [ 7, 15, 23, 4 ],
            "wednesday": [ 9, 17, 13, 3 ],
            "thursday": [ 26, 5, 13, 21 ],
            "friday": [ 28, 7, 15, 23 ],
            "saturday": [ 4, 9, 15, 25 ],
            "sunday": [ 3, 11, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Gordon_Parks_-_American_Gothic.jpg',
          title: 'American Gothic',
          artist: 'Gordon Parks',
          year: '1942',
          rule: {
            "monday": [ 3, 11, 19, 27 ],
            "tuesday": [ 5, 15, 21, 27 ],
            "wednesday": [ 7, 15, 23, 4 ],
            "thursday": [ 9, 17, 13, 3 ],
            "friday": [ 26, 5, 13, 21 ],
            "saturday": [ 28, 7, 15, 23 ],
            "sunday": [ 4, 9, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/If_You_Want_To_See_Something_WEBSHARE.jpg',
          title: 'Cecelia Pedescleaux',
          artist: 'Quilt',
          year: '?',
          rule: {
            "monday": [ 5, 10, 16, 26 ],
            "tuesday": [ 4, 12, 20, 28 ],
            "wednesday": [ 6, 16, 22, 28 ],
            "thursday": [ 8, 16, 24, 5 ],
            "friday": [ 10, 18, 14, 4 ],
            "saturday": [ 27, 6, 14, 22 ],
            "sunday": [ 29, 8, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/cropped-screen-shot-2013-06-06-at-8-01-13-am1.png',
          title: '?',
          artist: 'Delilah Pierce',
          year: '?',
          rule: {
            "monday": [ 29, 8, 16, 24 ],
            "tuesday": [ 5, 10, 16, 26 ],
            "wednesday": [ 4, 12, 20, 28 ],
            "thursday": [ 6, 16, 22, 28 ],
            "friday": [ 8, 16, 24, 5 ],
            "saturday": [ 10, 18, 14, 4 ],
            "sunday": [ 27, 6, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Untitled_(Abstract_Figure_No._7).jpg',
          title: 'Untitled (Abstract Figure No. 7)',
          artist: 'Earle M. Pilgrim',
          year: '1954',
          rule: {
            "monday": [ 27, 6, 14, 22 ],
            "tuesday": [ 29, 8, 16, 24 ],
            "wednesday": [ 5, 10, 16, 26 ],
            "thursday": [ 4, 12, 20, 28 ],
            "friday": [ 6, 16, 22, 28 ],
            "saturday": [ 8, 16, 24, 5 ],
            "sunday": [ 10, 18, 14, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Howardeena_Pindell_painting__Queens,_Festival_.jpg',
          title: 'Queens, Festival',
          artist: 'Howardena Pindell',
          year: '1989',
          rule: {
            "monday": [ 10, 18, 14, 4 ],
            "tuesday": [ 27, 6, 14, 22 ],
            "wednesday": [ 29, 8, 16, 24 ],
            "thursday": [ 5, 10, 16, 26 ],
            "friday": [ 4, 12, 20, 28 ],
            "saturday": [ 6, 16, 22, 28 ],
            "sunday": [ 8, 16, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Pinkney_Sweethearts_of_Rhythm_066.jpg',
          title: 'Sweethearts of Rhythm',
          artist: 'Jerry Pinkney',
          year: '2009',
          rule: {
            "monday": [ 8, 16, 24, 5 ],
            "tuesday": [ 10, 18, 14, 4 ],
            "wednesday": [ 27, 6, 14, 22 ],
            "thursday": [ 29, 8, 16, 24 ],
            "friday": [ 5, 10, 16, 26 ],
            "saturday": [ 4, 12, 20, 28 ],
            "sunday": [ 6, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/AdrianPiper65AliceDownRbtHole.png',
          title: 'Alice Down the Rabbit Hole',
          artist: 'Adrian Piper',
          year: '1965',
          rule: {
            "monday": [ 6, 16, 22, 28 ],
            "tuesday": [ 8, 16, 24, 5 ],
            "wednesday": [ 10, 18, 14, 4 ],
            "thursday": [ 27, 6, 14, 22 ],
            "friday": [ 29, 8, 16, 24 ],
            "saturday": [ 5, 10, 16, 26 ],
            "sunday": [ 4, 12, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/The_Death_of_Bessie_Smith_by_Rose_Piper,_1947.jpg',
          title: 'The Death of Bessie Smith',
          artist: 'Rose Piper',
          year: '1947',
          rule: {
            "monday": [ 4, 12, 20, 28 ],
            "tuesday": [ 6, 16, 22, 28 ],
            "wednesday": [ 8, 16, 24, 5 ],
            "thursday": [ 10, 18, 14, 4 ],
            "friday": [ 27, 6, 14, 22 ],
            "saturday": [ 29, 8, 16, 24 ],
            "sunday": [ 5, 10, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Horace_Pippin,_John_Brown_Going_to_His_Hanging.jpg',
          title: 'John Brown Going to His Hanging',
          artist: 'Horace Pippin',
          year: 'c.1940',
          rule: {
            "monday": [ 6, 11, 17, 27 ],
            "tuesday": [ 5, 13, 21, 29 ],
            "wednesday": [ 7, 17, 23, 29 ],
            "thursday": [ 9, 17, 25, 6 ],
            "friday": [ 11, 19, 15, 5 ],
            "saturday": [ 28, 7, 15, 23 ],
            "sunday": [ 1, 9, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/12am69.jpg',
          title: 'Catherine Moton Patterson',
          artist: 'P.H. Polk',
          year: '1982',
          rule: {
            "monday": [ 1, 9, 17, 25 ],
            "tuesday": [ 6, 11, 17, 27 ],
            "wednesday": [ 5, 13, 21, 29 ],
            "thursday": [ 7, 17, 23, 29 ],
            "friday": [ 9, 17, 25, 6 ],
            "saturday": [ 11, 19, 15, 5 ],
            "sunday": [ 28, 7, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/206_1_prints_multiples_january_2016_carl_robert_pope_jr_is_it_da_crack_or_is_it_the_cracker_from_the_bad_air_smelled_of_roses_series__wright_auction.jpg',
          title: 'Is it Da Crack or is it the Cracker from The Bad Air Smelled of Roses series',
          artist: 'Carl Robert Pope',
          year: '2005',
          rule: {
            "monday": [ 28, 7, 15, 23 ],
            "tuesday": [ 1, 9, 17, 25 ],
            "wednesday": [ 6, 11, 17, 27 ],
            "thursday": [ 5, 13, 21, 29 ],
            "friday": [ 7, 17, 23, 29 ],
            "saturday": [ 9, 17, 25, 6 ],
            "sunday": [ 11, 19, 15, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Pope.L_Costume-at-CAMH_Performance_2-Photo-Max-Fields-1024x680.jpg',
          title: 'Costume Made of Nothing',
          artist: 'Pope L.',
          year: '2012',
          rule: {
            "monday": [ 11, 19, 15, 5 ],
            "tuesday": [ 28, 7, 15, 23 ],
            "wednesday": [ 1, 9, 17, 25 ],
            "thursday": [ 6, 11, 17, 27 ],
            "friday": [ 5, 13, 21, 29 ],
            "saturday": [ 7, 17, 23, 29 ],
            "sunday": [ 9, 17, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/PowersBibleQuilt_1886.jpg',
          title: 'Bible Quilt',
          artist: 'Harriet Powers',
          year: '1885 - 1886',
          rule: {
            "monday": [ 9, 17, 25, 6 ],
            "tuesday": [ 11, 19, 15, 5 ],
            "wednesday": [ 28, 7, 15, 23 ],
            "thursday": [ 1, 9, 17, 25 ],
            "friday": [ 6, 11, 17, 27 ],
            "saturday": [ 5, 13, 21, 29 ],
            "sunday": [ 7, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/39117_PRELIMINARY_17.jpg',
          title: 'Faux Vitrine',
          artist: 'Martin Puryear',
          year: '2014',
          rule: {
            "monday": [ 7, 17, 23, 29 ],
            "tuesday": [ 9, 17, 25, 6 ],
            "wednesday": [ 11, 19, 15, 5 ],
            "thursday": [ 28, 7, 15, 23 ],
            "friday": [ 1, 9, 17, 25 ],
            "saturday": [ 6, 11, 17, 27 ],
            "sunday": [ 5, 13, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Patrick_Reason_engraving.jpg',
          title: 'a kneeling slave',
          artist: 'Patrick H. Reason',
          year: '1835',
          rule: {
            "monday": [ 5, 13, 21, 29 ],
            "tuesday": [ 7, 17, 23, 29 ],
            "wednesday": [ 9, 17, 25, 6 ],
            "thursday": [ 11, 19, 15, 5 ],
            "friday": [ 28, 7, 15, 23 ],
            "saturday": [ 1, 9, 17, 25 ],
            "sunday": [ 6, 11, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/US-Cotton-Industry_Thomas-Hart-Benton__01.jpg',
          title: 'Cotton Pickers',
          artist: 'Earle Wilton Richardson',
          year: '1945',
          rule: {
            "monday": [ 7, 12, 18, 28 ],
            "tuesday": [ 6, 14, 22, 1 ],
            "wednesday": [ 8, 18, 24, 1 ],
            "thursday": [ 10, 18, 26, 7 ],
            "friday": [ 12, 20, 16, 6 ],
            "saturday": [ 29, 8, 16, 24 ],
            "sunday": [ 2, 10, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/TarBeach2.jpg',
          title: 'Tar Beach 2',
          artist: 'Faith Ringgold',
          year: '1990',
          rule: {
            "monday": [ 2, 10, 18, 26 ],
            "tuesday": [ 7, 12, 18, 28 ],
            "wednesday": [ 6, 14, 22, 1 ],
            "thursday": [ 8, 18, 24, 1 ],
            "friday": [ 10, 18, 26, 7 ],
            "saturday": [ 12, 20, 16, 6 ],
            "sunday": [ 29, 8, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/H0132-L83954836.jpg',
          title: 'Still Life',
          artist: 'Haywood Rivers',
          year: 'xx cent.',
          rule: {
            "monday": [ 29, 8, 16, 24 ],
            "tuesday": [ 2, 10, 18, 26 ],
            "wednesday": [ 7, 12, 18, 28 ],
            "thursday": [ 6, 14, 22, 1 ],
            "friday": [ 8, 18, 24, 1 ],
            "saturday": [ 10, 18, 26, 7 ],
            "sunday": [ 12, 20, 16, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Rose_RegThumb.jpg',
          title: 'Facts of Life',
          artist: 'Arthur Rose Sr.',
          year: 'xx cent.',
          rule: {
            "monday": [ 12, 20, 16, 6 ],
            "tuesday": [ 29, 8, 16, 24 ],
            "wednesday": [ 2, 10, 18, 26 ],
            "thursday": [ 7, 12, 18, 28 ],
            "friday": [ 6, 14, 22, 1 ],
            "saturday": [ 8, 18, 24, 1 ],
            "sunday": [ 10, 18, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/nomadic_rahn.jpg',
          title: 'Nomadic Rahn(from Mirrors series)',
          artist: 'Bayeté Ross Smith',
          year: '2010',
          rule: {
            "monday": [ 10, 18, 26, 7 ],
            "tuesday": [ 12, 20, 16, 6 ],
            "wednesday": [ 29, 8, 16, 24 ],
            "thursday": [ 2, 10, 18, 26 ],
            "friday": [ 7, 12, 18, 28 ],
            "saturday": [ 6, 14, 22, 1 ],
            "sunday": [ 8, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Snake_Man,_color_woodcut_and_lithograph_by_--Allison_Saar--,_1994,_--The_Contemporary_Museum,_Honolulu--.jpg',
          title: 'Snake Man',
          artist: 'Allison Saar',
          year: '1994',
          rule: {
            "monday": [ 8, 18, 24, 1 ],
            "tuesday": [ 10, 18, 26, 7 ],
            "wednesday": [ 12, 20, 16, 6 ],
            "thursday": [ 29, 8, 16, 24 ],
            "friday": [ 2, 10, 18, 26 ],
            "saturday": [ 7, 12, 18, 28 ],
            "sunday": [ 6, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/tumblr_lj5g5dz9s51qb5i2v.jpg',
          title: 'Pour Vous Madame',
          artist: 'Betye Saar',
          year: '1999',
          rule: {
            "monday": [ 6, 14, 22, 1 ],
            "tuesday": [ 8, 18, 24, 1 ],
            "wednesday": [ 10, 18, 26, 7 ],
            "thursday": [ 12, 20, 16, 6 ],
            "friday": [ 29, 8, 16, 24 ],
            "saturday": [ 2, 10, 18, 26 ],
            "sunday": [ 7, 12, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/salleejpg-0ddfd54bceee4fb3.jpg',
          title: 'Jitterbug Dancer',
          artist: 'Charles L. Sallee Jr',
          year: '?',
          rule: {
            "monday": [ 8, 13, 19, 29 ],
            "tuesday": [ 7, 15, 23, 2 ],
            "wednesday": [ 9, 19, 25, 2 ],
            "thursday": [ 11, 19, 27, 8 ],
            "friday": [ 13, 21, 17, 7 ],
            "saturday": [ 1, 9, 17, 25 ],
            "sunday": [ 3, 11, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/9769.jpg',
          title: 'A Smooth One',
          artist: 'Reginald Sanders',
          year: '1993',
          rule: {
            "monday": [ 3, 11, 19, 27 ],
            "tuesday": [ 8, 13, 19, 29 ],
            "wednesday": [ 7, 15, 23, 2 ],
            "thursday": [ 9, 19, 25, 2 ],
            "friday": [ 11, 19, 27, 8 ],
            "saturday": [ 13, 21, 17, 7 ],
            "sunday": [ 1, 9, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/rs15.jpg',
          title: 'Drawing',
          artist: 'Raymond Saunders',
          year: '2000',
          rule: {
            "monday": [ 1, 9, 17, 25 ],
            "tuesday": [ 3, 11, 19, 27 ],
            "wednesday": [ 8, 13, 19, 29 ],
            "thursday": [ 7, 15, 23, 2 ],
            "friday": [ 9, 19, 25, 2 ],
            "saturday": [ 11, 19, 27, 8 ],
            "sunday": [ 13, 21, 17, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/The-Harp-1.jpg',
          title: 'The Harp',
          artist: 'Augusta Savage',
          year: '1939',
          rule: {
            "monday": [ 13, 21, 17, 7 ],
            "tuesday": [ 1, 9, 17, 25 ],
            "wednesday": [ 3, 11, 19, 27 ],
            "thursday": [ 8, 13, 19, 29 ],
            "friday": [ 7, 15, 23, 2 ],
            "saturday": [ 9, 19, 25, 2 ],
            "sunday": [ 11, 19, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/_Ancestral_Legacy__1.jpg',
          title: 'Ancestral Legacy',
          artist: 'John T. Scott',
          year: '2012',
          rule: {
            "monday": [ 11, 19, 27, 8 ],
            "tuesday": [ 13, 21, 17, 7 ],
            "wednesday": [ 1, 9, 17, 25 ],
            "thursday": [ 3, 11, 19, 27 ],
            "friday": [ 8, 13, 19, 29 ],
            "saturday": [ 7, 15, 23, 2 ],
            "sunday": [ 9, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Scott_Joyce-1024x777.jpg',
          title: 'Man Eating Watermelon',
          artist: 'Joyce J. Scott',
          year: '1986',
          rule: {
            "monday": [ 9, 19, 25, 2 ],
            "tuesday": [ 11, 19, 27, 8 ],
            "wednesday": [ 13, 21, 17, 7 ],
            "thursday": [ 1, 9, 17, 25 ],
            "friday": [ 3, 11, 19, 27 ],
            "saturday": [ 8, 13, 19, 29 ],
            "sunday": [ 7, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/H2361-L16742765.jpg',
          title: 'Sitting On Mama\'s Lap',
          artist: 'Lorenzo Scott',
          year: '2010',
          rule: {
            "monday": [ 7, 15, 23, 2 ],
            "tuesday": [ 9, 19, 25, 2 ],
            "wednesday": [ 11, 19, 27, 8 ],
            "thursday": [ 13, 21, 17, 7 ],
            "friday": [ 1, 9, 17, 25 ],
            "saturday": [ 3, 11, 19, 27 ],
            "sunday": [ 8, 13, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Scott-Rainy_Night.jpg',
          title: 'Rainy Night',
          artist: 'William Edouard Scott',
          year: '1912',
          rule: {
            "monday": [ 9, 14, 20, 1 ],
            "tuesday": [ 8, 16, 24, 3 ],
            "wednesday": [ 10, 20, 26, 3 ],
            "thursday": [ 12, 20, 28, 9 ],
            "friday": [ 14, 22, 18, 8 ],
            "saturday": [ 2, 10, 18, 26 ],
            "sunday": [ 4, 12, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/fjpasodjfpoidj.jpeg',
          title: 'Deep Dream',
          artist: 'Charles Sebree',
          year: '1947',
          rule: {
            "monday": [ 4, 12, 20, 28 ],
            "tuesday": [ 9, 14, 20, 1 ],
            "wednesday": [ 8, 16, 24, 3 ],
            "thursday": [ 10, 20, 26, 3 ],
            "friday": [ 12, 20, 28, 9 ],
            "saturday": [ 14, 22, 18, 8 ],
            "sunday": [ 2, 10, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ts3.jpg',
          title: '?',
          artist: 'Thomas Sills',
          year: '?',
          rule: {
            "monday": [ 2, 10, 18, 26 ],
            "tuesday": [ 4, 12, 20, 28 ],
            "wednesday": [ 9, 14, 20, 1 ],
            "thursday": [ 8, 16, 24, 3 ],
            "friday": [ 10, 20, 26, 3 ],
            "saturday": [ 12, 20, 28, 9 ],
            "sunday": [ 14, 22, 18, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/IMG_5778.jpg',
          title: 'Here\'s... Honey',
          artist: 'Gary Simmons',
          year: '1992',
          rule: {
            "monday": [ 14, 22, 18, 8 ],
            "tuesday": [ 2, 10, 18, 26 ],
            "wednesday": [ 4, 12, 20, 28 ],
            "thursday": [ 9, 14, 20, 1 ],
            "friday": [ 8, 16, 24, 3 ],
            "saturday": [ 10, 20, 26, 3 ],
            "sunday": [ 12, 20, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Simpson_necklines.jpg',
          title: 'Untitled (2 Necklines)',
          artist: 'Lorna Simpson',
          year: '1989',
          rule: {
            "monday": [ 12, 20, 28, 9 ],
            "tuesday": [ 14, 22, 18, 8 ],
            "wednesday": [ 2, 10, 18, 26 ],
            "thursday": [ 4, 12, 20, 28 ],
            "friday": [ 9, 14, 20, 1 ],
            "saturday": [ 8, 16, 24, 3 ],
            "sunday": [ 10, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Merton_Simpson_Orangeburg_Massacre_c_1968.jpg',
          title: 'Orangeburg Massacre',
          artist: 'Merton Simpson',
          year: 'c.1968',
          rule: {
            "monday": [ 10, 20, 26, 3 ],
            "tuesday": [ 12, 20, 28, 9 ],
            "wednesday": [ 14, 22, 18, 8 ],
            "thursday": [ 2, 10, 18, 26 ],
            "friday": [ 4, 12, 20, 28 ],
            "saturday": [ 9, 14, 20, 1 ],
            "sunday": [ 8, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/smith-11.jpg',
          title: 'Drawing',
          artist: 'Cauleen Smith',
          year: '?',
          rule: {
            "monday": [ 8, 16, 24, 3 ],
            "tuesday": [ 10, 20, 26, 3 ],
            "wednesday": [ 12, 20, 28, 9 ],
            "thursday": [ 14, 22, 18, 8 ],
            "friday": [ 2, 10, 18, 26 ],
            "saturday": [ 4, 12, 20, 28 ],
            "sunday": [ 9, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Smith-You_First_LR.jpg',
          title: 'You First',
          artist: 'Leslie Smith III',
          year: '2012',
          rule: {
            "monday": [ 10, 15, 21, 2 ],
            "tuesday": [ 9, 17, 25, 4 ],
            "wednesday": [ 11, 21, 27, 4 ],
            "thursday": [ 13, 21, 29, 10 ],
            "friday": [ 15, 23, 19, 9 ],
            "saturday": [ 3, 11, 19, 27 ],
            "sunday": [ 5, 13, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/VS16_TheSoulBrothers_medium.jpg',
          title: 'The Soul Brothers',
          artist: 'Vincent Smith',
          year: 'c.1969',
          rule: {
            "monday": [ 5, 13, 21, 29 ],
            "tuesday": [ 10, 15, 21, 2 ],
            "wednesday": [ 9, 17, 25, 4 ],
            "thursday": [ 11, 21, 27, 4 ],
            "friday": [ 13, 21, 29, 10 ],
            "saturday": [ 15, 23, 19, 9 ],
            "sunday": [ 3, 11, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/SNOWDEN_brightstarsRED_w450.jpg',
          title: 'Bright Stars of Night RED',
          artist: 'Gilda Snowden',
          year: '2007',
          rule: {
            "monday": [ 3, 11, 19, 27 ],
            "tuesday": [ 5, 13, 21, 29 ],
            "wednesday": [ 10, 15, 21, 2 ],
            "thursday": [ 9, 17, 25, 4 ],
            "friday": [ 11, 21, 27, 4 ],
            "saturday": [ 13, 21, 29, 10 ],
            "sunday": [ 15, 23, 19, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/23398-1383072326-Mitchell Squire.jpg',
          title: 'Always the Same (Yet Never Alike) no. 1',
          artist: 'Mitchell Squire',
          year: '2010',
          rule: {
            "monday": [ 15, 23, 19, 9 ],
            "tuesday": [ 3, 11, 19, 27 ],
            "wednesday": [ 5, 13, 21, 29 ],
            "thursday": [ 10, 15, 21, 2 ],
            "friday": [ 9, 17, 25, 4 ],
            "saturday": [ 11, 21, 27, 4 ],
            "sunday": [ 13, 21, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/2945055592_67354f9d2c.jpg',
          title: 'Institution Series #1',
          artist: 'Raymond Steth',
          year: '1980',
          rule: {
            "monday": [ 13, 21, 29, 10 ],
            "tuesday": [ 15, 23, 19, 9 ],
            "wednesday": [ 3, 11, 19, 27 ],
            "thursday": [ 5, 13, 21, 29 ],
            "friday": [ 10, 15, 21, 2 ],
            "saturday": [ 9, 17, 25, 4 ],
            "sunday": [ 11, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/22ec06594687b23a134cb5954c3400e3.jpg',
          title: 'The Scream at 42',
          artist: 'Renee Stout',
          year: '2001',
          rule: {
            "monday": [ 11, 21, 27, 4 ],
            "tuesday": [ 13, 21, 29, 10 ],
            "wednesday": [ 15, 23, 19, 9 ],
            "thursday": [ 3, 11, 19, 27 ],
            "friday": [ 5, 13, 21, 29 ],
            "saturday": [ 10, 15, 21, 2 ],
            "sunday": [ 9, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Karma-MartineSyms-900x600.jpg',
          title: 'at Karma International',
          artist: 'Martine Syms',
          year: '2016',
          rule: {
            "monday": [ 9, 17, 25, 4 ],
            "tuesday": [ 11, 21, 27, 4 ],
            "wednesday": [ 13, 21, 29, 10 ],
            "thursday": [ 15, 23, 19, 9 ],
            "friday": [ 3, 11, 19, 27 ],
            "saturday": [ 5, 13, 21, 29 ],
            "sunday": [ 10, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Henry_Ossawa_Tanner_-_The_Banjo_Lesson.jpg',
          title: 'The Banjo Lesson',
          artist: 'Henry Ossawa Tanner',
          year: '1893',
          rule: {
            "monday": [ 11, 16, 22, 3 ],
            "tuesday": [ 10, 18, 26, 5 ],
            "wednesday": [ 12, 22, 28, 5 ],
            "thursday": [ 14, 22, 1, 11 ],
            "friday": [ 16, 24, 20, 10 ],
            "saturday": [ 4, 12, 20, 28 ],
            "sunday": [ 6, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/0767.jpg',
          title: 'Peace',
          artist: 'Margaret Taylor-Burroughs',
          year: 'xx cent.',
          rule: {
            "monday": [ 6, 14, 22, 1 ],
            "tuesday": [ 11, 16, 22, 3 ],
            "wednesday": [ 10, 18, 26, 5 ],
            "thursday": [ 12, 22, 28, 5 ],
            "friday": [ 14, 22, 1, 11 ],
            "saturday": [ 16, 24, 20, 10 ],
            "sunday": [ 4, 12, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/a-muse-me-phyllis-anne-taylor-pannet-art-studio.jpg',
          title: 'A Muse Me',
          artist: '"Plannet" Phyllis Anne Taylor',
          year: '2017',
          rule: {
            "monday": [ 4, 12, 20, 28 ],
            "tuesday": [ 6, 14, 22, 1 ],
            "wednesday": [ 11, 16, 22, 3 ],
            "thursday": [ 10, 18, 26, 5 ],
            "friday": [ 12, 22, 28, 5 ],
            "saturday": [ 14, 22, 1, 11 ],
            "sunday": [ 16, 24, 20, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/thomas_apollo12-web.jpg',
          title: 'Splash Down',
          artist: 'Alma Thomas',
          year: '1970',
          rule: {
            "monday": [ 16, 24, 20, 10 ],
            "tuesday": [ 4, 12, 20, 28 ],
            "wednesday": [ 6, 14, 22, 1 ],
            "thursday": [ 11, 16, 22, 3 ],
            "friday": [ 10, 18, 26, 5 ],
            "saturday": [ 12, 22, 28, 5 ],
            "sunday": [ 14, 22, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Left_Behind_2_Again_by_Mickalene_Thomas,_2012.jpg',
          title: 'Left Behind 2 Again',
          artist: 'Mickalene Thomas',
          year: '2012',
          rule: {
            "monday": [ 14, 22, 1, 11 ],
            "tuesday": [ 16, 24, 20, 10 ],
            "wednesday": [ 4, 12, 20, 28 ],
            "thursday": [ 6, 14, 22, 1 ],
            "friday": [ 11, 16, 22, 3 ],
            "saturday": [ 10, 18, 26, 5 ],
            "sunday": [ 12, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/garden-of-music-bob-thompsonOrnetteColemanDonCherryJohnColtraneSonnyRollinsEdBlackwellCharlieHadenBobThomsponWadworthAtheneumHartfordCT.jpg',
          title: 'In the Garden Of Music',
          artist: 'Bob Thompson',
          year: '1960',
          rule: {
            "monday": [ 12, 22, 28, 5 ],
            "tuesday": [ 14, 22, 1, 11 ],
            "wednesday": [ 16, 24, 20, 10 ],
            "thursday": [ 4, 12, 20, 28 ],
            "friday": [ 6, 14, 22, 1 ],
            "saturday": [ 11, 16, 22, 3 ],
            "sunday": [ 10, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/StringTheoryVI.jpg',
          title: 'Magnetic Fields',
          artist: 'Mildred Thompson',
          year: '1991',
          rule: {
            "monday": [ 10, 18, 26, 5 ],
            "tuesday": [ 12, 22, 28, 5 ],
            "wednesday": [ 14, 22, 1, 11 ],
            "thursday": [ 16, 24, 20, 10 ],
            "friday": [ 4, 12, 20, 28 ],
            "saturday": [ 6, 14, 22, 1 ],
            "sunday": [ 11, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/thrash-defense-worker-575x683-575x683.jpg',
          title: 'Defense Worker',
          artist: 'Dox Thrash',
          year: '1941',
          rule: {
            "monday": [ 12, 17, 23, 4 ],
            "tuesday": [ 11, 19, 27, 6 ],
            "wednesday": [ 13, 23, 29, 6 ],
            "thursday": [ 15, 23, 2, 12 ],
            "friday": [ 17, 25, 21, 11 ],
            "saturday": [ 5, 13, 21, 29 ],
            "sunday": [ 7, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Bill-Traylor-4-700x450.jpg',
          title: 'Untitled (Man, Woman)',
          artist: 'Bill Traylor',
          year: 'c.1940 - 1942',
          rule: {
            "monday": [ 7, 15, 23, 2 ],
            "tuesday": [ 12, 17, 23, 4 ],
            "wednesday": [ 11, 19, 27, 6 ],
            "thursday": [ 13, 23, 29, 6 ],
            "friday": [ 15, 23, 2, 12 ],
            "saturday": [ 17, 25, 21, 11 ],
            "sunday": [ 5, 13, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/henry_taylor_im_yours_-_2015.jpg',
          title: 'i’m yours,',
          artist: 'Henry Taylor',
          year: '2015',
          rule: {
            "monday": [ 5, 13, 21, 29 ],
            "tuesday": [ 7, 15, 23, 2 ],
            "wednesday": [ 12, 17, 23, 4 ],
            "thursday": [ 11, 19, 27, 6 ],
            "friday": [ 13, 23, 29, 6 ],
            "saturday": [ 15, 23, 2, 12 ],
            "sunday": [ 17, 25, 21, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/b2f4db70a01f3adc6f9c0a1222259709.jpg',
          title: 'Wee Pals',
          artist: 'Morrie Turner',
          year: '2009',
          rule: {
            "monday": [ 17, 25, 21, 11 ],
            "tuesday": [ 5, 13, 21, 29 ],
            "wednesday": [ 7, 15, 23, 2 ],
            "thursday": [ 12, 17, 23, 4 ],
            "friday": [ 11, 19, 27, 6 ],
            "saturday": [ 13, 23, 29, 6 ],
            "sunday": [ 15, 23, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Evening_Attire.jpg',
          title: 'Evening Attire',
          artist: 'James Van Der Zee',
          year: '1922',
          rule: {
            "monday": [ 15, 23, 2, 12 ],
            "tuesday": [ 17, 25, 21, 11 ],
            "wednesday": [ 5, 13, 21, 29 ],
            "thursday": [ 7, 15, 23, 2 ],
            "friday": [ 12, 17, 23, 4 ],
            "saturday": [ 11, 19, 27, 6 ],
            "sunday": [ 13, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/igugiuy.jpeg',
          title: 'The Means to an End: A Shadow Drama in Five Acts',
          artist: 'Kara Walker',
          year: '1995',
          rule: {
            "monday": [ 13, 23, 29, 6 ],
            "tuesday": [ 15, 23, 2, 12 ],
            "wednesday": [ 17, 25, 21, 11 ],
            "thursday": [ 5, 13, 21, 29 ],
            "friday": [ 7, 15, 23, 2 ],
            "saturday": [ 12, 17, 23, 4 ],
            "sunday": [ 11, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/drescher_10311269413.jpg',
          title: 'Wall of Truth',
          artist: 'William Walker',
          year: '1968',
          rule: {
            "monday": [ 11, 19, 27, 6 ],
            "tuesday": [ 13, 23, 29, 6 ],
            "wednesday": [ 15, 23, 2, 12 ],
            "thursday": [ 17, 25, 21, 11 ],
            "friday": [ 5, 13, 21, 29 ],
            "saturday": [ 7, 15, 23, 2 ],
            "sunday": [ 12, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Heirlooms_by_Laura_Wheeler_1916_New_York_Watercolor_Club_Exhibition_catalog.png',
          title: 'Black and white reproduction of Heirlooms',
          artist: 'Laura Wheeler Waring',
          year: '1916',
          rule: {
            "monday": [ 13, 18, 24, 5 ],
            "tuesday": [ 12, 20, 28, 7 ],
            "wednesday": [ 14, 24, 1, 7 ],
            "thursday": [ 16, 24, 3, 13 ],
            "friday": [ 18, 26, 22, 12 ],
            "saturday": [ 6, 14, 22, 1 ],
            "sunday": [ 8, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/e-m-washington-wood-block-print-pencil-signed-1927-black-americana-rowing-boat-7b34e597488f3d63799d252bee5c873e.jpg',
          title: 'Black Americana Rowing Boat',
          artist: 'E.M. Washington',
          year: '1927',
          rule: {
            "monday": [ 8, 16, 24, 3 ],
            "tuesday": [ 13, 18, 24, 5 ],
            "wednesday": [ 12, 20, 28, 7 ],
            "thursday": [ 14, 24, 1, 7 ],
            "friday": [ 16, 24, 3, 13 ],
            "saturday": [ 18, 26, 22, 12 ],
            "sunday": [ 6, 14, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/jww_hungry_gull.jpg',
          title: 'Hungry Gull',
          artist: 'James W. Washington, Jr.',
          year: '1977',
          rule: {
            "monday": [ 6, 14, 22, 1 ],
            "tuesday": [ 8, 16, 24, 3 ],
            "wednesday": [ 13, 18, 24, 5 ],
            "thursday": [ 12, 20, 28, 7 ],
            "friday": [ 14, 24, 1, 7 ],
            "saturday": [ 16, 24, 3, 13 ],
            "sunday": [ 18, 26, 22, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/H0027-L19578499.jpg',
          title: 'Kitchen Table Series',
          artist: 'Carrie Mae Weems',
          year: '?',
          rule: {
            "monday": [ 18, 26, 22, 12 ],
            "tuesday": [ 6, 14, 22, 1 ],
            "wednesday": [ 8, 16, 24, 3 ],
            "thursday": [ 13, 18, 24, 5 ],
            "friday": [ 12, 20, 28, 7 ],
            "saturday": [ 14, 24, 1, 7 ],
            "sunday": [ 16, 24, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/female-christ.jpg',
          title: 'female Christ',
          artist: 'Pheoris West',
          year: '?',
          rule: {
            "monday": [ 16, 24, 3, 13 ],
            "tuesday": [ 18, 26, 22, 12 ],
            "wednesday": [ 6, 14, 22, 1 ],
            "thursday": [ 8, 16, 24, 3 ],
            "friday": [ 13, 18, 24, 5 ],
            "saturday": [ 12, 20, 28, 7 ],
            "sunday": [ 14, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Charles-White-Songs-of-Life-144k.jpg',
          title: 'Songs of Life',
          artist: 'Charles Wilbert White',
          year: '1953 - 1954',
          rule: {
            "monday": [ 14, 24, 1, 7 ],
            "tuesday": [ 16, 24, 3, 13 ],
            "wednesday": [ 18, 26, 22, 12 ],
            "thursday": [ 6, 14, 22, 1 ],
            "friday": [ 8, 16, 24, 3 ],
            "saturday": [ 13, 18, 24, 5 ],
            "sunday": [ 12, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/DSCN0669.jpg',
          title: '9.11.01',
          artist: 'Jack Whitten',
          year: '2001',
          rule: {
            "monday": [ 12, 20, 28, 7 ],
            "tuesday": [ 14, 24, 1, 7 ],
            "wednesday": [ 16, 24, 3, 13 ],
            "thursday": [ 18, 26, 22, 12 ],
            "friday": [ 6, 14, 22, 1 ],
            "saturday": [ 8, 16, 24, 3 ],
            "sunday": [ 13, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/kehinde-wiley-st-john-630px.jpg',
          title: 'St. John the Baptist in the Wilderness',
          artist: 'Kehinde Wiley',
          year: '2013',
          rule: {
            "monday": [ 14, 19, 25, 6 ],
            "tuesday": [ 13, 21, 29, 8 ],
            "wednesday": [ 15, 25, 2, 8 ],
            "thursday": [ 17, 25, 4, 14 ],
            "friday": [ 19, 27, 23, 13 ],
            "saturday": [ 7, 15, 23, 2 ],
            "sunday": [ 9, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/William_t_williams_trane.jpg',
          title: 'Trane',
          artist: 'William T. Williams',
          year: '1969',
          rule: {
            "monday": [ 9, 17, 25, 4 ],
            "tuesday": [ 14, 19, 25, 6 ],
            "wednesday": [ 13, 21, 29, 8 ],
            "thursday": [ 15, 25, 2, 8 ],
            "friday": [ 17, 25, 4, 14 ],
            "saturday": [ 19, 27, 23, 13 ],
            "sunday": [ 7, 15, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/395826f3ce5a7a15d55bdd899c3b689f.jpg',
          title: 'Posing Beauty',
          artist: 'Deborah Willis',
          year: '?',
          rule: {
            "monday": [ 7, 15, 23, 2 ],
            "tuesday": [ 9, 17, 25, 4 ],
            "wednesday": [ 14, 19, 25, 6 ],
            "thursday": [ 13, 21, 29, 8 ],
            "friday": [ 15, 25, 2, 8 ],
            "saturday": [ 17, 25, 4, 14 ],
            "sunday": [ 19, 27, 23, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/ToMarket.jpg',
          title: 'To Market',
          artist: 'Ellis Wilson',
          year: '?',
          rule: {
            "monday": [ 19, 27, 23, 13 ],
            "tuesday": [ 7, 15, 23, 2 ],
            "wednesday": [ 9, 17, 25, 4 ],
            "thursday": [ 14, 19, 25, 6 ],
            "friday": [ 13, 21, 29, 8 ],
            "saturday": [ 15, 25, 2, 8 ],
            "sunday": [ 17, 25, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/6a00d83451b2c969e20167666c5209970b.jpg',
          title: 'Guarded View',
          artist: 'Fred Wilson',
          year: '1991',
          rule: {
            "monday": [ 17, 25, 4, 14 ],
            "tuesday": [ 19, 27, 23, 13 ],
            "wednesday": [ 7, 15, 23, 2 ],
            "thursday": [ 9, 17, 25, 4 ],
            "friday": [ 14, 19, 25, 6 ],
            "saturday": [ 13, 21, 29, 8 ],
            "sunday": [ 15, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/artstuff.jpg',
          title: 'Lynching',
          artist: 'John Woodrow Wilson',
          year: '1952',
          rule: {
            "monday": [ 15, 25, 2, 8 ],
            "tuesday": [ 17, 25, 4, 14 ],
            "wednesday": [ 19, 27, 23, 13 ],
            "thursday": [ 7, 15, 23, 2 ],
            "friday": [ 9, 17, 25, 4 ],
            "saturday": [ 14, 19, 25, 6 ],
            "sunday": [ 13, 21, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/593502.jpg',
          title: 'African Woman',
          artist: 'Beulah Woodard',
          year: '?',
          rule: {
            "monday": [ 13, 21, 29, 8 ],
            "tuesday": [ 15, 25, 2, 8 ],
            "wednesday": [ 17, 25, 4, 14 ],
            "thursday": [ 19, 27, 23, 13 ],
            "friday": [ 7, 15, 23, 2 ],
            "saturday": [ 9, 17, 25, 4 ],
            "sunday": [ 14, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/001_hw_dig_cropped_custom-9a6c4fd44ddc27ed6a1f9d9c3f5db64ae51b697f-s900-c85.jpg',
          title: 'Amistad',
          artist: 'Hale Woodruff',
          year: '1938',
          rule: {
            "monday": [ 15, 20, 26, 7 ],
            "tuesday": [ 14, 22, 1, 9 ],
            "wednesday": [ 16, 26, 3, 9 ],
            "thursday": [ 18, 26, 5, 15 ],
            "friday": [ 20, 28, 24, 14 ],
            "saturday": [ 8, 16, 24, 3 ],
            "sunday": [ 10, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/H0132-L17286915.jpg',
          title: 'Teddy Edwards',
          artist: 'Richard Wyatt Jr.',
          year: '1991',
          rule: {
            "monday": [ 10, 18, 26, 5 ],
            "tuesday": [ 15, 20, 26, 7 ],
            "wednesday": [ 14, 22, 1, 9 ],
            "thursday": [ 16, 26, 3, 9 ],
            "friday": [ 18, 26, 5, 15 ],
            "saturday": [ 20, 28, 24, 14 ],
            "sunday": [ 8, 16, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/69107_1.jpg',
          title: 'Dancing at the Savoy',
          artist: 'Richard Yarde',
          year: 'xx cent.',
          rule: {
            "monday": [ 8, 16, 24, 3 ],
            "tuesday": [ 10, 18, 26, 5 ],
            "wednesday": [ 15, 20, 26, 7 ],
            "thursday": [ 14, 22, 1, 9 ],
            "friday": [ 16, 26, 3, 9 ],
            "saturday": [ 18, 26, 5, 15 ],
            "sunday": [ 20, 28, 24, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/joseph-yoakum.jpg',
          title: 'Brazus Valley near Amarillo, Texas',
          artist: 'Joseph Yoakum',
          year: 'xx cent.',
          rule: {
            "monday": [ 20, 28, 24, 14 ],
            "tuesday": [ 8, 16, 24, 3 ],
            "wednesday": [ 10, 18, 26, 5 ],
            "thursday": [ 15, 20, 26, 7 ],
            "friday": [ 14, 22, 1, 9 ],
            "saturday": [ 16, 26, 3, 9 ],
            "sunday": [ 18, 26, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Purvis_Young_Untitled_ca._1988.jpg',
          title: 'Untitled',
          artist: 'Purvis Young',
          year: 'c. 1988',
          rule: {
            "monday": [ 18, 26, 5, 15 ],
            "tuesday": [ 20, 28, 24, 14 ],
            "wednesday": [ 8, 16, 24, 3 ],
            "thursday": [ 10, 18, 26, 5 ],
            "friday": [ 15, 20, 26, 7 ],
            "saturday": [ 14, 22, 1, 9 ],
            "sunday": [ 16, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/alfred-hair-10.jpg',
          title: 'Royal Poinsettia',
          artist: 'Alfred Hair',
          year: 'xx cent.',
          rule: {
            "monday": [ 16, 26, 3, 9 ],
            "tuesday": [ 18, 26, 5, 15 ],
            "wednesday": [ 20, 28, 24, 14 ],
            "thursday": [ 8, 16, 24, 3 ],
            "friday": [ 10, 18, 26, 5 ],
            "saturday": [ 15, 20, 26, 7 ],
            "sunday": [ 14, 22, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Arnett-7.jpg',
          title: 'Untitled',
          artist: 'Curtis Arnett',
          year: 'xx cent.',
          rule: {
            "monday": [ 14, 22, 1, 9 ],
            "tuesday": [ 16, 26, 3, 9 ],
            "wednesday": [ 18, 26, 5, 15 ],
            "thursday": [ 20, 28, 24, 14 ],
            "friday": [ 8, 16, 24, 3 ],
            "saturday": [ 10, 18, 26, 5 ],
            "sunday": [ 15, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/fob_agenda-africobra-olympicvictory-alonzoparham-teaser.jpg',
          title: 'AfriCOBRA sketch',
          artist: 'unknown',
          year: '?',
          rule: {
            "monday": [ 16, 21, 27, 8 ],
            "tuesday": [ 15, 23, 2, 10 ],
            "wednesday": [ 17, 27, 4, 10 ],
            "thursday": [ 19, 27, 6, 16 ],
            "friday": [ 21, 29, 25, 15 ],
            "saturday": [ 9, 17, 25, 4 ],
            "sunday": [ 11, 19, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/mt-whycantwejustsitdownandtalkitover-mickalenethomas.jpg',
          title: 'Why Cant We Just Sit Down And Talk It Over',
          artist: 'Mickalene Thoma',
          year: '?',
          rule: {
            "monday": [ 11, 19, 27, 6 ],
            "tuesday": [ 16, 21, 27, 8 ],
            "wednesday": [ 15, 23, 2, 10 ],
            "thursday": [ 17, 27, 4, 10 ],
            "friday": [ 19, 27, 6, 16 ],
            "saturday": [ 21, 29, 25, 15 ],
            "sunday": [ 9, 17, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/art-paintings-15.jpg',
          title: 'Labour Painting',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 17, 25, 4 ],
            "tuesday": [ 11, 19, 27, 6 ],
            "wednesday": [ 16, 21, 27, 8 ],
            "thursday": [ 15, 23, 2, 10 ],
            "friday": [ 17, 27, 4, 10 ],
            "saturday": [ 19, 27, 6, 16 ],
            "sunday": [ 21, 29, 25, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/confrontation.jpg',
          title: 'Confrontation at the Bridge',
          artist: 'Jacob Lawrence',
          year: '1974',
          rule: {
            "monday": [ 21, 29, 25, 15 ],
            "tuesday": [ 9, 17, 25, 4 ],
            "wednesday": [ 11, 19, 27, 6 ],
            "thursday": [ 16, 21, 27, 8 ],
            "friday": [ 15, 23, 2, 10 ],
            "saturday": [ 17, 27, 4, 10 ],
            "sunday": [ 19, 27, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/mask.jpg',
          title: 'If I Were Jehovah',
          artist: 'Jon Onye Lockard',
          year: '1970',
          rule: {
            "monday": [ 19, 27, 6, 16 ],
            "tuesday": [ 21, 29, 25, 15 ],
            "wednesday": [ 9, 17, 25, 4 ],
            "thursday": [ 11, 19, 27, 6 ],
            "friday": [ 16, 21, 27, 8 ],
            "saturday": [ 15, 23, 2, 10 ],
            "sunday": [ 17, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/Montreux_main.png',
          title: 'Danseuses',
          artist: 'Malika Favre',
          year: '2017',
          rule: {
            "monday": [ 17, 27, 4, 10 ],
            "tuesday": [ 19, 27, 6, 16 ],
            "wednesday": [ 21, 29, 25, 15 ],
            "thursday": [ 9, 17, 25, 4 ],
            "friday": [ 11, 19, 27, 6 ],
            "saturday": [ 16, 21, 27, 8 ],
            "sunday": [ 15, 23, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/04-001.jpg',
          title: 'Shotgun, Third Ward #1',
          artist: 'John Biggers',
          year: '1966',
          rule: {
            "monday": [ 15, 23, 2, 10 ],
            "tuesday": [ 17, 27, 4, 10 ],
            "wednesday": [ 19, 27, 6, 16 ],
            "thursday": [ 21, 29, 25, 15 ],
            "friday": [ 9, 17, 25, 4 ],
            "saturday": [ 11, 19, 27, 6 ],
            "sunday": [ 16, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/18.jpg',
          title: 'Red Stripe with Green Background',
          artist: 'Felrath Hines',
          year: '?',
          rule: {
            "monday": [ 17, 22, 28, 9 ],
            "tuesday": [ 16, 24, 3, 11 ],
            "wednesday": [ 18, 28, 5, 11 ],
            "thursday": [ 20, 28, 7, 17 ],
            "friday": [ 22, 1, 26, 16 ],
            "saturday": [ 10, 18, 26, 5 ],
            "sunday": [ 12, 20, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/21.jpg',
          title: 'self-portrait',
          artist: 'Lois Mailou Jones',
          year: '1940',
          rule: {
            "monday": [ 12, 20, 28, 7 ],
            "tuesday": [ 17, 22, 28, 9 ],
            "wednesday": [ 16, 24, 3, 11 ],
            "thursday": [ 18, 28, 5, 11 ],
            "friday": [ 20, 28, 7, 17 ],
            "saturday": [ 22, 1, 26, 16 ],
            "sunday": [ 10, 18, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Black History Month',
          img_path: './img/february/20.jpg',
          title: 'John Henry',
          artist: 'Frederick Brown',
          year: '?',
          rule: {
            "monday": [ 10, 18, 26, 5 ],
            "tuesday": [ 12, 20, 28, 7 ],
            "wednesday": [ 17, 22, 28, 9 ],
            "thursday": [ 16, 24, 3, 11 ],
            "friday": [ 18, 28, 5, 11 ],
            "saturday": [ 20, 28, 7, 17 ],
            "sunday": [ 22, 1, 26, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_arts_id_seq', (SELECT MAX(id) FROM february_arts));");
    });
};
