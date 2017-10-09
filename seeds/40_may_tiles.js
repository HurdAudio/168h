'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'greenery',
          type: 'default',
          src_string: '../img/may_tiles/abstract-21918_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#025700',
          color_medium: '#22A60A',
          color_light: '#4FB706',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_tiles_id_seq', (SELECT MAX(id) FROM may_tiles));");
    });
};
