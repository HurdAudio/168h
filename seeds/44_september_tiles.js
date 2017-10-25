'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('september_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('september_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'leather',
          type: 'default',
          src_string: '../img/september_tiles/leatherDefault.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#5D4940',
          color_medium: '#8A5B4B',
          color_light: '#8A5B4B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'leather',
          type: 'week',
          src_string: '../img/september_tiles/leatherWeek1.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#492A2E',
          color_medium: '#661723',
          color_light: '#A0717B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_tiles_id_seq', (SELECT MAX(id) FROM september_tiles));");
    });
};
