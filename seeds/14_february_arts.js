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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
          theme: 'black history',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_arts_id_seq', (SELECT MAX(id) FROM february_arts));");
    });
};
