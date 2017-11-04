'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'greenery',
          type: 'default',
          src_string: '../img/may_tiles/abstract-21918_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#025700',
          color_medium: '#22A60A',
          color_light: '#4FB706',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'greenery',
          type: 'week',
          src_string: '../img/may_tiles/leaf-2545169_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#469624',
          color_medium: '#55B28B',
          color_light: '#9EEDE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'greenery',
          type: 'mtwt',
          src_string: '../img/may_tiles/bud-2541947_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#1E3403',
          color_medium: '#618B03',
          color_light: '#E0FFD8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'greenery',
          type: 'friday',
          src_string: '../img/may_tiles/stevia-74187_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#17630B',
          color_medium: '#65BF3F',
          color_light: '#8BD95F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/39974347-green-grass-texture-you-can-use-for-your-projects.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#132C0A',
          color_medium: '#65843F',
          color_light: '#DFF4B4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/194-1258059592-d4c2bac619a7f3771177e71974077cc5.jpg',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#559311',
          color_medium: '#81B81D',
          color_light: '#C2DD55',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/Tl6aff5.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#020006',
          color_medium: '#0E5601',
          color_light: '#D4EB2F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_tiles_id_seq', (SELECT MAX(id) FROM may_tiles));");
    });
};
