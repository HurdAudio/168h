'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/my-small-world.jpg',
          title: 'My Small World',
          artist: 'Achraf Baznani',
          year: '2014',
          rule: {
            "monday": "[ 30, 10, 20, 28 ]",
            "tuesday": "[ 29, 9, 19, 27 ]",
            "wednesday": "[ 28, 8, 18, 26 ]",
            "thursday": "[ 27, 7, 17, 25 ]",
            "friday": "[ 26, 6, 16, 24 ]",
            "saturday": "[ 25, 5, 15, 23 ]",
            "sunday": "[ 1, 11, 21, 29 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/tumblr-nvtla1gqan1qdsei8o1-1280.jpg',
          title: 'Chloë Sevigny',
          artist: 'Wolfgang Tillmans',
          year: '1995',
          rule: {
            "monday": "[ 1, 11, 21, 29 ]",
            "tuesday": "[ 30, 10, 20, 28 ]",
            "wednesday": "[ 29, 9, 19, 27 ]",
            "thursday": "[ 28, 8, 18, 26 ]",
            "friday": "[ 27, 7, 17, 25 ]",
            "saturday": "[ 26, 6, 16, 24 ]",
            "sunday": "[ 25, 5, 15, 23 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/eight-piles-2003.jpg',
          title: 'Eight Piles',
          artist: 'David Burdeny',
          year: '2003',
          rule: {
            "monday": "[ 25, 5, 15, 23 ]",
            "tuesday": "[ 1, 11, 21, 29 ]",
            "wednesday": "[ 30, 10, 20, 28 ]",
            "thursday": "[ 29, 9, 19, 27 ]",
            "friday": "[ 28, 8, 18, 26 ]",
            "saturday": "[ 27, 7, 17, 25 ]",
            "sunday": "[ 26, 6, 16, 24 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/gold-in-the-morning-series.jpg',
          title: 'Gold in the morning (A - J)',
          artist: 'Alfredo Jaar',
          year: '1985',
          rule: {
            "monday": "[ 26, 6, 16, 24 ]",
            "tuesday": "[ 25, 5, 15, 23 ]",
            "wednesday": "[ 1, 11, 21, 29 ]",
            "thursday": "[ 30, 10, 20, 28 ]",
            "friday": "[ 29, 9, 19, 27 ]",
            "saturday": "[ 28, 8, 18, 26 ]",
            "sunday": "[ 27, 7, 17, 25 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/ratingen-swimming-pool-1987.jpg',
          title: 'Ratingen Swimming Pool',
          artist: 'Andreas Gursky',
          year: '1987',
          rule: {
            "monday": "[ 27, 7, 17, 25 ]",
            "tuesday": "[ 26, 6, 16, 24 ]",
            "wednesday": "[ 25, 5, 15, 23 ]",
            "thursday": "[ 1, 11, 21, 29 ]",
            "friday": "[ 30, 10, 20, 28 ]",
            "saturday": "[ 29, 9, 19, 27 ]",
            "sunday": "[ 28, 8, 18, 26 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-cigarettes-1979.jpg',
          title: 'Untitled (Cigarettes)',
          artist: 'Richard Prince',
          year: '1978 - 1979',
          rule: {
            "monday": "[ 28, 8, 18, 26 ]",
            "tuesday": "[ 27, 7, 17, 25 ]",
            "wednesday": "[ 26, 6, 16, 24 ]",
            "thursday": "[ 25, 5, 15, 23 ]",
            "friday": "[ 1, 11, 21, 29 ]",
            "saturday": "[ 30, 10, 20, 28 ]",
            "sunday": "[ 29, 9, 19, 27 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-35mm-transparency-1990.jpg',
          title: 'Untitled (35mm Transparency)',
          artist: 'Li Yuan-chia',
          year: '1990',
          rule: {
            "monday": "[ 30, 10, 20, 28 ]",
            "tuesday": "[ 29, 9, 19, 27 ]",
            "wednesday": "[ 28, 8, 18, 26 ]",
            "thursday": "[ 27, 7, 17, 25 ]",
            "friday": "[ 26, 6, 16, 24 ]",
            "saturday": "[ 2, 12, 22, 30 ]",
            "sunday": "[ 1, 11, 21, 29 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-1930.jpg',
          title: 'Untitled',
          artist: 'Kansuke Yamamoto',
          year: '1930',
          rule: {
            "monday": "[ 1, 11, 21, 29 ]",
            "tuesday": "[ 30, 10, 20, 28 ]",
            "wednesday": "[ 29, 9, 19, 27 ]",
            "thursday": "[ 28, 8, 18, 26 ]",
            "friday": "[ 27, 7, 17, 25 ]",
            "saturday": "[ 26, 6, 16, 24 ]",
            "sunday": "[ 2, 12, 22, 30 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/pavilion-de-l-elegance-madeleine-vionnet-1937.jpg',
          title: 'Pavilion de l\'elegance (Madeleine Vionnet)',
          artist: 'Wols',
          year: '1937',
          rule: {
            "monday": "[ 2, 12, 22, 30 ]",
            "tuesday": "[ 1, 11, 21, 29 ]",
            "wednesday": "[ 30, 10, 20, 28 ]",
            "thursday": "[ 29, 9, 19, 27 ]",
            "friday": "[ 28, 8, 18, 26 ]",
            "saturday": "[ 27, 7, 17, 25 ]",
            "sunday": "[ 26, 6, 16, 24 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/ridiculous-portrait-contact-sheet-1972.jpg',
          title: 'Ridiculous Portrait (Contact Sheet)',
          artist: 'May Wilson',
          year: '1972',
          rule: {
            "monday": "[ 26, 6, 16, 24 ]",
            "tuesday": "[ 2, 12, 22, 30 ]",
            "wednesday": "[ 1, 11, 21, 29 ]",
            "thursday": "[ 30, 10, 20, 28 ]",
            "friday": "[ 29, 9, 19, 27 ]",
            "saturday": "[ 28, 8, 18, 26 ]",
            "sunday": "[ 27, 7, 17, 25 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_arts_id_seq', (SELECT MAX(id) FROM june_arts));");
    });
};
