'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('april_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('april_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'water',
          type: 'default',
          src_string: '../img/april_tiles/banner-2143726_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '400%',
          color_dark: '#8C8C8E',
          color_medium: '#BDBDBF',
          color_light: '#FCFCFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'water',
          type: 'week',
          src_string: '../img/april_tiles/water-777668_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#203855',
          color_medium: '#4572AA',
          color_light: '#78A1D0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'water',
          type: 'mtwt',
          src_string: '../img/april_tiles/sea-2055969_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#00304F',
          color_medium: '#6F8DC0',
          color_light: '#A8BAE1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'water',
          type: 'friday',
          src_string: '../img/april_tiles/water-1579915_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#00164E',
          color_medium: '#055FEE',
          color_light: '#CDDCFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'water',
          type: 'saturday',
          src_string: '../img/april_tiles/waves-circles-285359_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#120E1F',
          color_medium: '#2450E4',
          color_light: '#F9FAEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'water',
          type: 'sunday',
          src_string: '../img/april_tiles/ripples-in-water.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#032555',
          color_medium: '#4997BE',
          color_light: '#F8FAFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'water',
          type: 'holiday',
          src_string: '../img/april_tiles/1813624294001_5488970555001_cq5-9044923698769408782preview-thumbnail.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#242B34',
          color_medium: '#5683A4',
          color_light: '#E5EEF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'water',
          type: 'week',
          src_string: '../img/april_tiles/../img/april_tiles/Depositphotos_1145052_original2.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0E486F',
          color_medium: '#237CC7',
          color_light: '#71B9F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'water',
          type: 'friday',
          src_string: '../img/april_tiles/e-golden-water-6.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#568787',
          color_medium: '#8A988B',
          color_light: '#EDEAC0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'water',
          type: 'saturday',
          src_string: '../img/april_tiles/wg037_water_patterns_1.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#052D95',
          color_medium: '#046DC0',
          color_light: '#7BB7E0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'water',
          type: 'sunday',
          src_string: '../img/april_tiles/abstract-1283722_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#130E09',
          color_medium: '#D8610E',
          color_light: '#FDD749',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'water',
          type: 'sunday',
          src_string: '../img/april_tiles/drop-of-water-166735_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#261502',
          color_medium: '#FFA890',
          color_light: '#EAE5E7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_tiles_id_seq', (SELECT MAX(id) FROM april_tiles));");
    });
};
