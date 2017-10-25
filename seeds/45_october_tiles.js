'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('october_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('october_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'autumnal',
          type: 'default',
          src_string: '../img/october_tiles/../img/october_tiles/autumnalDefault.jpg.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#926A50',
          color_medium: '#CA993C',
          color_light: '#E0BC5E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_tiles_id_seq', (SELECT MAX(id) FROM october_tiles));");
    });
};
