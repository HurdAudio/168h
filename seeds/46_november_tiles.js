'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'monochromatic',
          type: 'default',
          src_string: '../img/november_tiles/black-and-white-images-of-birds-3-widescreen-wallpaper.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#323232',
          color_medium: '#A7A7A7',
          color_light: '#EBEBEB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/wave-2822857_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '105%',
          color_dark: '#4B4B4B',
          color_medium: '#FAFAFA',
          color_light: '#F7F7F7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'monochromatic',
          type: 'mtwt',
          src_string: '../img/november_tiles/floor-tile-pattern-floor-tile-pattern.jpg',
          repeat_value: 'no-repeat',
          size_value: '105%',
          color_dark: '#171717',
          color_medium: '#BCBCBC',
          color_light: '#CFCFCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/stark-1891510_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#030303',
          color_medium: '#9B9B9B',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/black-and-white-2703890_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#0E0E0E',
          color_medium: '#676767',
          color_light: '#C1C1C1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/blue-1317256_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#4D90CD',
          color_medium: '#B1CDE8',
          color_light: '#DDE7F1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_tiles_id_seq', (SELECT MAX(id) FROM november_tiles));");
    });
};
