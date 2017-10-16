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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_tiles_id_seq', (SELECT MAX(id) FROM april_tiles));");
    });
};
