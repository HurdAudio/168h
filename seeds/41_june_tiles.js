'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'light',
          type: 'default',
          src_string: '../img/june_tiles/black-and-white-lights-sun-ray-of-sunshine.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#181818',
          color_medium: '#5D5D5D',
          color_light: '#FBFBFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'light',
          type: 'week',
          src_string: '../img/june_tiles/lights-932185_640.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000000',
          color_medium: '#906218',
          color_light: '#FFFBCB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'light',
          type: 'mtwt',
          src_string: '../img/june_tiles/lights-2618332_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#080F2B',
          color_medium: '#9B5E41',
          color_light: '#F6EAD2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'light',
          type: 'friday',
          src_string: '../img/june_tiles/LGTFX.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#0B0B0D',
          color_medium: '#10A650',
          color_light: '#FDEC7C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_tiles_id_seq', (SELECT MAX(id) FROM june_tiles));");
    });
};
