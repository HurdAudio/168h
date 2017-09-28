'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('january_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('january_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'ice',
          type: 'default',
          src_string: '../img/january_tiles/pattern-2054291_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '1050%',
          color_dark: '#8E8B92',
          color_medium: '#BFBFCB',
          color_light: '#F3F4F8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_tiles_id_seq', (SELECT MAX(id) FROM january_tiles));");
    });
};
