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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_tiles_id_seq', (SELECT MAX(id) FROM march_tiles));");
    });
};
