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
          theme: 'autumnal',
          type: 'default',
          src_string: '../img/november_tiles/black-and-white-images-of-birds-3-widescreen-wallpaper.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#323232',
          color_medium: '#A7A7A7',
          color_light: '#EBEBEB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_tiles_id_seq', (SELECT MAX(id) FROM november_tiles));");
    });
};
