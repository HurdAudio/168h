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
        },
        {
          id: 5,
          user_id: 1,
          theme: 'light',
          type: 'saturday',
          src_string: '../img/june_tiles/light2.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#010602',
          color_medium: '#D7A057',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'light',
          type: 'sunday',
          src_string: '../img/june_tiles/sun-light.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#4378AE',
          color_medium: '#8B80B8',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'light',
          type: 'holiday',
          src_string: '../img/june_tiles/fireworks___texture_by_b3hindhersmil3.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1C0903',
          color_medium: '#F77A42',
          color_light: '#F9FFF8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'light',
          type: 'week',
          src_string: '../img/june_tiles/textures-106-l.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#0B0704',
          color_medium: '#61574E',
          color_light: '#F9D8DC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'light',
          type: 'friday',
          src_string: '../img/june_tiles/concert-336695_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#030303',
          color_medium: '#B9C4AC',
          color_light: '#E2E5E4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'light',
          type: 'saturday',
          src_string: '../img/june_tiles/sunbeam-76825_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0C121E',
          color_medium: '#303547',
          color_light: '#EADFC9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'light',
          type: 'sunday',
          src_string: '../img/june_tiles/light-2994535_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#7D8293',
          color_medium: '#F9B840',
          color_light: '#F9E7C3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'light',
          type: 'holiday',
          src_string: '../img/june_tiles/lichtreflex-421101_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#FE3D04',
          color_medium: '#FD9D39',
          color_light: '#FAFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_tiles_id_seq', (SELECT MAX(id) FROM june_tiles));");
    });
};
