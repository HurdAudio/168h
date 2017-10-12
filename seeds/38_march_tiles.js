'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('march_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('march_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'glass',
          type: 'default',
          src_string: '../img/march_tiles/product_2737.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#797471',
          color_medium: '#CBCBCB',
          color_light: '#D6D9E5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'glass',
          type: 'week',
          src_string: '../img/march_tiles/HighRiseGlass0016_1_270.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#6399BF',
          color_medium: '#86C7DE',
          color_light: '#8CBCD2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'glass',
          type: 'mtwt',
          src_string: '../img/march_tiles/14SPL.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#AFCEEA',
          color_medium: '#CEE5C9',
          color_light: '#D6F9FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'glass',
          type: 'friday',
          src_string: '../img/march_tiles/glass_texture_by_yko_54-d46aqr3.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#292620',
          color_medium: '#A38A61',
          color_light: '#B7D6F4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_tiles_id_seq', (SELECT MAX(id) FROM march_tiles));");
    });
};
