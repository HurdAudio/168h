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
            "monday": "[3, 11, 19, 27]",
            "tuesday": "[5, 13, 21, 29]",
            "wednesday": "[7, 15, 23, 2]",
            "thursday": "[9, 17, 25, 4]",
            "friday": "[11, 19, 27, 6]",
            "saturday": "[13, 21, 29, 8]",
            "sunday": "[1, 9, 17, 25]"
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
            "monday": "[1, 9, 17, 25]",
            "tuesday": "[3, 11, 19, 27]",
            "wednesday": "[5, 13, 21, 29]",
            "thursday": "[7, 15, 23, 2]",
            "friday": "[9, 17, 25,4]",
            "saturday": "[11, 19, 27, 6]",
            "sunday": "[13, 21, 29, 8]"
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
            "monday": "[13, 21, 29, 8]",
            "tuesday": "[1, 9, 17, 25]",
            "wednesday": "[3, 11, 19, 27]",
            "thursday": "[5, 13, 21, 29]",
            "friday": "[7, 15, 23, 2]",
            "saturday": "[9, 17, 25, 4]",
            "sunday": "[11, 19, 27, 6]"
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
            "monday": "[11, 19, 27, 6]",
            "tuesday": "[13, 21, 29, 8]",
            "wednesday": "[1, 9, 17, 25]",
            "thursday": "[3, 11, 19, 27]",
            "friday": "[5, 13, 21, 29]",
            "saturday": "[7, 15, 23, 2]",
            "sunday": "[9, 17, 25, 4]"
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
            "monday": "[9, 17, 25, 4]",
            "tuesday": "[11, 19, 27, 6]",
            "wednesday": "[13, 21, 28, 8]",
            "thursday": "[1, 9, 17, 25]",
            "friday": "[3, 11, 19, 27]",
            "saturday": "[5, 13, 21, 29]",
            "sunday": "[7, 15, 23, 2]"
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
            "monday": "[7, 15, 23, 2]",
            "tuesday": "[9, 17, 25, 4]",
            "wednesday": "[11, 19, 27, 6]",
            "thursday": "[13, 21, 28, 8]",
            "friday": "[1, 9, 17, 25]",
            "saturday": "[3, 11, 19, 27]",
            "sunday": "[5, 13, 21, 29]"
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
            "monday": "[5, 13, 21, 29]",
            "tuesday": "[7, 15, 23, 2]",
            "wednesday": "[9, 17, 25, 4]",
            "thursday": "[11, 19, 27, 6]",
            "friday": "[13, 21, 28, 8]",
            "saturday": "[1, 9, 17, 25]",
            "sunday": "[3, 11, 19, 27]"
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
            "monday": "[4, 12, 20, 28]",
            "tuesday": "[6, 14, 22, 1]",
            "wednesday": "[8, 16, 24, 3]",
            "thursday": "[10, 18, 26, 5]",
            "friday": "[12, 20, 28, 7]",
            "saturday": "[14, 22, 29, 9]",
            "sunday": "[2, 10, 18, 26]"
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
            "monday": "[2, 10, 18, 26]",
            "tuesday": "[4, 12, 20, 28]",
            "wednesday": "[6, 14, 22, 1]",
            "thursday": "[8, 16, 24, 3]",
            "friday": "[10, 18, 26, 5]",
            "saturday": "[12, 20, 28, 7]",
            "sunday": "[14, 22, 29, 9]"
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
            "monday": "[14, 22, 29, 9]",
            "tuesday": "[2, 10, 18, 26]",
            "wednesday": "[4, 12, 20, 28]",
            "thursday": "[6, 14, 22, 1]",
            "friday": "[8, 16, 24, 3]",
            "saturday": "[10, 18, 26, 5]",
            "sunday": "[12, 20, 28, 7]"
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
            "monday": "[12, 20, 28, 7]",
            "tuesday": "[14, 22, 29, 9]",
            "wednesday": "[2, 10, 18, 26]",
            "thursday": "[4, 12, 20, 28]",
            "friday": "[9, 14, 22, 1]",
            "saturday": "[8, 16, 24, 3]",
            "sunday": "[10, 18, 26, 5]"
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
            "monday": "[10, 18, 26, 5]",
            "tuesday": "[12, 20, 28, 7]",
            "wednesday": "[14, 22, 29, 9]",
            "thursday": "[2, 10, 18, 26]",
            "friday": "[4, 12, 20, 28]",
            "saturday": "[9, 14, 22, 1]",
            "sunday": "[8, 16, 24, 3]"
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
            "monday": "[8, 16, 24, 3]",
            "tuesday": "[10, 18, 26, 5]",
            "wednesday": "[12, 20, 28, 9]",
            "thursday": "[14, 22, 29, 9]",
            "friday": "[2, 10, 18, 26]",
            "saturday": "[4, 12, 20, 28]",
            "sunday": "[9, 14, 22, 1]"
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
            "monday": "[10, 15, 23, 2]",
            "tuesday": "[9, 17, 25, 4]",
            "wednesday": "[11, 19, 27, 6]",
            "thursday": "[13, 21, 29, 10]",
            "friday": "[15, 23, 1, 10]",
            "saturday": "[3, 11, 19, 27]",
            "sunday": "[5, 13, 21, 29]"
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
            "monday": "[5, 13, 21, 29]",
            "tuesday": "[10, 15, 23, 2]",
            "wednesday": "[9, 17, 25, 4]",
            "thursday": "[11, 19, 27, 6]",
            "friday": "[13, 21, 29, 10]",
            "saturday": "[15, 23, 1, 10]",
            "sunday": "[3, 11, 19, 27]"
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
            "monday": "[3, 11, 19, 27]",
            "tuesday": "[5, 13, 21, 29]",
            "wednesday": "[10, 15, 23, 2]",
            "thursday": "[9, 17, 25, 4]",
            "friday": "[11, 19, 27, 6]",
            "saturday": "[13, 21, 29, 10]",
            "sunday": "[15, 23, 1, 10]"
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
            "monday": "[15, 23, 1, 10]",
            "tuesday": "[3, 11, 19, 27]",
            "wednesday": "[5, 13, 21, 29]",
            "thursday": "[10, 15, 23, 2]",
            "friday": "[9, 17, 25, 4]",
            "saturday": "[11, 19, 27, 6]",
            "sunday": "[13, 21, 29, 10]"
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
            "monday": "[13, 21, 29, 10]",
            "tuesday": "[15, 23, 1, 10]",
            "wednesday": "[3, 11, 19, 27]",
            "thursday": "[5, 13, 21, 29]",
            "friday": "[10, 15, 23, 2]",
            "saturday": "[9, 17, 25, 4]",
            "sunday": "[11, 19, 27, 6]"
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
            "monday": "[11, 19, 27, 6]",
            "tuesday": "[13, 21, 29, 10]",
            "wednesday": "[15, 23, 1, 10]",
            "thursday": "[3, 11, 19, 27]",
            "friday": "[5, 13, 21, 29]",
            "saturday": "[10, 15, 23, 2]",
            "sunday": "[9, 17, 25, 4]"
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
            "monday": "[9, 17, 25, 4]",
            "tuesday": "[11, 19, 27, 6]",
            "wednesday": "[13, 21, 29, 10]",
            "thursday": "[15, 23, 1, 10]",
            "friday": "[3, 11, 19, 27]",
            "saturday": "[5, 13, 21, 29]",
            "sunday": "[10, 15, 23, 2]"
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
            "monday": "[11, 16, 24, 3]",
            "tuesday": "[10, 18, 26, 5]",
            "wednesday": "[12, 20, 28, 7]",
            "thursday": "[14, 22, 1, 11]",
            "friday": "[16, 24, 2, 11]",
            "saturday": "[4, 12, 20, 28]",
            "sunday": "[6, 14, 22, 1]"
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
            "monday": "[6, 14, 22, 1]",
            "tuesday": "[11, 16, 24, 3]",
            "wednesday": "[10, 18, 26, 5]",
            "thursday": "[12, 20, 28, 7]",
            "friday": "[14, 22, 1, 11]",
            "saturday": "[16, 24, 2, 11]",
            "sunday": "[4, 12, 20, 28]"
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
            "monday": "[4, 12, 20, 28]",
            "tuesday": "[6, 14, 22, 1]",
            "wednesday": "[11, 16, 24, 3]",
            "thursday": "[10, 18, 26, 5]",
            "friday": "[12, 20, 28, 7]",
            "saturday": "[14, 22, 1, 11]",
            "sunday": "[16, 24, 2, 11]"
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
            "monday": "[16, 24, 2, 11]",
            "tuesday": "[4, 12, 20, 28]",
            "wednesday": "[6, 14, 22, 1]",
            "thursday": "[11, 16, 24, 3]",
            "friday": "[10, 18, 26, 5]",
            "saturday": "[12, 20, 28, 7]",
            "sunday": "[14, 22, 1, 11]"
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
            "monday": "[14, 22, 1, 11]",
            "tuesday": "[16, 24, 2, 11]",
            "wednesday": "[4, 12, 20, 28]",
            "thursday": "[6, 14, 22, 1]",
            "friday": "[11, 16, 24, 3]",
            "saturday": "[10, 18, 26, 5]",
            "sunday": "[12, 20, 28, 7]"
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
            "monday": "[12, 20, 28, 7]",
            "tuesday": "[14, 22, 1, 11]",
            "wednesday": "[16, 24, 20, 11]",
            "thursday": "[4, 12, 20, 28]",
            "friday": "[6, 14, 22, 1]",
            "saturday": "[11, 16, 24, 3]",
            "sunday": "[10, 18, 26, 5]"
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
            "monday": "[10, 18, 26, 5]",
            "tuesday": "[12, 20, 28, 7]",
            "wednesday": "[14, 22, 1, 11]",
            "thursday": "[16, 24, 20, 11]",
            "friday": "[4, 12, 20, 28]",
            "saturday": "[6, 14, 22, 1]",
            "sunday": "[11, 16, 24, 3]"
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
            "monday": "[12, 17, 25, 4]",
            "tuesday": "[11, 19, 27, 6]",
            "wednesday": "[13, 21, 29, 8]",
            "thursday": "[15, 23, 2, 12]",
            "friday": "[17, 25, 21, 12]",
            "saturday": "[5, 13, 21, 29]",
            "sunday": "[7, 15, 23, 2]"
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
            "monday": "[7, 15, 23, 2]",
            "tuesday": "[12, 17, 25, 4]",
            "wednesday": "[11, 19, 27, 6]",
            "thursday": "[13, 21, 29, 8]",
            "friday": "[15, 23, 2, 12]",
            "saturday": "[17, 25, 21, 12]",
            "sunday": "[5, 13, 21, 29]"
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
            "monday": "[5, 13, 21, 29]",
            "tuesday": "[7, 15, 23, 2]",
            "wednesday": "[12, 17, 25, 4]",
            "thursday": "[11, 19, 27, 6]",
            "friday": "[13, 21, 29, 8]",
            "saturday": "[15, 23, 2, 12]",
            "sunday": "[17, 25, 21, 12]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_arts_id_seq', (SELECT MAX(id) FROM february_arts));");
    });
};
