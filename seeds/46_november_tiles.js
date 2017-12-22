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
        },
        {
          id: 7,
          user_id: 1,
          theme: 'monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/geometric-1562524_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#BF0000',
          color_medium: '#FF6597',
          color_light: '#FF97CA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/yerevan-6.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#141311',
          color_medium: '#90918C',
          color_light: '#C1C2C7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/3d-stone-wall-cladding-idea-boxy-natural-stone-mosaic-wall-tiles-creative-wall-cladding-installation-for-3d-effect-result-3d-feature-wall-3d-stone-tiles-natural-stone-wall-cladding-stone-mosaic-til-940x705.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0C0A0C',
          color_medium: '#A4875D',
          color_light: '#EFD5AD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/Pyramid_700x465._V352857426_.gif',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#242424',
          color_medium: '#3B3B3B',
          color_light: '#EBEBEB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/073b9b755dec5be95788cc46edb48950.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#171717',
          color_medium: '#4D4D4B',
          color_light: '#CACAC8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/monochromatic1.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#134019',
          color_medium: '#73AE76',
          color_light: '#FDFFF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/01_torre-velasca-1956-58-bbpr-partnership-milano-early-september-2016_05.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#090909',
          color_medium: '#5E5C5D',
          color_light: '#C1C0BE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/Gurkanwar-Singh-Bedi.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#292929',
          color_medium: '#474747',
          color_light: '#E4E4E4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_tiles_id_seq', (SELECT MAX(id) FROM november_tiles));");
    });
};
